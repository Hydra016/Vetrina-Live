import React from "react";

import { CardContent, Typography } from "@material-ui/core";
import useStyles from "../../hooks/useStyles";

const PrimaryCardVisitors = () => {
  const { cardContent } = useStyles();

  return (
    <CardContent className={cardContent}>
      <Typography variant="h2" color="text">
        1824
      </Typography>
    </CardContent>
  );
};

// const SearchPosts = HOC(Posts, 'posts')

export default PrimaryCardVisitors;
