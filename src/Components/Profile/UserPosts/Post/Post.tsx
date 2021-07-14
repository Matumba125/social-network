import React from 'react';
import style from './Post.module.css'
import userAvatar from '../../../../redux/img/userAvatar.jpg'


type PostPropsType = {
    id: string
    postContent: string
    postLikes: number
}

function Post(props: PostPropsType) {
    return (
        <div className={style.item}>
            <img src={userAvatar} alt={'userImage'}/>
            {props.postContent}
            <div>
                <span>{props.postLikes} likes</span>
            </div>

        </div>
    );
}

export default Post;