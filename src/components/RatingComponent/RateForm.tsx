import { Stack } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { RatingStart } from "./RatingStart";

interface Props {
  targetId: string;
  baseRate: number;
}

export const RateForm = ({ targetId, baseRate }: Props) => {

  const [dynamicUserRate, setDynamicUserRate] = useState<number | null>(null);
  const [userRate, setUserRate] = useState <number | null> (null);
  // const maskImage = `linear-gradient(90deg, #000 ${40}%, transparent 0)`

  const parseRating = (rating: number, numberOfStars: number): ReactNode[] => {
    const outputArr = [];

    for (let i = 1; i <= numberOfStars; i++) {
      outputArr.push(
        <RatingStart
          key={`Rating-start-${targetId}-${i}`}
          active={rating - i > 0}
          mouseOver={() => setDynamicUserRate(i + 1)}
          mouseOut={() => setDynamicUserRate(null)}
          onClick={() => setUserRate(i + 1)}
          progression={
            rating - i > 0 ? 1 : rating - i > -1 ? (rating - i) * -1 : 0
          }
        />
      );
    }
    return outputArr;
  };


  return (
    <Stack gap={".2rem"} direction={"row"} minW={"15ch"} position={"relative"}>
      {parseRating(Number(dynamicUserRate ?? userRate ?? baseRate), 5)}
    </Stack>
  );
};
