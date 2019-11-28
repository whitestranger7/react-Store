import React, { Component } from "react";
import { TextField, TextareaAutosize, Button } from "@material-ui/core";

import * as firebase from "firebase/app";
import "firebase/database";

import "./InfoPage.css";
import Popup from "./../Popup/Popup";

class Info extends Component {
    state = {
        name: "",
        subName: "",
        email: "",
        message: "",
        popupDisplay: false,
        dataPosted: false
    };

    nameHandler = e => {
        this.setState({ name: e.target.value });
    };

    subNameHandler = e => {
        this.setState({ subName: e.target.value });
    };

    emailHandler = e => {
        this.setState({ email: e.target.value });
    };

    messageHandler = e => {
        this.setState({ message: e.target.value });
    };

    popupHandler = event => {
        event.preventDefault();
        this.setState({ popupDisplay: true });
    };

    hidePopup = () => {
        this.setState({ popupDisplay: false });
    };

    confirmHandler = () => {
        const postData = {
            name: this.state.name,
            subname: this.state.subName,
            email: this.state.email,
            message: this.state.message
        };

        const newPostKey = firebase
            .database()
            .ref()
            .child("messages")
            .push().key;
        let updates = {};
        updates["/messages/" + newPostKey] = postData;

        firebase
            .database()
            .ref()
            .update(updates,
                function(error) {
                    if(error){
                        alert('Something goes wrong')
                    } else {
                        window.location.reload(true);
                    }
                });

    };

    render() {
        return (
            <div className="main">
                <div className="main__hero">
                    <h1>Make your dinner</h1>
                    <h2 className="main__hero--delicious">
                        delicious {`&`}&nbsp;
                    </h2>
                    <div>
                        <h2>healthy</h2>
                    </div>
                </div>
                <div className="main_container">
                    <div className="main__reasons">
                        <div className="reasons__h1">
                            <h1>Reasons to trust us</h1>
                        </div>
                        <div className="reasons__table">
                            <div className="table">
                                <div className="table__icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="table__paragraph">
                                    <h2>fast delivery</h2>
                                </div>
                                <div className="table__container--description">
                                    <div className="table__description">
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Nunc
                                            fermentum viverra libero sit amet
                                            accumsan. Quisque metus quam,
                                            tincidunt tristique gravida
                                            ultricies, tristique in lorem. Nam
                                            finibus consectetur orci, id
                                            imperdiet ligula viverra vel.
                                            Aliquam erat volutpat. Ut interdum,
                                            nisl quis egestas imperdiet, diam
                                            est mattis magna, ut consequat sem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="table">
                                <div className="table__icon">
                                    <i className="fas fa-apple-alt"></i>
                                </div>
                                <div className="table__paragraph">
                                    <h2>best quality</h2>
                                </div>
                                <div className="table__container--description">
                                    <div className="table__description">
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Nunc
                                            fermentum viverra libero sit amet
                                            accumsan. Quisque metus quam,
                                            tincidunt tristique gravida
                                            ultricies, tristique in lorem. Nam
                                            finibus consectetur orci, id
                                            imperdiet ligula viverra vel.
                                            Aliquam erat volutpat. Ut interdum,
                                            nisl quis egestas imperdiet, diam
                                            est mattis magna, ut consequat sem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="table">
                                <div className="table__icon">
                                    <i className="fas fa-dollar-sign"></i>
                                </div>
                                <div className="table__paragraph">
                                    <h2>pretty prices</h2>
                                </div>
                                <div className="table__container--description">
                                    <div className="table__description">
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Nunc
                                            fermentum viverra libero sit amet
                                            accumsan. Quisque metus quam,
                                            tincidunt tristique gravida
                                            ultricies, tristique in lorem. Nam
                                            finibus consectetur orci, id
                                            imperdiet ligula viverra vel.
                                            Aliquam erat volutpat. Ut interdum,
                                            nisl quis egestas imperdiet, diam
                                            est mattis magna, ut consequat sem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="table">
                                <div className="table__icon">
                                    <i className="fas fa-store"></i>
                                </div>
                                <div className="table__paragraph">
                                    <h2>wide stock </h2>
                                </div>
                                <div className="table__container--description">
                                    <div className="table__description">
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Nunc
                                            fermentum viverra libero sit amet
                                            accumsan. Quisque metus quam,
                                            tincidunt tristique gravida
                                            ultricies, tristique in lorem. Nam
                                            finibus consectetur orci, id
                                            imperdiet ligula viverra vel.
                                            Aliquam erat volutpat. Ut interdum,
                                            nisl quis egestas imperdiet, diam
                                            est mattis magna, ut consequat sem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form__container">
                        <div className="main__form">
                            <h1>Contact US</h1>
                            <form onSubmit={this.popupHandler}>
                                <div className="label">
                                    <TextField
                                        className="name"
                                        id="name"
                                        name="name"
                                        label="Name"
                                        type="text"
                                        onChange={this.nameHandler}
                                        required
                                    />
                                </div>
                                <div className="label">
                                    <TextField
                                        className="subName"
                                        onChange={this.subNameHandler}
                                        id="subName"
                                        name="subName"
                                        label="Subname"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className="label">
                                    <TextField
                                        id="email"
                                        name="email"
                                        label="Email"
                                        type="text"
                                        onChange={this.emailHandler}
                                        required
                                    />
                                </div>
                                <div className="label">
                                    <TextareaAutosize
                                        className="textarea"
                                        rows={10}
                                        id="message"
                                        name="message"
                                        placeholder="Say us what you want!"
                                        onChange={this.messageHandler}
                                        required
                                    />
                                </div>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
                {this.state.popupDisplay ? (
                    <Popup
                        position={window.scrollY}
                        name={this.state.name}
                        subName={this.state.subName}
                        email={this.state.email}
                        message={this.state.message}
                        hidePopup={this.hidePopup}
                        confirmHandler={this.confirmHandler}
                    />
                ) : null}
            </div>
        );
    }
}

export default Info;
