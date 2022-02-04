import {
  Container,
  Card,
  Grid,
  Typography,
  Link,
  Button,
} from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import { CardActions } from "@mui/material";
import React from "react";
import useStyles from "../../hooks/useStyles";
import iphone from "../../img/iphone.PNG";
import test from "../../img/test.PNG";
import google from "../../img/google.PNG";

const Exclusives = () => {
  const {
    ExclusiveImg,
    ExclusivesContainer,
    ExclusiveLink,
    ExclusiveLinkIcon,
    ExclusivesIcon,
  } = useStyles();

  return (
    <Container>
      <Card elevation={3} className={ExclusivesContainer}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6">
              Sell your products on your exclusive APP published on the stores
            </Typography>
            <Grid item>
              <Link className={ExclusiveLink} href="#">
                <Typography>Show more</Typography>
                <ArrowForward className={ExclusiveLinkIcon} />
              </Link>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <img className={ExclusiveImg} src={iphone} />
          </Grid>
        </Grid>
        <CardActions>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button style={{backgroundColor: '#000'}} className={ExclusivesIcon} variant="contained">
              <img style={{ width: 150, height: 35 }} src={test} />
            </Button>
            <Button style={{backgroundColor: '#000'}} className={ExclusivesIcon} variant="contained">
              <img style={{ width: 150, height: 35 }} src={google} />
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Exclusives;
