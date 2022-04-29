import * as Yup from "yup";

const inputValueValidationSchema = Yup.object().shape({
  propertyAddress: Yup.string().required("Address is required"),
  propertyType: Yup.string().required("Property type is required"),
  numberOfBathrooms: Yup.number().required("Number of bathrooms is required"),
  numberOfKitchens: Yup.number().required("Number of kitchens is required"),
  numberOfToilets: Yup.number().required("Number of bathrooms is required"),
  numberOfSittingrooms: Yup.number().required(
    "Number of sitting rooms is required"
  ),
    propertyOwner: Yup.number().required("Property Owner is required"),
    validFrom: Yup.date().required("Valid From is required"),
  validTo: Yup.date().required("Valid To is required"),
});

export default inputValueValidationSchema;
