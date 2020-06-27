import React from 'react';
import path from 'path';
import { Link } from "react-router-dom"
import DropDownMenu from "./DropDownMenu"
import { Hidden, AppBar, Toolbar, ButtonGroup, Button, Avatar } from "@material-ui/core";

// Path to images folder
const IMAGE_PATH = path.join(process.env.PUBLIC_URL, "/images/");

export default function NavBar() {
    return (
        <div>
            <AppBar position="static" className="portfolio-navbar">
                <Toolbar variant="dense">
                    <ButtonGroup variant="text" className="portfolio-title">
                        <Button component={Link} to="/About"><Avatar alt="Geethanjali Veetil" size="small" variant="rounded" src={`${IMAGE_PATH}profileImage.JPG`} /></Button>
                        <Button component={Link} to="/About" color="inherit">Geethanjali Veetil</Button>
                    </ButtonGroup>
                    <Hidden xsDown>
                        <ButtonGroup
                            size="small"
                            float="right"
                            variant="text"
                            color="primary"
                            aria-label="text primary button group">
                            <Button component={Link} to="/About" className="active">About</Button>
                            <Button component={Link} to="/Portfolio">Portfolio</Button>
                            <Button component={Link} to="/Contact">Contact</Button>
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