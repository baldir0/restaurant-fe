import { useMap } from "react-leaflet";

export const useCurrentLocation = async () => {
  const map = useMap();
  map.locate({enableHighAccuracy: true});
} 