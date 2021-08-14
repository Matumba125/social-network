import React from 'react';
import style from "./UserPage.module.css";
import {NavLink} from "react-router-dom";
import defaultImg from "../../../assets/img/sveta.jpg";
import {UserType} from "../../../redux/usersReducer";
import {Button, Card} from "antd";
import {UserAddOutlined, UserDeleteOutlined} from "@ant-design/icons";


type UserPagePropsType = {
    user: UserType
    followingUsers: number[]
    onPageChanged: (pageNumber: number) => void
    changeFollowStatus: (id: number, follow: boolean) => void
}

export const UserPage = React.memo(({
                                        user,
                                        followingUsers,
                                        changeFollowStatus,
                                        onPageChanged,
                                        ...restProps
                                    }: UserPagePropsType) => {
        return (
            <div className={style.userInfo} key={user.id}>
                <div className={style.ava}>
                    <NavLink to={'/social-network/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : defaultImg}
                             alt={user.id + ' avatar'}
                             className={style.img}/>
                    </NavLink>
                    <Button size={'small'} onClick={() => changeFollowStatus(user.id, user.followed)}
                            disabled={followingUsers.some(id => id === user.id)}
                            icon={!user.followed ? <UserAddOutlined/> : <UserDeleteOutlined/>}
                            shape={"circle"}
                            type={'text'}
                    >
                    </Button>
                </div>
                <Card title={<NavLink to={'/social-network/profile/' + user.id}
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

