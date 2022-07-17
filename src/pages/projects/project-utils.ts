import { useMemo } from 'react';
import { useUrlQueryParam } from 'utils/use-url-query-param';

export const useProjectsSearchParams = () => {
  const [param, setParam] = useUrlQueryParam(['name', 'personId']);
  return [
    useMemo(() => ({ ...param, personId: Number(param.personId) || undefined }), [param]),
    setParam,
  ] as const;
};

export const useProjectsQueryKey = () => {
  const [params] = useProjectsSearchParams();
  return ['projects', params];
};
