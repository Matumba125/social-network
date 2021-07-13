import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import LeftNavbar from "./Components/Navbars/LeftNavbar/LeftNavbar";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import {AppPropsType} from "./redux/PropsType";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import RightNavbarContainer from "./Components/Navbars/RightNavbar/RightNavbarContainer";


const App: React.FC<AppPropsType> = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <LeftNavbar/>
            <div className="app-wrapper-content">
                <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>

                <Route path={"/profile"} render={() => <Profile/>}/>

                <Route path={"/music"} component={Music}/>
                <Route path={"/news"} component={News}/>
                <Route path={"/settings"} component={Settings}/>
            </div>
            <RightNavbarContainer />
        </div>
    );
}

export default App;
