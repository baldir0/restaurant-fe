import { ChildrenProps } from "../../../types/childrenProps";
import { LayoutProps, Text, TypographyProps } from "@chakra-ui/react";

interface ExtraLargeTextProps extends ChildrenProps {
  maxWidth?: LayoutProps["maxWidth"];
  textAlign?: TypographyProps["textAlign"];
}

export const ExtraLargeText = ({
  children,
  maxWidth,
  textAlign,
}: ExtraLargeTextProps) => {
  return (
    <Text
      as={"p"}
      fontSize={"3rem"}
      maxWidth={maxWidth ?? "60rem"}
      textAlign={textAlign ?? "center"}
      color={"grey.800"}
      fontWeight={800}
    >
      {children}
    </Text>
  );
};
