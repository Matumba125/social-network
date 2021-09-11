import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Formik} from 'formik';
import {loginUser} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {getIsAuth} from "../../redux/Selectors";
import {Checkbox, Form, FormItem, Input, SubmitButton} from "formik-antd";
import style from './Login.module.css'


export type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}


const Login = () => {

    const isAuth = useSelector(getIsAuth)

    const dispatch = useDispatch()

    if (isAuth) {
        return <Redirect to={'/social-network/profile/:userId?'}/>
    }

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false
            }}
            onSubmit={(values, actions) => {
                dispatch(loginUser(values));
                actions.resetForm()
            }
            }
            validate={values => {
                const errors: FormikErrorType = {};

                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }

                if (!values.password) {
                    errors.password = 'Required';
                } else if (!/^[A-Z0-9._%+-]{4,}$/i.test(values.password)) {
                    errors.password = 'Password must be longer than 3 symbols';
                }

                return errors;
            }}
            render={() => (
                <Form
                    className={style.formWrapper}
                >
                    <p>To log in get registered
                        <a href={'https://social-network.samuraijs.com/'}
                           target={'_blank'}>here
                        </a>
                    </p>
                    <p>or use common test account credentials:</p>
                    <p>Email: free@samuraijs.com</p>
                    <p>Password: free</p>

                    <FormItem
                        label="Email"
                        name={'email'}
                    >
                        <Input name={'email'}/>
                    </FormItem>


                    <FormItem
                        label="Password"
                        name={'password'}
                    >
                        <Input.Password name={'password'}/>
                    </FormItem>

                    <FormItem
                        name={'rememberMe'}
                    >
                        <Checkbox name={'rememberMe'}>RememberMe</Checkbox>
                    </FormItem>
                    <SubmitButton>Login</SubmitButton>
                </Form>
            )
            }
        />
    )
}


export default Login;

