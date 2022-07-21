import { http } from 'utils/http';
import { User } from '../types/users';

const localStorageKey = '__auth_provider_token__';
const prefixClsStorageKey = '__auth_provider_prefix_cls__';

export const getToken = () => window.localStorage.getItem(localStorageKey);
export const getPrefixCls = () => window.localStorage.getItem(prefixClsStorageKey);
export const setPrefixCls = (v: string) => window.localStorage.setItem(prefixClsStorageKey, v);

const handleUserResponse = (user: User) => {
  window.localStorage.setItem(localStorageKey, user?.token || '');
  return user;
};

export const login = async (data: { username: string; password: string }) => {
  return http('AuthService', 'login', { data })
    .then((resp) => {
      return handleUserResponse(resp);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const logout = async () => window.localStorage.removeItem(localStorageKey);
