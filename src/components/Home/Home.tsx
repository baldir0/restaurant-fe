import {
  Button,
  Container,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/react";
import "./Home.css";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Flex minH="calc(100vh - 60px)" alignItems={"center"}>
      <Container
        border={"1px"}
        borderColor={"gray.200"}
        borderRadius={"1rem"}
        textAlign={"center"}
        maxWidth={"60rem"}
        p={"1rem"}
      >
        <Text
          as={"p"}
          fontSize={"3rem"}
          maxWidth={"60rem"}
          textAlign={"center"}
          color={"grey.800"}
          fontWeight={800}
        >
          ORDER FOOD FROM VARIOUS PLACES EASY WITH{" "}
          <Text as="span" color={"orange.400"} fontWeight={"bold"}>
            MEGA
          </Text>
          ORDERS!
        </Text>
        <Text color={"gray.400"} fontSize={"1.25rem"}>
          <Text as="span" color={"orange.400"} fontWeight={"bold"}>
            MEGA
          </Text>
          Orders is place where you can find restuarants in your local, rate
          them and order food easily.
        </Text>
        <Divider />
        <Link to="/map">
          <Button
            colorScheme="orange"
            rightIcon={<ArrowRightIcon />}
            size={"lg"}
            m={"5px"}
          >
            Get Started!
          </Button>
        </Link>
      </Container>
    </Flex>
  );
};
