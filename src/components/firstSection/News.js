import React, { useContext } from "react";
import { NewsContext } from "../../api/NewsContext";

import { CardContent, Grid } from "@material-ui/core";
import useStyles from "../../hooks/useStyles";
import NewsItem from "./NewsItem";

const News = () => {
  const news = useContext(NewsContext);
  const { newsCardContent } = useStyles();

  return (
    <CardContent className={newsCardContent}>
      <Grid container>
        {news.slice(0, 8).map((el) => {
          return (
            <Grid item xs={6} key={el.id}>
              <NewsItem news={el} />
            </Grid>
          );
        })}
      </Grid>
    </CardContent>
  );
};
export default News;
