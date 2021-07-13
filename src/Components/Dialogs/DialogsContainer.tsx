import React from "react";
import {addMessageActionCreator, changeMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer =() =>{

return(

    <StoreContext.Consumer>
        {(store) => {
            const state = store.getState().dialogsPage

            const onChangeHandler = (text: string) => {
                store.dispatch(changeMessageTextActionCreator(text))
            }

            const onClickHandler = () => {
                store.dispatch(addMessageActionCreator())
            }
            return <Dialogs dialogsPage={state}
                            addMessage={onClickHandler}
                            changeMessageText={onChangeHandler}/>
        }
        }
        </StoreContext.Consumer>
)
}

export default DialogsContainer;