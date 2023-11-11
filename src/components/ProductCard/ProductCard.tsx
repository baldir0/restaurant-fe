import {
  Text,
  Image,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Button,
  InputGroup,
  InputLeftAddon,
  NumberInput,
  NumberInputStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  productId: string;
  productName: string;
  price: number;
  currency: string;
  imgSrc: string;
  addToCart: (
    id: string,
    amount: number,
    name: string,
    price: number,
    currency: string
  ) => void;
}

export const ProductCard = (props: Props) => {
  const [amount, setAmount] = useState<number>(1);

  return (
    <Card maxW="sm" align={"center"} colorScheme="orange">
      <CardBody>
        <Image
          src={props.imgSrc}
          alt={props.productName + "Image"}
          w={"16rem"}
          h={"16rem"}
          border={"1px solid black"}
        />
        <Heading>{props.productName}</Heading>
        <Text>
          {props.price.toFixed(2)} {props.currency}
        </Text>
      </CardBody>
      <CardFooter gap={"1rem"}>
        <InputGroup>
          <InputLeftAddon>Amount</InputLeftAddon>
          <NumberInput
            defaultValue={amount}
            min={1}
            max={10}
            onChange={(value) => setAmount(Number(value))}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </InputGroup>
        <Button
          colorScheme="orange"
          onClick={() =>
            props.addToCart(
              props.productId,
              amount,
              props.productName,
              props.price,
              props.currency
            )
          }
        >
          Add To Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
