import React from "react";
import userImg from "../../img/user-1.png";
import { CardContent, Typography, Grid, Avatar } from "@material-ui/core";
import useStyles from "../../hooks/useStyles";

const CustomerSupport = () => {
  const { cardContent, customerSupportText } = useStyles();

  return (
    <CardContent className={cardContent}>
      <Grid container alignItems="center">
        <Grid item>
          <Avatar src={userImg} />
        </Grid>
        <Grid item>
          <Typography variant="h6" color="text" className={customerSupportText}>
            Simone is here to help you.
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default CustomerSupport;
