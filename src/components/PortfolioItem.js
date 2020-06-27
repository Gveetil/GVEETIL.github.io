import React from 'react';
import path from 'path';
import { Chip, Fade, Box, CardHeader, Typography, Button, Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';
import CodeIcon from '@material-ui/icons/Code';

// Path to images folder
const IMAGE_PATH = path.join(process.env.PUBLIC_URL, "/images/");

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.portfolio.main,
        padding: theme.spacing(0.2),
        // minWidth: 300,
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
    },
    title: {
        color: theme.palette.portfolio.contrastText,
        padding: theme.spacing(0.7),
    },
    footer: {
        color: theme.palette.portfolio.contrastText,
        padding: theme.spacing(0.5),
    },
    spacing: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
    media: {
        height: "16rem",
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        color: theme.palette.text,
        backgroundColor: 'white',
        display: "flex",
        justifyContent: "center",
    },
    chipContainer: {
        padding: theme.spacing(2),
        '& > *': {
            margin: theme.spacing(0.5),
        },
    }
}));

export default function PortfolioItem(props) {
    // const styles4 = useStyles({ color: '#34241e' });
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                classes={{
                    root: classes.title,
                    subheader: classes.title,
                }}
                subheader={props.title}>

            </CardHeader>
            <CardActionArea
                onMouseEnter={toggleExpand}
                onMouseLeave={toggleExpand}>
                <CardMedia
                    className={classes.media}
                    image={`${IMAGE_PATH}${props.image}.jpg`}
                    title={props.title}>
                    <Fade in={expanded} direction="up"
                        timeout={{ enter: 400, exit: 400, }} mountOnEnter unmountOnExit>
                        <CardContent className={classes.overlay}>
                            <Box m="auto">
                                <Typography variant="body2" color="textSecondary" component="p">
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
            <CardActions className={classes.footer}>
                <Box justifyItems="center" m="auto">
                    <Button component="a" href={props.appUrl} target="_blank" size="small"
                        aria-label="launch application" color="inherit" className={classes.spacing}
                        startIcon={<LaunchIcon />}> Open
                    </Button>
                    <Button component="a" href={props.githubUrl} target="_blank" size="small"
                        aria-label="view code" color="inherit" className={classes.spacing}
                        startIcon={<CodeIcon />}> Code
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
}