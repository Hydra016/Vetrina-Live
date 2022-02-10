import React from "react";
import { Grid, Typography } from "@material-ui/core";

const Configure = () => {
  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <Typography style={{ color: "#FFA26B" }} variant="h4" color="text">
            45%
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            style={{ color: "#FFA26B", marginBottom: 15 }}
            variant="h6"
            color="text"
          >
            completed
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Typography variant="h6" color="text">
          Complete all the steps to have a complete shop to best present to your
          customers.
        </Typography>
      </Grid>
    </div>
  );
};

export default Configure;
