import {
  FormControl,
  FormControlProps,
  FormLabel,
  Input,
  Image,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/childrenProps";
import { ChangeEvent } from "react";

interface ImageInputProps extends ChildrenProps {
  id: string;
  label: string;
  file: File | null;
  error: string | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  FormControlProps?: FormControlProps;
}

export const ImageInput = ({
  label,
  children,
  id,
  file,
  error,
  FormControlProps,
  onChange
}: ImageInputProps) => {
  return (
    <FormControl {...FormControlProps}>
      <FormLabel>{label}</FormLabel>
      <Input
        id={id}
        name="image"
        type="file"
        visibility="hidden"
        position="absolute"
        h="0"
        w="0"
        onChange={onChange}
      />
      <Input type="text" as={FormLabel} htmlFor={id} display={"flex"} alignItems={"center"} gap={"1rem"}>
        {file ? (
          <>
            <Image src={URL.createObjectURL(file)} alt="preview" h={"inherit"}/>
            {children}
          </>
        ) : (
          "Choose A File..."
        )}
      </Input>
      <FormErrorMessage>{error}</FormErrorMessage>
      <FormHelperText>Import Restaurant Image</FormHelperText>
    </FormControl>
  );
};
