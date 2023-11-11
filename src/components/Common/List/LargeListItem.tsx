import { ListItem } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/childrenProps";

export const HoverListItem = ({children}: ChildrenProps) => {
  return <ListItem
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
      {children}
    </ListItem>
}