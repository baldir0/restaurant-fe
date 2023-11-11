import { FormikErrors } from "formik/dist/types";
import { AddRestaurantFields } from "../../../types/AddRestaurantFields";

export const validateAddRestaurantForm = async (
  values: AddRestaurantFields
) => {
  const error : FormikErrors<AddRestaurantFields>= {} 

  error.name = (await validateName(values.name)).join('\n')
  error.description = (await validateDescription(values.description)).join('\n')
  error.address = (await validateAddress(values.address)).join('\n')
  error.image = (await validateImageFile(values.image)).join('\n')
  
  if (error.name || error.description || error.address || error.image)
    return error;
  return false;
};

const validateName = async (name: string): Promise<string[]> => {
  const errors = [];
  if (name.length > 64) errors.push("Name is too long. Max 64 characters.");
  if (name.length < 5) errors.push("Name is too short. Min 5 characters.");
  return errors;
};

const validateDescription = async (description: string): Promise<string[]> => {
  const errors = [];
  if (description.length > 1024)
    errors.push("Description is too long. Max 1024 characters.");
  if (description.length === 0)
    errors.push("Description cannot be empty string.");
  return errors;
};

const validateAddress = async (address: string): Promise<string[]> => {
  const errors = [];
  if (address.length === 0) errors.push("Address cannot be empty string.");
  return errors;
};

const validateImageFile = async (image: File | null): Promise<string[]> => {
  const errors : string[]= [];
  if (!image) {
    return errors;
  }

  const allowedExtensions = ['xbm','tif','pjp','apng','svgz','jpg','jpeg','ico', 'tiff', 'gif', 'svg', 'jfif', 'webp','png','bmp','pjpeg','avif']
  const fileExtension = image.name.split('.').pop();
  if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
    errors.push(`File must have one of the follow extenstions: \n ${allowedExtensions.map(ex => '*.' + ex)}`)
  }
  if (image.size > 5000000)
    errors.push(`Max allowed file size is 5 MB`);
  return errors;
};
