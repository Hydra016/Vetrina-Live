import React, { useState } from "react";
// import PrimaryCardHoc from "./PrimaryCardHOC";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Grid,
  Container,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Link,
} from "@material-ui/core";
import { VisibilityOutlined, ArrowForward } from "@material-ui/icons";
import useStyles from "../../hooks/useStyles";

const PrimaryCardVisitors = () => {
  const {
    cardHeaderFirst,
    primaryCard,
    cardHeaderIcon,
    cardHeaderSecond,
    inputLabel,
    cardFooter,
    cardFooterLink,
    cardContent,
    cardHeaderSelect,
    HOCCardHeading
  } = useStyles();

  const [value, setValue] = useState("thisMonth");

  return (
    <Container>
      <Card elevation={3} className={primaryCard}>
        <Grid container>
          <Grid item xs>
            <div className={cardHeaderFirst}>
              <VisibilityOutlined className={cardHeaderIcon} />
              <Typography variant="h5"><b>Visitors</b></Typography>
            </div>
          </Grid>
          <Grid item>
            <div className={cardHeaderSecond}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Age"
                className={cardHeaderSelect}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              >
                <MenuItem value="thisMonth">This month</MenuItem>
                <MenuItem value="previousMonth">Previous month</MenuItem>
                <MenuItem value="nextMonth">Next month</MenuItem>
              </Select>
            </div>
          </Grid>
        </Grid>
        <CardContent className={cardContent}>
          <Typography variant="h2" color="text">
            1824
          </Typography>
        </CardContent>
        <CardActions className={cardFooter}>
          <Link className={cardFooterLink} href="#">
            <Typography>Do you want more visits? Contact us!</Typography>
            <ArrowForward />
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
};

// const SearchPosts = HOC(Posts, 'posts')

export default PrimaryCardVisitors;
