import styled from '@emotion/styled';
import { Button, Spin, Typography } from 'antd';

export const FullPageLoading = () => (
  <FullPage>
    <Spin size={'large'} />
  </FullPage>
);

export const FullPageErrorFallback = ({ error }: { error: Error | null }) => (
  <FullPage>
    <ErrorBox error={error} />
  </FullPage>
);

const isError = (value: any): value is Error => value?.message;
export const ErrorBox = ({ error }: { error: unknown }) => {
  if (isError(error)) {
    return <Typography.Text type={'danger'}>{error?.message}</Typography.Text>;
  }
  return null;
};

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonNoPadding = styled(Button)`
  padding: 0;
`;

export const ScreenContainer = styled.div`
  padding: 3.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
