import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'antd/dist/antd.less';
// import 'antd/dist/antd.dark.less';
// import 'antd/dist/antd.min.css';
import 'antd/dist/antd.variable.min.css';
import 'antd/dist/antd.dark.min.css';
import 'antd/dist/antd.compact.min.css';
import 'antd/dist/antd.min.css';
import { AppProviders } from 'pages/context';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* UNDO */}
    {/* <Profiler id={'Root App'} phases={['mount']}></Profiler> */}

    <AppProviders>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </AppProviders>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
