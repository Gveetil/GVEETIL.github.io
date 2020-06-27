import React from 'react';
import { Typography, Slide, Container, Box } from '@material-ui/core';
import PortfolioItemList from '../components/PortfolioItemList';

export default function Portfolio(props) {

    return (
        <Container maxWidth="lg" component="div" className="slide-container">
            <Slide direction="left" in={true} mountOnEnter unmountOnExit
                timeout={{ enter: 1800, exit: 0, }}>
                <Box align="center" >
                    <Typography variant="h5">
                        Portfolio
                        </Typography>
                </Box>
            </Slide>

            <Slide direction="up" in={true} mountOnEnter unmountOnExit
                timeout={{ enter: 1500, exit: 0, }}>
                <Box align="center" >
                    <PortfolioItemList />
                </Box>
            </Slide>
        </Container>
    );
}