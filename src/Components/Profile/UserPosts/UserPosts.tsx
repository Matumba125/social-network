import React from 'react'
import style from './UserPosts.module.css'
import Post from "./Post/Post"
import {useDispatch, useSelector} from "react-redux";
import {addPost} from "../../../redux/profilleReducer";
import {Formik} from "formik";
import {Form, FormItem, Input, SubmitButton} from "formik-antd";
import {getCurrentUserId, getUserId, getUserPostsData} from "../../../redux/Selectors";


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
                            {isCurrentProfileBelongsToUser && <div>
                                <FormItem
                                    label={'Your Post'}
                                    name={'post'}
                                >
                                    <Input.TextArea name={'post'}/>
                                </FormItem>
                                <SubmitButton>Post</SubmitButton>
                            </div>}
                        </Form>
                    )}
                />
            </div>
            {postsElement}
        </div>
    );
}

export default UserPosts;