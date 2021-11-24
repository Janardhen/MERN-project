import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';

import { useSelector } from 'react-redux';


const Posts = () => {
    const posts = useStyles((state) => state.posts); //having callback func k side
    const classes = useStyles();
    console.log(posts);


    
    return(
        <>
        <h1>POSTS</h1>
        <Post/>
        <Post/>
        </>
        
    );
}

export default Posts;