import React from 'react';
import style from "./UserPage.module.css";
import {NavLink} from "react-router-dom";
import defaultImg from "../../../assets/img/sveta.jpg";
import {followUnfollow, UserType} from "../../../redux/usersReducer";
import {Button, Card} from "antd";
import {UserAddOutlined, UserDeleteOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {getFollowingUsers} from "../../../redux/Selectors";


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
            <div className={style.userInfo} key={user.id}>
                <div className={style.ava}>
                    <NavLink to={'/social-network/profile/' + user.id}
                    >
                        <img src={user.photos.small !== null ? user.photos.small : defaultImg}
                             alt={user.id + ' avatar'}
                             className={style.img}/>
                    </NavLink>
                    <Button size={'small'} onClick={() => dispatch(followUnfollow(user.id, user.followed))}
                            disabled={followingUsers.some(id => id === user.id)}
                            icon={!user.followed ? <UserAddOutlined/> : <UserDeleteOutlined/>}
                            shape={"circle"}
                            type={'text'}
                    >
                    </Button>
                </div>
                <Card title={<NavLink to={'/social-network/profile/'+ user.id}
                                      style={{textDecoration: 'none', color: 'black'}}>{user.name}</NavLink>}
                      className={style.descriptionWrapper}>

                    <div className={style.description} style={{fontSize: "13px"}}>
                        " {user.status} "
                        <div style={{fontSize: "15px", textAlign: 'center'}}>
                            <div>
                                Belarus,
                            </div>
                            <div>
                                Minsk
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
)

