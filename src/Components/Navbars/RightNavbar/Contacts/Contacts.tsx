import React from 'react';
import style from "./Contacts.module.css";
import {ContactsDataPropsType} from "../../../../redux/PropsType";

function Contacts(props: ContactsDataPropsType) {

    return (
        <div className={style.contact}>
            {props.avatar ? <img src={props.avatar} alt={'contactImage'}/> : ''}
            <div>{props.userName}</div>
        </div>
    );
};

export default Contacts;