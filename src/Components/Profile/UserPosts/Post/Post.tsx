import React from 'react';
import style from './Post.module.css'
import userAvatar from '../../../../redux/img/userAvatar.jpg'
import {PostPropsType} from "../../../../redux/PropsType";


function Post(props: PostPropsType) {
    return (
        <div className={style.item}>
            <img src={userAvatar}/>
            {props.postContent}
            <div>
                <span>{props.postLikes} likes</span>
            </div>

        </div>
    );
}

export default Post;