import { IconButton, IconButtonProps } from "@chakra-ui/react"

interface Props {
  icon: IconButtonProps["icon"],
  onClick? : () => void
}

export const IconButtonSmall = (props: Props) => {
      return <IconButton
        aria-label="Shopping Cart Button"
        icon={props.icon}
        colorScheme="orange"
        onClick={props.onClick}
        position={"absolute"}
        right={"2rem"}
        bottom={"2rem"}
      />
}