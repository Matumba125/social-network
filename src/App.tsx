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


function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <LeftNavbar/>
            <div className="app-wrapper-content">
                <Route path={"/dialogs"} render={() => <Dialogs
                    addMessage={props.addMessage}
                    changeMessageTextCallback={props.changeMessageTextCallback}
                    {...props.state.dialogsPage}/>}/>

                <Route path={"/profile"} render={() => <Profile
                    addPost={props.addPost}
                    changePostTextCallback={props.changePostTextCallback}
                    {...props.state.profilePage}
                />}/>

                <Route path={"/music"} component={Music}/>
                <Route path={"/news"} component={News}/>
                <Route path={"/settings"} component={Settings}/>
            </div>
            <RightNavbar {...props.state.rightNavbar}/>
        </div>
    );
}

export default App;
