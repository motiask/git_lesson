const ADD_POST = 'ADD-POST';
const PUSH_POST_TEXT = 'PUSH-POST-TEXT';

/*-42-1 Создаем начальные данные для redux!*/
let initialState = {
    postData: [
        { id: '1', avatar: 'https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg', name: '//Мне еще 30 лет!', likeCount: 2 },
        { id: '2', avatar: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0_2bbde84177c9ff1c2299a26a0f69f69c@480x496_0xac120003_4430520541578509619.jpg', name: '//А мне 40 лет', likeCount: 11 }
    ],
    newPostText: ''
}

const profileReduser = (state = initialState, action) => {
    console.log(`'profileReduser компонента' ${action}`);
    switch (action.type) {
        /*-33-1 обновление текста в state после ввода на странице, для последующего отображения*/
        case (PUSH_POST_TEXT):
            {
                let stateCopy = { ...state };
                stateCopy.newPostText = action.newPostText;
                return stateCopy;
            }
        /*-32-1 добавление данных функция из BLL*/
        case (ADD_POST):
            {
                let newPost = {
                    id: '3',
                    avatar: '',
                    name: state.newPostText,
                    likeCount: 0
                };
                /*-47 для redux требуеться работать с копией данных, чтобы он мог их сравнить и перерисовать*/
                let stateCopy = { ...state };
                stateCopy.postData = [...state.postData];

                stateCopy.newPostText = '';
                stateCopy.postData.push(newPost);
                return stateCopy;
            }
            {/*-33-1 Перерисовка страницы!*/ }
        default:
            return state;
    }
}

/*MyPosts*/
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const pushPostText = (text) => {
    return {
        type: PUSH_POST_TEXT,
        newPostText: text
    }
}

export default profileReduser