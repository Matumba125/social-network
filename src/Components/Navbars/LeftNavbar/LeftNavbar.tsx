import React, {useState} from 'react';
import {Layout, Menu} from "antd";
import {
    CustomerServiceOutlined,
    MailOutlined,
    NotificationOutlined,
    SettingOutlined,
    TeamOutlined,
    UserOutlined
} from "@ant-design/icons";
import {Link} from 'react-router-dom';

const {Sider} = Layout;

function LeftNavbar() {

    const [collapsed, setCollapsed] = useState<boolean>(true)

    const onCollapse = () => {
        setCollapsed(!collapsed)
    }

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <Menu theme="dark" mode="inline">
                <Menu.Item key="1" icon={<NotificationOutlined/>}>
                    <Link to="/social-network/news/">News</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined/>}>
                    <Link to="/social-network/profile/">Profile</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<MailOutlined/>}>
                    <Link to="/social-network/dialogs/">Messages</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<TeamOutlined/>}>
                    <Link to="/social-network/users-page">Developers</Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<CustomerServiceOutlined/>}>
                    <Link to="/social-network/music/">Music</Link>
                </Menu.Item>
                <Menu.Item key="6" icon={<SettingOutlined/>}>
                    <Link to="/social-network/settings/">Settings</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default LeftNavbar;