import React from 'react';
import p from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.postData.map((post) => <Post avatar={post.avatar} name={post.name} likeCount={post.likeCount} /> )

    {/*-1-1)Создаем ссылку на новый элемент*/}
    let newPostElement = React.createRef();

    let addPost = () =>{
        {/*-1-3)Считываем значение элемента*/}
        alert(newPostElement.current.value)
    }

    return (
        <div className={p.postsBlock}>
            <div>
                {/*-1-2)Присвоение значения элемента*/}
                <textarea ref={newPostElement}></textarea>
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