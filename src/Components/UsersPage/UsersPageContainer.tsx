import {connect} from "react-redux";
import {followUnfollow, getUsers, InitialStateType,} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/reduxStore";
import React from "react";
import UsersPage from "./UsersPage";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";

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

const AuthRedirectComponent = withAuthRedirect(UsersPageContainer)

export default connect(mapStateToProps,
    {
        getUsers,
        followUnfollow,
    })(AuthRedirectComponent)


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