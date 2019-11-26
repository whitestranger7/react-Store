import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from '@material-ui/core/Button';


const form = makeStyles(theme => ({
    root: {},
    row: {
        display: "flex"
    },
    column: {
        flex: "50%",
        padding: 10,
        display: "flex",
        justifyContent: "center"
    },
    input: {
        margin: theme.spacing(1),
        width: "50%"
    },
    email: {
        margin: theme.spacing(1),
        width: 500
    }
}));

export default function BasicTextFields() {
    const classes = form();

    return (
        <form className={classes.root}>
            <div className={classes.row}>
                <div className={classes.column}>
                    <TextField
                        className={classes.input}
                        id="standard-basic"
                        label="Name"
                        type="text"
                        required
                    />
                </div>
                <div className={classes.column}>
                    <TextField
                        className={classes.input}
                        id="standard-basic"
                        label="Subname"
                        type="text"
                        required
                    />
                </div>
            </div>
            <div className={classes.row}>
                <div className={classes.column}>
                    <TextField
                        className={classes.email}
                        id="standard-basic"
                        label="Email"
                        type="email"
                        required
                    />
                </div>
            </div>
            <div className={classes.row}>
                <div className={classes.column}>
                    <TextareaAutosize
                        rows={10}
                        placeholder="Say us what you want!"
                        style={{
                            width: "500px",
                            maxHeight: "200px",
                            maxWidth: "800px",
                            minHeight: "50px",
                            minWidth: "300px"
                        }}
                        required
                    />
                </div>
            </div>
            <div className={classes.row}>
                <div className={classes.column}>
                    <Button variant="outlined" color="primary" type="submit">
                        Primary
                    </Button>
                </div>
            </div>
        </form>
    );
}
