import reportWebVitals from './reportWebVitals';

/*import store from './redux/state';*/
import store from './redux/redux-store';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



{/*-32-2 вызов функции с добавлением новых данных
addPost('новый текст');
*/}

{/*-33-0-Функция ответственная за перерисовку страницы, после выполнения добавления в BLL или первой загрузки*/ }
let rerenderEntireTree_callBack = (store) => {
    
    ReactDOM.render(
        <React.StrictMode>
            {/*-32-3 функцию addPost прокидывем через props!! bind ОБЯЗАТЕЛЬНЫЙ*/}
            <App store={store} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


{/*-33-1 Перерисовка страницы!*/ }
console.log('начальный запус, рисуем страницу!');
rerenderEntireTree_callBack(store);

{/*-35-2 передаем в state callback для вызова!*/ }
console.log('начальный запус, переопредляем функцию на callback!');
/*-42-1 вызов нашей пересовки был
store.subscribe(rerenderEntireTree_callBack());
теперь для redax:*/
store.subscribe(() => { rerenderEntireTree_callBack(store) });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
