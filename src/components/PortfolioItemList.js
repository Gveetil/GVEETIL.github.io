import React from 'react';
import PortfolioItems from '../PortfolioItems.json';
import PortfolioItem from './PortfolioItem';
import { Grid } from "@material-ui/core";

// This component loads portfolio items from the json file into a grid 
export default function PortfolioItemList() {
    return (
        <Grid container justify="center" spacing={4}>
            {PortfolioItems.map(item => (
                <Grid item xs='auto' key={item.description}>
                    <PortfolioItem {...item} />
                </Grid>
            ))}
        </Grid>
    );
}
