import React from 'react';
import { Link } from "react-router-dom"
import { Drawer, IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default function DropDownMenu(props) {
    const [opened, setOpened] = React.useState(false);

    const toggleDrawer = (isOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpened(isOpen);
    };

    const anchor = 'right';

    return (
        <>
            <IconButton
                style={{ color: 'red' }}
                aria-label="open menu"
                edge="end"
                onClick={toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer anchor={anchor} open={opened} onClose={toggleDrawer(false)}>
                <div
                    className="navbar-drawer"
                    role="presentation"
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