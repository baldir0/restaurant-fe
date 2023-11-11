import { Flex } from "@chakra-ui/react";
import { MenuBarElement } from "../MenuBarElement/MenuBarElement";

export const MenuNavigation = () => {
  return (
    <Flex
      flexDirection={"column"}
      padding={"30px 10px"}
      gap={"15px"}
      textDecoration={"none"}
    >
      <MenuBarElement path="/home" iconSrc="/icons/home.icon.svg" text="Home" />
      <MenuBarElement path="/map" iconSrc="/icons/map.icon.svg" text="Map" />
      <MenuBarElement path="/list" iconSrc="/icons/list.icon.svg" text="List" />
      <MenuBarElement
        path="/orders"
        iconSrc="/icons/shoppingCart.icon.svg"
        text="My Orders"
      />
    </Flex>
  );
};
