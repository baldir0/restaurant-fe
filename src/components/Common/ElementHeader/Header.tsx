import { BorderProps, Flex, FlexboxProps, LayoutProps, SpaceProps } from "@chakra-ui/react";

interface Props {
  children?: React.ReactNode;
  height?: LayoutProps["h"];
  padding?: SpaceProps["p"];
  flexDirection?: FlexboxProps["flexDirection"];
  borderRadius?: BorderProps["borderRadius"];
}

export const Header = ({ children, padding, height, flexDirection, borderRadius }: Props) => {
  return (
    <Flex
      bg="orange.400"
      height={height || "60px"}
      color={"#FFF"}
      fontSize={"3xl"}
      p={padding || "5px 10px"}
      flexDirection={flexDirection || "row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      borderRadius={borderRadius || "inherit"}
    >
      {children}
    </Flex>
  );
};
