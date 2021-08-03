import React, {ChangeEvent} from 'react'
import style from './UserPosts.module.css'
import Post from "./Post/Post"
import {UsersPostsPropsType} from "./UserPostsContainer";
import {Grid} from "@material-ui/core";


function UserPosts(props: UsersPostsPropsType) {

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
        <Grid item container direction={'column'} alignContent={'center'}>
            <div className={style.userNewPosts}>
                <textarea className={style.textarea}
                          onChange={onChangeHandler}
                          value={state.messageForNewPost}></textarea>
                <button className={style.button} onClick={onClickHandler}>Add Post</button>
            </div>
            {postsElement}

        </Grid>
    );
}

export default UserPosts;