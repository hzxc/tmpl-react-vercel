import { http } from 'utils/http';
import { User } from '../types/users';

const localStorageKey = '__auth_provider_token__';
const themeStorageKey = '__auth_provider_theme__';

export const getToken = () => window.localStorage.getItem(localStorageKey);
export const getTheme = () => window.localStorage.getItem(themeStorageKey);

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
