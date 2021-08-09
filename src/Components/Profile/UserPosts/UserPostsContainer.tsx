import {addPost, changePostText, ProfileInitialStateType} from "../../../redux/profilleReducer";
import UserPosts from "./UserPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";


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

const UserPostsContainer = connect(mapStateToProps, {changePostText, addPost})(UserPosts);


export default UserPostsContainer;