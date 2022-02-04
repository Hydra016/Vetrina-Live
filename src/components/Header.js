import React from 'react';
import { Grid, Paper, Container, Typography, Link, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { LaunchOutlined } from '@material-ui/icons';
import useStyles from '../hooks/useStyles';

const Header = () => {
  const { container, welcome, link, link_text, headerDetails} = useStyles();

  return (
    <div className={container}>
      <div className={headerDetails}>
      <div>
        <Typography variant="h2" className={welcome}>
          Welcome Mario!
        </Typography>
      </div>
      <div>
        <Link variant="h6" className={link} href="#">
        <Typography className={link_text} variant="h6">
        app.vetrinalive.it/fenoh-store
        </Typography>
          <LaunchOutlined />
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Header; 