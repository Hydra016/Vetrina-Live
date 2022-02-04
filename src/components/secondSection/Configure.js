import React from "react";
import { BuildOutlined, ArrowForward } from '@material-ui/icons';
import { Card, Container, Grid, Typography, Link } from "@material-ui/core";
import useStyles from '../../hooks/useStyles'

const Configure = () => {
    const { cardHeaderFirst, cardHeaderIcon, secondaryCard, FooterLinkSecondary, FooterLinkSecondaryIcon } = useStyles();

    return (
        <Container>
            <Card elevation={3} className={secondaryCard}>
            <Grid container>
          <Grid item xs>
            <div className={cardHeaderFirst}>
              <BuildOutlined className={cardHeaderIcon} />
              <Typography variant="h5"><b>Configure your shop</b></Typography>
            </div>
          </Grid>
        </Grid>
        <Grid 
        container
        direction="column">
            <Grid item>
            <Typography style={{color: '#FFA26B'}} variant="h4" color="text">
          45%
          </Typography>
            </Grid>
            <Grid item>
            <Typography style={{color: '#FFA26B'}} variant="h6" color="text">
          completed
          </Typography>
            </Grid>
        </Grid>
        <Grid container>
        <Typography variant="h6" color="text">
          Complete all the steps to have a complete shop to best present to your customers.
          </Typography>
        </Grid>
        <Grid container>
        <Link className={FooterLinkSecondary} href="#">
            <Typography>Complete the setup!</Typography>
            <ArrowForward className={FooterLinkSecondaryIcon} />
          </Link>
        </Grid>
            </Card>
        </Container>
    )
}

export default Configure;