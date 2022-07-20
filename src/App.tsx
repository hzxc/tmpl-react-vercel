import React from 'react';
import './App.css';
import { useAuth } from 'pages/context/auth-context';
import { UnauthApp } from 'pages/unauth-app';
import AuthApp from 'pages/auth-app';

// const AuthenticatedApp = React.lazy(() => import('pages/auth-app/authenticated-app'));
// const UnauthenticatedApp = React.lazy(() => import('pages/unauth-app/index'));

function App() {
  const { user } = useAuth();
  return (
    <div className='App'>
      {/* UNDO */}
      {/* <ErrorBoundary fallbackRender={ FullPageErrorFallback }></ErrorBoundary> */}
      {user ? <AuthApp /> : <UnauthApp />}
      {/* UNDO */}
      {/* <React.Suspense fallback={<FullPageLoading />}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </React.Suspense> */}
    </div>
  );
}

export default App;
