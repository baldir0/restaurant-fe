import { LatLngExpression } from "leaflet";
import { Marker, useMapEvents } from "react-leaflet";
import { userMarkerIcon } from "./CustomIcons/UserMarkerIcon";

interface Props {
  position: LatLngExpression,
  setPosition: (val: LatLngExpression) => void;
}

export const MapLogic = (props : Props) : JSX.Element => {
  const map = useMapEvents({
    locationfound(location) {
      map.flyTo(location.latlng, map.getZoom());
      props.setPosition(location.latlng);
    },
  });

  return (<Marker position={props.position} icon={userMarkerIcon}/>)
};
