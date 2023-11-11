import { Box, Divider, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RateForm } from "../../RatingComponent/RateForm";
import { TextBig } from "../../Common/Text/TextBig";
import { TextMedium } from "../../Common/Text/TextMedium";
import { HoverListItem } from "../../Common/List/LargeListItem";
import { ListItemImage } from "../../Common/List/ListItemImage";
import { SmallList } from "../../Common/List/SmallList";
import { RestaurantEntity } from "@types";

interface Props {
  data: RestaurantEntity;
  img: Buffer;
}



export const RestaurantListItem = (props: Props) => {
  const base64String = btoa(String.fromCharCode(...new Uint8Array(props.img)));
  console.log(base64String)
  return (
    <HoverListItem>
      <Flex
        as={Link}
        to={`/restaurant/${props.data.id}`}
        flexGrow={1}
        gap={".5rem"}
      >
        <ListItemImage src={`data:image/png;base64, ${props.img}`} alt={props.data.name} />
        <Flex direction={"column"} flexGrow={1} p={"5px"}>
          <TextBig>{props.data.name}</TextBig>
          <Divider />
          <TextMedium>{props.data.description}</TextMedium>
        </Flex>
        <Box alignSelf={"center"}>
          <TextMedium>{props.data.address}</TextMedium>
        </Box>
        <Box alignSelf={"center"}>
          <Flex direction={"column"}>
            <TextMedium>Open:</TextMedium>
            <SmallList>
              <TextMedium>
                {/* {Object.entries(data).map(([key, value]:[string, OpenHoursTime]) => {
                  return <SmallListItem>{key} {value.from} - {value.to}</SmallListItem>
                })} */}
              </TextMedium>
            </SmallList>
          </Flex>
        </Box>
      </Flex>
      <Box alignSelf={"center"} flexGrow={0} p={"15px"}>
        <RateForm targetId="" baseRate={props.data.rating} />
      </Box>
    </HoverListItem>
  );
};
