import React from "react";
import { PeopleAltOutlined, ArrowForward } from '@material-ui/icons';
import { Card, Container, Grid, Typography, Link } from "@material-ui/core";
import useStyles from '../../hooks/useStyles'

const Invite = () => {
    const { cardHeaderFirst, cardHeaderIcon, secondaryCard, FooterLinkSecondary, FooterLinkSecondaryIcon } = useStyles();

    return (
        <Container>
            <Card elevation={3} style={{height: '231px'}} className={secondaryCard}>
            <Grid container>
          <Grid item xs>
            <div className={cardHeaderFirst}>
              <PeopleAltOutlined className={cardHeaderIcon} />
              <Typography variant="h5"><b>Invite friend</b></Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container>
        <Typography variant="h6" color="text">
        <span style={{color: '#00C48C'}}>Receive 50 products</span> by inviting a friend who subscribes to a plan. Your friend will receive a 30% discount coupon valid for any plan.
          </Typography>
        </Grid>
        <Grid container>
        <Link className={FooterLinkSecondary} href="#">
            <Typography>Start inviting friends!</Typography>
            <ArrowForward className={FooterLinkSecondaryIcon} />
          </Link>
        </Grid>
            </Card>
        </Container>
    )
}

export default Invite;