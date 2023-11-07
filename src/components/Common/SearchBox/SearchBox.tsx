import { SearchIcon } from "@chakra-ui/icons";
import { Input, FormControl, IconButton } from "@chakra-ui/react";
import { ChangeEvent, SyntheticEvent } from "react";

interface Props {
  searchString: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  w: string;
  onSubmit: (event: SyntheticEvent) => void;
}

export const SearchBox = (props: Props) => {
  return (
    <FormControl
      as="form"
      colorScheme="orange"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={".25rem"}
      height={"60px"}
      onSubmit={props.onSubmit}
    >
      <Input
        type="text"
        w={props.w}
        colorScheme="orange"
        onChange={props.onChange}
        value={props.searchString}
      />
      <IconButton
        icon={<SearchIcon />}
        aria-label="searchg"
        colorScheme="orange"
        type="submit"
      />
    </FormControl>
  );
};
