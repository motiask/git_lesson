import React from 'react';
import p from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.postData.map((post) => <Post avatar={post.avatar} name={post.name} likeCount={post.likeCount} />)

    {/*-31-1)Создаем ссылку на новый элемент*/ }
    let newPostElement = React.createRef();

    let addPost = () => {
        {/*-31-32-3)Считываем/записывем значение элемента в прокинутую функцию из BLL*/ }
        {/*-33-0 после записи новых данных - перерисовка страницы*/ }
        props.addPost();
    }

    let onPostChange = () => {
        props.PushPostText(newPostElement.current.value)
    }

    return (
        <div className={p.postsBlock}>
            <div>
                {/*-31-2)Присвоение значения элемента*/}
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} ></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                <h3>My posts</h3>
            </div>
            <div className={p.posts}>
                {postsElements}
            </div>
        </div>)
}

export default MyPosts