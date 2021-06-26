import React from 'react'
import style from './UserPosts.module.css'
import Post from "./Post/Post"
import {PostDataPropsType} from "../../../redux/PropsType";


function UserPosts(props: PostDataPropsType) {

    let postsElement = props.postsData.map(m => <Post postContent={m.postContent} postLikes={m.postLikes} id={m.id}/>)

    return (
        <div className={style.userPosts}>
            <div className={style.userNewPosts}>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            {postsElement}

        </div>
    );
}

export default UserPosts;