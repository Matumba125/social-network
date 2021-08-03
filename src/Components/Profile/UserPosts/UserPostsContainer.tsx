import {
    addPostActionCreator,
    changePostTextActionCreator,
    ProfileInitialStateType
} from "../../../redux/profilleReducer";
import UserPosts from "./UserPosts";
import {connect} from "react-redux";
import {ActionTypes, AppStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";


type MapStatePropsType = {
    profilePage: ProfileInitialStateType
}

type MapDispatchPropsType = {
    addPost: () => void
    changePostText: (text: string) => void
}

export type UsersPostsPropsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        changePostText: (text: string) => {
            dispatch(changePostTextActionCreator(text))
        }

    }
}

const UserPostsContainer = connect(mapStateToProps, mapDispatchToProps)(UserPosts);


export default UserPostsContainer;