import React from "react";
import GoogleMapReact from "google-map-react";

const LocationComponent = ({ location }) => (
  <div
    style={{
      color: "white",
      background: "crimson",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {location}
  </div>
);

function simpleGmap() {
  const defaultProps = {
    center: {
      lat: -7.323861,
      lng: 112.741344,
    },
    zoom: 18,
  };

  return (
    <div style={{ height: "600px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <LocationComponent
          lat={-7.323861}
          lng={112.741344}
          location="My Location"
        />
      </GoogleMapReact>
    </div>
  );
}

export default simpleGmap;
