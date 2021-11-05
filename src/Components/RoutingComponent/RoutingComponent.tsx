import React from "react";
import {Redirect, Route} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import Music from "../Music/Music";
import News from "../News/News";
import Settings from "../Settings/Settings";
import {useSelector} from "react-redux";
import {getIsAuth} from "../../redux/Selectors";
import UsersPage from "../UsersPage/UsersPage";
import Dialogs from "../Dialogs/Dialogs";

export const RoutingComponent: React.FC = () => {

    const isAuth = useSelector(getIsAuth)

    if (!isAuth) {
        return <Redirect to={'/social-network/login'}/>
    }


    return (
        <>
            <Route path={"/social-network/dialogs"} render={() => <Dialogs/>}/>
            <Route path={"/social-network/profile/:userId?"} render={() => <Profile/>}/>
            <Route path={"/social-network/users-page"} render={() => <UsersPage/>}/>
            <Route path={"/social-network/music"} component={Music}/>
            <Route path={"/social-network/news"} component={News}/>
            <Route path={"/social-network/settings"} component={Settings}/>
        </>
    )
}