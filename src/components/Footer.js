import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Toolbar, Typography } from '@material-ui/core';

// Styles used by this component
const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        borderTop: theme.toolbar.border,
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
        <Toolbar component="footer" variant="dense" className={classes.footer}>
            <Box display="flex" margin="auto">
                <Typography variant="overline" color="textSecondary">
                    GEETHANJALI VEETIL © 2020.
                    </Typography>
            </Box >
        </Toolbar>
    )
}