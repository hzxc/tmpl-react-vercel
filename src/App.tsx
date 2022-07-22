import React from 'react';
import './App.css';
import { useAuth } from 'pages/context/auth-context';
import { FullPageLoading } from 'components/lib';
import { ConfigProvider } from 'antd';

const AuthApp = React.lazy(() => import('pages/auth-app/index'));
const UnauthApp = React.lazy(() => import('pages/unauth-app/index'));

function App() {
  const { user, prefixCls } = useAuth();

  // ConfigProvider.config({
  //   theme: {},
  // });

  return (
    <ConfigProvider prefixCls={prefixCls}>
      <div className='App'>
        {/* UNDO */}
        {/* <ErrorBoundary fallbackRender={ FullPageErrorFallback }></ErrorBoundary> */}
        <React.Suspense fallback={<FullPageLoading />}>
          {user ? <AuthApp /> : <UnauthApp />}
        </React.Suspense>
      </div>
    </ConfigProvider>
  );
}

export default App;
