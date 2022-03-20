import React from 'react';
import p from './Post.module.css'



const Post = (props) => {
    console.log(props);
    return (
        <div className={p.item}>
            <img src = {props.avatar}/>
            {props.name} 
            <div>
                <span>like: {props.likeCount}</span>
            </div>
        </div>)
}

export default Post