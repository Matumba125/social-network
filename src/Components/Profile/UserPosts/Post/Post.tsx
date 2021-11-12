import React, {createElement, useState} from 'react';
import {PostType} from '../../../../redux/profilleReducer';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/reduxStore";
import {Avatar, Card, Comment, Tooltip} from "antd";
import {DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined, UserOutlined} from '@ant-design/icons';
import style from './Post.module.css'
import Linkify from 'react-linkify';

function Post(props: PostType) {

    const userImage = useSelector<AppStateType, string | undefined>(state => state.profilePage.profile.photos.small)
    const userName = useSelector<AppStateType, string>(state => state.profilePage.profile.fullName)

    const [likes, setLikes] = useState<number>(0);
    const [dislikes, setDislikes] = useState<number>(0);
    const [action, setAction] = useState<'liked' | 'disliked' | null>(null)

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    }

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
          <span className="comment-action">{likes}</span>
      </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
          <span className="comment-action">{dislikes}</span>
      </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
    ]

    return (
        <Card size={'small'} className={style.item}>
            <Comment
                actions={actions}
                author={<h3 style={{fontWeight: 'bold'}}>{userName}</h3>}
                avatar={<Avatar size={'large'}
                                src={userImage && userImage}
                                icon={!userImage && <UserOutlined/>}
                                alt={'userImage'}/>}
                content={
                    <p>
                        <Linkify>{props.postContent}</Linkify>
                    </p>
                }
            />
        </Card>

    );
}

export default Post;