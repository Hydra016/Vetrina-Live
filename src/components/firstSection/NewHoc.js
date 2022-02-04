import React, { useState } from "react";
import {
  Grid,
  Typography,
  MenuItem,
  Select,
} from "@material-ui/core";
import MyStyles from "../../hooks/useStyles";
import { VisibilityOutlined } from "@mui/icons-material";


const NewHoc = (Component, entity) => {
    const [ value, setValue ] = useState('thisMonth')
    const { cardHeaderFirst, cardHeaderIcon, cardHeaderSelect, cardHeaderSecond } = MyStyles();
return (props) => {
    
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
              <Component />
        </div>
    )
}
}

export default NewHoc;

