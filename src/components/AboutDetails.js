import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

// Styles used by this component
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.background.contrastText,
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(1),
        width: "100%",
        height: "100%",
    }
}));

// This component displays the text content in the about page
export default function AboutDetails(props) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography paragraph={true}>
                Hi, I'm Geetha!
            </Typography>
            <Typography paragraph={true}>
                I'm a Full Stack Web Developer based in Melbourne, Australia. I have a strong background in software
                product
                design and development and enjoy all things programming. My current skills are in React,
                Node.js, Express, MySQL, MongoDB, JavaScript, jQuery, Bootstrap and CSS.
            </Typography>
            <Typography paragraph={true}>
                <strong className="about-me-panel-header">Education - </strong>Certificate from Monash University Coding
                    Bootcamp
                    in Full Stack Web Technologies. Graduated in Computer Science from Bangalore University.
                    </Typography>
            <Typography paragraph={true}><strong className="about-me-panel-header text-center">Work - </strong> In an earlier life (1999-2012),
                    I
                    worked
                    extensively
                    with Microsoft .Net technologies like C#. I also have
                    strong analytical and design skills from my work with class and database design (OOAD, SQL Server).
                    </Typography>
            <Typography paragraph={true}>My background in
            software development combined with my technical aptitude in web technologies make me a valued
            addition
            to
            any team.
                </Typography>
        </Box>
    );
}