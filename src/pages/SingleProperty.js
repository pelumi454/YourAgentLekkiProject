import React from "react";
import NavDefaultLayout from "../layouts/NavDefaultLayout.js";
import { useParams } from "react-router";
import { useProperty } from "../hooks/use-property";

export const propertyDetails = ({
  propertybedroom,
  propertytoilet,
  propertybathrooms,
}) => {
  return (
    <div class="fa-container">
      <div class="fontawesome">
        <i class="fas fa-bed property-icon"></i>
        {propertybedroom}
      </div>
      <div class="fontawesome">
        <i class="fas fa-bath property-icon"></i>
        {propertybathrooms}
      </div>
      <div class="fontawesome">
        <i class="fas fa-toilet property-icon"></i>
        {propertytoilet}
      </div>
    </div>
  );
};

const SingleProperty = () => {
  const { id } = useParams();
  const property = useProperty(id);

  if (!property) {
    return null;
  }

  return (
    <NavDefaultLayout>
      <div className="single-property-section mt-4">
        <div className="container">
          <div>
            <div
              id="carouselExampleCaptions"
              className="carousel slide carousel-image"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                {property.images.map((image, i) => {
                  return (
                    <button
                      key={image.path}
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to={i}
                      class={i === 0 ? "active" : ""}
                      aria-current={i === 0 ? "true" : "false"}
                      aria-label={`Slide ${i + 1}`}
                    ></button>
                  );
                })}
              </div>
              <div className="carousel-inner">
                {property.images.map((image, i) => {
                  return (
                    <div
                      className={`carousel-item${i === 0 ? " active" : ""}`}
                      key={image.filename}
                    >
                      <img
                        src={image.path}
                        className="d-block w-100
                        carousel-image"
                        alt="..."
                      />
                    </div>
                  );
                })}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            <propertyDetails
              propertyfeet={`${property.sittingRoom} sittingRooms`}
              propertybedroom={`${property.bedroom} bedrooms`}
              propertykitchen={`${property.kitchen} Kitchens`}
              propertybathrooms={`${property.bathroom} bathrooms`}
            />

            <div className="key-features mt-5">
              <h4>Key Features</h4>
              <h6>Address: {property.address} </h6>
              <h6>Type: {property.type} </h6>

              <h6>{property.bedroom} Bedroom</h6>
              <h6>{property.sittingRoom} Sitting Room </h6>
              <h6>{property.kitchen} kitchen</h6>
              <h6>{property.bathroom} Bathroom</h6>
              <h6>{property.toilet} Toilet</h6>
              <h4>Property Owner</h4>
              <p>{property.propertyOwner}</p>
              <h4>Full Description</h4>
              <p className="full-description">{property.description}</p>
              <h6>Valid From: {property.validFrom} to { property.validTo}</h6> 
            </div>
          </div>
        </div>
      </div>
    </NavDefaultLayout>
  );
};

export default SingleProperty;
