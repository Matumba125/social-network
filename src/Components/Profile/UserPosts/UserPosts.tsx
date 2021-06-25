import React from 'react'
import style from './UserPosts.module.css'
import Post from "./Post/Post"
import {PostDataPropsType} from "../../../PropsType";

function UserPosts(props: PostDataPropsType) {


    return (
        <div className={style.userPosts}>
            <div className={style.userNewPosts}>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            {props.postsData.map(m => <Post postContent={m.postContent} postLikes={m.postLikes} id={m.id}/>)}

        </div>
    );
}

export default UserPosts;