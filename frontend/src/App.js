import React from "react";
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const App = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 48.4284,
    longitude: -123.3656,
    zoom: 12,
  });

  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <Marker
          latitude={48.428244}
          longitude={-123.371967}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <div>You are here</div>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default App;
