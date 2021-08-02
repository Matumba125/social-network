import React from 'react';
import axios from "axios";
import Header from "./Header";
import {AuthInitialStateType, DataType, setUserData} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";

type MapStateToPropsType = AuthInitialStateType


type MapDispatchToPropsType = {
    setUserData: (data: DataType) => void
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data)
                }

            });
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

export default connect(mapStateToProps, {setUserData})(HeaderContainer);