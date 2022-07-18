import styled from '@emotion/styled';
import { Button } from 'antd';
import { ButtonNoPadding, ErrorBox, Row } from 'components/lib';
// import { CreateRequest } from 'gen/ts/api/project/v1/project';
import React from 'react';
import { useDebounce } from 'utils';
import { useHttp } from 'utils/http';
import { usePeople } from 'utils/use-people';
import { useProjects } from 'utils/use-project';
import { List } from './list';
import { useProjectsSearchParams } from './project-utils';
import { SearchPanel } from './search-panel';
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
    client('ProjectService', 'people').then(
      (resp) => {
        console.log('response:', resp);
      },
      (err) => {
        console.log('error message', err?.message);
      }
    );
  };

  const [param, setParam] = useProjectsSearchParams();
  const debouncedParam = useDebounce(param, 500);
  const { isLoading, data: list, error } = useProjects(debouncedParam);
  const { data: people } = usePeople();

  return (
    <Container>
      <Row between={true}>
        <h1>Projects</h1>
        <ButtonNoPadding type={'link'}>Create</ButtonNoPadding>
      </Row>
      <Button onClick={handleTest}>Test</Button>
      <SearchPanel param={param} setParam={setParam} />
      <ErrorBox error={error} />
      <List dataSource={list || []} people={people || []} loading={isLoading} />
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  padding: 3.2rem;
`;
