import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { Box, Flex } from "@chakra-ui/react";
import { MapLogic } from "./MapLogic";
import { GetLocationController } from "./MapControlers/GetLocation.controler";
import { SearchBox } from "../Common/SearchBox/SearchBox";
import { SyntheticEvent, useEffect, useState } from "react";
import { LatLngExpression } from "leaflet";
import { getLocation } from "../../utils/geolocation";
import { RestaurantMapEntity } from "../../../../restaurant-be/types/restaurant";
import { SingleRestaurant } from "./SingleRestaurant";

export const RestaurantMap = () => {
  const [searchString, setSearchString] = useState<string>("");
  const [position, setPosition] = useState<LatLngExpression>([
    51.2519214, 18.8549883, 6.92,
  ]);
  const [restaurantPoints, setRestaurantPoints] = useState<
    RestaurantMapEntity[]
  >([]);

  useEffect(() => {
    (async () => {
      const mapRawData = await fetch("http://localhost:3001/restaurant/map");
      const mapData = await mapRawData.json();
      setRestaurantPoints(mapData);
    })();
  }, []);

  const handleSearch = (e: SyntheticEvent) => {
    e.preventDefault();
    (async () => {
      const res = await getLocation(searchString);
      setPosition([res.lat, res.lon]);
    })();
  };

  return (
    <Box as="div" height={"calc(100vh - 60px)"}>
      <MapContainer
        center={position}
        zoom={10}
        scrollWheelZoom={true}
        style={{
          height: "100%",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapLogic position={position} setPosition={setPosition} />
        {restaurantPoints.map((point) => {
          console.log(point.id)
          console.log(restaurantPoints.length)
          return (
            <Marker position={[point.lat, point.lon]} key={"marker-" + point.id}>
              <SingleRestaurant id={point.id} title={point.name} img={point.image} />
            </Marker>
          );
        })}

        <Flex
          flexDir={"row"}
          bottom={0}
          left={0}
          position={"absolute"}
          margin={"5px"}
          zIndex={1000}
          alignItems={"center"}
          gap={"1rem"}
        >
          <GetLocationController position={position} />
          <SearchBox
            searchString={searchString}
            placeholder={"Enter adrress..."}
            onChange={(e) => setSearchString(e.target.value)}
            onSubmit={handleSearch}
            w="auto"
            background="white"
          />
        </Flex>
      </MapContainer>
    </Box>
  );
};
