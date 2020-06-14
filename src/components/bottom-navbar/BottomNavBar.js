import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MapIcon from "@material-ui/icons/Map";
import ChatIcon from "@material-ui/icons/Chat";

import "./BottomNavBar.css";

const BottomNavBar = ({ history }) => {
  const [value, setValue] = useState();
  const classes = makeStyles({
    root: {
      width: 500,
    },
  })();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Saúde"
        icon={<FavoriteIcon className="icon" />}
      />
      <BottomNavigationAction label="Mapa" icon={<MapIcon />} />
      <BottomNavigationAction label="Conversas" icon={<ChatIcon />} />
    </BottomNavigation>
  );
};

export default BottomNavBar;
