import React from "react";
import style from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import {DialogsItemPropsType} from "../../../redux/dialogsReducer";


const DialogItem: React.FC<DialogsItemPropsType> =(props) =>{
    let path = "/social-network/profile/" + props.id;

    return(
        <div className={style.dialog}>
            {props.avatar ? <img src={props.avatar} alt={'userImage'}/>:'' }
            <NavLink to={path}>{props.userName}</NavLink>
        </div>
    )
}

export default DialogItem