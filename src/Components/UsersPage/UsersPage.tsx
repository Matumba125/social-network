import React from "react";
import style from "./UsersPage.module.css"
import {UsersPropsType} from "./UsersPageContainer";
import {IconButton, Paper} from "@material-ui/core";
import {PersonAddRounded} from "@material-ui/icons";
import {NavLink} from 'react-router-dom';
import axios from "axios";
import defaultImg from '../../assets/img/sveta.jpg'


const UsersPage = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    const changeFollowStatus = (id: number, follow: boolean) => {
        if (follow) {
            props.unFollow(id)
        } else {
            props.follow(id)
        }
    }

    const state = props.usersPage.users

    let usersComponent = state.map(m =>
        <div className={style.userInfo} key={m.id}>
            <Paper className={style.ava} elevation={0}>
                <NavLink to={`${m.id}`}>
                    <img src={m.photos.small !== null ? m.photos.small : defaultImg} alt={m.id + ' avatar'}
                         className={style.img}/>
                </NavLink>
                <IconButton size={'small'} onClick={() => changeFollowStatus(m.id, m.followed)}
                            color={m.followed ? 'inherit' : 'primary'}>
                    <PersonAddRounded fontSize={'small'}/>
                </IconButton>
            </Paper>
            <Paper className={style.description}>
                <div className={style.descriptionTop}>
                    <NavLink to={`${m.id}`} style={{textDecoration: 'none', color: 'black'}}>
                        {m.name}
                    </NavLink>
                    <div style={{fontSize: "15px"}}>
                        <div>
                            Belarus,
                        </div>
                        <div>
                            Minsk
                        </div>
                    </div>
                </div>
                <div className={style.descriptionBot} style={{fontSize: "13px"}}>
                    " {m.status} "
                </div>
            </Paper>
        </div>
    )

    return (
        <div>
            {usersComponent}
        </div>
    )
}

export default UsersPage