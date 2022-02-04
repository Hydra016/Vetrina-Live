import React, { useState } from "react";
import { MenuItem, Select, Typography, List, ListItem, Drawer, ListItemIcon, ListItemText, IconButton } from "@material-ui/core";
import { Menu, HelpOutline, ShareOutlined, VisibilityOutlined } from '@material-ui/icons';
import useMenuItems from '../hooks/useLinks';
import MenuLink from './MenuItem'
import useStyles from '../hooks/useStyles';

const Sidebar = () => {
  const {
    ListItems,
    headingText,
    listItemText,
    dropdown,
    extendedMenu,
    links,
    subheading,
    heading,
    drawer,
    drawerPaper,
    dropdownHeading,
    mainMenu
  } = useStyles();
  const items = useMenuItems();
  const [value, setValue] = useState("FenohStore");

  return (
    <>
      <div className={heading}>
        <Typography className={headingText} variant="h5">
          vetrina<span className={subheading}>live</span>
        </Typography>
      </div>

      <List className={ListItems}>
        <div className={mainMenu}>
          {items.map((item) => {
            return <MenuLink key={item.id} item={item} />;
          })}
        </div>
        <div className={extendedMenu}>
          <ListItem className={links} button>
            <ListItemIcon>
              <HelpOutline />
            </ListItemIcon>
            <ListItemText className={listItemText} primary="Customer Support" />
          </ListItem>

          <ListItem className={links} button>
            <ListItemIcon>
              <ShareOutlined />
            </ListItemIcon>
            <ListItemText className={listItemText} primary="Share your shop" />
          </ListItem>

          <ListItem className={links} button>
            <ListItemIcon>
              <VisibilityOutlined />
            </ListItemIcon>
            <ListItemText className={listItemText} primary="View you shop" />
          </ListItem>
        </div>
      </List>

      <Typography className={dropdownHeading}>Select your shop</Typography>
      <Select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        className={dropdown}
      >
        <MenuItem value="FenohStore">Fenoh Store</MenuItem>
        <MenuItem value="ThriftStore">Thrift Store</MenuItem>
      </Select>
      </>
  );
};

export default Sidebar;