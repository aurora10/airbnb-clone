//import React from "react";
import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import getCenter from "geolib/es/getCenter";
import Marker from "../components/Marker";

function MapMe1({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  //transform the search results resuts object into {latitude,longitude} format
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "600px",
    height: "max-height: 75%",

    center: { lat: center.latitude, lng: center.longitude },

    zoom: 11,
  });
  console.log(selectedLocation);
  return (
    <GoogleMapReact
      //mapContainerStyle={containerStyle}

      bootstrapURLKeys={{ key: process.env.google_maps_key }}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        // <div key={result.long}>
        <Marker
          onClick={() => setSelectedLocation(result.long)}
          lat={result.lat}
          lng={result.long}
          offsetLeft={-20}
          offsetTop={-10}
        />
        // </div>
      ))}
    </GoogleMapReact>
  );
}

export default MapMe1;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
