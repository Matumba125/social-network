import React from "react";
import style from "./Dialogs.module.css";
import {Chat} from "./Chat/Chat";

const Dialogs: React.FC = (props) => {

    return (
        <div className={style.dialogs}>
            <Chat/>
        </div>

    )
}

export default Dialogs;