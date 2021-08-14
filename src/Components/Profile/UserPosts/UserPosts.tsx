import React, {MouseEvent} from 'react'
import style from './UserPosts.module.css'
import Post from "./Post/Post"
import {UsersPostsPropsType} from "./UserPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";
import {addPost} from "../../../redux/profilleReducer";
import {Button} from 'antd';

type AddPostType = {
    post: string
}


const AddPost: React.FC<InjectedFormProps<AddPostType>> = (props) => {

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        props.handleSubmit(e)
        props.reset()
    }

    return (
        <form className={style.form}>
            <Field name={'post'} component={'input'} placeholder={'Type your post'}/>
            <div>
                <Button onClick={onClickHandler}>Send</Button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm<AddPostType>({form: 'post'})(AddPost)

function UserPosts(props: UsersPostsPropsType) {

    let state = props.profilePage


    let postsElement = state.postsData.map(m =>
        <Post
            key={m.id}
            postContent={m.postContent}
            postLikes={m.postLikes}
            id={m.id}
        />)

    const dispatch = useDispatch()

    const onSubmit = (formData: AddPostType) => {
        dispatch(addPost(formData.post))
    }


    return (
        <div>
            <div className={style.userNewPosts}>
                <AddPostReduxForm onSubmit={onSubmit}/>
            </div>
            {postsElement}
        </div>
    );
}

export default UserPosts;