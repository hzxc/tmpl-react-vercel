import styled from '@emotion/styled';
import { Button } from 'antd';
import { ButtonNoPadding, Row } from 'components/lib';
import { CreateRequest } from 'gen/ts/api/project/v1/project';
import React from 'react';
import { useHttp } from 'utils/http';
export const Projects = () => {
  const client = useHttp();
  const handleTest = () => {
    const data: CreateRequest = {
      name: '骑手管理',
      pin: true,
      personId: 1,
      organization: '外卖组',
      description: '骑手管理',
    };
    client('ProjectService', 'list').then(
      (resp) => {
        console.log('response:', resp);
      },
      (err) => {
        console.log('error message', err?.message);
      }
    );
  };
  return (
    <Container>
      <Row between={true}>
        <h1>Projects list</h1>
        <ButtonNoPadding type={'link'}>Create project</ButtonNoPadding>
      </Row>
      <Button onClick={handleTest}>Test</Button>
      {/* <List dataSource={ list || [] } users={ users || [] } loading={ isLoading } /> */}
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  padding: 3.2rem;
`;
