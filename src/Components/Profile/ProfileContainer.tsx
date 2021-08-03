import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfile,
    ProfileDataType,
    ProfileInitialStateType,
    setUserProfile
} from "../../redux/profilleReducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {ProfileAPI} from "../../api/api";

type MapStateToPropsType = {
    profilePage: ProfileInitialStateType
}

type MapDispatchToPropsType = {
    getProfile: (userId: string) => void

}

type UserIdType = {
    userId: string
}

export type ProfileStateType = MapStateToPropsType & MapDispatchToPropsType

export type PropsType = RouteComponentProps<UserIdType> & ProfileStateType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getProfile(userId)
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

export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent);