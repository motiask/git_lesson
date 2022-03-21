import React from 'react';
import p from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.postData.map((post) => <Post avatar={post.avatar} name={post.name} likeCount={post.likeCount} /> )

    return (
        <div className={p.postsBlock}>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
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