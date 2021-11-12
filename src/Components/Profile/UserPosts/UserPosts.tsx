import React, {KeyboardEvent, MouseEvent} from 'react'
import style from './UserPosts.module.css'
import Post from "./Post/Post"
import {useDispatch, useSelector} from "react-redux";
import {addPost} from "../../../redux/profilleReducer";
import {useFormik} from "formik";
import {getCurrentUserId, getUserId, getUserPostsData} from "../../../redux/Selectors";
import {Button} from "antd";
import TextArea from 'antd/lib/input/TextArea';


function UserPosts() {

    const postData = useSelector(getUserPostsData)

    const currentUserId = useSelector(getCurrentUserId)
    const userId = useSelector(getUserId)

    const isCurrentProfileBelongsToUser = currentUserId === userId

    let postsElement = postData.map(m =>
        <Post
            key={m.id}
            postContent={m.postContent}
            postLikes={m.postLikes}
            id={m.id}
        />)

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            post: ''
        },
        onSubmit: (values, action) => {
            dispatch(addPost(values.post))
            action.resetForm()
        }
    })

    const onButtonClickHandler = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        formik.submitForm()
    }

    const onEnterPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            formik.submitForm()
        }
    }


    return (
        <div className={style.postsWrapper}>
            <div className={style.userNewPosts}>
                <form>
                    {isCurrentProfileBelongsToUser &&
                    <div className={style.formWrapper}>
                        <TextArea
                            onKeyPress={onEnterPressHandler}
                            className={style.textArea}
                            autoSize={{minRows: 1,}}
                            placeholder={'Enter your new post'}
                            {...formik.getFieldProps('post')}
                        />
                        <Button
                            type={'primary'}
                            className={style.submitBtn}
                            onClick={onButtonClickHandler}
                        >Post</Button>
                    </div>}
                </form>
            </div>
            {postsElement}
        </div>
    );
}

export default UserPosts;