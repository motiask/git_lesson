import React from 'react';
import p from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <div>
                New post
            </div>
            <div className={p.posts}>
            
               <Post avatar = 'https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg'  name = 'Мне ' age = '30 лет!'/>
               <Post avatar = 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0_2bbde84177c9ff1c2299a26a0f69f69c@480x496_0xac120003_4430520541578509619.jpg' name = 'А мне ' age = '40 лет!'/>
            </div>
        </div>)
}

export default MyPosts