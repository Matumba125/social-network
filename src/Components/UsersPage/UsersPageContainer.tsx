import {connect} from "react-redux";
import UsersPage from "./UsersPage";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/usersReducer";
import {ActionTypes, AppStateType} from "../../redux/reduxStore";
import { Dispatch } from "redux";

type MapStatePropsType = {
    usersPage: InitialStateType
}

type MapDispatchPropsType ={
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>): MapDispatchPropsType => {
    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        unFollow: (id: number) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }

    }
}

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage)

export default UsersPageContainer