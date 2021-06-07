import React from 'react'
import style from './UserPosts.module.css'
import Post from "./Post/Post"

function UserPosts() {
    return (
        <div className={style.userPosts}>
            <div className={style.userNewPosts}>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <Post content={"Hello World !!!"} likes={15}/>
            <Post content={"It's my first post!!"} likes={28}/>

        </div>
    );
}

export default UserPosts;