import { Flex } from "@chakra-ui/react";
import { ProductCard } from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { Cart } from "../Cart/Cart";
import { ProductEntity, ProductEntityResponse } from "../../../../restaurant-be/types/product";

interface Props {
  restaurantId: string;
}

interface ShoppingCart {
  productId: string;
  name: string;
  amount: number;
  price: number;
  currency: string;
}

const tmpProductList = [
  {
    productId: "1",
    name: "Test Product 1",
    price: 2.52,
    currency: "PLN",
  },
  {
    productId: "2",
    name: "Test Product 2",
    price: 2.52,
    currency: "PLN",
  },
  {
    productId: "3",
    name: "Test Product 3",
    price: 2.52,
    currency: "PLN",
  },
  {
    productId: "4",
    name: "Test Product 4",
    price: 2.52,
    currency: "PLN",
  },
];

export const RestaurantMenu = ({ restaurantId }: Props) => {
  //Fetch Restaurant Menu
  const [cart, setCart] = useState<ShoppingCart[]>([]);
  const [products, setProducts] = useState<ProductEntityResponse[]>([])
  useEffect(() => {
    (async () => {
      const rawProducts = await fetch(`http://localhost:3001/products/${restaurantId}`);
      const parsedProducts = await rawProducts.json();
      setProducts(parsedProducts);
      console.log(parsedProducts);
    }) ();
  }, [])

  const addProduct = (
    id: string,
    amount: number,
    name: string,
    price: number,
    currency: string
  ) => {
    setCart((currState) => {
      const newState = [...currState];
      const index = newState.findIndex((el) => el.productId === id);
      const newValue = {
        productId: id,
        amount: (newState[index] && newState[index].amount + amount) ?? amount,
        name,
        price,
        currency,
      };
      index >= 0 ? (newState[index] = newValue) : newState.push(newValue);
      console.log(newState);
      return newState;
    });
  };

  return (
    <Flex
      wrap={"wrap"}
      direction={"row"}
      w="full"
      flexWrap={"wrap"}
      gap={"1rem"}
      p={"1rem"}
    >
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            productId={product.id}
            productName={product.name}
            price={product.price}
            currency={product.currency}
            imgSrc={product.imagePath}
            addToCart={addProduct}
          />
        );
      })}
      <Cart data={cart} />
    </Flex>
  );
};
