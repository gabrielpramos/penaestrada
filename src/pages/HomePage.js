import React from "react";

import BottomNavBar from "../components/bottom-navbar/BottomNavBar";
import MapView from "../components/map-view/MapView";

const HomePage = (props) => {
  return (
    <>
      <MapView></MapView>
      <BottomNavBar {...props} />
    </>
  );
};

export default HomePage;
