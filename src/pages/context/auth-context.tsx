import React, { ReactNode, useContext, useEffect } from 'react';
import * as auth from '../auth-provider';
import { useAsync } from '../../utils/use-async';
import { FullPageErrorFallback, FullPageLoading } from 'components/lib';
import { useQueryClient } from 'react-query';
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
}

const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
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
  const queryClient = useQueryClient();
  const {
    run,
    error,
    isLoading,
    isError,
    isIdle,
    data: user,
    setData: setUser,
  } = useAsync<User | null>();
  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const logout = () =>
    auth.logout().then(() => {
      setUser(null);
      queryClient.clear();
    });

  useEffect(() => {
    run(bootstrapUser());
  }, [run]);

  if (isIdle || isLoading) {
    return <FullPageLoading />;
  }
  if (isError) {
    return <FullPageErrorFallback error={error} />;
  }

  return <AuthContext.Provider children={children} value={{ user, login, logout }} />;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used in authprovider');
  }
  return context;
};
