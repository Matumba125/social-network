import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import LeftNavbar from "./Components/Navbars/LeftNavbar/LeftNavbar";
import Profile from "./Components/Profile/Profile";
import RightNavbar from "./Components/Navbars/RightNavbar/RightNavbar";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import {AppPropsType} from "./redux/PropsType";


const App: React.FC<AppPropsType> = (props) => {

    const state = props.store.getState()

    return (
        <div className='app-wrapper'>
            <Header/>
            <LeftNavbar/>
            <div className="app-wrapper-content">
                <Route path={"/dialogs"} render={() => <Dialogs
                    dispatch={props.store.dispatch.bind(props.store)}
                    {...state.dialogsPage}/>}/>

                <Route path={"/profile"} render={() => <Profile
                    dispatch={props.store.dispatch.bind(props.store)}
                    {...state.profilePage}
                />}/>

                <Route path={"/music"} component={Music}/>
                <Route path={"/news"} component={News}/>
                <Route path={"/settings"} component={Settings}/>
            </div>
            <RightNavbar {...state.rightNavbar}/>
        </div>
    );
}

export default App;
