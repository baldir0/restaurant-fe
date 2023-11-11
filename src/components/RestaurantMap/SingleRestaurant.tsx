import { Link, Image } from "@chakra-ui/react";
import { Link as routerLink } from "react-router-dom";
import { Popup } from "react-leaflet";
import { TextMedium } from "../Common/Text/TextMedium";

interface Props {
  id: string;
  title: string;
  img: string;
}

export const SingleRestaurant = (props: Props) => {
  return <Popup>
    <TextMedium>{props.title}</TextMedium>
    <Image src={props.img} alt="Restaurant Popout image" h="10rem" w="10rem"/>
    <Link as={routerLink} to={`/restaurant/${props.id}`}>Open Restaurant Card</Link>
  </Popup>;
};
