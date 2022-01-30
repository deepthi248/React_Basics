import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FetchData_App from './Components/fetchData_Reducer_Context/FetchData_App';
import App_Practice from './Components/PRACTICE/App_Practice';
import App_contactDCA from './Components/ContactDetaisUsingContextAPI/App_contactDCA';
ReactDOM.render(
  <React.StrictMode>
    <App_contactDCA />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
