import styled from '@emotion/styled';
import { Button } from 'antd';
import { ButtonNoPadding, Row } from 'components/lib';
// import { CreateRequest } from 'gen/ts/api/project/v1/project';
import React from 'react';
import { useDebounce } from 'utils';
import { useHttp } from 'utils/http';
import { usePeople } from 'utils/use-people';
import { useProjects } from 'utils/use-project';
import { useProjectsSearchParams } from './project-utils';
export const Projects = () => {
  const client = useHttp();
  const handleTest = () => {
    // const data: CreateRequest = {
    //   name: '送餐路线规划系统',
    //   pin: false,
    //   personId: 4,
    //   organization: '外卖组',
    //   description: '',
    // };
    // client('ProjectService', 'create', { data }).then(
    //   (resp) => {
    //     console.log('response:', resp);
    //   },
    //   (err) => {
    //     console.log('error message', err?.message);
    //   }
    // );
    client('ProjectService', 'list').then(
      (resp) => {
        console.log('response:', resp);
      },
      (err) => {
        console.log('error message', err?.message);
      }
    );
  };

  const [param, setParam] = useProjectsSearchParams();
  const debouncedParam = useDebounce(param, 300);
  const { isLoading, data: list, error } = useProjects(debouncedParam);
  const { data: people } = usePeople();

  return (
    <Container>
      <Row between={true}>
        <h1>Projects list</h1>
        <ButtonNoPadding type={'link'}>Create project</ButtonNoPadding>
      </Row>
      <Button onClick={handleTest}>Test</Button>
      <List dataSource={list || []} people={people || []} loading={isLoading} />
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  padding: 3.2rem;
`;
