import React, { useEffect, useState } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `calc(100vh - 56px)` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(({ isMarkerShown, onMarkerClick }) => (
  <Map isMarkerShown={isMarkerShown} onMarkerClick={onMarkerClick} />
));

const Map = ({ isMarkerShown, onMarkerClick }) => {
  const [defaultCenter, setDefaultCenter] = useState({
    lat: 0,
    lng: 0,
  });

  navigator.geolocation.getCurrentPosition((position) => {
    setDefaultCenter({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  });

  return (
    <GoogleMap defaultZoom={8} defaultCenter={defaultCenter}>
      {isMarkerShown && (
        <Marker position={defaultCenter} onClick={onMarkerClick} />
      )}
    </GoogleMap>
  );
};

const MapView = () => {
  const [isMarkerShown, setIsMarkerShown] = useState(false);

  const delayedShowMarker = () => {
    setTimeout(() => {
      setIsMarkerShown(true);
    }, 3000);
  };

  const handleMarkerClick = () => {
    setIsMarkerShown(false);
    delayedShowMarker();
  };

  useEffect(() => {
    delayedShowMarker();
  }, []);

  return (
    <MyMapComponent
      isMarkerShown={isMarkerShown}
      onMarkerClick={handleMarkerClick}
    />
  );
};

export default MapView;
