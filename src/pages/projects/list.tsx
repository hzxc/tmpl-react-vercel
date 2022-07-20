import { Dropdown, Menu, Modal, Space, Table, TableProps } from 'antd';
import { DeleteOutlined, EditOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { ButtonNoPadding } from 'components/lib';
import { Pin } from 'components/pin';
import dayjs from 'dayjs';
import { Person, Project } from 'gen/ts/api/project/v1/project';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDeleteProject, useEditProject } from 'utils/use-project';
import { useProjectModal, useProjectsQueryKey } from './project-utils';

interface ListProps extends TableProps<Project> {
  people: Person[];
}

export const List = React.memo(({ people, ...props }: ListProps) => {
  // useDocumentTitle('Project List');
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
            return (
              <Space>
                <Pin
                  checked={v.pin}
                  onCheckedChange={pinProject(v.id)}
                  // style={{ paddingRight: 1 + 'rem' }}
                />
                <More project={v} />
              </Space>
            );
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
          render(v) {
            return (
              <span>
                {v.createdAt ? dayjs.unix(v.createdAt).format('YYYY-MM-DD HH:mm:ss') : 'None'}
              </span>
            );
          },
        },
      ]}
      {...props}
    />
  );
});

const More = ({ project }: { project: Project }) => {
  const { startEditId } = useProjectModal();
  const editProject = (id: number) => () => startEditId(id);
  const { mutate: deleteProject } = useDeleteProject(useProjectsQueryKey());

  const items = [
    { label: 'Edit', key: 'edit', icon: <DeleteOutlined /> },
    { label: 'Delete', key: 'delete', icon: <EditOutlined /> },
  ];

  const action = (item: any) => {
    if (item.key === 'edit') {
      editProject(project.id)();
    } else if (item.key === 'delete') {
      confirmDeleteProject(project.id);
    }
  };
  const confirmDeleteProject = (id: number) => {
    Modal.confirm({
      title: 'Are you sure to delete this project?',
      okText: 'Yes',
      onOk() {
        deleteProject({ id });
      },
    });
  };
  return (
    <Dropdown
      arrow={true}
      trigger={['click']}
      overlay={<Menu onClick={action} items={items}></Menu>}
    >
      <ButtonNoPadding type={'link'}>
        <MenuUnfoldOutlined />
      </ButtonNoPadding>
    </Dropdown>
  );
};
