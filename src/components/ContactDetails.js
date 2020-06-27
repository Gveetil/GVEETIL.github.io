import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Divider, Link } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DescriptionIcon from '@material-ui/icons/Description';

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
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        backgroundColor: theme.palette.primary.contrastText,
    },

    paddingLeft: {
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    }
}));

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
                <Typography variant="body2">
                    Melbourne, Australia
                </Typography>
            </Grid>
            <Grid item xs={1} >
                <PhoneIcon fontSize="small" />
            </Grid>
            <Grid item xs={11} className={classes.paddingLeft}>
                <Typography variant="body2">
                    0459215817
                </Typography>
            </Grid>
            <Grid item xs={1} >
                <MailOutlineIcon fontSize="small" />
            </Grid>
            <Grid item xs={11} className={classes.paddingLeft}>
                <Link variant="body2" underline="none"
                    href="mailto:Geethanjali.tv@gmail.com">
                    Geethanjali.tv@gmail.com
                </Link>
            </Grid>
            <Grid item xs={1} >
                <DescriptionIcon fontSize="small" />
            </Grid>
            <Grid item xs={11} className={classes.paddingLeft}>
                <Link variant="body2" underline="none" target="_blank"
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
                    <IconButton aria-label="LinkedIn" color="secondary">
                        <LinkedInIcon fontSize="large" />
                    </IconButton>
                    <IconButton aria-label="GitHub" color="inherit">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton aria-label="Facebook" color="secondary">
                        <FacebookIcon fontSize="large" />
                    </IconButton>
                </Box>
            </Grid>
        </Grid>
    );
}