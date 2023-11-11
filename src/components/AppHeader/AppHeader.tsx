import { Link } from "react-router-dom";

import { MenuDrawer } from "../MenuDrawer/MenuDrawer";
import { Header } from "../Common/ElementHeader/Header";
import { OpenMenuButton } from "../Common/Buttons/OpenMenuButton";
import { useDisclosure, Text } from "@chakra-ui/react";

export const AppHeader = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (<>
    <Header flexDirection={"row-reverse"}>
      <Link to="/home"><Text as="b">Mega</Text>Orders</Link>
      <OpenMenuButton onClick={onOpen}/>
    </Header>
    <MenuDrawer isOpen={isOpen} onClose={onClose}/>
  </>
  );
};
