import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { AddProductFields } from "../../../types/AddProductFields";
import { ImageInput } from "../../Common/InputFields/ImageInput";
import { MyFormProps } from "../../../types/FormProps";
import { validateAddProductForm } from "./addProductValidation";

export const AddProductForm = ({ onSubmit }: MyFormProps<AddProductFields>) => {
  const formik = useFormik<AddProductFields>({
    initialValues: {
      name: "",
      price: '0.0',
      currency: "PLN",
      image: null,
    },
    onSubmit: onSubmit,
    validate: validateAddProductForm,
  });
  return (
    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
      {/** NAME INPUT FIELD*/}
      <FormControl
        isInvalid={!!formik.errors.name && formik.touched.name}
        onBlur={formik.handleBlur}
      >
        <FormLabel>Name: </FormLabel>
        <Input
          name="name"
          type="text"
          maxLength={25}
          minLength={3}
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        <FormHelperText>
          {formik.values.name.length}/25 Characters
        </FormHelperText>
      </FormControl>

      {/** PRICE INPUT FIELD */}
      <FormControl
        isInvalid={!!formik.errors.price && formik.touched.price}
        onBlur={formik.handleBlur}
      >
        <FormLabel>Price: </FormLabel>
        <NumberInput
          name="price"
          value={formik.values.price}
          precision={2}
          step={0.01}
          inputMode={"decimal"}
          onChange={(value) => {
            formik.setFieldValue('price', value)
          }}
        >
          <InputGroup>
            <NumberInputField />
            <InputRightAddon>{formik.values.currency}</InputRightAddon>
          </InputGroup>
        </NumberInput>

        <FormErrorMessage>{formik.errors.price}</FormErrorMessage>
      </FormControl>

      <ImageInput
        FormControlProps={{ isInvalid: !!formik.errors.image }}
        id="NewProductImage"
        file={formik.values.image}
        error={formik.errors.image}
        label="Product Image: "
        onChange={(e) => {
          if (e.target.files)
            formik.setValues({ ...formik.values, image: e.target.files[0] });
        }}
        children={formik.values.image?.name}
      />

      <Button type="submit" colorScheme="orange">
        Add Product
      </Button>
    </form>
  );
};
