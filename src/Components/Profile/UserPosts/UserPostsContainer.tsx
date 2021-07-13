import React from 'react'
import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/profilleReducer";
import UserPosts from "./UserPosts";
import StoreContext from "../../../StoreContext";


const UserPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState()

                const changePostText = (text: string) => {
                    store.dispatch(changePostTextActionCreator(text))
                }

                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                return (<UserPosts changePostText={changePostText}
                                   addPost={addPost}
                                   postsData={state.profilePage.postsData}
                                   messageForNewPost={state.profilePage.messageForNewPost}/>);
            }
            }

        </StoreContext.Consumer>)
}

export default UserPostsContainer;