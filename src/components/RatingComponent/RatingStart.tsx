import { StarIcon } from "@chakra-ui/icons";

interface Props {
  active?: boolean;
  progression?: number;
  mouseOver: () => void;
  mouseOut: () => void;
  onClick: () => void;
}

export const RatingStart = ({
  active,
  mouseOver,
  mouseOut,
  onClick,
  progression,
}: Props) => {
  const gradientValue = `linear-gradient(90deg, #FFF ${
    (progression ?? 1) * 100
  }%, #FFF7 0)`;

  return (
    <StarIcon
      color={active || progression ? "orange.400" : "#ED893677"}
      style={{
        maskMode: "alpha",
        maskImage: active || progression ? gradientValue : "none",
        WebkitMaskImage: active || progression ? gradientValue : "none",
      }}
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      onClick={onClick}
      cursor={"pointer"}
    />
  );
};
