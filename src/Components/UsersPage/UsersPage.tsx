import React from 'react';
import {Grid} from "@material-ui/core";
import style from "./UsersPage.module.css";
import {UserType} from "../../redux/usersReducer";
import {UserPage} from "./UserPage/UserPage";

type UsersPagePropsType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    followingUsers: number[]
    onPageChanged: (pageNumber: number) => void
    changeFollowStatus: (id: number, follow: boolean) => void
}

const UsersPage: React.FC<UsersPagePropsType> = (props) => {

        // let pagesCount = Math.ceil(props.totalCount / props.pageSize)

        let pages = [];
        for (let i = 1; i <= 10; i++) {
            pages.push(i)
        }

        return (
            <div className={style.usersPage}>
                {props.users.map(m => <UserPage user={m}
                                                followingUsers={props.followingUsers}
                                                onPageChanged={props.onPageChanged}
                                                changeFollowStatus={props.changeFollowStatus}/>)}
                <Grid>
                    {pages.map(m =>
                        <span key={m} className={props.currentPage === m ? style.selectedPage : ''}
                              onClick={(e) => {
                                  props.onPageChanged(m)
                              }}>{m} </span>
                    )}
                </Grid>
            </div>
        );
    }
;

export default UsersPage;