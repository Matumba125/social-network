import React, {MouseEvent} from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";
import {addMessage} from "../../redux/dialogsReducer";
import {Button} from "antd";

type AddMessageType = {
    message: string
}

const AddMessage: React.FC<InjectedFormProps<AddMessageType>> = (props) => {


    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        props.handleSubmit(e)
        props.reset()
    }

    return (
        <form>
            <Field name={'message'} component={'input'} placeholder={'Type your message'}/>
            <div>
                <Button onClick={onClickHandler}>Send</Button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm<AddMessageType>({form: 'message'})(AddMessage)

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.dialogsPage

    const dispatch = useDispatch()

    let dialogsElement = state.dialogsData.map(u => <DialogItem key={u.id} userName={u.userName} id={u.id}
                                                                avatar={u.avatar}/>)

    let messageElement = state.messageData.map(m => <Message key={m.id} messageText={m.messageText} id={m.id}/>)

    const onSubmit = (formData: AddMessageType) => {
        dispatch(addMessage(formData.message))
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messageElement}
                <div className={style.addMessage}>
                    <AddMessageReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;