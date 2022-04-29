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
        <i class="fas fa-bed property-icon"></i>{propertybedroom}
      </div>
      <div class="fontawesome">
        <i class="fas fa-bath property-icon"></i>{propertybathrooms}
      </div>
      <div class="fontawesome">
        <i class="fas fa-toilet property-icon"></i>{propertytoilet}
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
      <div class="single-property-section mt-4">
        <div class="container">
          <div>
            <h3 class="pt-4">
              Newly Built 6 Bedroom Fully Detached Villa + Cinema + Elevator+
              Rooftop Etc @$5m
            </h3>
            <h6>Ikoyi,Ikoyi Lagos</h6>
            <div
              id="carouselExampleCaptions"
              class="carousel slide carousel-image"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
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
              <div class="carousel-inner">
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
              <h6>{property.bedroom}</h6>
              <h6>icon New</h6>
              <h6>icon Added 16 Jan 2022</h6>
              <h4>Full Description</h4>
              <p className="full-description">{property.description}</p>
              <p>
                {" "}
                <span className="property-price">Price:</span> N5M
              </p>
              <p>
                In your best interest, call Prince Ademola Osinuga (the no. 1
                luxury real estate consultant) for all luxury ikoyi & victoria
                island listings. Call now to pay & move in immediately.{" "}
              </p>
              <p>
                58 a. J. Marinho drive Victoria island lagos
                Wesemoyinconsultz@gmail. Com Luxurybargainsmarket@gmail. Com
                +234 (0) 812 - 426 - 9637 +234 (0) 708 - 954 - 8790 7th floor
                mulliner towers 39 alfred rewane road Ikoyi lagos Disclaimer
                This property consists of an advertisement by PRINCE ADEMOLA
                OSINUGA INTERNATIONAL.
              </p>
              Propertypro only serves as a medium for the advertisement of this
              property. Propertypro.ng is only communicating this property offer
              and is not responsible for selling the property. PropertyPro.ng
              neither warrants nor is making any representations with respect to
              properties or offers listed on the site.
            </div>
          </div>
        </div>
      </div>
    </NavDefaultLayout>
  );
};

export default SingleProperty;
