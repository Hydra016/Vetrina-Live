import React from "react";
import { CardContent, Typography, Grid } from "@material-ui/core";
import useStyles from "../../hooks/useStyles";

const PrimaryCardVisitors = () => {
  const { cardContent, OrdersDetails } = useStyles();

  return (
    <CardContent className={cardContent}>
      <Grid container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h6" className={OrdersDetails}>
              Orders received:
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              <b>156</b>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h6" className={OrdersDetails}>
              Earnings:
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              <b>€ 1893,24</b>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default PrimaryCardVisitors;
