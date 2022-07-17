import { useEffect, useRef, useState } from 'react';

export const useMountedRef = () => {
  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  });
  return mountedRef;
};

// resetRoute
export const resetRoute = () => (window.location.href = window.location.origin);

export const isVoid = (value: unknown) => value === undefined || value === null || value === '';

export const cleanObject = (object?: { [key: string]: unknown }) => {
  if (!object) {
    return {};
  }
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

export const subset = <O extends { [key in string]: unknown }, K extends keyof O>(
  obj: O,
  keys: K[]
) => {
  const filteredEntries = Object.entries(obj).filter(([key]) => keys.includes(key as K));
  return Object.fromEntries(filteredEntries) as Pick<O, K>;
};

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState<V>(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
