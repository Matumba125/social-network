import React, {ChangeEvent} from 'react'
import style from './UserPosts.module.css'
import Post from "./Post/Post"
import {PostDataPropsType} from "../../../redux/PropsType";



function UserPosts(props: PostDataPropsType) {

    let state = props.profilePage

    let postsElement = state.postsData.map(m =>
        <Post
            key={m.id}
            postContent={m.postContent}
            postLikes={m.postLikes}
            id={m.id}
        />)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changePostText(e.currentTarget.value)
    }

    const onClickHandler = () => {
       props.addPost();
    }

    return (
        <div className={style.userPosts}>
            <div className={style.userNewPosts}>
                <textarea className={style.textarea}
                          onChange={onChangeHandler}
                          value={state.messageForNewPost}></textarea>
                <button className={style.button} onClick={onClickHandler}>Add Post</button>
            </div>
            {postsElement}

        </div>
    );
}

export default UserPosts;