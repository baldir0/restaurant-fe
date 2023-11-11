import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { AddRestaurantFields } from "../../../types/AddRestaurantFields";
import { validateAddRestaurantForm } from "./addRestaurantValidation";
import { ImageInput } from "../../Common/InputFields/ImageInput";
import { OpenHoursInput } from "../../Common/InputFields/OpenHoursInput";
import { TextBig } from "../../Common/Text/TextBig";
import { MyFormProps } from "../../../types/FormProps";


export const AddRestaurantForm = ({onSubmit} : MyFormProps<AddRestaurantFields>) => {
  const formik = useFormik<AddRestaurantFields>({
    initialValues: {
      name: "",
      description: "",
      address: "",
      image: null,
      openHours: {
        monday: {from: "", to: ""},
        tuesday: {from: "", to: ""},
        wednesday: {from: "", to: ""},
        thursday: {from: "", to: ""},
        friday: {from: "", to: ""},
        saturday: {from: "", to: ""},
        sunday: {from: "", to: ""}
      },
    },
    onSubmit: onSubmit,
    validate: (values) => validateAddRestaurantForm(values),
  });

  return (
    <form
      onSubmit={(e) => formik.handleSubmit(e)}
      style={{
        alignItems: "left",
        textAlign: "left",
      }}
      encType="multipart/form-data"
    >
      <TextBig>Basic data: </TextBig>
      {/** RESTAURANT NAME FIELD*/}
      <FormControl
        isInvalid={!!formik.errors.name && formik.touched.name}
        onBlur={formik.handleBlur}
      >
        <FormLabel>Name: </FormLabel>
        <Input
          name="name"
          type="text"
          min={5}
          maxLength={64}
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        <FormHelperText>
          {formik.values.name.length}/64 Characters
        </FormHelperText>
      </FormControl>

      {/** RESTAURANT DESCRIPTION FIELD*/}
      <FormControl
        isInvalid={!!formik.errors.description && formik.touched.description}
        onBlur={formik.handleBlur}
      >
        <FormLabel>Description: </FormLabel>
        <Textarea
          name="description"
          value={formik.values.description}
          maxLength={1024}
          onChange={formik.handleChange}
        />
        <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
        <FormHelperText>
          {formik.values.description.length}/1024 Characters
        </FormHelperText>
      </FormControl>

      {/** RESTAURANT ADDRESS FIELD*/}
      <FormControl
        isInvalid={!!formik.errors.address && formik.touched.address}
        onBlur={formik.handleBlur}
      >
        <FormLabel>Address: </FormLabel>
        <Input
          name="address"
          type="text"
          value={formik.values.address}
          onChange={formik.handleChange}
        />
        <FormErrorMessage>{formik.errors.address}</FormErrorMessage>
        <FormHelperText>Enter restaurant Address</FormHelperText>
      </FormControl>

      {/** RESTAURANT IMAGE FIELD*/}
      <ImageInput
        FormControlProps={{ isInvalid: !!formik.errors.image }}
        label="Image:"
        file={formik.values.image}
        id="imgInput"
        error={formik.errors.image}
        onChange={(e) => {
          if (e.target.files) {
            formik.setValues({ ...formik.values, image: e.target.files[0] });
          }
        }}
      >
        {formik.values.image?.name}
      </ImageInput>

      {/** MONDAY FIELD */}
      <TextBig>Open Hours: </TextBig>
      {[
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
      ].map((weekDay) => {
        return (
          <OpenHoursInput
            key={weekDay}
            name={weekDay}
            label={`${weekDay.toUpperCase()} :`}
            onChange={formik.handleChange}
            value={formik.values.openHours}
          />
        );
      })}
      <Button type="submit" colorScheme="orange">
        Add Restaurant
      </Button>
    </form>
  );
};
