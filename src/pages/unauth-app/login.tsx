import { useAuth } from '../context/auth-context';
import { Form, Input } from 'antd';
import { LongButton, IsError } from 'components/lib';

export const Login = ({ onError }: { onError: (error: Error) => void }) => {
  const { login } = useAuth();
  const handleTest = () => {
    console.log(process.env.REACT_APP_API_URL);
    // http('AuthService', 'login', { data: { username: '', password: '' } })
    //   .then((resp) => {
    //     console.log(resp);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
