import { useMemo } from 'react';
import { useProject } from 'utils/use-project';
import { useSetUrlSearchParam, useUrlQueryParam } from 'utils/use-url-query-param';

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

export const useProjectModal = () => {
  const [{ projectCreate }, setProjectCreate] = useUrlQueryParam(['projectCreate']);
  const [{ editingProjectId }, setEditingProjectId] = useUrlQueryParam(['editingProjectId']);
  const { data: editingProject, isLoading } = useProject(Number(editingProjectId));
  const setUrlParams = useSetUrlSearchParam();
  const open = () => setProjectCreate({ projectCreate: true });
  const close = () => setUrlParams({ projectCreate: '', editingProjectId: '' });
  const startEditId = (id: number) => setEditingProjectId({ editingProjectId: id });
  return {
    projectModalOpen: projectCreate === 'true' || Boolean(editingProjectId),
    open,
    close,
    startEditId,
    editingProject,
    editingProjectId,
    isLoading,
  } as const;
};
