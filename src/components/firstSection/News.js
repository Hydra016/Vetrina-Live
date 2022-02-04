import React, {useContext} from "react";
import {NewsContext} from '../../api/NewsContext';


import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Link,
} from "@material-ui/core";
import {
  LaunchOutlined,
  EventNoteOutlined,
} from "@material-ui/icons";
import useStyles from "../../hooks/useStyles";
import NewsItem from './NewsItem';

const News = () => {
  const news = useContext(NewsContext);

  const {
    cardHeaderFirst,
    newsCard,
    cardHeaderIcon,
    cardHeaderSecond,
    newsCardContent,
    FooterLinkSecondary,
    FooterLinkSecondaryIcon
  } = useStyles();

  return (
    <Container xs={12}>
      <Card elevation={3} className={newsCard}>
        <Grid container>
          <Grid item xs>
            <div className={cardHeaderFirst}>
              <EventNoteOutlined className={cardHeaderIcon} />
              <Typography variant="h5"><b>Latest news</b></Typography>
            </div>
          </Grid>
          <Grid item>
            <div className={cardHeaderSecond}>
            <Link className={FooterLinkSecondary} href="#">
            <Typography>Visit our blog</Typography>
            <LaunchOutlined className={FooterLinkSecondaryIcon} />
          </Link>
            </div>
          </Grid>
        </Grid>
        <CardContent className={newsCardContent}>
        <Grid container >
          {
            news.slice(0,8).map(el => {
              return (
                <Grid item xs={6}>
                <NewsItem news={el} />
                </Grid>
              )
            })
          }
        </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

// const SearchPosts = HOC(Posts, 'posts')

export default News;
