import React from 'react';
import {Button, Result} from "antd";
import {Link} from "react-router-dom";
import style from './ErrorPage.module.css'

export const ErrorPage = () => {
    return (
        <div className={style.errorWrapper}>
            <Result
                status="404"
                subTitle="Sorry, the page you visited still in progress."
                extra={<Link to={'/social-network/profile/'}><Button type="primary">Back Home</Button></Link>}
            />
        </div>
    );
};

