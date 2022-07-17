import { Table, TableProps } from 'antd';
import { Pin } from 'components/pin';
import dayjs from 'dayjs';
import { Person, Project } from 'gen/ts/api/project/v1/project';
import React from 'react';
import { Link } from 'react-router-dom';
import { useEditProject } from 'utils/use-project';
import { useProjectsQueryKey } from './project-utils';

interface ListProps extends TableProps<Project> {
  people: Person[];
}

export const List = React.memo(({ people, ...props }: ListProps) => {
  const { mutate } = useEditProject(useProjectsQueryKey());
  const pinProject = (id: number) => (pin: boolean) => mutate({ id, pin });
  return (
    <Table
      rowKey={'id'}
      pagination={false}
      columns={[
        {
          title: <Pin checked={true} disabled={true} />,
          render(v) {
            return <Pin checked={v.pin} onCheckedChange={pinProject(v.id)} />;
          },
        },
        {
          title: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
          showSorterTooltip: false,
          render(v) {
            return <Link to={String(v.id)}>{v.name}</Link>;
          },
        },
        { title: 'organization', dataIndex: 'organization' },
        {
          title: 'person',
          render(v) {
            return <span>{people.find((p) => p.id === v.personId)?.name || ''}</span>;
          },
        },
        {
          title: 'created',
          render(proj) {
            return (
              <span>
                {proj.created ? dayjs(proj.created).format('YYYY-MM-DD HH:mm:ss') : 'None'}
              </span>
            );
          },
        },
      ]}
      {...props}
    />
  );
});
