import { Box } from "@chakra-ui/react";
import { MenuBarElement } from "../MenuBarElement/MenuBarElement";

import "./MenuBarBottom.css";
import { useState } from "react";

export const MenuBarBottom = () => {
  const [isLogged, setIsLogged] = useState<boolean>(true);

  return (
    <Box className="menu__top">
      <MenuBarElement path="/addRestaurant/form" text="Add Restaurant" iconSrc="/icons/add-circle.icon.svg"/>
      {isLogged && <MenuBarElement path="/user" text="Profile" iconSrc="/icons/user.icon.svg"/>}
      {!isLogged && <MenuBarElement path="/login" text="Login" iconSrc="/icons/login.icon.svg"/>}
    </Box>
  );
};
