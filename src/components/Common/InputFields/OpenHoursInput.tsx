import { Box, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { OpenDays } from "../../../types/AddRestaurantFields";
import { TextMedium } from "../Text/TextMedium";

interface OpenHoursInputProps {
  name: string;
  label: string;
  value: OpenDays;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const OpenHoursInput = ({
  value,
  onChange,
  label,
  name,
}: OpenHoursInputProps) => {
  return (
    <Box paddingTop={"1rem"}>
      <TextMedium>{label}</TextMedium>
      <Flex gap={"1rem"}>
      <FormControl>
        <FormLabel>From: </FormLabel>
        <Input
          name={"openHours." + name + ".from"}
          type="time"
          placeholder="This value will be display on open hours table."
          value={value[name]?.from}
          onChange={onChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>To: </FormLabel>
        <Input
          name={"openHours." + name + ".to"}
          type="time"
          placeholder="This value will be display on open hours table."
          value={value[name]?.to}
          onChange={onChange}
        />
      </FormControl>
      </Flex>
    </Box>
  );
};
