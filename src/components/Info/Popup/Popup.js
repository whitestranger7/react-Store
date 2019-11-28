import React from "react";
import Aux from "./../../AuxContainer";
import { Button } from "@material-ui/core";

import "./Popup.css";

const popup = props => {
    const style = {
        top: props.position
    };

    console.log(style);

    return (
        <Aux>
            <div className="popup_girth" onClick={props.hidePopup}></div>
            <div className="popup" style={style}>
                <div className="popup__exit" onClick={props.hidePopup}>
                    <i className="fas fa-times"></i>
                </div>
                <div className="popup__info">
                    <div className="popup__info--name">Name: {props.name}</div>
                    <div className="popup__info--subName">
                        Last name: {props.subName}
                    </div>
                    <div className="popup__info--message">
                        Message: {props.message}
                    </div>
                </div>
                <div className="popup__btn">
                    <Button
                        variant="outlined"
                        color="primary"
                        type="submit"
                        onClick={props.confirmHandler}
                    >
                        Confirm
                    </Button>
                </div>
            </div>
        </Aux>
    );
};

export default popup;
