import React, {MouseEvent} from 'react'
import style from './UserPosts.module.css'
import Post from "./Post/Post"
import {UsersPostsPropsType} from "./UserPostsContainer";
import {Button, Grid} from "@material-ui/core";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {RenderTextField} from "../../common/ReduxForm/ReduxFormMaterialUi";
import {useDispatch} from "react-redux";
import {addPost} from "../../../redux/profilleReducer";

type AddPostType = {
    post: string
}


const AddPost: React.FC<InjectedFormProps<AddPostType>> = (props) => {

    const onClickHandler =(e: MouseEvent<HTMLButtonElement>)=>{
        props.handleSubmit(e)
        props.reset()
    }

    return (
        <form>
            <Field name={'post'} component={RenderTextField} placeholder={'Type your post'}/>
            <Button onClick={onClickHandler}>Send</Button>
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
        <Grid item container direction={'column'} alignContent={'center'}>
            <div className={style.userNewPosts}>
                <AddPostReduxForm onSubmit={onSubmit}/>
            </div>
            {postsElement}

        </Grid>
    );
}

export default UserPosts;