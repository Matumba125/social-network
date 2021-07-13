import RightNavbar from "./RightNavbar";
import {StateType} from "../../../redux/PropsType";
import {connect} from "react-redux";


const mapStateToProps = (state: StateType) => {
    return {
        contactsData: state.rightNavbar.contactsData
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
    }
}

const RightNavbarContainer = connect(mapStateToProps, mapDispatchToProps)(RightNavbar);

export default RightNavbarContainer;