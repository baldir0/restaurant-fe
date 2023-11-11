import { FormikErrors } from "formik/dist/types";
import { AddProductFields } from "../../../types/AddProductFields";

export const validateAddProductForm = async (
  values: AddProductFields
) => {
  const error: FormikErrors<AddProductFields> = {};

  error.name = (await validateName(values.name)).join("\n");
  error.price = (await validatePrice(values.price)).join("\n");
  error.image = (await validateImageFile(values.image)).join("\n");

  if (error.name || error.price || error.image)
    return error;
  return false;
};

const validateName = async (name: string): Promise<string[]> => {
  const errors: string[] = [];
  if (name.length > 25) errors.push("Name is too long. Max 64 characters.");
  if (name.length < 3) errors.push("Name is too short. Min 5 characters.");
  return errors;
};

const validatePrice = async (price: number): Promise<string[]> => {
  const errors: string[] = [];
  if (price <= 0) errors.push("Price cannot be empty Or equal 0.");
  return errors;
};

const validateImageFile = async (image: File | null): Promise<string[]> => {
  const errors: string[] = [];
  if (!image) {
    return errors;
  }

  const allowedExtensions = [
    "xbm",
    "tif",
    "pjp",
    "apng",
    "svgz",
    "jpg",
    "jpeg",
    "ico",
    "tiff",
    "gif",
    "svg",
    "jfif",
    "webp",
    "png",
    "bmp",
    "pjpeg",
    "avif",
  ];
  const fileExtension = image.name.split(".").pop();
  if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
    errors.push(
      `File must have one of the follow extenstions: \n ${allowedExtensions.map(
        (ex) => "*." + ex
      )}`
    );
  }
  if (image.size > 5000000) errors.push(`Max allowed file size is 5 MB`);
  return errors;
};
