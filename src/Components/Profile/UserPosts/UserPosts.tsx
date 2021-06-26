import React from 'react'
import style from './UserPosts.module.css'
import Post from "./Post/Post"
import {PostDataPropsType} from "../../../redux/PropsType";


function UserPosts(props: PostDataPropsType) {

    let postsElement = props.postsData.map(m => <Post postContent={m.postContent} postLikes={m.postLikes} id={m.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const onClickHandler = () => {
        let text = newPostElement.current?.value
        alert(text)
    }

    return (
        <div className={style.userPosts}>
            <div className={style.userNewPosts}>

                <textarea className={style.textarea} ref={newPostElement} ></textarea>

                <button className={style.button} onClick={onClickHandler}>Add Post</button>
            </div>
            {postsElement}

        </div>
    );
}

export default UserPosts;