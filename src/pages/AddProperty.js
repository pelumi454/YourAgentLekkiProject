import React, { useState } from "react";
import { Input } from "../components/input";
import { CustomBtn } from "../components/btn";
import NavDefaultLayout from "../layouts/NavDefaultLayout.js";
import { Formik } from "formik";
import inputValueValidationSchema, {
  updateValueValidationSchema,
} from "../helpers/ValidationSchema";
import pick from "lodash.pick";
import { useQuery } from "../hooks/use-query";
import { useAddPropertyLogic } from "../hooks/use-add-property-logic";
import { useProperty } from "../hooks/use-property";

const AddProperty = () => {
  const [file, setFile] = useState(null);
  const [handleSubmit] = useAddPropertyLogic(file);
  const { edit } = useQuery();
  const property = useProperty(edit);

  return (
    <NavDefaultLayout>
      <div className="container add-property-section mt-5">
        <div className="h1 mb-5">Add Property</div>
        <Formik
          key={JSON.stringify(property)}
          initialValues={
            property
              ? pick(property, [
                  "_id",
                  "bedroom",
                  "sittingRoom",
                  "kitchen",
                  "bathroom",
                  "toilet",
                  "description",
                ])
              : {
                  address: "",
                  type: "",
                  bedroom: "",
                  sittingRoom: "",
                  kitchen: "",
                  bathroom: "",
                  toilet: "",
                  propertyOwner: "",
                  description: "",
                  validFrom: "",
                  validTo: "",
                  images: [],
                }
          }
          validationSchema={
            property ? updateValueValidationSchema : inputValueValidationSchema
          }
          onSubmit={handleSubmit}
        >
          {(props) => {
            const {
              handleSubmit,
              handleChange,
              errors,
              touched,
              values,
              handleBlur,
            } = props;
            console.log(errors);
            return (
              <form
                onSubmit={handleSubmit}
                className="mb-0"
                id="add-property-form"
              >
                <div className="row">
                  {!values._id && (
                    <div className="col-sm-12 col-md-12">
                      <div className="form-group">
                        <Input
                          label="Property Address"
                          placeholder="Enter your address"
                          type="text"
                          name="address"
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.address && errors.address}
                        />
                      </div>
                    </div>
                  )}
                  <div className="col-sm-4 col-md-4">
                    <div className="form-group">
                      <Input
                        label="Number of Bedrooms"
                        type="text"
                        className="form-control"
                        name="bedroom"
                        id="property-title"
                        value={values.bedroom}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.bedroom && errors.bedroom}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="form-group">
                      <Input
                        label="Number of Sitting Rooms"
                        type="text"
                        className="form-control"
                        name="sittingRoom"
                        id="property-title"
                        value={values.sittingRoom}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.sittingRoom && errors.sittingRoom}
                      />
                    </div>
                  </div>
                  {!values._id && (
                    <div className="col-sm-4 col-md-4">
                      <div className="form-group">
                        <Input
                          label="Property Type"
                          type="text"
                          className="form-control"
                          name="type"
                          id="property-title"
                          value={values.type}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.type && errors.type}
                        />
                      </div>
                    </div>
                  )}
                  <div className="col-sm-4 col-md-4">
                    <div className="form-group">
                      <Input
                        label="Number of Kitchen"
                        type="text"
                        className="form-control"
                        name="kitchen"
                        id="property-title"
                        value={values.kitchen}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.kitchen && errors.kitchen}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="form-group">
                      <Input
                        label="Number of Bathrooms"
                        type="text"
                        className="form-control"
                        name="bathroom"
                        id="property-title"
                        value={values.bathroom}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.bathroom && errors.bathroom}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="form-group">
                      <Input
                        label="Number of Toilet"
                        type="text"
                        className="form-control"
                        name="toilet"
                        id="property-title"
                        value={values.toilet}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.toilet && errors.toilet}
                      />
                    </div>
                  </div>
                  {!values._id && (
                    <div className="col-sm-4 col-md-4">
                      <div className="form-group">
                        <Input
                          label="Property Owner"
                          type="text"
                          className="form-control"
                          name="propertyOwner"
                          id="property-title"
                          value={values.propertyOwner}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.propertyOwner && errors.propertyOwner}
                        />
                      </div>
                    </div>
                  )}
                  <div className="col-sm-12 col-md-12">
                    <div className="form-group">
                      <label for="">Property Description</label>
                      <textarea
                        className="form-control property-description"
                        name="description"
                        id="property-title"
                        rows="2"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        {values.description}
                      </textarea>
                    </div>
                  </div>
                  {!values._id && (
                    <div className="col-sm-4 col-md-4">
                      <div className="form-group">
                        <Input
                          label="Valid From"
                          type="date"
                          className="form-control"
                          name="validFrom"
                          id="property-title"
                          value={values.validFrom}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.validFrom && errors.validFrom}
                        />
                      </div>
                    </div>
                  )}

                  {!values._id && (
                    <div className="col-sm-4 col-md-4">
                      <div className="form-group">
                        <Input
                          label="Valid To"
                          type="date"
                          className="form-control"
                          name="validTo"
                          id="property-title"
                          value={values.validTo}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.validTo && errors.validTo}
                        />
                      </div>
                    </div>
                  )}
                  {!values._id && (
                    <div
                      className="add-property-box
              step-3 input-file"
                    >
                      <div className="input-file">
                        <label for="" className="input-label">
                          Upload Property Images
                        </label>
                        <input
                          className="form-control
                  form-control-lg"
                          id="formFileLg"
                          type="file"
                          multiple accept="image"
                          onChange={(event) => {
                            const [file] = event.target.files;
                            setFile(file);
                          }}
                          name="image"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <CustomBtn
                  className=" my-1 btn-lg mx-2"
                  type="submit"
                  label={values._id ? "Update Property" : "Add Property"}
                />
              </form>
            );
          }}
        </Formik>
      </div>
    </NavDefaultLayout>
  );
};

export default AddProperty;
