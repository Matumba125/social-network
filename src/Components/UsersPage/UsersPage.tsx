import React from 'react';
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
                                                key={m.id}
                                                followingUsers={props.followingUsers}
                                                onPageChanged={props.onPageChanged}
                                                changeFollowStatus={props.changeFollowStatus}/>)}
                <div className={style.pagination}>
                    {pages.map(m =>
                        <span key={m} className={props.currentPage === m ? style.selectedPage : ''}
                              onClick={(e) => {
                                  props.onPageChanged(m)
                              }}>{m} </span>
                    )}
                </div>
            </div>
        );
    }
;

export default UsersPage;