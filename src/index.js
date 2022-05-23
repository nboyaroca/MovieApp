import React from 'react';
import {createRoot} from 'react-dom/client';
import Router from './application/Router'
import './components/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container); //createRoot és un mètode propi de React Router Dom
root.render(<Router/>); //renderitza tot el que hi ha dins de Router.jsx 

// això és el que hi havia al principi i que ara ho mutegem xq ho redefinim
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
