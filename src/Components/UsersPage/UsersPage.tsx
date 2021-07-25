import React from 'react';
import {Grid, IconButton, Paper} from "@material-ui/core";
import style from "./UsersPage.module.css";
import {NavLink} from "react-router-dom";
import defaultImg from "../../assets/img/sveta.jpg";
import {PersonAddRounded} from "@material-ui/icons";
import {UserType} from "../../redux/usersReducer";

type UsersPagePropsType ={
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    onPageChanged: (pageNumber: number)=> void
    changeFollowStatus: (id: number, follow: boolean) => void
}

const UsersPage: React.FC<UsersPagePropsType> = (props) => {

    // let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <=10; i++) {
        pages.push(i)
    }

    return (
        <Grid item container direction={'column'} className={style.usersPage}>
            {props.users.map(m =>
                <Grid item className={style.userInfo} key={m.id}>
                    <Paper className={style.ava} elevation={0}>
                        <NavLink to={`${m.id}`}>
                            <img src={m.photos.small !== null ? m.photos.small : defaultImg} alt={m.id + ' avatar'}
                                 className={style.img}/>
                        </NavLink>
                        <IconButton size={'small'} onClick={() => props.changeFollowStatus(m.id, m.followed)}
                                    color={m.followed ? 'inherit' : 'primary'}
                                    style={{opacity: m.followed ? '0.5' : '1'}}>
                            <PersonAddRounded fontSize={'small'}/>
                        </IconButton>
                    </Paper>
                    <Paper className={style.description}>
                        <div className={style.descriptionTop}>
                            <NavLink to={`${m.id}`} style={{textDecoration: 'none', color: 'black'}}>
                                {m.name}
                            </NavLink>
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
                            " {m.status} "
                        </div>
                    </Paper>
                </Grid>
            )
            }
            <Grid>
                {pages.map(m =>
                    <span className={props.currentPage === m ? style.selectedPage : ''}
                          onClick={(e) => {props.onPageChanged(m)}}>{m} </span>
                )}
            </Grid>
        </Grid>
    );
};

export default UsersPage;