import {connect} from "react-redux";
import {followUnfollow, getUsers, InitialStateType,} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/reduxStore";
import React from "react";
import UsersPage from "./UsersPage";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    usersPage: InitialStateType
}

type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    followUnfollow: (id: number, following: boolean) => void

}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType


class UsersPageContainer extends React.Component<UsersPropsType> {


    changeFollowStatus = (id: number, follow: boolean) => {
        this.props.followUnfollow(id, follow)
    }

    componentDidMount() {
        this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.usersPage.pageSize)
    }

    render() {
        return <>

            {this.props.usersPage.isFetching ? <Preloader/> : <UsersPage
                users={this.props.usersPage.users}
                totalCount={this.props.usersPage.totalCount}
                currentPage={this.props.usersPage.currentPage}
                pageSize={this.props.usersPage.pageSize}
                followingUsers={this.props.usersPage.followingUsers}
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsers, followUnfollow,}),
    withAuthRedirect,
)(UsersPageContainer)