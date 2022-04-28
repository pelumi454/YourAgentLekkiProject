import React from "react";
// import { Input } from "../components/input";

const AddProperty = () => {
  return (
    <div className="containere">
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
