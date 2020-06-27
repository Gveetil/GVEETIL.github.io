import React from 'react';
import PortfolioItems from '../PortfolioItems.json';
import PortfolioItem from './PortfolioItem';
import { Grid } from "@material-ui/core";

export default function PortfolioItemList() {
    return (
        <Grid container justify="center" spacing={4}>
            {PortfolioItems.map(item => (
                <Grid item xs={12} sm={6} lg={4} key={item.description}>
                    <PortfolioItem {...item} />
                </Grid>
            ))}
        </Grid>
    );
}
