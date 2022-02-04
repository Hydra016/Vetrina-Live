import React, { useState } from "react";
import { Collapse, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import useStyles from '../hooks/useStyles';

const MenuLink = ({ item }) => {
  const [icon, setIcon] = useState(false);
  const [open, setOpen] = useState(false);
  const { nestedList, listItemText, nestedItems, links, notifications, listItemDiv } = useStyles();

  return (
    <div className={listItemDiv} >
      <ListItem
        className={links}
        button
        onClick={() => {
          setOpen(!open);
          setIcon(!icon);
        }}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText className={listItemText} primary={item.text} />
        {icon ? item.upArrow : item.downArrow}
        {item.notifications ? <span className={notifications} >{item.notifications}</span> : null}
      </ListItem>
      {item.data ? (
        <Collapse in={open}>
          <List className={nestedList} disablePadding>
            {item.data.map((el) => {
              return (
                <ListItem key={el.id} className={nestedItems} button>
                  <ListItemText>{el.text}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      ) : null}
    </div>
  );
};

export default MenuLink;