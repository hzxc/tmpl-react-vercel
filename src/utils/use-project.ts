import { useHttp } from './http';
import { QueryKey, useMutation, useQuery } from 'react-query';
import { useEditConfig, useAddConfig } from './use-optimistic-update';
import { ListRequest, EditRequest, Project, CreateRequest } from 'gen/ts/api/project/v1/project';
import { cleanObject } from 'utils';

export const useProject = (id?: number) => {
  const client = useHttp();
  return useQuery<Project>(
    ['project', { id }],
    () => client('ProjectService', 'list', { data: { id } }),
    {
      enabled: Boolean(id),
    }
  );
};

export const useProjects = (params?: Partial<ListRequest>) => {
  const http = useHttp();
  return useQuery<Project[], Error>(['projects', cleanObject(params)], () =>
    http('ProjectService', 'list', { data: params })
  );
};

export const useEditProject = (queryKey: QueryKey) => {
  const client = useHttp();
  return useMutation(
    (params: Partial<EditRequest>) => client('ProjectService', 'edit', { data: params }),
    useEditConfig(queryKey)
  );
};

export const useAddProject = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    (params: Partial<CreateRequest>) =>
      client(`ProjectService`, 'create', {
        data: params,
      }),
    useAddConfig(queryKey)
  );
};
