import { ListItem } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/childrenProps";

export const SmallListItem = ({ children }: ChildrenProps) => {
  return <ListItem>{children}</ListItem>;
};
