import {
  Button,
  IconButton,
  List,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { ShoppingCartIcon } from "../Common/Icons/ShoppingCartIcon";
import { CartListElement } from "./CartListElement";
import { Link } from "react-router-dom";
import { Header } from "../Common/ElementHeader/Header";
import { IconButtonSmall } from "../Common/Buttons/IconButtonSmall";
import { LinkButton } from "../Common/Buttons/LinkButton";
import { SmallList } from "../Common/List/SmallList";

interface Props {
  data: {
    productId: string;
    amount: number;
    name: string;
    price: number;
    currency: string;
  }[];
}

export const Cart = ({ data }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButtonSmall
        icon={<ShoppingCartIcon fill={"#FFF"} />}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader as={Header}>Shopping Cart</ModalHeader>
          <ModalCloseButton />
          {data.length > 0 && (
            <ModalBody>
              <SmallList>
                {data.map((pos) => {
                  return (
                    <CartListElement
                      key={pos.productId}
                      name={pos.name}
                      price={pos.price}
                      currency={pos.currency}
                      amount={pos.amount}
                    />
                  );
                })}
              </SmallList>
              <Text fontWeight={"bold"}>
                Total Cart Value:{" "}
                {data
                  .reduce((pv, cv): number => {
                    return (pv += cv.amount * cv.price);
                  }, 0)
                  .toFixed(2)}{" "}
                {data[0].currency}
              </Text>
            </ModalBody>
          )}
          <ModalFooter>
            {data.length > 0 && (
              <LinkButton to={`/order/complete/424`}>Order</LinkButton>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
