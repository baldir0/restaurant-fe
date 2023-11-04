import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

import { Box } from "@chakra-ui/react";
import { MapLogic } from "./MapLogic";
import { GetLocationButton } from "./GetLocation";

export const RestaurantMap = () => {
  return (
    <Box as="div" height={"calc(100vh - 60px)"}>
      <MapContainer
        center={[51.2519214, 18.8549883, 6.92]}
        zoom={6}
        scrollWheelZoom={true}
        style={{
          height: "100%",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapLogic />
        <GetLocationButton />
      </MapContainer>
    </Box>
  );
};

