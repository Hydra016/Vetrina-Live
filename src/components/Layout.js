import React, { useState } from "react";
import { Typography, makeStyles, AppBar, Toolbar, ThemeProvider, createTheme, Drawer, Link, List} from "@material-ui/core";
import { NewReleasesOutlined, Menu } from '@material-ui/icons';
import Sidebar from './Sidebar';
import useStyles from '../hooks/useStyles';
import Navbar from './Navbar';
import { IconButton } from "@mui/material";
import classNames from "classnames";

const Layout = ({ children }) => {
  const { page, toolbar, dashboard, appBar, appBarShift, contentShift, root, drawer, drawerPaper, navbar_icon, navbar_link } = useStyles();
  const [ open, setOpen ] = useState(false)

  const theme = createTheme({
    palette: {
      primary: {
        main: '#CCCCCC',
      },
    },
    typography: {
      fontFamily: 'Noto Sans',
      fontWeightLight: 400,
      color: '#103B66'
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={root}>
        <Navbar />
        <AppBar elevation={0} className={classNames(appBar ,{[appBarShift] : open})}>
          <Toolbar className={toolbar}>
            <IconButton onClick={() => setOpen(!open)}>
            <Menu />
            </IconButton>
            <Typography className={dashboard}>Dashboard</Typography>
            <Link className={navbar_link} href='#'>
            <div className={root}>
              <NewReleasesOutlined className={navbar_icon} />
              <Typography>What's new</Typography>
            </div>
            </Link>
          </Toolbar>
        </AppBar>
        <Drawer
      // className={classNames(drawer, {[contentShift] : open})}
      className={drawer}
      open={open}
      onClose={() => setOpen(false)}
      variant="persistent"
      anchor="left"
      classes={{ paper: drawerPaper }}
      // open={open}
    >
        <Sidebar />
        </Drawer>

        <div className={classNames(page, {[contentShift] : open})}>
                <div className={toolbar}></div>
            {children}
            </div>
      </div>
      </ThemeProvider>
  );
};

export default Layout;