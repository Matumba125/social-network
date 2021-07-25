import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import UserPostsContainer from "./UserPosts/UserPostsContainer";
import {Grid} from "@material-ui/core";

function Profile() {
    return (
        <>
            <Grid container direction="column">
                <ProfileInfo/>
                <UserPostsContainer/>
            </Grid>
        </>
    );
}

export default Profile;