import React from "react";
import {
  Container,
  Card,
  Grid,
  Typography,
  Link,
  Button,
  Box,
} from "@material-ui/core";

import { ArrowForward } from "@material-ui/icons";
import { CardActions } from "@mui/material";
import useStyles from "../../hooks/useStyles";
import iphone from "../../img/iphone.PNG";
import test from "../../img/test.PNG";
import google from "../../img/google.PNG";

const Exclusive = () => {
  const {
    ExclusiveImg,
    ExclusivesContainer,
    ExclusiveLink,
    ExclusiveLinkIcon,
    ExclusivesIcon,
    small,
    Extrasmall,
  } = useStyles();

  return (
    <Container>
      <Card className={ExclusivesContainer}>
        <Grid container>
          <Grid
            container
            xs={6}
            direction="column"
            justifyContent='space-between'
          >
            <Box>
              <Typography variant="h6">
                Sell your products on your exclusive APP published on the stores
              </Typography>
              <Link className={ExclusiveLink} href="#">
                <Typography>Show more</Typography>
                <ArrowForward className={ExclusiveLinkIcon} />
              </Link>
            </Box>
            <Box>
              <Button
                style={{ backgroundColor: "#000" }}
                className={ExclusivesIcon}
                variant="contained"
              >
                <img style={{ width: 150, height: 35 }} src={test} />
              </Button>
            </Box>
          </Grid>
          <Grid container justifyContent="flex-end" xs={6}>
            <Box>
              <img className={ExclusiveImg} src={iphone} />
            </Box>
            <Box>
              <Button
                style={{ backgroundColor: "#000" }}
                className={ExclusivesIcon}
                variant="contained"
              >
                <img style={{ width: 150, height: 35 }} src={google} />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Exclusive;
