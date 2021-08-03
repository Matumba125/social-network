import React from 'react';
import Header from "./Header";
import {AuthInitialStateType, authUser} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";

type MapStateToPropsType = AuthInitialStateType


type MapDispatchToPropsType = {
    authUser: () => void
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.authUser()
    }

    render() {
        return <>
            <Header data={this.props.data} isAuth={this.props.isAuth}/>
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        data: state.auth.data,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {authUser})(HeaderContainer);