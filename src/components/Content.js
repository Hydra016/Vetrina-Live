import React from "react";
import useStyles from "../hooks/useStyles";
import { Grid, Container } from "@material-ui/core";
import PrimaryCardVisitors from "./firstSection/PrimaryCardVisitors";
import PrimaryCardOrders from "./firstSection/PrimaryCardOrders";
import Configure from "./secondSection/Configure";
import Reviews from './secondSection/Reviews';
import Invite from "./secondSection/Invite";
import CustomerSupport from './secondSection/CustomerSupport';
import Exclusive from "./firstSection/Exclusive";
import Extensions from './firstSection/Extensions';
import News from './firstSection/News';

const Content = () => {
  const { content, container_1, container_2, primaryCard } = useStyles();

  return (
    <Grid className={content} 
      container
      direction="row"
      justifyContent="center">
      <Grid className={container_1} item xs={8}>
          <Grid container xs={12}>
              <Grid item xs={6}>
              <PrimaryCardVisitors className={primaryCard} />
              <Exclusive className={primaryCard} />
              </Grid>
              <Grid item xs={6}>
              <PrimaryCardOrders className={primaryCard} />
              <Extensions className={primaryCard} />
              </Grid>
              <News className={primaryCard} />
          </Grid>
      </Grid>
      <Grid className={container_2} item xs={4}>
        <Grid container>
          <Configure />
          <Reviews />
          <Invite />
          <CustomerSupport />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Content;
