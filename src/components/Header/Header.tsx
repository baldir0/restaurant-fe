import { Link } from "react-router-dom";

import "./Header.css"
import { Flex, IconButton, Text, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { MenuDrawer } from "../MenuDrawer/MenuDrawer";

export const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()


  return (<>
    <Flex
      bg="orange.400"
      height={'60px'}
      color={'#FFF'}
      fontSize={'3xl'}
      p={'5px 10px'}
      flexDirection={"row-reverse"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Link to="/home"><Text as="b">Mega</Text>Orders</Link>
      <IconButton 
        aria-label="Open Menu"
        bg=""
        _hover={{
          background: "orange.500",
        }}
        icon={<HamburgerIcon boxSize={'2rem'} color={'#FFF'}
        onClick={onOpen} />}
      />
    </Flex>
    <MenuDrawer isOpen={isOpen} onClose={onClose}/>
  </>
  );
};
