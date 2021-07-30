import React from 'react';
import style from './Post.module.css'
import userAvatar from '../../../../assets/img/userAvatar.jpg'
import { PostType } from '../../../../redux/profilleReducer';

function Post(props: PostType) {
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