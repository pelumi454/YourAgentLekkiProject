import React from "react";
import hero8 from "../assets/images/hero8.jpg";
import hero9 from "../assets/images/hero9.jpg";
import hero10 from "../assets/images/hero10.jpg";
import hero11 from "../assets/images/hero11.jpg";
import NavDefaultLayout from "../layouts/NavDefaultLayout.js";
import { Link } from "react-router-dom";

export const ViewPropertyComp = ({
  propertyImage,
  propertyTitle,
  propertyTitleSmall,
  amount,
  description,
  propertyToilet,
  propertyBedroom,
  propertyBathroom,
}) => {
  return (
    <div className="card">
      <img src={propertyImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="single-room-text">
          <h2 className="listings-property-title">{propertyTitle}</h2>
          <h3 className="listings-property-title2">{propertyTitleSmall}</h3>
          <div className="n50">
            <h3 className="house-amount">
              <span content="NGN">₦</span>
              <span content="160,000,000">{amount}</span>
            </h3>
          </div>
          <div className="furnished-btn"></div>
          <div className="result-list-details">
            <Link to="/singleproperty">
              <p className="d-none d-sm-block read-more">
                {description}
              </p>
            </Link>
          </div>
          <div>
            <span className="fontawesome">
              <i className="fas fa-bed"></i>
              {propertyBedroom}
            </span>
            <span className="fontawesome">
              <i className="fas fa-bath"></i>
              {propertyBathroom}
            </span>
            <span className="fontawesome">
              <i className="fas fa-toilet"></i>
              {propertyToilet}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ViewProperty = () => {
  return (
    <NavDefaultLayout>
      <div>
        <section>
          <div className="view-property-hero-section">
            <div className="container">
              <div className="d-flex flex-column justify-content-center find-pro-wrapper">
                <h4 className="find-pro-title">PROPERTY NEAR YOU</h4>
                <p className="find-pro-text">
                  Everyone deserves the opportunity of a good home, I'm your
                  Realtor come and get your key
                </p>
                <div className="d-flex find-pro-input-wrapper">
                  <input
                    type="text"
                    placeholder="Search by Address"
                    className="find-pro-input"
                  />
                  <i className="bi bi-search"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="popular-property-parent-div">
              <div className="row">
                <h4 className="popular-prop-text col-md-10 col-sm-12">
                  ALL PROPERTIES
                </h4>
                <div className="col-sm-4 col-md-2 col-sm-12 popular-prop-text">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle mb-2"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Filter By
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Number of Bedrooms
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Number of Kitchens
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Number of Bathrooms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="view-property-page">
              <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                <div className="col">
                  <ViewPropertyComp
                    propertyImage={hero8}
                    propertyTitle="4 BEDROOM TERRACED DUPLEX FOR SALE"
                    propertyTitleSmall="4 BEDROOM TERRACED DUPLEX FOR SALE"
                    amount="160,000"
                    description="FOR SALE: 4bedrooms serviced terrace HOUSE 5toilets
                            and 4baths PRICE: N 160Million .. Read more"
                    propertyBathroom="4 bathrooms"
                    propertyToilet="3 Toilets"
                    propertyBedroom="4 Bedrooms"
                  />
                </div>
                <div className="col">
                  <ViewPropertyComp
                    propertyImage={hero9}
                    propertyTitle="4 BEDROOM TERRACED DUPLEX FOR SALE"
                    propertyTitleSmall="4 BEDROOM TERRACED DUPLEX FOR SALE"
                    amount="160,000"
                    description="FOR SALE: 4bedrooms serviced terrace HOUSE 5toilets
                            and 4baths PRICE: N 160Million .. Read more"
                    propertyBathroom="4 bathrooms"
                    propertyToilet="3 Toilets"
                    propertyBedroom="4 Bedrooms"
                  />
                </div>{" "}
                <div className="col">
                  <ViewPropertyComp
                    propertyImage={hero10}
                    propertyTitle="4 BEDROOM TERRACED DUPLEX FOR SALE"
                    propertyTitleSmall="4 BEDROOM TERRACED DUPLEX FOR SALE"
                    amount="160,000"
                    description="FOR SALE: 4bedrooms serviced terrace HOUSE 5toilets
                            and 4baths PRICE: N 160Million .. Read more"
                    propertyBathroom="4 bathrooms"
                    propertyToilet="3 Toilets"
                    propertyBedroom="4 Bedrooms"
                  />
                </div>{" "}
                <div className="col">
                  <ViewPropertyComp
                    propertyImage={hero9}
                    propertyTitle="4 BEDROOM TERRACED DUPLEX FOR SALE"
                    propertyTitleSmall="4 BEDROOM TERRACED DUPLEX FOR SALE"
                    amount="160,000"
                    description="FOR SALE: 4bedrooms serviced terrace HOUSE 5toilets
                            and 4baths PRICE: N 160Million .. Read more"
                    propertyBathroom="4 bathrooms"
                    propertyToilet="3 Toilets"
                    propertyBedroom="4 Bedrooms"
                  />
                </div>{" "}
                <div className="col">
                  <ViewPropertyComp
                    propertyImage={hero8}
                    propertyTitle="4 BEDROOM TERRACED DUPLEX FOR SALE"
                    propertyTitleSmall="4 BEDROOM TERRACED DUPLEX FOR SALE"
                    amount="160,000"
                    description="FOR SALE: 4bedrooms serviced terrace HOUSE 5toilets
                            and 4baths PRICE: N 160Million .. Read more"
                    propertyBathroom="4 bathrooms"
                    propertyToilet="3 Toilets"
                    propertyBedroom="4 Bedrooms"
                  />
                </div>{" "}
                <div className="col">
                  <ViewPropertyComp
                    propertyImage={hero11}
                    propertyTitle="4 BEDROOM TERRACED DUPLEX FOR SALE"
                    propertyTitleSmall="4 BEDROOM TERRACED DUPLEX FOR SALE"
                    amount="160,000"
                    description="FOR SALE: 4bedrooms serviced terrace HOUSE 5toilets
                            and 4baths PRICE: N 160Million .. Read more"
                    propertyBathroom="4 bathrooms"
                    propertyToilet="3 Toilets"
                    propertyBedroom="4 Bedrooms"
                  />
                </div>{" "}
                </div>
                    </div>
              </div>
        </section>
      </div>
    </NavDefaultLayout>
  );
};

export default ViewProperty;
