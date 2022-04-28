import React from "react";
// import { Input } from "../components/input";
// import hero from "../assets/images/hero8.jpg";
// import hero2 from "../assets/images/hero2.jpg";
// import hero3 from "../assets/images/hero3.jpg";
// import hero4 from "../assets/images/hero4.jpg";
// import hero5 from "../assets/images/hero5.jpg";
// import hero6 from "../assets/images/hero6.jpg";
// import hero7 from "../assets/images/hero7.jpg";
import hero8 from "../assets/images/hero8.jpg";
import hero9 from "../assets/images/hero9.jpg";
import hero10 from "../assets/images/hero10.jpg";
import hero11 from "../assets/images/hero11.jpg";

const SingleProperty = () => {
  return (
    <div>
      <div class="single-property-section">
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
              <div class="carousel-inner mt-4">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img src={hero11} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src={hero8} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
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
            <img
              src="./img/hero8.jpg"
              alt=""
              class="single-property-image mt-4"
            />
            <div class="fa-container">
              <div class="fontawesome">
                <i class="fas fa-bed"></i>4 bedrooms
              </div>
              <div class="fontawesome">
                <i class="fas fa-bath"></i>4 bathrooms
              </div>
              <div class="fontawesome">
                <i class="fas fa-toilet"></i>5 Toilets
              </div>
            </div>
            <div class="safety-module2">
              <h4>Safety Tips</h4>
              Do not make any upfront payment as inspection fee or upfront
              payment for rent before seeing this property or seeing the agent
              you contacted physically. PropertyPro.ng is not liable for
              monetary transactions between you and the agents. The contact
              agent on properties listed on PropertyPro.ng does not represent
              PropertyPro.ng. PropertyPro.ng will not mandate agents to ask for
              fees upfront.
            </div>
            <div class="key-features">
              <h4>Key Features</h4>
              <p>icon 6 Bedrooms</p>
              <p>icon New</p>
              <p>icon Added 16 Jan 2022</p>
              <h4>Full Description</h4>
              <p>
                6 bedroom Detached Duplex for sale Ikoyi Ikoyi Lagos selling for
                $5,000,000. See property details on PropertyPro.ng or browse all
                our range of properties in Ikoyi, Lagos
              </p>
              <p>SEAMLESS TRANSACTIONS ONLY</p>
              <p>
                {" "}
                DIRECT CASH READY CLIENTS ONLY NEWLY BUILT FULLY DETACHED 6
                BEDROOM HOUSE + SWIMMING POOL + CINEMA + ELEVATOR + ETC IN IKOYI
                LAGOS
              </p>
              <p> Price: $5M</p>
              <p>
                In your best interest, call Prince Ademola Osinuga (the no. 1
                luxury real estate consultant) for all luxury ikoyi & victoria
                island listings. Call now to pay & move in immediately.{" "}
              </p>
              <p>
                Prince Ademola Osinuga Executive chairman Wesemoyin consultz
                Luxurybargainsmarket Rose of sharon tower
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
    </div>
  );
};

export default SingleProperty;
