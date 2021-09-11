import React from 'react'
import style from './UserPosts.module.css'
import Post from "./Post/Post"
import {useDispatch, useSelector} from "react-redux";
import {addPost} from "../../../redux/profilleReducer";
import {Formik} from "formik";
import {Form, FormItem, Input, SubmitButton} from "formik-antd";
import {getUserPostsData} from "../../../redux/Selectors";




function UserPosts() {

    const postData = useSelector(getUserPostsData)


    let postsElement = postData.map(m =>
        <Post
            key={m.id}
            postContent={m.postContent}
            postLikes={m.postLikes}
            id={m.id}
        />)

    const dispatch = useDispatch()

    return (
        <div>
            <div className={style.userNewPosts}>
                <Formik
                    initialValues={{
                        post: ''
                    }}
                    onSubmit={(values, action) => {
                        dispatch(addPost(values.post))
                        action.resetForm()
                    }}
                    render={() => (
                        <Form>
                            <FormItem
                                label={'Your Post'}
                                name={'post'}
                            >
                                <Input.TextArea name={'post'}/>
                            </FormItem>
                            <SubmitButton>Post</SubmitButton>
                        </Form>
                    )}
                />
            </div>
            {postsElement}
        </div>
    );
}

export default UserPosts;