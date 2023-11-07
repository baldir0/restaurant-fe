import {
  Box,
  Divider,
  Flex,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RateForm } from "../../RatingComponent/RateForm";
import { ListElementImage } from "../../Common/ListElements/ListElementImage";

interface Props {
  targetId: string;
  src: string;
  alt?: string;
}

export const RestaurantListElement = (props: Props) => {
  return (
    <ListItem
      transition=".2s"
      padding={"5px"}
      borderRadius="1rem"
      display={"flex"}
      gap={"1rem"}
      _hover={{
        outline: "1px solid",
        outlineColor: "orange.300",
        transition: ".2s",
      }}
    >
      <Flex
        as={Link}
        to={`/restaurants/${props.targetId}`}
        flexGrow={1}
        gap={".5rem"}
      >
        <ListElementImage src={props.src} alt={props.alt} />
        <Flex direction={"column"} flexGrow={1} p={"5px"}>
          <Text as="p" fontSize={"2.25rem"} color={"gray.800"}>
            Title
          </Text>
          <Divider />
          <Text as="p" fontSize={"1rem"} color={"gray.600"}>
            Description
          </Text>
        </Flex>
        <Box alignSelf={"center"}>
          <Text as="p" fontSize={"1rem"}>
            Milcz, ul. Konfartego 42
          </Text>
        </Box>
        <Box alignSelf={"center"}>
          <Flex direction={"column"}>
            <Text as="p" fontSize={"1rem"}>
              Open:{" "}
            </Text>
            <List>
              <ListItem>Mon. 08:00 - 17:00</ListItem>
              <ListItem>Tue. 08:00 - 17:00</ListItem>
              <ListItem>Wed. 08:00 - 17:00</ListItem>
              <ListItem>Thu. 08:00 - 17:00</ListItem>
              <ListItem>Fri. 08:00 - 17:00</ListItem>
            </List>
          </Flex>
        </Box>
      </Flex>
      <Box alignSelf={"center"} flexGrow={0} p={"15px"}>
        <RateForm targetId="" baseRate={2.52} />
      </Box>
    </ListItem>
  );
};
