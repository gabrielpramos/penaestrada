import React from "react";
import BottomNavBar from "../components/bottom-navbar/BottomNavBar";
import MapView from "../components/map-view/MapView";
import AutoCompleteMap from "../components/map-view/AutoCompleteMap";
import { slide as Menu } from 'react-burger-menu'

const HomePage = (props) => {
  return (
    <>
      <Menu>
        <a id="home" className="menu-item">Home</a>
        <a id="about" className="menu-item">About</a>
        <a id="contact" className="menu-item">Contact</a>
      </Menu>

      <MapView/>

      <AutoCompleteMap/>

      <BottomNavBar {...props} />
    </>
  );
};

export default HomePage;
