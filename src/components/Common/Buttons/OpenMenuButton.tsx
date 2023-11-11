import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

interface Props {
  onClick: () => void;
}

export const OpenMenuButton = ({onClick} : Props) => {
  return (
    <IconButton
      aria-label="Open Menu"
      bg=""
      _hover={{
        background: "orange.500",
      }}
      icon={<HamburgerIcon boxSize={"2rem"} color={"#FFF"} onClick={onClick} />}
    />
  );
};
