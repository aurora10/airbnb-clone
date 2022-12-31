import React, { useState } from "react";
//import Map from "react-map-gl";
import GoogleMapReact from "google-map-react";

const containerStyle = {
  width: "600px",
  height: "max-height: 75%",
  style: "border:0",
  loading: "lazy",
};

export default function () {
  const defaultProps = {
    center: {
      lat: 51.51558,
      lng: -0.125651,
    },
    zoom: 11,
  };

  return (
    <div style={containerStyle}>
      <GoogleMapReact
        mapContainerStyle={containerStyle}
        //process.env.google_maps_key
        //key: "AIzaSyD3M5yxJ5msM92ANB-nZGja550nJcfX0es"
        bootstrapURLKeys={{ key: process.env.google_maps_key }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
}

// https://github.com/visgl/react-map-gl - map wrapper for react
// https://account.mapbox.com/ - get custom map
// function MapMe() {
//   const [viewport, setViewport] = useState({
//     width: "100%",
//     height: "100%",
//     longitude: 37.7577,
//     latitude: -122.4376,
//     zoom: 3.5,
//   });
//   return (
//     //<Map
//     //mapStyle="mapbox://styles/aurora10/cl8su3lj600h015ll6iyukqyl"
//     //mapboxAccessToken={process.env.mabbox_key}
//     //mapboxAccessToken="AIzaSyD3M5yxJ5msM92ANB-nZGja550nJcfX0es"
//     //{...viewport}
//     //>

//     <iframe
//       {...viewport}
//       // width={600}
//       // height="max-height: 75%"
//       // style={{ border: 0 }}
//       loading="lazy"
//       AllowFullScreen
//       src="https://www.google.com/maps/embed/v1/view?zoom=10&center=51.5072%2C-0.1276&key=AIzaSyD3M5yxJ5msM92ANB-nZGja550nJcfX0es"
//     ></iframe>
//   );
// }

//export default MapMe;
