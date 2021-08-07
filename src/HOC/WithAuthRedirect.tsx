import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/reduxStore";
import {ComponentType} from "react";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/social-network/login'}/>

        return <Component {...restProps as T}/>

    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent

}