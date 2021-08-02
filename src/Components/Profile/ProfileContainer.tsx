import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {
    ProfileDataType,
    ProfileInitialStateType,
    setUserProfile
} from "../../redux/profilleReducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';

type MapStateToPropsType = {
    profilePage: ProfileInitialStateType
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileDataType) => void

}

type UserIdType = {
    userId: string
}

export type ProfileStateType = MapStateToPropsType & MapDispatchToPropsType

export type PropsType = RouteComponentProps<UserIdType> & ProfileStateType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                console.log(response.data)
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

const mapStateToProps = (state: MapStateToPropsType): MapStateToPropsType => ({
    profilePage: state.profilePage
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);