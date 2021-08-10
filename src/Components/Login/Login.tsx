import React, {MouseEvent} from 'react';
import {Button} from "@material-ui/core";
import style from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";
import {loginUser} from "../../redux/authReducer";
import {renderCheckbox, RenderTextField} from "../common/ReduxForm/ReduxFormMaterialUi";
import ProfileContainer from "../Profile/ProfileContainer";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {


    const onClickHandler =(e: MouseEvent<HTMLButtonElement>)=>{
        props.handleSubmit(e)
        props.reset()
    }

    return (
        <form className={style.form}>
            <Field name={'email'} component={RenderTextField} placeholder={'Login'}/>
            <Field name={'password'} component={RenderTextField} placeholder={'Password'}/>
            <div className={style.checkbox}>
                <Field name={'rememberMe'} component={renderCheckbox}/> Remember me
            </div>
            <Button onClick={onClickHandler}>Sign In</Button>
        </form>
    )
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = () => {

    const dispatch = useDispatch()

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
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

