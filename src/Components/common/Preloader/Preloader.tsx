import {Space, Spin} from 'antd';
import React from 'react';
import {LoadingOutlined} from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{fontSize: 48}} spin/>

const Preloader = () => {
    return (
        <Space style={{display: 'flex', width: '100%', justifyContent: "center"}} size="large">
            <Spin indicator={antIcon}/>
        </Space>
    );
};

export default Preloader;