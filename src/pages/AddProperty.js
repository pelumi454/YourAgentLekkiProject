import React from "react";
import { Input } from "../components/input";
import NavDefaultLayout from "../layouts/NavDefaultLayout.js";
import { Formik } from "formik";
import inputValueValidationSchema from "../helpers/ValidationSchema";

const AddProperty = () => {
  return (
    <NavDefaultLayout>
      <div className="container add-property-section mt-5">
        <div className="h1 mb-5">Add Property</div>
        <Formik
          initialValues={{
            propertyAddress: "",
            propertyType: "",
            numberOfBathrooms: "",
            numberOfKitchens: "",
            numberOfToilets: "",
            numberOfSittingRooms: "",
            propertyOwner: "",
            validFrom: "",
            validTo: "",
          }}
          validationSchema={inputValueValidationSchema}
        >
          {(props) => {
            const {
              handleSubmit,
              handleChange,
              errors,
              touched,
              handleBlur,
            } = props;
            return (
              <form
                onSubmit={handleSubmit}
                className="mb-0"
                id="add-property-form"
              >
                <div className="row">
                  <div className="col-sm-12 col-md-12">
                    <div className="form-group">
                      <Input
                        label="Property Address"
                        placeholder="Enter your address"
                        type="text"
                        name="Property-address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.propertyAddress && errors.propertyAddress
                        }
                      />
                      {/* <p id="p1" style="color: red;"></p> */}
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="form-group">
                      <Input
                        label="Number of Bedrooms"
                        type="text"
                        className="form-control"
                        name="bedroom"
                        id="property-title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.numberOfBathrooms && errors.numberOfBathrooms
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="form-group">
                      <Input
                        label="Number of Sitting Rooms"
                        type="text"
                        className="form-control"
                        name="sittingroomNo"
                        id="property-title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.numberOfSittingRooms &&
                          errors.numberOfSittingRooms
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4 house-type-select">
                    <div className="form-group">
                      <label for="">Type</label>
                      <div className="select--box">
                        <i className="fa fa-angle-down"></i>
                        <select
                          name=""
                          id="select-type"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.propertyType && errors.propertyType}
                        >
                          <option value="">House</option>
                          <option value="">Flat</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="form-group">
                      <Input
                        label="Number of Kitchen"
                        type="text"
                        className="form-control"
                        name="kitchenNo"
                        id="property-title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.numberOfKitchens && errors.numberOfKitchens
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="form-group">
                      <Input
                        label="Number of Bathrooms"
                        type="text"
                        className="form-control"
                        name="BathroomNo"
                        id="property-title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.numberOfBathrooms && errors.numberOfBathrooms
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="form-group">
                      <Input
                        label="Number of Toilet"
                        type="text"
                        className="form-control"
                        name="ToiletNo"
                        id="property-title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.numberOfToilets && errors.numberOfToilets
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="form-group">
                      <Input
                        label="Property Owner"
                        type="text"
                        className="form-control"
                        name="propertyOwner"
                        id="property-title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.propertyOwner && errors.propertyOwner}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12">
                    <div className="form-group">
                      <label for="">Property Description</label>
                      <textarea
                        className="form-control property-description"
                        name="Description"
                        id="property-title"
                        rows="2"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-sm-4 col-md-4">
                    <div className="form-group">
                      <Input
                        label="Valid From"
                        type="date"
                        className="form-control"
                        name="validFrom"
                        id="property-title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.validFrom && errors.validFrom}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="form-group">
                      <Input
                        label="Valid To"
                        type="date"
                        className="form-control"
                        name="validTo"
                        id="property-title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.validTo && errors.validTo
                        }
                      />
                    </div>
                  </div>

                  <div className="add-property-box step-3">
                    <div className="image-upload-inner">
                      <div className="image-upload-box">
                        <label className="custom-file-upload">
                          <span>
                            <i className="icofont icofont-folder-open"></i>
                            Browse Images
                          </span>
                          <input type="file" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <Input
                  type="submit"
                  value="SAVE EDITS"
                  name="submits"
                  id="submit"
                  className="save-details-btn"
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
