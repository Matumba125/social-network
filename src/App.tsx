import React, {useEffect} from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {Layout} from 'antd';
import LeftNavbar from "./Components/Navbars/LeftNavbar/LeftNavbar";
import {useDispatch, useSelector} from "react-redux";
import {HeaderComponent} from "./Components/Header/HeaderComponent";
import {authUser} from "./redux/authReducer";
import {getIsInitialized} from "./redux/Selectors";
import {RoutingComponent} from "./Components/RoutingComponent/RoutingComponent";
import {Route} from "react-router-dom";
import Login from "./Components/Login/Login";
import Preloader from "./Components/common/Preloader/Preloader";

const {Content, Footer} = Layout;


const App: React.FC = () => {

    const isInitialized = useSelector(getIsInitialized)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(authUser())
    }, [dispatch])


    if (!isInitialized) {
        return <Preloader/>
    }

    return (
        <>
            <HeaderComponent/>

            <Layout style={{minHeight: '100vh'}}>

                <LeftNavbar/>
                <Layout className="site-layout">
                    <Content style={{margin: '0 16px'}}>
                        <div className="site-layout-background">
                            <RoutingComponent/>
                            <Route path={"/social-network/login"} component={Login}/>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center', marginRight: '80px'}}>Social Network ©2021 by
                        Matumba125</Footer>
                </Layout>
            </Layout>

        </>
    );
}

export default App;
