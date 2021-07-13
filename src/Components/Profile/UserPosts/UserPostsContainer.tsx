import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/profilleReducer";
import UserPosts from "./UserPosts";
import {StateType} from "../../../redux/PropsType";
import {connect} from "react-redux";


const mapStateToProps = (state: StateType) => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        changePostText: (text: string) =>{
            dispatch(changePostTextActionCreator(text))
        }

    }
}

const UserPostsContainer = connect(mapStateToProps, mapDispatchToProps)(UserPosts);



export default UserPostsContainer;