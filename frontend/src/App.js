import React from "react";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Room, Star } from "@material-ui/icons";
import "./app.css";

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
          offsetTop={-10}
        >
          <Room style={{ fontSize: viewport.zoom * 3, color: "slateblue" }} />
        </Marker>
        <Popup
          latitude={48.428293}
          longitude={-123.372001}
          closeButton={true}
          closeOnClick={false}
          // onClose={() => togglePopup(false)}
          anchor="left"
        >
          <div className="card">
            <label>Place</label>
            <h4 className="place">Johnson St. Bridge</h4>
            <label>Review</label>
            <p className="desc">Cool bridge</p>
            <label>Rating</label>
            <div className="stars">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <label>Info</label>
            <span className="username">
              Created by <b>Jon </b>
            </span>
            <span className="date">5 minutes ago</span>
          </div>
        </Popup>
      </ReactMapGL>
    </div>
  );
};

export default App;
