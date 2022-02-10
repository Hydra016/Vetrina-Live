import React, { useState } from "react";
import {
  Container,
  Card,
  Grid,
  Typography,
  Link,
  CardActions,
  MenuItem,
  Select,
} from "@material-ui/core";
import { ArrowForward, LaunchOutlined } from "@material-ui/icons";
import useStyles from "../../hooks/useStyles";

const showLink = (props) => {
  if (props === "show") {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link
          style={{
            display: "flex",
            color: "#21B8F9",
            textDecoration: "underline",
            fontFamily: "Noto Sans",
            width: "100%",
          }}
          href="#"
        >
          <Typography>Visit our blog</Typography>
          <LaunchOutlined style={{ marginLeft: 10 }} />
        </Link>
      </div>
    );
  } else {
    props = null;
  }
};

const showSelect = (props, value, setValue) => {
  if (props === "select") {
    return (
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        label="Age"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <MenuItem value="thisMonth">This month</MenuItem>
        <MenuItem value="previousMonth">Previous month</MenuItem>
        <MenuItem value="nextMonth">Next month</MenuItem>
      </Select>
    );
  } else {
    props = null;
  }
};

const showFooterIcon = (props) => {
  if (props === "show") {
    return <ArrowForward style={{color: props.color}} className={props.footerLinkIcon} />;
  } else {
    props = null;
  }
};

const PrimaryCard = (props) => {
  const { cardHeaderFirst, cardFooter, cardheading, cardContent } = useStyles();
  const [value, setValue] = useState("thisMonth");
  return (
    <Container>
      <Card
        elevation={3}
        className={props.className}
        style={{ height: props.height }}
      >
        <Grid container justifyContent="space-between">
          <Grid item>
            <div className={cardHeaderFirst}>
              {props.icon}
              <Typography className={cardheading} variant="h5">
                <b>{props.heading}</b>
              </Typography>
            </div>
          </Grid>
          <Grid item>
            {showSelect(props.select, value, setValue)}
            {showLink(props.headerLink)}
          </Grid>
        </Grid>
        <React.Fragment className={cardContent}>
        {props.content}
        </React.Fragment>
        <CardActions className={cardFooter}>
          <Link className={props.footerLink} href="#">
            <Typography>{props.footer}</Typography>
            {showFooterIcon(props.showIcon)}
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
};

export default PrimaryCard;
