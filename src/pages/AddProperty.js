import React from "react";
// import { Input } from "../components/input";
import NavDefaultLayout from "../layouts/NavDefaultLayout.js";


const AddProperty = () => {
  return (
    <NavDefaultLayout>
    <div className="container add-property-section mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <form action="" className="mb-0" id="add-property-form">
            <div className="form-box">
              <div className="row">
                <div className="col-sm-12 col-md-12"></div>
                <div className="col-sm-12 col-md-12">
                  <div className="h1 mb-5">Add Property</div>
                  <div className="form-group">
                    <label for="">Property Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Property Name"
                    />
                    {/* <p id="p1" style="color: red;"></p> */}
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
                    <label for="">Number of Bedrooms</label>
                    <input
                      type="text"
                      className="form-control"
                      name="bedroom"
                      id="property-title"
                    />
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="form-group">
                    <label for="">Number of Sitting Rooms</label>
                    <input
                      type="text"
                      className="form-control"
                      name="sittingroomNo"
                      id="property-title"
                    />
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="form-group">
                    <label for="">Type</label>
                    <div className="select--box">
                      <i className="fa fa-angle-down"></i>
                      <select name="" id="select-type">
                        <option value="">House</option>
                        <option value="">Flat</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="form-group">
                    <label for="">Number of Kitchen</label>
                    <input
                      type="text"
                      className="form-control"
                      name="kitchenNo"
                      id="property-title"
                    />
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="form-group">
                    <label for="">Number of Bathroom</label>
                    <input
                      type="text"
                      className="form-control"
                      name="BathroomNo"
                      id="property-title"
                    />
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="form-group">
                    <label for="">Number of Toilet</label>
                    <input
                      type="text"
                      className="form-control"
                      name="ToiletNo"
                      id="property-title"
                    />
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="form-group">
                    <label for="">Valid From</label>
                    <input
                      type="date"
                      className="form-control"
                      name="validFrom"
                      id="property-title"
                    />
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="form-group">
                    <label for="">Valid To</label>
                    <input
                      type="date"
                      className="form-control"
                      name="validTo"
                      id="property-title"
                    />
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="form-group">
                    <label for="">Property Owner</label>
                    <input
                      type="text"
                      className="form-control"
                      name="propertyOwner"
                      id="property-title"
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
              </div>
        <input type="submit" value="SAVE EDITS" name="submits" id="submit" class="btn btn-lg btn-primary mt-5 mr-4"/>
              
          </form>
        </div>
      </div>
    </div>
    </NavDefaultLayout>
  );
};

export default AddProperty;
