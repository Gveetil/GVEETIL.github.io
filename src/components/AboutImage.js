import React from 'react';
import path from 'path';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Path to images folder
const IMAGE_PATH = path.join(process.env.PUBLIC_URL, "/images/");

const useStyles = makeStyles((theme) => ({
    details: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        width: "100%",
        height: "100%",
    },

    divider: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        backgroundColor: theme.palette.primary.contrastText,
    },

    paddingLeft: {
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    }
}));

export default function AboutImage(props) {
    const classes = useStyles();

    return (
        <Grid container item xs={12} className={classes.details}
            align="center"
            justify="center"
            direction="column">
            <Box ><img src={`${IMAGE_PATH}profileImage.JPG`}
                className="portfolio-image"
                alt="Geethanjali Veetil" />
            </Box>
        </Grid>
    );
}