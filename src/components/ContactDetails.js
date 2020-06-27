import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Typography, Grid, Box, Divider, Link } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DescriptionIcon from '@material-ui/icons/Description';

// Styles used by this component
const useStyles = makeStyles((theme) => ({
    details: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        width: "100%",
        height: "100%",
    },

    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.primary.contrastText,
    },

    paddingLeft: {
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    }
}));

// This component displays the contact details text information and links  
export default function ContactDetails(props) {
    const classes = useStyles();
    return (
        <Grid container className={classes.details}>
            <Grid item xs={12}>
                <Box fontStyle="italic">
                    <Typography paragraph={true}>
                        I'm currently open to freelance work. Please use the form to get in touch.
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={1} >
                <RoomIcon fontSize="small" />
            </Grid>
            <Grid item xs={11} className={classes.paddingLeft}>
                <Typography variant="body1">
                    Melbourne, Australia
                </Typography>
            </Grid>
            <Grid item xs={1} >
                <PhoneIcon fontSize="small" />
            </Grid>
            <Grid item xs={11} className={classes.paddingLeft}>
                <Typography variant="body1">
                    0459 215 817
                </Typography>
            </Grid>
            <Grid item xs={1} >
                <MailOutlineIcon fontSize="small" />
            </Grid>
            <Grid item xs={11} className={classes.paddingLeft}>
                <Link variant="body1" underline="none"
                    href="mailto:Geethanjali.tv@gmail.com">
                    Geethanjali.tv@gmail.com
                </Link>
            </Grid>
            <Grid item xs={1} >
                <DescriptionIcon fontSize="small" />
            </Grid>
            <Grid item xs={11} className={classes.paddingLeft}>
                <Link variant="body1" underline="none" target="_blank"
                    href="Resume.pdf">Resume
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Divider className={classes.divider} />
            </Grid>
            <Grid item xs={12} align="center" >
                <Typography variant="overline">
                    Connect with me
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                    <IconButton component="a" aria-label="LinkedIn" color="secondary" target="_blank"
                        href='https://www.linkedin.com/in/geethanjali-veetil/' >
                        <LinkedInIcon fontSize="large" />
                    </IconButton>
                    <IconButton component="a" aria-label="GitHub" color="inherit" target="_blank"
                        href='https://github.com/Gveetil'>
                        <GitHubIcon />
                    </IconButton>
                    <IconButton component="a" aria-label="Facebook" color="secondary" target="_blank"
                        href='https://www.facebook.com/geethanjali.veetil'>
                        <FacebookIcon fontSize="large" />
                    </IconButton>
                </Box>
            </Grid>
        </Grid>
    );
}