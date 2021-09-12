import React, {useEffect} from 'react';
import style from "./UsersPage.module.css";
import {getUsers} from "../../redux/usersReducer";
import {UserPage} from "./UserPage/UserPage";
import {Pagination} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentPage, getPageSize, getTotalUsersCount, getUsersData} from "../../redux/Selectors";


const UsersPage: React.FC = () => {

        const dispatch = useDispatch()

        const users = useSelector(getUsersData)
        const currentPage = useSelector(getCurrentPage)
        const pageSize = useSelector(getPageSize)
        const totalCount = useSelector(getTotalUsersCount)

        useEffect(()=>{
                dispatch(getUsers(currentPage,pageSize))
        },[users, currentPage, pageSize])

        return (
            <div className={style.usersPage}>
                {users.map(m => <UserPage user={m} key={m.id}/>)}
                <div className={style.pagination}>
                        <Pagination
                            current={currentPage}
                            pageSize={pageSize}
                            total={totalCount}
                            onChange={(page)=>dispatch(getUsers(page, pageSize))}
                        />
                </div>
            </div>
        );
    }
;

export default UsersPage;