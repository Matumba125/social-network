import React from "react";
import RightNavbar from "./RightNavbar";
import StoreContext from "../../../StoreContext";

const RightNavbarContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store) =>{
               return <RightNavbar contactsData={store.getState().rightNavbar.contactsData}/>
            }
            }
        </StoreContext.Consumer>
    );
}

export default RightNavbarContainer;