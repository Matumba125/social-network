import React from 'react';
import preloader from "../../../assets/img/preloader.gif";

const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt={'preloader'}/>
        </div>
    );
};

export default Preloader;