import { useHttp } from './http';
import { QueryKey, useMutation, useQuery } from 'react-query';
import { useEditConfig } from './use-optimistic-update';
import { Project, ListResponse, ListRequest } from 'gen/ts/api/project/v1/project';
import { cleanObject } from 'utils';

export const useProjects = (params?: Partial<ListRequest>) => {
  const http = useHttp();
  return useQuery<ListResponse, Error>(['projects', cleanObject(params)], () =>
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
