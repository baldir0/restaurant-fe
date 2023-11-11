import { List } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/childrenProps";

export const SmallList = ({children} : ChildrenProps) => {
  return <List>
    {children}
  </List>
}