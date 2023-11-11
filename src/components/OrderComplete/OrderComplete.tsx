import { Button, Container, Divider, Flex, Text } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Link, useParams } from "react-router-dom";
import { ExtraLargeText } from "../Common/Text/ExtraLargeText";
import { LinkButton } from "../Common/Buttons/LinkButton";

export const OrderComplete = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { address } = {
    address: "Ul. Konfartego 44 Warszawa",
  };
  //fetch order data with orderId
  orderId;

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
          YOUR ORDER WILL BE SOON READY READY FOR PICKUP{" "}
        </ExtraLargeText>
        <Text color={"gray.400"} fontSize={"1.25rem"}>
          You can pickup your order at {address}
        </Text>
        <Divider />
        <LinkButton to="/map">
          GetStarted <ArrowRightIcon />
        </LinkButton>
      </Container>
    </Flex>
  );
};
