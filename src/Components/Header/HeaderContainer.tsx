import React from 'react';
import Header from "./Header";
import {AuthInitialStateType, DataType, setUserData} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {AuthorizeAPI} from "../../api/api";

type MapStateToPropsType = AuthInitialStateType


type MapDispatchToPropsType = {
    setUserData: (data: DataType) => void
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
            AuthorizeAPI.authorizeUser().then(data => {
                if (data.resultCode === 0) {
                    this.props.setUserData(data.data)
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