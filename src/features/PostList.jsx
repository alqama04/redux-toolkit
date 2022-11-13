import {useDispatch,useSelector}from 'react-redux'
import { selectAllPost } from './postSlice';
import React from 'react';

const PostList = () => {
    const posts = useSelector(selectAllPost)
    const rednderdPost = posts.map((post)=>{
        return <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
        </article>
    })
    return (
        <div>
            {rednderdPost}
        </div>
    );
}

export default PostList;
