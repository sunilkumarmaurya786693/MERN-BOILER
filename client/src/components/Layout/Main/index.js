import React from "react";

import './Main.sass'

const Main = props => {
    const {
        displayMenu
    }= props;

    return (
        <div className={`app-main`}>
            <div className={`main-container ${displayMenu ? 'main-container-menu-active' : 'main-container-menu-inactive'}`}>
                {props.children}
            </div>
        </div>
    )
};

export default Main;