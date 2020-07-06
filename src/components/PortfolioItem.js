import React from 'react';
import {
    Chip, Fade, Box, CardHeader, Typography, Button, Card, CardActionArea,
    CardMedia, CardContent, CardActions
} from '@material-ui/core';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';
import CodeIcon from '@material-ui/icons/Code';
import utilities from "../utils/utilities";

// Styles used by this component
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.portfolioFooter.main,
        width: theme.spacing(42),
        borderRadius: 12,
        transition: '0.2s',
        boxShadow: 'none',
        '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: `0 6px 12px 0 ${Color(theme.palette.primary.main)
                .rotate(-12)
                .darken(0.5)
                .fade(0.5)}`,
        },
        [theme.breakpoints.down('xs')]: {
            width: "auto",
        },
    },
    title: {
        backgroundColor: theme.palette.portfolioFooter.main,
        color: theme.palette.portfolioFooter.contrastText,
        padding: 0,
        paddingTop: theme.spacing(1.5),
    },
    subtitle: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: theme.palette.portfolioFooter.contrastText,
    },
    footer: {
        backgroundColor: theme.palette.portfolioFooter.main,
        color: theme.palette.portfolioFooter.contrastText,
        paddingTop: theme.spacing(0.4),
        padding: theme.spacing(1.2),
    },
    actionLinks: {
        color: theme.palette.portfolioFooter.linkText,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        '&:hover': {
            color: theme.palette.portfolioFooter.linkHover,
        },
        '&:focus': {
            color: theme.palette.portfolioFooter.linkHover,
        },
    },
    media: {
        paddingTop: '65%',
    },
    overlay: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        overflow: "hidden",
        backgroundColor: theme.palette.portfolioOverlay.main,
        color: theme.palette.portfolioOverlay.contrastText,
        display: "flex",
        justifyContent: "center",
    },
    chipContainer: {
        paddingTop: theme.spacing(2),
    }
}));

// This component generates a portfolio card based on the props passed in
export default function PortfolioItem(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    // Toggle show / hide of portfolio description overlay component 
    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardActionArea
                component="a" href={props.appUrl} target="_blank"
                onMouseEnter={toggleExpand}
                onMouseLeave={toggleExpand}>
                <CardMedia
                    className={classes.media}
                    image={`${utilities.imageFolder}${props.image}.jpg`}>
                    <Fade in={expanded}
                        timeout={{ enter: 400, exit: 400, }} mountOnEnter unmountOnExit>
                        <CardContent className={classes.overlay}>
                            <Box m="auto">
                                <Typography variant="body1" component="p">
                                    {props.description}
                                </Typography>
                                <Box className={classes.chipContainer}>
                                    {props.technologies.map(item => (
                                        <Chip size="small" label={item} key={item} />
                                    ))}
                                </Box>
                            </Box>
                        </CardContent>
                    </Fade>
                </CardMedia>
            </CardActionArea>
            <CardHeader
                classes={{
                    root: classes.title,
                    subheader: classes.subtitle,
                }}
                subheader={props.title}>

            </CardHeader>
            <CardActions className={classes.footer}>
                <Box justifyItems="center" m="auto">
                    <Button component="a" href={props.appUrl} target="_blank"
                        aria-label="launch application" color="inherit" className={classes.actionLinks}
                        startIcon={<LaunchIcon />}> Visit Website
                    </Button>
                    <Button component="a" href={props.githubUrl} target="_blank"
                        aria-label="view code" color="inherit" className={classes.actionLinks}
                        startIcon={<CodeIcon />}> View Code
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
}