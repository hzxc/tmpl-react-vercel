import React from 'react';
import styled from '@emotion/styled';
import { Row } from 'components/lib';
import { resetRoute } from 'utils';
import { ReactComponent as SoftwareLogo } from 'assets/software-logo.svg';
import { Button, Dropdown, Menu } from 'antd';
import { useAuth } from 'pages/context/auth-context';
import { Route, Routes, Navigate } from 'react-router';
import { Projects } from 'pages/projects';
import { Project } from 'pages/projects/project';
import { TestDynamicTheme } from 'pages/test/dynamic-theme';
import { Test } from 'pages/test';
import { Link } from 'react-router-dom';
function AuthApp() {
  return (
    <Container>
      <PageHeader />
      <Main>
        <Routes>
          <Route path={'/projects'} element={<Projects />} />
          <Route path={'/projects/:projectId/*'} element={<Project />} />
          <Route path={'/test'} element={<Test />} />
          <Route path={'/test/dynamic-theme'} element={<TestDynamicTheme />} />
          {/* <Route path={'/'} element={<Navigate to='/projects' replace={true} />} /> */}
          <Route path='*' element={<Navigate to='/projects' replace={true} />} />
          {/* <Navigate to={'/projects'} /> */}
          {/* <Route path={'/'} element={<Projects />} />
          <Route path='*' element={<Navigate to='/' replace={true} />} /> */}
        </Routes>
      </Main>
    </Container>
  );
}

const PageHeader = () => {
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        {/* <Button type={'link'} onClick={resetRoute}>
          <SoftwareLogo width={'18rem'} color={'rgb(38, 132, 255)'} />
        </Button> */}
        <Link to='/'>
          <SoftwareLogo width={'18rem'} color={'rgb(38, 132, 255)'} />
        </Link>
      </HeaderLeft>
      <HeaderRight>
        <User />
      </HeaderRight>
    </Header>
  );
};

const User = () => {
  const { logout, user } = useAuth();
  return (
    <Dropdown overlay={<Menu onClick={logout} items={[{ label: 'logout', key: 'logout' }]}></Menu>}>
      <Button type={'link'} onClick={(e) => e.preventDefault()}>
        Hi,{user?.name}
      </Button>
    </Dropdown>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    'header'
    'main';
  height: 100vh;
`;

const Header = styled(Row)`
  grid-area: header;
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
  /* background-color: antiquewhite; */
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main`
  grid-area: main;
  /* background-color: aliceblue; */
  /* display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center; */
`;

export default AuthApp;
