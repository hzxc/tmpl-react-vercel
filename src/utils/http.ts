import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { RpcOptions } from '@protobuf-ts/runtime-rpc';
import * as cli from 'client';
import { useAuth } from 'pages/context/auth-context';
import * as auth from 'pages/auth-provider';
import { useCallback } from 'react';

// const apiUrl = 'http://localhost:3000';
const apiUrl = process.env.REACT_APP_API_URL as string;
const trans = new GrpcWebFetchTransport({
  baseUrl: apiUrl,
  // format: 'binary',
});

interface Config extends RpcOptions {
  token?: string;
  data?: object;
}

export const http = (
  svcName: string,
  methodName: string,
  { data, token, meta, ...customConfig }: Config = {}
) => {
  const config = {
    meta: { Authorization: token ? `Bearer ${token}` : 'Bearer NoToken' },
    ...customConfig,
  };
  const client: any = new (cli as any)[svcName + 'Client'](trans);
  // new Promise<void>((resolve, reject) => {

  // })

  return (client[methodName]?.(data, config) as Promise<any>)
    .then(async (resp) => {
      // const respJson = JSON.stringify(resp.response);
      if (resp.status?.code === 'OK') {
        return resp.response;
      } else {
        return Promise.reject(new Error(resp.status.code));
      }
    })
    .catch(async (err: any) => {
      if (err?.code === 'UNAUTHENTICATED') {
        await auth.logout();
        window.location.reload();
      }
      return Promise.reject(new Error(err?.message));
    });
};

export const useHttp = () => {
  const { user } = useAuth();
  return useCallback(
    (...[svcName, methodName, config]: Parameters<typeof http>) =>
      http(svcName, methodName, { ...config, token: user?.token }),
    [user?.token]
  );
};
