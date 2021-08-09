import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, ProfileInitialStateType,} from "../../redux/profilleReducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {AppStateType} from "../../redux/reduxStore";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profilePage: state.profilePage,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer)

