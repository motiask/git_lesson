import React from 'react';
import p from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    console.log('MyPosts компонента');

    let postsElements = props.postData.map((post) => <Post avatar={post.avatar} name={post.name} likeCount={post.likeCount} />)

    let onPostChange = () => {
        props.onPostChange_callback(newPostElement.current.value);
    }

    let addPost = () => {
        props.addPost_callback();
    }


    {/*-31-1)Создаем ссылку на новый элемент*/ }
    let newPostElement = React.createRef();

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
        </div>
    )
}

export default MyPosts