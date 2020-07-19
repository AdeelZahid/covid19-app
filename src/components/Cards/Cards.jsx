import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';

const Cards = ({data: {confirmed, deaths, recovered, lastUpdate}}) => {
    
     if(confirmed)
     console.log(confirmed.value, deaths.value, recovered, new Date(lastUpdate).toDateString())
    

    return (
        <div className={styles.container}>
           <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Infected</Typography>
                        <Typography variant="h5" > Real Data</Typography>
                        <Typography color="textSecondary" > Read Date</Typography>
                        <Typography variant="body2"> Number of Active Cases of Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Recovery</Typography>
                        <Typography variant="h5" > Read Data</Typography>
                        <Typography color="textSecondary" > Read Date</Typography>
                        <Typography variant="body2"> Number of Recovery Cases from Covid-19</Typography>
                    </CardContent>
                </Grid>


                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Death</Typography>
                        <Typography variant="h5" > Read Data</Typography>
                        <Typography color="textSecondary" > Read Date</Typography>
                        <Typography variant="body2"> Number of Death Cases of Covid-19</Typography>
                    </CardContent>
                </Grid>

           </Grid>
        </div>
    )
}

export default Cards
