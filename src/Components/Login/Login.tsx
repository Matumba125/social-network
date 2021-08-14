import React, {MouseEvent} from 'react';
import style from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";
import {loginUser} from "../../redux/authReducer";


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {


    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        props.handleSubmit(e)
        props.reset()
    }

    return (
        <form className={style.form}>
            <Field name={'email'} component={'input'} placeholder={'Login'}/>
            <Field name={'password'} component={'input'} placeholder={'Password'}/>
            <div className={style.checkbox}>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/> Remember me
            </div>
            <button onClick={onClickHandler}>Sign In</button>
        </form>
    )
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = () => {

    const dispatch = useDispatch()

    const onSubmit = (formData: FormDataType) => {
        dispatch(loginUser(formData))
    }
    return (
        <div className={style.wrapper}>
            <h2>LOGIN</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


export default Login;

