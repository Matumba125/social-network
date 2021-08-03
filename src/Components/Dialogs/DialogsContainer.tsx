import {
    addMessageActionCreator,
    changeMessageTextActionCreator,
    DialogsInitialStateType
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionTypes, AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogsPage: DialogsInitialStateType
}

type MapDispatchPropsType = {
    addMessage: () => void
    changeMessageText: (text: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>): MapDispatchPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        changeMessageText: (text: string) => {
            dispatch(changeMessageTextActionCreator(text))

        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;