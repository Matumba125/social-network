import {connect} from "react-redux";
import {
    changeFetchingStatus,
    follow,
    InitialStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UserType
} from "../../redux/usersReducer";
import { AppStateType} from "../../redux/reduxStore";
import React from "react";
import UsersPage from "./UsersPage";
import Preloader from "../common/Preloader/Preloader";
import {FollowAPI, UsersAPI} from "../../api/api";

type MapStatePropsType = {
    usersPage: InitialStateType
}

type MapDispatchPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    changeFetchingStatus: (isFetching: boolean) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType


class UsersPageContainer extends React.Component<UsersPropsType>{


    changeFollowStatus = (id: number, follow: boolean) => {
        if (follow) {
                FollowAPI.unfollowUser(id)
                .then(data => {
                    if(data.resultCode === 0){
                        this.props.unfollow(id)
                    }
                })
        } else {
            FollowAPI.followUser(id)
                .then(data => {
                    if(data.resultCode === 0){
                        this.props.follow(id)
                    }
                })
        }
    }

    componentDidMount() {
        this.props.changeFetchingStatus(true)
        UsersAPI.getUsers(this.props.usersPage.currentPage,this.props.usersPage.pageSize )
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.items.totalCount)
                this.props.changeFetchingStatus(false)

            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeFetchingStatus(true)
        this.props.setCurrentPage(pageNumber)
        UsersAPI.getUsers(pageNumber,this.props.usersPage.pageSize )
            .then(data => {
                this.props.setUsers(data.items)
                this.props.changeFetchingStatus(false)
            });
    }

    render() {
        return <>

            {this.props.usersPage.isFetching ? <Preloader/> : <UsersPage
                users={this.props.usersPage.users}
                totalCount={this.props.usersPage.totalCount}
                currentPage={this.props.usersPage.currentPage}
                pageSize={this.props.usersPage.pageSize}
                onPageChanged={this.onPageChanged}
                changeFollowStatus={this.changeFollowStatus}/>
            }
        </>
    }

}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.users
    }
}


export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        changeFetchingStatus
    })(UsersPageContainer)













/*import {connect, useDispatch, useSelector} from "react-redux";
import usersReducer, {
    changeFetchingStatus,
    follow,
    InitialStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UserType
} from "../../redux/usersReducer";
import {ActionTypes} from "../../redux/reduxStore";
import React from "react";
import axios from "axios";
import UsersPage from "./UsersPage";
import Preloader from "../common/Preloader/Preloader";
import {Dispatch} from "redux";
import {selectUsersPage} from "../../redux/selector";

//class UsersPageContainer extends React.Component<UsersPropsType>
const UsersPageContainer: React.FC = () => {

    const dispatch = useDispatch<Dispatch<ActionTypes>>()

    const {
        users,
        totalCount,
        currentPage,
        pageSize,
        isFetching,
    } = useSelector(selectUsersPage)

    const changeFollowStatus = (id: number, followed: boolean) => {
        if (followed) {
            dispatch(unfollow(id))
        } else {
            dispatch(follow(id))
        }
    }

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            setUsers(response.data.items)
            setTotalUsersCount(response.data.items.totalCount)
        });

    const onPageChanged = (pageNumber: number) => {
        dispatch(changeFetchingStatus(true))
        dispatch(setCurrentPage(pageNumber))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                dispatch(setUsers(response.data.items))
                dispatch(changeFetchingStatus(false))
            });
    }

    return <>

        {isFetching ? <Preloader/> : <UsersPage
            users={users}
            totalCount={totalCount}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChanged={onPageChanged}
            changeFollowStatus={changeFollowStatus}/>
        }
    </>

}


export default UsersPageContainer*/