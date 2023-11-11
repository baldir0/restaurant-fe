import { DeleteIcon } from "@chakra-ui/icons";
import { IconButton, Text } from "@chakra-ui/react";
import { SmallListItem } from "../Common/List/SmallListItem";

interface Props {
  name: string;
  price: number;
  amount: number;
  currency: string;
}

export const CartListElement = ({ name, price, amount, currency }: Props) => {
  return (
    <SmallListItem>
      <Text as="span">
        {name} - {price} {currency} x {amount} → Total:{" "}
        {(price * amount).toFixed(2)} {currency}
      </Text>
      <IconButton
        aria-label="Remove list element"
        icon={<DeleteIcon />}
        backgroundColor={"transparent"}
      ></IconButton>
    </SmallListItem>
  );
};
