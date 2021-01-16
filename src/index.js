import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as AlertProvider } from 'react-alert';
import reportWebVitals from './reportWebVitals';

// import 'semantic-ui-css/semantic.min.css'

const Root = () => (
  <AlertProvider>
    <App />
  </AlertProvider>
)

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
