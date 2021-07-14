import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import LeftNavbar from "./Components/Navbars/LeftNavbar/LeftNavbar";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import RightNavbarContainer from "./Components/Navbars/RightNavbar/RightNavbarContainer";
import {Paper} from "@material-ui/core";
import UsersPageContainer from "./Components/UsersPage/UsersPageContainer";


const App: React.FC = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <LeftNavbar/>
            <Paper className="app-wrapper-content">
                <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>

                <Route path={"/profile"} render={() => <Profile/>}/>

                <Route path={"/users-page"} render={() => <UsersPageContainer/>}/>


                <Route path={"/music"} component={Music}/>
                <Route path={"/news"} component={News}/>
                <Route path={"/settings"} component={Settings}/>
            </Paper>
            <RightNavbarContainer />
        </div>
    );
}

export default App;
