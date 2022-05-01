import * as Yup from "yup";

const inputValueValidationSchema = Yup.object().shape({
  address: Yup.string().required("Address is required"),
  type: Yup.string().required("Property type is required"),
  bathroom: Yup.number().required("Number of bathrooms is required"),
  bedroom: Yup.number().required("Number of bedrooms is required"),
  kitchen: Yup.number().required("Number of kitchens is required"),
  toilet: Yup.number().required("Number of Toilets is required"),
  sittingRoom: Yup.number().required("Number of sitting rooms is required"),
  propertyOwner: Yup.string().required("Property Owner is required"),
  validFrom: Yup.date().required("Enter a Valid date"),
  validTo: Yup.date().required("Enter a Valid date"),
});

export const updateValueValidationSchema = Yup.object().shape({
  bathroom: Yup.number().required("Number of bathrooms is required"),
  kitchen: Yup.number().required("Number of kitchens is required"),
  toilet: Yup.number().required("Number of Toilets is required"),
  sittingRoom: Yup.number().required("Number of sitting rooms is required"),
});

export default inputValueValidationSchema;
