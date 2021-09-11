import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../../redux/dialogsReducer";
import {getDialogsPageData} from "../../redux/Selectors";
import {Formik} from "formik";
import {Form, FormItem, Input, SubmitButton} from "formik-antd";

const Dialogs: React.FC = (props) => {

    let dialogsPageData = useSelector(getDialogsPageData)

    const dispatch = useDispatch()

    let dialogsElement = dialogsPageData.dialogsData.map(u => <DialogItem key={u.id} userName={u.userName} id={u.id}
                                                                          avatar={u.avatar}/>)

    let messageElement = dialogsPageData.messageData.map(m => <Message key={m.id} messageText={m.messageText}
                                                                       id={m.id}/>)


    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messageElement}
                <div className={style.addMessage}>
                    <Formik
                        initialValues={{
                            message: ''
                        }}
                        onSubmit={(values, action) => {
                            dispatch(addMessage(values.message))
                            action.resetForm()
                        }}
                        render={() => (
                            <Form>
                                <FormItem
                                    label={'Message'}
                                    name={'message'}
                                >
                                    <Input name={'message'}/>
                                </FormItem>
                                <SubmitButton>Send</SubmitButton>
                            </Form>
                        )}
                    />
                </div>
            </div>
        </div>

    )
}

export default Dialogs;