import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";

import "./MenuBar.css";
import { MenuNavigation } from "./MenuNavigation/MenuNavigation";
import { MenuBarBottom } from "./MenuBarBottom/MenuBarBottom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuDrawer = ({ isOpen, onClose }: Props) => {

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent justifyContent={"space-between"}>
          <DrawerHeader>
            Menu
          </DrawerHeader>
          <DrawerBody>
            <MenuNavigation />
            <MenuBarBottom />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
