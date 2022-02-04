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
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import {
  VisibilityOutlined,
  ArrowForward,
  FormatListBulleted,
} from "@material-ui/icons";
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
    ordersList,
    ordersListItem,
    ordersListItemText,
    OrdersDetails
  } = useStyles();

  const [value, setValue] = useState("thisMonth");

  return (
    <Container>
      <Card elevation={3} className={primaryCard}>
        <Grid container>
          <Grid item xs>
            <div className={cardHeaderFirst}>
              <FormatListBulleted className={cardHeaderIcon} />
              <Typography variant="h5"><b>Orders</b></Typography>
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
          <Grid container>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h6" className={OrdersDetails}>Orders received:</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6"><b>156</b></Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h6" className={OrdersDetails}>Earnings:</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6"><b>€ 1893,24</b></Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={cardFooter}>
          <Link className={cardFooterLink} href="#">
            <Typography>10 free tips to increase your sales</Typography>
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
};

// const SearchPosts = HOC(Posts, 'posts')

export default PrimaryCardVisitors;
