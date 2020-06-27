import React from 'react';
import { Typography, Slide, Card, Container } from '@material-ui/core';
import { Grid, Box } from '@material-ui/core';
import ContactDetails from '../components/ContactDetails';
import ContactForm from '../components/ContactForm';

export default function Contact(props) {

    return (
        <Container maxWidth="md" component="div" className="slide-container">
            <Slide direction="left" in={true} mountOnEnter unmountOnExit
                timeout={{ enter: 1800, exit: 0, }}>
                <Box align="center" >
                    <Typography variant="h5">
                        Contact
                        </Typography>
                </Box>
            </Slide>

            <Slide direction="up" in={true} mountOnEnter unmountOnExit
                timeout={{ enter: 1500, exit: 0, }}>
                <Card elevation={3}>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={4}>
                            <ContactDetails />
                        </Grid>
                        <Grid item xs={12} sm={6} md={8}>
                            <ContactForm />
                        </Grid>
                    </Grid>
                </Card>
            </Slide>
        </Container>
    );
}