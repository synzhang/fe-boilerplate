import { STORAGE_KEY } from '@/constants';
import { HTTP_ERROR_CODE } from '@/constants/httpStatuses';
import { fetchInitialData } from '@/services/api/initial';
import type { RequestConfig, RunTimeLayoutConfig } from '@umijs/max';
import { request as fetch } from '@umijs/max';
import { notification } from 'antd';
import Cookies from 'js-cookie';

interface IInitialState {
  name?: string;
}

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<IInitialState> {
  const skipPathnames = ['/login'];
  const pathname = window.location.pathname.replace(/\/+$/, ''); // 移除尾部的斜线

  if (!Cookies.get('authorization') || skipPathnames.includes(pathname)) {
    return Promise.resolve({});
  }

  return await fetchInitialData();
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    logo: 'https://cdn.buckydrop.com/starit-buckydrop/2022/dist/logo_small.ed4980e3.png',
    layout: 'mix',
    logout: async () => {
      await fetch('/api/buckyshop/union/account/logout', {});
      localStorage.removeItem('authorization');
      window.location.href = '/login';
    },
  };
};

export const request: RequestConfig<{
  code: number;
  data?: any;
  info: string;
}> = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
  timeout: 30000,
  method: 'post',
  requestInterceptors: [
    (config) => ({
      ...config,
      headers: {
        ...config.headers,
        authorization:
          localStorage.getItem(STORAGE_KEY.AUTHORIZATION) || undefined,
      },
    }),
  ],
  responseInterceptors: [
    [
      (response: any) => {
        if (
          typeof response.data !== 'object' ||
          !response?.headers?.['content-type']?.includes('application/json')
        )
          return response;
        const { code, info } = response.data;
        const isLoginPage = window.location.pathname === '/login';
        if (code === ERROR_CODE.UNAUTHORIZED && !isLoginPage) {
          window.location.href = `/login?redirect=${encodeURIComponent(
            window.location.href,
          )}`;
          return Promise.reject();
        }
        if (code) {
          notification.error({
            message: '通知',
            description: `${info} [${code}]`,
          });
        }
        return response;
      },
      (error: any) => {
        const { name, code, message } = error;

        console.error(error);
        notification.error({
          message: name,
          description: `${message} [${code}]`,
        });

        return Promise.reject(error);
      },
    ],
  ],
};
