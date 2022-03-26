import React from 'react';
import { addPostActionCreator, pushPostText } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {

    let addPost_callback = () => {
        {/*-31-32-3)Считываем/записывем значение элемента в прокинутую функцию из BLL*/ }
        {/*-33-0 после записи новых данных - перерисовка страницы*/ }
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange_callback = (text) => {
        props.store.dispatch(pushPostText(text));
    }

    let _state = props.store.getState();



    return (
        <MyPosts postData={_state.ProfilePage.postData} newPostText={_state.ProfilePage.newPostText} addPost_callback={addPost_callback} onPostChange_callback={onPostChange_callback} />)
}

export default MyPostsContainer