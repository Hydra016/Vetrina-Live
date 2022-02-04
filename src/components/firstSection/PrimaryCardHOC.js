import React from "react";
import {
  Grid,
  Typography,
  MenuItem,
  Select,
  makeStyles
} from "@material-ui/core";
import { VisibilityOutlined } from "@mui/icons-material";

const useStyles = makeStyles((theme) => {
  return {
    
  }
})

const PrimaryCardHoc = (Wrapper, entity, icon) => {
  const {
    cardHeaderFirst,
    cardHeaderIcon,
    cardHeaderSecond,
    cardHeaderSelect,
  } = useStyles();

  return class extends React.component {
    state = {
      value: "thisMonth",
    };

    render() {
      return (
        <div>
          <Grid container>
            <Grid item xs>
              <div className={cardHeaderFirst}>
                <VisibilityOutlined className={cardHeaderIcon} />
                <Typography variant="h6">{entity}</Typography>
              </div>
            </Grid>
            <Grid item>
              <div className={cardHeaderSecond}>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Age"
                  className={cardHeaderSelect}
                  value={this.state.value}
                  onChange={(e) =>
                    this.setState({ ...this.state, value: e.target.value })
                  }
                >
                  <MenuItem value="thisMonth">This month</MenuItem>
                  <MenuItem value="previousMonth">Previous month</MenuItem>
                  <MenuItem value="nextMonth">Next month</MenuItem>
                </Select>
              </div>
            </Grid>
          </Grid>
          <Wrapper />
        </div>
      );
    }
  };
};

export default PrimaryCardHoc;
