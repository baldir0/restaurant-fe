import { Button } from "@chakra-ui/react";

interface Props {
  active?: boolean;
  text: string | number;
  onClick?: () => void;
}

export const PaginationButton = ({ active = false, text, onClick }: Props) => {
  return (
    <Button colorScheme={active ? "orange" : "gray"} onClick={onClick} disabled={active}>
      {text}
    </Button>
  );
};
