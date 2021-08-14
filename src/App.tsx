import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {Layout} from 'antd';
import {Route} from 'react-router-dom';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import ProfileContainer from './Components/Profile/ProfileContainer';
import UsersPageContainer from './Components/UsersPage/UsersPageContainer';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import Login from './Components/Login/Login';
import LeftNavbar from "./Components/Navbars/LeftNavbar/LeftNavbar";
import HeaderContainer from "./Components/Header/HeaderContainer";

const {Content, Footer} = Layout;


const App: React.FC = () => {

    return (
        <>
            <HeaderContainer/>

            <Layout style={{minHeight: '100vh'}}>
                <LeftNavbar/>
                <Layout className="site-layout">
                    <Content style={{margin: '0 16px'}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            <Route path={"/social-network/dialogs"} render={() => <DialogsContainer/>}/>

                            <Route path={"/social-network/profile/:userId?"} render={() => <ProfileContainer/>}/>

                            <Route path={"/social-network/users-page"} render={() => <UsersPageContainer/>}/>


                            <Route path={"/social-network/music"} component={Music}/>
                            <Route path={"/social-network/news"} component={News}/>
                            <Route path={"/social-network/settings"} component={Settings}/>
                            <Route path={"/social-network/login"} component={Login}/>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Social Network ©2021 by Matumba125</Footer>
                </Layout>
            </Layout>

        </>
    );
}

export default App;
