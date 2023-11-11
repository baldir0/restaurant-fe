import { Button } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/childrenProps";
import { Link } from "react-router-dom";

interface LinkButtonProps extends ChildrenProps {
  to: string;
}

export const LinkButton = ({ children, to }: LinkButtonProps) => {
  return (
    <Button as={Link} colorScheme="orange" to={to} fontSize={"1.5rem"} p={"1.5rem"}>
      {children}
    </Button>
  );
};
