import { Container, Divider, Flex, Text } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { ExtraLargeText } from "../Common/Text/ExtraLargeText";
import { LinkButton } from "../Common/Buttons/LinkButton";

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
        <ExtraLargeText>
          ORDER FOOD FROM VARIOUS PLACES EASY WITH{" "}
          <Text as="span" color={"orange.400"} fontWeight={"bold"}>
            MEGA
          </Text>
          ORDERS!
        </ExtraLargeText>
        <Text color={"gray.400"} fontSize={"1.25rem"}>
          <Text as="span" color={"orange.400"} fontWeight={"bold"}>
            MEGA
          </Text>
          Orders is place where you can find restuarants in your local, rate
          them and order food easily.
        </Text>
        <Divider marginBottom={"1rem"}/>
        <LinkButton to="/map" >
          GetStarted<ArrowRightIcon paddingLeft={".4rem"}/>
        </LinkButton>
      </Container>
    </Flex>
  );
};
