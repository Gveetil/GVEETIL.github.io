import React from 'react';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

// Styles used by this component
const useStyles = makeStyles((theme) => ({
    icon: {
        color: theme.palette.secondary.main,
    },
    drawer: {
        width: theme.spacing(20),
    },
}));

// Drop down navigation menu with expand icon for smaller viewports
export default function DropDownMenu(props) {
    const [opened, setOpened] = React.useState(false);
    const classes = useStyles();

    // Toggle show / close of menu 
    const toggleDrawer = (isOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpened(isOpen);
    };

    return (
        <>
            <IconButton
                className={classes.icon}
                aria-label="open menu"
                edge="end"
                onClick={toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer anchor='right' open={opened} onClose={toggleDrawer(false)}>
                <div
                    className={classes.drawer}
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <ListItem button component={Link} to="/About" className="active"><ListItemText primary="About" /></ListItem>
                        <ListItem button component={Link} to="/Portfolio"><ListItemText primary="Portfolio" /></ListItem>
                        <ListItem button component={Link} to="/Contact"><ListItemText primary="Contact" /></ListItem>
                    </List>
                </div>
            </Drawer>
        </>
    );
}