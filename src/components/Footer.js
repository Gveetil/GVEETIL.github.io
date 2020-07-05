import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Toolbar, Typography } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

// Styles used by this component
const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: fade(theme.palette.footer.main, 0.2),
        color: theme.palette.footer.contrastText,
        borderTop: "3px solid",
        borderColor: fade(theme.palette.footer.border, 0.3),
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
    },
}));

// The page footer component 
export default function Footer() {
    const classes = useStyles();
    return (
        <Toolbar component="footer" className={classes.footer}>
            <Box display="flex" margin="auto">
                <Typography variant="button">
                    GEETHANJALI VEETIL © 2020.
                    </Typography>
            </Box >
        </Toolbar>
    )
}