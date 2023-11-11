import { List } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/childrenProps";

export const LargeList = ({ children }: ChildrenProps) => {
  return (
    <List
      w="full"
      h="calc(100vh - 200px)"
      border={"1px solid"}
      borderColor={"gray.200"}
      borderRadius={"1rem"}
      p={"10px"}
      overflow={"auto"}
    >
      {children}
    </List>
  );
};
