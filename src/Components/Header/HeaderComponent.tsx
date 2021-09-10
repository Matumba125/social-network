import React, {useCallback, useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {logoutUser} from "../../redux/authReducer";
import {Avatar, Button, PageHeader} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import style from './Header.module.css'
import {AppStateType} from "../../redux/reduxStore";

export const HeaderComponent = React.memo(() => {

        const dispatch = useDispatch()
        const isAuth = useSelector<AppStateType>(state => state.auth.isAuth)
        const login = useSelector<AppStateType>(state => state.auth.data.login)

        useEffect(()=>{},[isAuth, login])


        const onClickHandler = useCallback(() => {
            dispatch(logoutUser())
        }, [dispatch])

        return (
            <PageHeader title={'Social Network'} extra={
                isAuth ?
                    <div className={style.userStatus}>
                        <NavLink to="/social-network/profile">
                            <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                            {login}
                        </NavLink>
                        <Button onClick={onClickHandler}>Log Out</Button>
                    </div>
                    : <NavLink to="/social-network/login">
                        <Button color="primary">Login</Button>
                    </NavLink>
            }/>
        )
    }
)