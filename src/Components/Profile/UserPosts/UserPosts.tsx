import React from 'react'
import style from './UserPosts.module.css'
import Post from "./Post/Post"

function UserPosts() {

    let postsData = [
        {
            id: "1",
            postContent: "Hello World !!!",
            postLikes: 15
        },
        {
            id: "2",
            postContent: "It's my first post!!",
            postLikes: 28
        }
    ]

    return (
        <div className={style.userPosts}>
            <div className={style.userNewPosts}>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            {postsData.map(m => <Post content={m.postContent} postLikes={m.postLikes} id={m.id}/>)}

        </div>
    );
}

export default UserPosts;