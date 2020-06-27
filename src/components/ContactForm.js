import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Box, FormControl, Button } from '@material-ui/core';
import { SHOW_DIALOG, useDialogContext } from "../utils/DialogContext";
import mailer from "../utils/mailer";

const incorrectDataMessage = (<><strong>Incomplete Values! </strong> <br /> Please complete all the fields.</>);
const emailErrorMessage = (<><strong>Unable to submit details!</strong> Error while sending data - please try again later.</>);

const useStyles = makeStyles((theme) => ({
    form: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.background.contrastText,
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(3),
        width: "100%",
        height: "100%",
    },
    controlMargin: {
        marginTop: theme.spacing(1),
    },
}));

export default function ContactForm(props) {
    /* eslint-disable no-unused-vars */
    const [_, dispatchDialog] = useDialogContext();
    const classes = useStyles();
    const [contactState, setContactState] = useState({
        name: "",
        email: "",
        message: ""
    });

    function showDialog(message) {
        dispatchDialog({ type: SHOW_DIALOG, show: true, message });
    };

    // Event handler updates form fields with value entered 
    function handleInputChange(event) {
        let value = event.currentTarget.value;
        const name = event.currentTarget.name;
        setContactState({ ...contactState, [name]: value });
    };

    // Function called when submit button is clicked
    async function handleSubmit(event) {
        event.preventDefault();
        var name = contactState.name.trim();
        var email = contactState.email.trim();
        var message = contactState.message.trim();

        // Check if form data is filled in
        if (name.length === 0 || email.length === 0 || message.length === 0) {
            showDialog(incorrectDataMessage);
        } else {
            let emailMessage = `Portfolio Contact Form Submission:
                            Name: ${name}
                            Email: ${email}
                            Message: ${message}`;
            if (await mailer.sendMail(emailMessage)) {
                displaySuccessMessage();
            } else {
                showDialog(emailErrorMessage);
            }
        }
    };

    // Display success message and clear form fields
    function displaySuccessMessage() {
        // Display success message

        // Clear form data
        setContactState({
            name: "",
            email: "",
            message: ""
        });
    }

    return (
        <FormControl noValidate autoComplete="off" className={classes.form}>
            <Box display="flex" flexWrap="wrap" >
                <TextField id="standard-basic" color="secondary" name="name"
                    className={classes.controlMargin}
                    onChange={handleInputChange}
                    margin="dense" label="Name" variant="outlined" fullWidth />
                <TextField id="standard-basic" color="secondary" name="email"
                    className={classes.controlMargin}
                    onChange={handleInputChange}
                    label="Email" margin="dense"
                    variant="outlined" size="small" fullWidth />
                <TextField fullWidth color="secondary" name="message"
                    className={classes.controlMargin}
                    onChange={handleInputChange}
                    margin="dense" label="Message" multiline rows={9}
                    variant="outlined" />
            </Box>
            <Box display="flex" justifyContent="flex-end" className={classes.controlMargin}>
                <Button variant="outlined" type="submit" color="secondary"
                    onClick={handleSubmit}>
                    Send Message
                </Button>
            </Box>
        </FormControl>
    );
}