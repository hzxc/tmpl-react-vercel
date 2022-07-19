import styled from '@emotion/styled';
import logo from 'assets/logo.svg';
import left from 'assets/left.png';
import bg from 'assets/bg.jpg';
import right from 'assets/right.png';
import { Card, Typography } from 'antd';
import { useState } from 'react';
import { Login } from './login';

export const UnauthApp = () => {
  const [error, setError] = useState<Error | null>(null);
  return (
    <Container>
      <Header />
      <Background />
      <ShadowCard>
        {error ? <Typography.Text type='danger'> {error.message}</Typography.Text> : null}
        <Login onError={setError} />
        {/* <Divider /> */}
      </ShadowCard>
    </Container>
  );
};

const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* background-position: bottom; */
  opacity: 0.3;
  /* background-position: left bottom, right bottom; */
  /* background-size: calc(((100vw - 40rem) / 2) - 3.2rem), calc(((100vw - 40rem) / 2) - 3.2rem), cover; */
  background-size: cover;
  /* background-image: url(${left}), url(${right}); */
  background-image: url(${bg});
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  min-height: 100vh;
`;
const ShadowCard = styled(Card)`
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 1rem;

  /* width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center; */
`;
