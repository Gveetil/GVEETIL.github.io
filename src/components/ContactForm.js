import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Box, FormControl, Button, Snackbar, IconButton } from '@material-ui/core';
import { SHOW_DIALOG, useDialogContext } from "../utils/DialogContext";
import CloseIcon from '@material-ui/icons/Close';
import utilities from "../utils/utilities";

// Validation message
const incorrectDataMessage = (<>
    <strong>Incomplete Values! </strong>
    <br /> Please complete all the fields.
</>);
// Error message
const emailErrorMessage = (<>
    <strong>Unable to submit details!</strong>
    <br /> Error while sending data - please try again later.
</>);

// Styles used by this component
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
    snackbar: {
        background: "green",
    },
}));

// This component displays the contact details form  
export default function ContactForm(props) {
    /* eslint-disable no-unused-vars */
    const [_, dispatchDialog] = useDialogContext();
    const [showSnackbar, setShowSnackbar] = useState(false);
    const classes = useStyles();
    const [contactState, setContactState] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Event handler for closing success message on submit of form
    function closeSuccessMessage(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        setShowSnackbar(false);
    };

    // Method shows a dialog box with the given message
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
            // Construct email message
            let emailMessage = `Portfolio Contact Form Submission:
                            Name: ${name}
                            Email: ${email}
                            Message: ${message}`;
            if (await utilities.sendMail(emailMessage)) {
                // Successful
                displaySuccessMessage();
            } else {
                // Display error
                showDialog(emailErrorMessage);
            }
        }
    };

    // Display success message and clear form fields
    function displaySuccessMessage() {
        setShowSnackbar(true);
        setContactState({
            name: "",
            email: "",
            message: ""
        });
    }

    return (
        <>
            <FormControl component="form" noValidate autoComplete="off" className={classes.form}>
                <Box display="flex" flexWrap="wrap" >
                    <TextField color="secondary" name="name"
                        className={classes.controlMargin}
                        value={contactState.name}
                        onChange={handleInputChange}
                        margin="dense" label="Name" variant="outlined" fullWidth />
                    <TextField color="secondary" name="email"
                        className={classes.controlMargin}
                        value={contactState.email}
                        onChange={handleInputChange}
                        label="Email" margin="dense"
                        variant="outlined" size="small" fullWidth />
                    <TextField fullWidth color="secondary" name="message"
                        className={classes.controlMargin}
                        value={contactState.message}
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
            </FormControl >
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={showSnackbar}
                autoHideDuration={5000}
                onClose={closeSuccessMessage}
                message="Success! Thank you for getting in touch."
                ContentProps={{
                    className: classes.snackbar,
                }}
                action={
                    <IconButton size="small" aria-label="close" color="inherit" onClick={closeSuccessMessage}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }

            />
        </>
    );
}