import { useState } from "react";
import { useProperties } from "../hooks/use-properties";
import NavDefaultLayout from "../layouts/NavDefaultLayout.js";
import { Link } from "react-router-dom";

export const ViewPropertyComp = ({
  propertyImage,
  propertyTitle,
  propertyTitleSmall,
  amount,
  propertyToilet,
  propertyBedroom,
  propertyBathroom,
  propertyId,
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
            <Link to={`/${propertyId}`}>
              <button className="d-none d-sm-block read-more">View More</button>
            </Link>
          </div>
          <Link to={`/?edit=${propertyId}`}>
            <button className="d-none d-sm-block read-more">Update</button>
          </Link>
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
  const [params] = useState({});
  const properties = useProperties(params);
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
                          Number of Bedrooms
                      </li>
                      <li>
                          Number of Kitchens
                      </li>
                      <li>
                          Number of Bathrooms
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="view-property-page">
              <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                {properties.map((property) => {
                  const [image] = property.images;
                  const { bedroom, type } = property;
                  return (
                    <div className="col" key={property._id}>
                      <ViewPropertyComp
                        propertyImage={
                          (image && image.path) || "/images/hero5.jpg"
                        }
                        propertyTitle={`${bedroom} bedroom ${type}`}
                        propertyBathroom={property.bathroom}
                        propertyBedroom={bedroom}
                        propertyToilet={property.toilet}
                        propertyId={property._id}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </NavDefaultLayout>
  );
};

export default ViewProperty;
