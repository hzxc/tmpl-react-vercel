import { useAuth } from '../context/auth-context';
import { Form, Input } from 'antd';
import { LongButton, IsError } from 'components/lib';
import { http } from 'utils/http';

export const Login = ({ onError }: { onError: (error: Error) => void }) => {
  const { login } = useAuth();
  const handleTest = () => {
    http('AuthService', 'login', { data: { username: 'admin', password: 'password' } })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });

    // http('HelloService', 'intro', { data: { name: 'baoer' } })
    //   .then((resp) => {
    //     console.log(resp);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // const trans = new GrpcWebFetchTransport({
    //   baseUrl: 'http://localhost:3000',
    // });
    // const auth = new AuthServiceClient(trans);

    // auth.login({ username: 'admin', password: 'password' }, {}).then(
    //   (resp) => {
    //     console.log('typeof(resp):', typeof resp);
    //     console.log('response:', JSON.stringify(resp.response));
    //     console.log('status code:', resp.status.code);
    //   },
    //   (err) => {
    //     console.log('error code:', err?.code);
    //     console.log('error message', err?.message);
    //   }
    // );
  };
  const handleSubmit = async (values: { username: string; password: string }) => {
    // await login(values);
    try {
      await login(values);
    } catch (err) {
      if (IsError(err)) {
        onError(err);
      }
    }
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name='username' rules={[{ required: true, message: 'username required' }]}>
        <Input type='text' id='username' placeholder={'username'} />
      </Form.Item>
      <Form.Item name='password' rules={[{ required: true, message: 'password required' }]}>
        <Input type='password' id='password' placeholder={'password'} />
      </Form.Item>
      <Form.Item>
        <LongButton htmlType={'submit'} type={'primary'}>
          Login
        </LongButton>
      </Form.Item>
      <Form.Item>
        <LongButton onClick={handleTest}>Test</LongButton>
      </Form.Item>
    </Form>
  );
};
