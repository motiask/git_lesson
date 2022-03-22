import { rerenderEntireTree } from "../render";

{/*Данные!*/ }

let state = {
    ProfilePage: {
        postData: [
            { id: '1', avatar: 'https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg', name: 'Мне еще 30 лет!', likeCount: 2 },
            { id: '2', avatar: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0_2bbde84177c9ff1c2299a26a0f69f69c@480x496_0xac120003_4430520541578509619.jpg', name: 'А мне 40 лет', likeCount: 11 }
        ],
        newPostText: ''
    },
    DialogsPage: {
        dialogsData: [
            { id: '1', nameD: 'user 1' },
            { id: '2', nameD: 'user 2' },
            { id: '3', nameD: 'user 3' },
            { id: '4', nameD: 'user 4' },
            { id: '5', nameD: 'user 5' },
            { id: '6', nameD: 'user 6' }
        ],
        messagesData: [
            { id: '1', message: 'message 1' },
            { id: '2', message: 'message 2' },
            { id: '3', message: 'message 3' },
            { id: '4', message: 'message 4' },
            { id: '5', message: 'message 5' }
        ]
    }
}

{/*-33-1 обновление текста в state после ввода на странице, для последующего отображения*/}
export let PushPostText = (newPostText) => {
    state.ProfilePage.newPostText = newPostText;
    rerenderEntireTree(state);
}


{/*-32-1 добавление данных функция из BLL*/ }
export let addPost = () => {
    let newPost = {
        id: '3',
        avatar: '',
        name: state.ProfilePage.newPostText,
        likeCount: 0
    };
    state.ProfilePage.newPostText = '';
    state.ProfilePage.postData.push(newPost)
    {/*-33-1 Перерисовка страницы!*/ }
    rerenderEntireTree(state);
}

export default state
{/*Конец данных!*/ }