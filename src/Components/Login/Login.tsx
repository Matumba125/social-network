import React, {MouseEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from 'formik';
import {loginUser} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {getIsAuth} from "../../redux/Selectors";
import style from './Login.module.css'
import {Button, Card, Checkbox, Input} from "antd";
import './Login.css'


export type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}


const Login = () => {

    const isAuth = useSelector(getIsAuth)

    const dispatch = useDispatch()

    const formik = useFormik({
            initialValues: {
                email: '',
                password: '',
                rememberMe: false
            },
            onSubmit: (values, actions) => {
                dispatch(loginUser(values));
                actions.resetForm()
            },

            validate: values => {
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

            }
        }
    )

    const onClick = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        formik.submitForm()
    }

    if (isAuth) {
        return <Redirect to={'/social-network/profile/:userId?'}/>
    }

    return (
        <div className={style.loginWrapper}>
            <Card className={style.mainWrapper}>
                <h1 className={style.title}>Login</h1>
                <form
                    className={style.formWrapper}
                >
                    <div>
                        <p>To log in get registered
                            <a href={'https://social-network.samuraijs.com/'}>
                                {' here'}
                            </a>
                        </p>
                    </div>


                    <div>
                        <Input
                            className={style.inputItem}
                            placeholder={'Email'}
                            {...formik.getFieldProps('email')}
                        />
                        {formik.errors.email && <p className={style.errorMessage}>{formik.errors.email}</p>}
                    </div>

                    <div>
                        <Input
                            className={style.inputItem}
                            type={'password'}
                            placeholder={'Password'}
                            {...formik.getFieldProps('password')}
                        />
                        {formik.errors.password && <p className={style.errorMessage}>{formik.errors.password}</p>}
                    </div>


                    <Checkbox
                        className={style.checkBox}
                        {...formik.getFieldProps('rememberMe')}>
                        Remember Me
                    </Checkbox>
                    <Button
                        type={'primary'}
                        className={style.submitBtn}
                        onClick={onClick}>
                        Login</Button>
                </form>
            </Card>
            <div className={style.testData}>
                <p>You can also use common test account credentials:</p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
            </div>
        </div>
    )
}


export default Login;

