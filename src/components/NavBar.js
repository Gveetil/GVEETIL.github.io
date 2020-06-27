import React from 'react';
import { Link, useLocation } from "react-router-dom"
import DropDownMenu from "./DropDownMenu"
import { Hidden, AppBar, Toolbar, ButtonGroup, Button, Avatar } from "@material-ui/core";
import utilities from "../utils/utilities";

// Application header / navigation toolbar
export default function NavBar() {
    const location = useLocation();
    return (
        <div>
            <AppBar position="static" className="portfolio-navbar">
                <Toolbar variant="dense">
                    <ButtonGroup variant="text" className="portfolio-title">
                        <Button component={Link} to="/About"><Avatar alt="Geethanjali Veetil" size="small" variant="rounded" src={`${utilities.imageFolder}profileImage.JPG`} /></Button>
                        <Button component={Link} to="/About" color="inherit">Geethanjali Veetil</Button>
                    </ButtonGroup>
                    <Hidden xsDown>
                        <ButtonGroup
                            float="right"
                            variant="text"
                            color="primary"
                            aria-label="text primary button group">
                            <Button component={Link} to="/About"
                                className={getLinkClass(location.pathname, "/")}>About</Button>
                            <Button component={Link} to="/Portfolio"
                                className={getLinkClass(location.pathname, "/Portfolio")}>Portfolio</Button>
                            <Button component={Link} to="/Contact"
                                className={getLinkClass(location.pathname, "/Contact")}>Contact</Button>
                        </ButtonGroup>
                    </Hidden>
                    <Hidden smUp>
                        <DropDownMenu />
                    </Hidden>
                </Toolbar>
            </AppBar>
        </div>
    );
}

// Returns the class to be applied based on current route selection
function getLinkClass(currentPath, route) {
    if (route === "/") {
        // To check for the default route, exclude other routes
        return (currentPath !== "/Portfolio" && currentPath !== "/Contact") ? "active" : "";
    }
    return (currentPath === route) ? "active" : "";
}