import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { SHOW_DIALOG, useDialogContext } from "../utils/DialogContext";

export default function PortfolioDialog() {
    const [state, dispatch] = useDialogContext();

    const handleClose = () => {
        dispatch({ type: SHOW_DIALOG, show: false });
    };

    return (
        <div>
            <Dialog
                open={state.show}
                onClose={handleClose}
                aria-labelledby="dialog-title">
                <DialogTitle id="dialog-title">Geethanjali Veetil</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {state.message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}