import React from "react";
import { StarOutlined, ArrowForward } from '@material-ui/icons';
import { Card, Container, Grid, Typography, Link } from "@material-ui/core";
import useStyles from '../../hooks/useStyles'

const Reviews = () => {
    const { cardHeaderFirst, cardHeaderIcon, secondaryCardReviews, FooterLinkSecondary, FooterLinkSecondaryIcon } = useStyles();

    return (
        <Container>
            <Card elevation={3} className={secondaryCardReviews}>
            <Grid container>
          <Grid item xs>
            <div className={cardHeaderFirst}>
              <StarOutlined className={cardHeaderIcon} style={{color: '#00C48C'}} />
              <Typography variant="h5"><b>Trustpilot</b></Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container>
        <Typography variant="h6" color="text">
        Show us your love by leaving a <span style={{color: '#00C48C'}}>positive</span> review on trust pilot and receive the extension of 50 additional products
          </Typography>
        </Grid>
        <Grid container>
        <Link className={FooterLinkSecondary} style={{color: '#00C48C'}} href="#">
            <Typography>Write a review on Trustpilot</Typography>
            <ArrowForward className={FooterLinkSecondaryIcon} />
          </Link>
        </Grid>
            </Card>
        </Container>
    )
}

export default Reviews;