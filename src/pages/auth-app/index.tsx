import React, { useState } from 'react';
import { ReactComponent as LogoText } from 'assets/pancake/logo.text.svg';
import { SearchOutlined } from '@ant-design/icons';

import { Button, Dropdown, Menu, MenuProps } from 'antd';
import { useAuth } from 'pages/context/auth-context';
import { Route, Routes, Navigate } from 'react-router';
import { Projects } from 'pages/projects';
import { Project } from 'pages/projects/project';
import { TestDynamicTheme } from 'pages/test/dynamic-theme';
import { Test } from 'pages/test';
import { Link } from 'react-router-dom';
import { AuthNavItems } from 'consts';

import { Container, Main, Header, HeaderLeft, HeaderRight, Nav, PanMenu } from './index.style';
import { PancakeIcon } from 'components/pancake-icon';

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
  const items: MenuProps['items'] = AuthNavItems;

  const [current, setCurrent] = useState('Swap');
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Header between={true}>
      <HeaderLeft gap={2.4}>
        {/* <Button type={'link'} onClick={resetRoute}>
          <SoftwareLogo width={'18rem'} color={'rgb(38, 132, 255)'} />
        </Button> */}
        <Link to='/'>
          {/* <Logo /> */}
          <LogoText width={'16rem'} />
        </Link>
        <Nav>
          <PanMenu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} />
        </Nav>
      </HeaderLeft>
      <HeaderRight>
        <Button
          className='iconBtn'
          type='link'
          icon={<PancakeIcon style={{ verticalAlign: 'top', fontSize: '24px' }} />}
          style={{ fontWeight: '600', color: 'rgb(122, 110, 170)' }}
        >
          $3.436
        </Button>
        <Button type='link' icon={<SearchOutlined />}>
          Search
        </Button>
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

export default AuthApp;
