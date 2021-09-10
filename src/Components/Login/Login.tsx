import React from 'react';
import {useDispatch} from "react-redux";
import {Button, Checkbox, Form, Input} from "antd";
import {useFormik} from 'formik';
import {loginUser} from "../../redux/authReducer";
import style from './Login.module.css'


export type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}


const Login = () => {

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

    return (
        <Form
            className={style.formWrapper}
            onFinish={formik.handleSubmit}>

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

