import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { addPost } from './redux/state';

{/*-32-2 вызов функции
addPost('новый текст');
*/}



ReactDOM.render(

  <React.StrictMode>
    {/*-32-3 прокидывем через props*/}
    <App state={state} addPost={addPost}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
