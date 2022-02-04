import React from "react";
import userImg from '../../img/user-1.png';
// import PrimaryCardHoc from "./PrimaryCardHOC";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Container,
  Link,
  Avatar,
  Button
} from "@material-ui/core";
import { HeadsetOutlined, ArrowForward } from "@material-ui/icons";
import useStyles from "../../hooks/useStyles";

const CustomerSupport = () => {
  const {
    cardHeaderFirst,
    cardHeaderIcon,
    contactButton,
    cardContent,
    avatar,
    customerSupportText,
    CustomerSupportCard
  } = useStyles();

  return (
    <Container>
      <Card elevation={3} className={CustomerSupportCard}>
        <Grid container>
          <Grid item xs>
            <div className={cardHeaderFirst}>
              <HeadsetOutlined className={cardHeaderIcon} />
              <Typography variant="h5"><b>Customer Support</b></Typography>
            </div>
          </Grid>
        </Grid>
        <CardContent className={cardContent}>
        <Grid 
        container
        alignItems="center">
            <Grid item>
            <Avatar src={userImg}/>
            </Grid>
            <Grid item>
            <Typography variant="h6" color="text" className={customerSupportText}>
          Simone is here to help you.
          </Typography>
            </Grid>
        </Grid>
        </CardContent>
        <CardActions>
          <Button style={{backgroundColor: '#21B8F9', color: '#ffffff'}} className={contactButton} variant="contained">Contact us</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

// const SearchPosts = HOC(Posts, 'posts')

export default CustomerSupport;
