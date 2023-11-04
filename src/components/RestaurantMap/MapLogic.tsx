import { LatLngExpression } from "leaflet";
import { useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";
import { userMarkerIcon } from "./CustomIcons/UserMarkerIcon";

export const MapLogic = () => {
  const [position, setPosition] = useState<LatLngExpression>([
    51.2519214, 18.8549883, 6.92
  ]);
  const map = useMapEvents({
    locationfound(location) {
      map.flyTo(location.latlng, map.getZoom());
      setPosition(location.latlng);
    },
  });

  return (<Marker position={position} icon={userMarkerIcon}/>)
};
