import { ViewIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { LatLngExpression } from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface Props {
  position: LatLngExpression;
}

export const GetLocationController = ({ position }: Props) => {
  const parentMap = useMap();

  useEffect(() => {
    parentMap.locate({ enableHighAccuracy: true });
  }, []);

  useEffect(() => {
    parentMap.flyTo(position);
  }, [position]);

  return (
    <IconButton
      colorScheme="orange"
      aria-label="Current-Location"
      onClick={() => {
        parentMap.locate({ enableHighAccuracy: true });
      }}
      icon={<ViewIcon />}
    ></IconButton>
  );
};
