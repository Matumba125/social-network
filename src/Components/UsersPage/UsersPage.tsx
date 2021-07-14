import React from "react";
import style from "./UsersPage.module.css"
import {UsersPropsType} from "./UsersPageContainer";

const UsersPage = (props: UsersPropsType) =>{

    const state = props.usersPage.users

    let usersComponent = state.map(m =>
        <div className={style.userInfo}>
            <img src={m.avatar} alt={m.id + ' avatar'} className={style.img} />
            <div>
                {m.followed}
                {m.address.country}
                {m.address.city}
                {m.fullName}
                {m.status}
            </div>
        </div>

    )

    return(
    <div>
        {usersComponent}
    </div>
    )
}

export default UsersPage