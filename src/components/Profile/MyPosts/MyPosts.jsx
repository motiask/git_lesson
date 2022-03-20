import React from 'react';
import p from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        { id: '1', avatar: 'https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg', name: 'Мне 30 лет!', likeCount:2 },
        { id: '2', avatar: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0_2bbde84177c9ff1c2299a26a0f69f69c@480x496_0xac120003_4430520541578509619.jpg', name: 'А мне 40 лет', likeCount:11 }
    ]

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
                <Post avatar={postData[0].avatar} name={postData[0].name} likeCount={postData[0].likeCount} />
                <Post avatar={postData[1].avatar} name={postData[1].name} likeCount={postData[1].likeCount} />
            </div>
        </div>)
}

export default MyPosts