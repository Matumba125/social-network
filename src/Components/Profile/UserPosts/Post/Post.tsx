import React from 'react';
import style from './Post.module.css'
import userAvatar from './img/userAvatar.jpg'

type PostPropsType = {
    content: string,
    postLikes: number
    id: string
}

function Post(props: PostPropsType) {
    return (
        <div className={style.item}>
            <img src={userAvatar}/>
            {props.content}
            <div>
                <span>{props.postLikes} likes</span>
            </div>

        </div>
    );
}

export default Post;