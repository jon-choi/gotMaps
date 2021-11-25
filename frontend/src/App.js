import React from "react";
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { Room } from "@material-ui/icons";

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
        mapStyle="mapbox://styles/choisya/ckwfak77lkkt814uq325449vu"
      >
        <Marker
          latitude={48.428293}
          longitude={-123.372001}
          offsetLeft={-20}
          offsetTop={-60}
        >
          <Room style={{ fontSize: viewport.zoom * 3, color: "slateblue" }} />
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default App;
