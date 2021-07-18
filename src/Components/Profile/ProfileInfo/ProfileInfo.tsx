import React from "react";
import wrapper from "../../../assets/img/wrapper.png";
import userAvatar from "../../../assets/img/userAvatar.jpg";
import {Card, CardMedia} from "@material-ui/core";

function ProfileInfo() {
    return (
        <Card style={{padding: '20px'}} elevation={0}>
                <CardMedia style={{borderRadius: '10px', marginBottom: '10px' }} component="img" src={wrapper}/>
                <CardMedia style={{borderRadius: '50%', height: '100px', width: '100px'}} component="img" src={userAvatar}/>
        </Card>
    )
}

export default ProfileInfo