import {connect} from "react-redux";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/usersReducer";
import {ActionTypes, AppStateType} from "../../redux/reduxStore";
import { Dispatch } from "redux";
import React from "react";
import axios from "axios";
import UsersPage from "./UsersPage";

type MapStatePropsType = {
    usersPage: InitialStateType
}

type MapDispatchPropsType ={
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType


class UsersPageContainer extends React.Component<UsersPropsType> {

    changeFollowStatus = (id: number, follow: boolean) => {
        if (follow) {
            this.props.unFollow(id)
        } else {
            this.props.follow(id)
        }
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.items.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return <UsersPage
            users={this.props.usersPage.users}
            totalCount={this.props.usersPage.totalCount}
            currentPage={this.props.usersPage.currentPage}
            pageSize={this.props.usersPage.pageSize}
            onPageChanged={this.onPageChanged}
            changeFollowStatus={this.changeFollowStatus}/>
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>): MapDispatchPropsType => {
    return {
        follow: (id) => {
            dispatch(followAC(id))
        },
        unFollow: (id) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageContainer)

