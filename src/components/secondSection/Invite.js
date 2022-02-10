import React from "react";
import { Grid, Typography } from "@material-ui/core";

const Invite = () => {
  return (
    <Grid container>
      <Typography variant="h6" color="text">
        <span style={{ color: "#00C48C" }}>Receive 50 products</span> by
        inviting a friend who subscribes to a plan. Your friend will receive a
        30% discount coupon valid for any plan.
      </Typography>
    </Grid>
  );
};

export default Invite;
