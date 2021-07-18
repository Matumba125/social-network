import {connect} from "react-redux";
import UsersPage from "./UsersPage";
import {followAC, InitialStateType, setCurrentPageAC, setUsersAC, unfollowAC, UserType} from "../../redux/usersReducer";
import {ActionTypes, AppStateType} from "../../redux/reduxStore";
import { Dispatch } from "redux";

type MapStatePropsType = {
    usersPage: InitialStateType
}

type MapDispatchPropsType ={
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

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
        }
    }
}

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage)

export default UsersPageContainer