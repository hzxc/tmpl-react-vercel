import { useCallback, useReducer, useState } from 'react';
import { useMountedRef } from './index';

interface State<D> {
  error: Error | null;
  data: D | null;
  status: 'idle' | 'loading' | 'error' | 'success';
}

const defaultInitialState: State<null> = {
  status: 'idle',
  data: null,
  error: null,
};

const useSafeDispatch = <T>(dispatch: (...args: T[]) => void) => {
  const mountedRef = useMountedRef();
  return useCallback(
    (...args: T[]) => (mountedRef.current ? dispatch(...args) : void 0),
    [dispatch, mountedRef]
  );
};

export const useAsync = <D>(initialState?: State<D>, runConfig?: { retry: () => Promise<D> }) => {
  const [state, dispatch] = useReducer(
    (state: State<D>, action: Partial<State<D>>) => ({ ...state, ...action }),
    {
      ...defaultInitialState,
      ...initialState,
    }
  );
  const safeDispatch = useSafeDispatch(dispatch);

  const [retry, setRetry] = useState(() => () => {});

  const setData = useCallback(
    (data: D) => {
      safeDispatch({
        data,
        status: 'success',
        error: null,
      });
    },
    [safeDispatch]
  );
  const setError = useCallback(
    (error: Error) => {
      safeDispatch({
        data: null,
        status: 'error',
        error,
      });
    },
    [safeDispatch]
  );
  const run = useCallback(
    (promise: Promise<D>, runConfig?: { retry: () => Promise<D> }) => {
      if (!promise || !promise.then) {
        throw new Error('not promise');
      }
      setRetry(() => () => {
        if (runConfig?.retry) {
          run(runConfig?.retry(), runConfig);
        }
      });
      safeDispatch({ status: 'loading' });
      return promise
        .then((data) => {
          setData(data);
          return data;
        })
        .catch((error) => {
          setError(error);
          return error;
        });
    },
    [safeDispatch, setData, setError]
  );

  return {
    isIdle: state.status === 'idle',
    isLoading: state.status === 'loading',
    isError: state.status === 'error',
    isSuccess: state.status === 'success',
    run,
    setData,
    setError,
    retry,
    ...state,
  };
};
