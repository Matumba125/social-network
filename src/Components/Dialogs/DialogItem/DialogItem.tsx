import React from "react";
import style from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import {DialogsItemPropsType} from "../../../redux/PropsType";

function DialogItem(props: DialogsItemPropsType){
    let path = "/dialogs/" + props.id;

    return(
        <div className={style.dialog}>
            {props.avatar ? <img src={props.avatar}/>:'' }
            <NavLink to={path}>{props.userName}</NavLink>
        </div>
    )
}

export default DialogItem