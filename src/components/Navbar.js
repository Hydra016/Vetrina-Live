import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { FlashOn } from '@material-ui/icons';
import useStyles from '../hooks/useStyles';

const Navbar = () => {
    const { appBar, toolbar, root, dashboard } = useStyles()

    return (
        <AppBar elevation={0} className={appBar}>
          <Toolbar className={toolbar}>
            <Typography className={dashboard}>Dashboard</Typography>
            <div className={root}>
              <FlashOn />
              <Typography>What's new</Typography>
            </div>
          </Toolbar>
        </AppBar>
    )
}

export default Navbar;