import React from 'react';
import {Grid, IconButton, Paper} from "@material-ui/core";
import style from "./UserPage.module.css";
import {NavLink} from "react-router-dom";
import defaultImg from "../../../assets/img/sveta.jpg";
import {PersonAddRounded} from "@material-ui/icons";
import {UserType} from "../../../redux/usersReducer";

type UserPagePropsType = {
    user: UserType
    followingUsers: number[]
    onPageChanged: (pageNumber: number) => void
    changeFollowStatus: (id: number, follow: boolean) => void
}

export const UserPage = React.memo(({
                                        user,
                                        followingUsers,
                                        changeFollowStatus,
                                        onPageChanged,
                                        ...restProps
                                    }: UserPagePropsType) => {
        return (
            <Grid item className={style.userInfo} key={user.id}>
                <Paper className={style.ava} elevation={0}>
                    <NavLink to={'/social-network/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : defaultImg}
                             alt={user.id + ' avatar'}
                             className={style.img}/>
                    </NavLink>
                    <IconButton size={'small'} onClick={() => changeFollowStatus(user.id, user.followed)}
                                color={user.followed ? 'secondary' : 'primary'}
                                style={{opacity: user.followed ? '0.3' : '1'}}
                                disabled={followingUsers.some(id => id === user.id)}>
                        <PersonAddRounded fontSize={'small'}/>
                    </IconButton>
                </Paper>
                <Paper className={style.description}>
                    <div className={style.descriptionTop}>
                        <NavLink to={'/social-network/profile/' + user.id}
                                 style={{textDecoration: 'none', color: 'black'}}>{user.name}</NavLink>
                        <div style={{fontSize: "15px", textAlign: 'center'}}>
                            <div>
                                Belarus,
                            </div>
                            <div>
                                Minsk
                            </div>
                        </div>
                    </div>
                    <div className={style.descriptionBot} style={{fontSize: "13px"}}>
                        " {user.status} "
                    </div>
                </Paper>
            </Grid>
        )
    }
)

