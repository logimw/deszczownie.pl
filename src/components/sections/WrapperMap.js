import React, { useEffect, useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

import { MapStyles } from "./Map.styles";

const render = status => {
  return <h1>{status}</h1>;
};

const Map = ({ onClick, onIdle, children, style, ...options }) => {
  const ref = React.useRef(null);
  const [map, setMap] = useState();
  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  useEffect(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  useEffect(() => {
    if (map) {
      ["click", "idle"].forEach(eventName =>
        google.maps.event.clearListeners(map, eventName),
      );

      if (onClick) {
        map.addListener("click", onClick);
      }

      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);

  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

const WrapperMap = () => {
  const [clicks, setClicks] = useState([]);
  const [zoom, setZoom] = useState(3); // initial zoom
  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  });
  const onClick = e => {
    // avoid directly mutating state
    setClicks([...clicks, e.latLng]);
  };

  const onIdle = m => {
    console.log("onIdle");
    setZoom(m.getZoom());
    setCenter(m.getCenter().toJSON());
  };
  return (
    <MapStyles>
      <Wrapper
        apiKey={"AIzaSyCVrIXwyvHnfMFuQ6ypb_CIJLyadjlX908"}
        render={render}
      >
        <Map
          style={{ height: "100%" }}
          center={center}
          onClick={onClick}
          onIdle={onIdle}
          zoom={zoom}
        />
      </Wrapper>
    </MapStyles>
  );
};

export default WrapperMap;
