import { Image } from "@chakra-ui/react";

interface Props {
  src: string;
  alt?: string;
}


export const ListItemImage = (props: Props) => {
  return (
    <Image
      src={props.src}
      alt={props.alt ?? "Restaurant Icon"}
      w="9rem"
      h="9rem"
      alignSelf={"center"}
      border={"1px solid"}
      borderColor={"gray.100"}
      flexGrow={0}
      borderRadius={"1rem"}
      p={"5px"}
    />
  );
};
