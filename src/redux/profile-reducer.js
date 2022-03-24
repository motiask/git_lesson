const ADD_POST = 'ADD-POST';
const PUSH_POST_TEXT = 'PUSH-POST-TEXT';


const profileReduser = (state, action) => {
    debugger
    switch (action.type) {
        /*-33-1 обновление текста в state после ввода на странице, для последующего отображения*/
        case (PUSH_POST_TEXT):
            state.newPostText = action.newPostText;
            return state;
        /*-32-1 добавление данных функция из BLL*/
        case (ADD_POST):
            let newPost = {
                id: '3',
                avatar: '',
                name: state.newPostText,
                likeCount: 0
            };
            state.newPostText = '';
            state.postData.push(newPost);
            return state;
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