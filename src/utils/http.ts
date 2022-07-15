import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { RpcOptions, ServiceInfo, UnaryCall } from '@protobuf-ts/runtime-rpc';
import * as cli from 'client';
import { useAuth } from 'pages/context/auth-context';
import * as auth from 'pages/auth-provider';
import { useCallback } from 'react';

const apiUrl = process.env.API_URL as string;

const trans = new GrpcWebFetchTransport({
  baseUrl: apiUrl,
  interceptors: [
    {
      // adds auth header to unary requests
      interceptUnary(next, method, input, options: RpcOptions): UnaryCall {
        if (!options.meta) {
          options.meta = {};
        }

        options.meta['Authorization'] = options.token
          ? `Bearer ${options.token}`
          : '';
        return next(method, input, options);
      },
    },
  ],
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
    meta: { Authorization: token ? `Bearer ${token}` : '' },
    ...customConfig,
  };
  const client: any = new (cli as any)[svcName + 'Client'](trans);

  return (client[methodName]?.(data, config) as Promise<any>)
    .then(async (resp) => {
      if (resp.status?.code === 'OK') {
        return resp.response;
      } else {
        return Promise.reject(resp.response);
      }
    })
    .catch(async (err: any) => {
      if (err?.code === 'UNAUTHENTICATED') {
        await auth.logout();
        window.location.reload();
      }
      return Promise.reject({ message: err?.message });
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
