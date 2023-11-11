import { Container, Flex } from "@chakra-ui/react"
import { AddProductForm } from "../Forms/AddProduct/AddProductForm"
import { AddProductFields } from "../../types/AddProductFields"
import { useParams } from "react-router-dom"


export const AddProduct = () => {
  const {id} = useParams<string>()

  const handleSubmit = async (value  : AddProductFields) => {
    console.log("Add Product")
    console.log(id)
    console.log(value)

    const formData = new FormData();

    if (!id) {
      throw new Error('Unknown Restaurant');
    }

    formData.append('name', value.name);
    formData.append('price', value.price);
    formData.append('restaurantId', String(id));

    const file = value.image as File;
    if (file) {
      formData.append('image', file);
    }

    await fetch('http://localhost:3001/products', {
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
        <AddProductForm onSubmit={handleSubmit}/>
      </Container>
    </Flex>
  )
}