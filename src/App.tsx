import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import LeftNavbar from "./Components/Navbars/LeftNavbar/LeftNavbar";
import Profile from "./Components/Profile/Profile";
import RightNavbar from "./Components/Navbars/RightNavbar/RightNavbar";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <LeftNavbar/>
                <div className="app-wrapper-content">
                    <Route path={"/dialogs"} component={Dialogs}/>
                    <Route path={"/profile"} component={Profile}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/settings"} component={Settings}/>
                </div>
                <RightNavbar/>
            </div>
        </BrowserRouter>
    );
}

export default App;
