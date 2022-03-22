import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, PushPostText } from './redux/state';

{/*-32-2 вызов функции с добавлением новых данных
addPost('новый текст');
*/}

{/*-33-0-Функция ответственная за перерисовку страницы, после выполнения добавления в BLL или первой загрузки*/ }
export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            {/*-32-3 функцию addPost прокидывем через props*/}
            <App state={state} addPost={addPost} PushPostText={PushPostText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
