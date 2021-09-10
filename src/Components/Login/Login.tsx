import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Checkbox, Form, Input} from "antd";
import {useFormik} from 'formik';
import {loginUser} from "../../redux/authReducer";
import style from './Login.module.css'
import {AppStateType} from "../../redux/reduxStore";
import {Redirect} from "react-router-dom";
import {getIsAuth} from "../../redux/Selectors";


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
        validate: (values) => {
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
        },
        onSubmit: values => {
            dispatch(loginUser(values));
            formik.resetForm();
            debugger
        },
    })

    if(isAuth){
        return <Redirect to={'/social-network/profile/:userId?'}/>
    }

    return (
        <Form
            className={style.formWrapper}
            onFinish={formik.handleSubmit}>

            <p>To log in get registered
                <a href={'https://social-network.samuraijs.com/'}
                   target={'_blank'}>here
                </a>
            </p>
            <p>or use common test account credentials:</p>
            <p>Email: free@samuraijs.com</p>
            <p>Password: free</p>

            <div className={style.inputItem}>
                <Form.Item
                    label="Email"
                    {...formik.getFieldProps('email')}
                    className={style.formItem}
                >
                    <Input/>
                </Form.Item>
                {formik.touched.email && formik.errors.email &&
                <div style={{color: 'red'}}>{formik.errors.email}</div>}
            </div>


            <div className={style.inputItem}>
                <Form.Item
                    label="Password"
                    {...formik.getFieldProps('password')}
                    className={style.formItem}
                >
                    <Input.Password/>
                </Form.Item>
                {formik.touched.password && formik.errors.password &&
                <div style={{color: 'red'}}>{formik.errors.password}</div>}
            </div>

            <Form.Item>
                <Checkbox
                    checked={formik.values.rememberMe}
                    {...formik.getFieldProps('rememberMe')}>RememberMe</Checkbox>
            </Form.Item>
            <Form.Item >
                <Button htmlType={'submit'}>Login</Button>
            </Form.Item>
        </Form>
    )
}


export default Login;

