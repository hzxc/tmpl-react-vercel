import { useHttp } from './http';
import { QueryKey, useMutation, useQuery } from 'react-query';
import { useEditConfig } from './use-optimistic-update';
import { Project } from 'gen/ts/api/project/v1/project';
import { cleanObject } from 'utils';

export const useProjects = (params?: Partial<Project>) => {
  const http = useHttp();
  return useQuery<Project[], Error>(['projects', cleanObject(params)], () =>
    http('ProjectService', 'list', { data: params })
  );
};

export const useEditProject = (queryKey: QueryKey) => {
  const client = useHttp();
  return useMutation(
    (params: Partial<Project>) => client('ProjectService', 'edit', { data: params }),
    useEditConfig(queryKey)
  );
};
