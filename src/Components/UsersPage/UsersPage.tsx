import React, {useEffect} from 'react';
import style from "./UsersPage.module.css";
import {getUsers} from "../../redux/usersReducer";
import {UserPage} from "./UserPage/UserPage";
import {Pagination} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getPageSize,
    getTotalUsersCount,
    getUsersData,
    getUsersFetchingStatus
} from "../../redux/Selectors";
import Preloader from "../common/Preloader/Preloader";


const UsersPage: React.FC = () => {

        const dispatch = useDispatch()

        const users = useSelector(getUsersData)
        const currentPage = useSelector(getCurrentPage)
        const pageSize = useSelector(getPageSize)
        const totalCount = useSelector(getTotalUsersCount)
        const isFetching = useSelector(getUsersFetchingStatus)

        useEffect(() => {
            dispatch(getUsers(currentPage, pageSize))
        }, [])

        if (isFetching) {
            return <Preloader/>
        }

        return (
            <div className={style.usersPage}>
                <div className={style.usersList}>
                    {users.map(m => <UserPage user={m} key={m.id}/>)}
                </div>
                <div className={style.pagination}>
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={totalCount}
                        responsive={true}
                        pageSizeOptions={[]}
                        onChange={(page) => dispatch(getUsers(page, pageSize))}
                    />
                </div>
            </div>
        );
    }
;

export default UsersPage;