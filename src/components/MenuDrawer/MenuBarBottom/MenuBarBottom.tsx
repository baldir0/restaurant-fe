import { Flex } from "@chakra-ui/react";
import { MenuBarElement } from "../MenuBarElement/MenuBarElement";

import { useState } from "react";

export const MenuBarBottom = () => {
  const [isLogged, setIsLogged] = useState<boolean>(true);

  return (
    <Flex
      flexDirection={"column"}
      padding={"30px 10px"}
      gap={"15px"}
      textDecoration={"none"}
    >
      <MenuBarElement
        path="/restaurant/addNew"
        text="Add Restaurant"
        iconSrc="/icons/add-circle.icon.svg"
      />
      {isLogged && (
        <MenuBarElement
          path="/user"
          text="Profile"
          iconSrc="/icons/user.icon.svg"
        />
      )}
      {!isLogged && (
        <MenuBarElement
          path="/login"
          text="Login"
          iconSrc="/icons/login.icon.svg"
        />
      )}
    </Flex>
  );
};
