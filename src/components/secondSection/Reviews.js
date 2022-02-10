import React from "react";
import { Grid, Typography } from "@material-ui/core";

const Reviews = () => {
  return (
    <Grid container>
      <Typography variant="h6" color="text">
        Show us your love by leaving a{" "}
        <span style={{ color: "#00C48C" }}>positive</span> review on trust pilot
        and receive the extension of 50 additional products
      </Typography>
    </Grid>
  );
};

export default Reviews;
