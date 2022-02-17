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

const Marker = options => {
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }
    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

const WrapperMap = () => {
  const API_KEY = process.env.GATSBY_MAP_API_KEY;
  const coords = {
    lat: 52.18796,
    lng: 17.32965,
  };
  const [zoom, setZoom] = useState(11); // initial zoom
  const [center, setCenter] = useState(coords);

  const onIdle = m => {
    setZoom(m.getZoom());
    setCenter(m.getCenter().toJSON());
  };
  return (
    <MapStyles>
      <Wrapper apiKey={API_KEY} render={render}>
        <Map
          style={{ height: "100%" }}
          center={center}
          onIdle={onIdle}
          zoom={zoom}
        >
          <Marker position={coords} />
        </Map>
      </Wrapper>
    </MapStyles>
  );
};

export default WrapperMap;
