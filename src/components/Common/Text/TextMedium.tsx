import { Text } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/childrenProps";

export const TextMedium = ({ children }: ChildrenProps) => {
  return (
    <Text fontSize={"medium"} color={"gray.600"}>
      {children}
    </Text>
  );
};