import React from 'react';
import style from "./UserPage.module.css";
import {NavLink} from "react-router-dom";
import {followUnfollow, UserType} from "../../../redux/usersReducer";
import {Avatar, Button, Card} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getFollowingUsers} from "../../../redux/Selectors";
import {UserOutlined} from "@ant-design/icons";


type UserPagePropsType = {
    user: UserType
}

export const UserPage = React.memo(({
                                        user,
                                        ...restProps
                                    }: UserPagePropsType) => {

        const dispatch = useDispatch()

        const followingUsers = useSelector(getFollowingUsers)

        return (
            <Card
                key={user.id}
                className={style.descriptionWrapper}>
                <div className={style.linksWrapper}>
                    <NavLink to={'/social-network/profile/' + user.id}>
                        <Avatar
                            size={104}
                            src={user.photos.small && user.photos.small}
                            icon={!user.photos.small && <UserOutlined/>}
                            alt={user.id + ' avatar'}/>
                    </NavLink>
                    <NavLink
                        to={'/social-network/profile/' + user.id}
                        className={style.nameLink}>
                        {user.name}
                    </NavLink>
                </div>
                <div className={style.description}>
                    <p className={style.userStatus}>{user.status}</p>
                    <Button
                        onClick={() => dispatch(followUnfollow(user.id, user.followed))}
                        disabled={followingUsers.some(id => id === user.id)}
                        className={style.followBtn}
                        type={!user.followed ? "primary" : "default"}
                        ghost={!user.followed}
                    >
                        {user.followed ? 'Unfollow' : 'Follow'}
                    </Button>
                </div>
            </Card>
        )
    }
)

