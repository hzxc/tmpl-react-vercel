import React, { ReactNode, useContext, useEffect, useState } from 'react';
import * as auth from '../auth-provider';
import { useAsync } from '../../utils/use-async';
import { FullPageErrorFallback, FullPageLoading } from 'components/lib';
import { User } from 'types/users';
import { http } from 'utils/http';

interface AuthForm {
  username: string;
  password: string;
}

interface AuthContextProps {
  user: User | null;
  login: (form: AuthForm) => Promise<void>;
  logout: () => Promise<void>;
  setTheme: (v: string) => void;
  prefixCls: string;
}

const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  // console.log(token);
  if (token) {
    const data = await http('HelloService', 'me', {
      token,
    });
    user = data;
  }
  return user;
};

const AuthContext = React.createContext<AuthContextProps | undefined>(undefined);
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // const queryClient = useQueryClient();
  const {
    run,
    error,
    isLoading,
    isError,
    isIdle,
    data: user,
    setData: setUser,
  } = useAsync<User | null>();
  // let prefixCls = auth.getPrefixCls();
  // prefixCls = prefixCls != null ? prefixCls : 'ant';

  const [prefixCls, setPrefixCls] = useState('ant');

  const setTheme = (v: string) => {
    setPrefixCls(v);
    auth.setPrefixCls(v);
  };

  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const logout = () =>
    auth.logout().then(() => {
      setUser(null);
      // queryClient.clear();
    });

  useEffect(() => {
    const prefix = auth.getPrefixCls();
    setPrefixCls(prefix ? prefix : 'ant');
    run(bootstrapUser());
  }, [run]);

  if (isIdle || isLoading) {
    return <FullPageLoading />;
  }
  if (isError) {
    return <FullPageErrorFallback error={error} />;
  }

  return (
    <AuthContext.Provider
      children={children}
      value={{ prefixCls, setTheme, user, login, logout }}
    />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used in authprovider');
  }
  return context;
};
