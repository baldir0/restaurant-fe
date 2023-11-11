import { Text } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/childrenProps";

export const TextBig = ({ children }: ChildrenProps) => {
  return (
    <Text fontSize={"xx-large"} color={"gray.800"}>
      {children}
    </Text>
  );
};
