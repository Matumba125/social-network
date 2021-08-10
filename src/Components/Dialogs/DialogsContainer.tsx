import {addMessage, DialogsInitialStateType} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";
import React from "react";

type MapStatePropsType = {
    dialogsPage: DialogsInitialStateType
}

type MapDispatchPropsType = {
    addMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect)(Dialogs)



