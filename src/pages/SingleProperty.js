import React from "react";
import hero8 from "../assets/images/hero8.jpg";
import hero9 from "../assets/images/hero9.jpg";
import hero10 from "../assets/images/hero10.jpg";
import hero11 from "../assets/images/hero11.jpg";
import NavDefaultLayout from "../layouts/NavDefaultLayout.js";

const SingleProperty = () => {
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
              id="carouselExampleInterval"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                  <img src={hero11} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src={hero8} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src={hero9} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            <div class="fa-container">
              <div class="fontawesome">
                <i class="fas fa-bed property-icon"></i>4 bedrooms
              </div>
              <div class="fontawesome">
                <i class="fas fa-bath property-icon"></i>4 bathrooms
              </div>
              <div class="fontawesome">
                <i class="fas fa-toilet property-icon"></i>5 Toilets
              </div>
            </div>
            {/* <div class="safety-module2">
              <h4>Safety Tips</h4>
              Do not make any upfront payment as inspection fee or upfront
              payment for rent before seeing this property or seeing the agent
              you contacted physically. PropertyPro.ng is not liable for
              monetary transactions between you and the agents. The contact
              agent on properties listed on PropertyPro.ng does not represent
              PropertyPro.ng. PropertyPro.ng will not mandate agents to ask for
              fees upfront.
            </div> */}
            <div class="key-features mt-5">
              <h4>Key Features</h4>
              <h6>icon 6 Bedrooms</h6>
              <h6>icon New</h6>
              <h6>icon Added 16 Jan 2022</h6>
              <h4>Full Description</h4>
              <p className="full-description">
                6 bedroom Detached Duplex for sale Ikoyi Ikoyi Lagos selling for
                N5,000,000. See property details on PropertyPro.ng or browse all
                our range of properties in Ikoyi, Lagos
              </p>
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
