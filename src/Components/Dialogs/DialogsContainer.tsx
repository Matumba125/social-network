import {addMessage, changeMessageText, DialogsInitialStateType} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";

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
        dialogsPage: state.dialogsPage,
    }
}

const AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, {addMessage, changeMessageText})(AuthRedirectComponent);

export default DialogsContainer;