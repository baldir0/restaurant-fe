import { SearchIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useMap } from "react-leaflet";

export const GetLocationController = () => {
  const parentMap = useMap();

  return (
    <IconButton
      colorScheme="orange"
      aria-label="Current-Location"
      onClick={() => {
        parentMap.locate();
        console.log("Localizing...");
      }}
      bottom={0}
      left={0}
      position={"absolute"}
      margin={"5px"}
      zIndex={1000}
      icon={<SearchIcon />
    }
    ></IconButton>
  );
};
