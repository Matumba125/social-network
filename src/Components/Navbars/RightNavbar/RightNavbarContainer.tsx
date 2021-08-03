import RightNavbar from "./RightNavbar";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ActionTypes, AppStateType} from "../../../redux/reduxStore";
import {RightNavInitialStateType} from "../../../redux/rightNavbarReducer";

type MapStateToPropsType = {
    rightnavData: RightNavInitialStateType
}

type MapDispatchToPropsType = {}

export type RightNavProps = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        rightnavData: state.rightNavbar
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => {
    return {}
}

const RightNavbarContainer = connect(mapStateToProps, mapDispatchToProps)(RightNavbar);

export default RightNavbarContainer;