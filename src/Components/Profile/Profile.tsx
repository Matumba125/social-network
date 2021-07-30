import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import UserPostsContainer from "./UserPosts/UserPostsContainer";
import {Grid} from "@material-ui/core";
import {ProfileStateType} from "./ProfileContainer";

function Profile(props: ProfileStateType) {
    return (
        <>
            <Grid container direction="column">
                <ProfileInfo profile={props.profilePage.profile}/>
                <UserPostsContainer/>
            </Grid>
        </>
    );
}

export default Profile;