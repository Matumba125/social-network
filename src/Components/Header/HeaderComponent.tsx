import React, {useCallback, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {logoutUser} from "../../redux/authReducer";
import {Avatar, Button, PageHeader} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import style from './Header.module.css'
import {AppStateType} from "../../redux/reduxStore";

export const HeaderComponent = React.memo(() => {

        const [avatar, setAvatar] = useState<string>('')

        const dispatch = useDispatch()
        const isAuth = useSelector<AppStateType>(state => state.auth.isAuth)
        const login = useSelector<AppStateType>(state => state.auth.data.login)
        const ava = useSelector<AppStateType, string>(state => state.profilePage.profile.photos.small)

        useEffect(() => {
            if (ava) {
                setAvatar(ava)
            }
        }, [isAuth, login, ava])


        const onClickHandler = useCallback(() => {
            dispatch(logoutUser())
        }, [dispatch])

        return (
            <PageHeader title={'Social Network'} extra={
                isAuth ?
                    <div className={style.userStatus}>
                        <NavLink to="/social-network/profile">
                            <Avatar
                                src={avatar && avatar}
                                icon={!avatar && <UserOutlined/>}/>
                            {login}
                        </NavLink>
                        <Button
                            className={style.btn}
                            onClick={onClickHandler}
                        >Log Out</Button>
                    </div> : ''
            }/>
        )
    }
)