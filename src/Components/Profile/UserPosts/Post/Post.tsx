import React, {useState} from 'react';
import style from './Post.module.css'
import {PostType} from '../../../../redux/profilleReducer';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/reduxStore";
import defaultImg from "../../../../assets/img/sveta.jpg";
import {Avatar, Button, Card} from "antd";
import {HeartFilled, HeartOutlined} from "@ant-design/icons"


function Post(props: PostType) {

    const userImage = useSelector<AppStateType, string>(state => state.profilePage.profile.photos.small)
    const userName = useSelector<AppStateType, string>(state => state.profilePage.profile.fullName)

    const [like, setLike] = useState<boolean>(false)

    return (
        <Card title={
            <div className={style.header}>
                <Avatar size={'large'} src={userImage !== null ? userImage : defaultImg} alt={'userImage'}/>
                <span>{userName}</span>
            </div>
        } className={style.item}>
            <div>
                {props.postContent}
            </div>
            <div className={style.likes}>
                <span>{props.postLikes}</span>
                <Button icon={like ? <HeartFilled/> : <HeartOutlined/>}
                        onClick={() => setLike(!like)}
                        shape={"circle"}
                        type={'text'}/>
            </div>

        </Card>
    );
}

export default Post;