import { Container, Flex } from "@chakra-ui/react"
import { AddRestaurantForm } from "../Forms/AddRestaurant/AddRestaurantForm"
import { AddRestaurantFields } from "../../types/AddRestaurantFields"
import { getLocation } from "../../../src/utils/geolocation"

export const AddRestaurant = () => {
  
  const handleSubmit = async (value : AddRestaurantFields) => {
    const {lat, lon} = await getLocation(value.address);

    const formData = new FormData();

    formData.append('name', value.name);
    formData.append('lat', String(lat));
    formData.append('lon', String(lon));
    formData.append('address', value.address);
    formData.append('description', value.description);
    formData.append('openHours', JSON.stringify(value.openHours));

    const file = value.image as File;
    if (file) {
      formData.append('image', file);
    }
    

    await fetch('http://localhost:3001/restaurant', {
      method: "POST",
      body: formData
    })
  }

  return (
    <Flex minH="calc(100vh - 60px)" alignItems={"center"} overflow={"auto"}>
      <Container
        border={"1px"}
        borderColor={"gray.200"}
        maxH={"50rem"}
        borderRadius={"1rem"}
        textAlign={"center"}
        maxWidth={"60rem"}
        p={"1rem"}
        overflow={"auto"}
      >
        <AddRestaurantForm onSubmit={handleSubmit}/>
      </Container>
    </Flex>
  )
}