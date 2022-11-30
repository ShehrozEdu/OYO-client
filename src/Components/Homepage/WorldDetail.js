import React from "react";

const WorldDetail = () => {
  return (
    <>
      <div className="world-main-container  ">
        <div className="world-map position-relative">
          <div className="india-container position-absolute">
            <div className="common-location-wrap">
              <img
                className="world-img cursor-pointer "
                src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_1.jpg"
                alt="India"
              />
            </div>
          </div>
          <div className="china-container position-absolute">
            <div className="common-location-wrap">
              <img
                className="world-img cursor-pointer"
                src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_2.jpg"
                alt="China"
              />
            </div>
          </div>
          <div className="malaysia-container position-absolute">
            <div className="common-location-wrap">
              <img
                className="world-img cursor-pointer"
                src=" https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_3.jpg"
              />
            </div>
          </div>
          <div className="nepal-container position-absolute">
            <div className="common-location-wrap">
              <img
                className="world-img cursor-pointer"
                src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_4.jpg"
                alt="Nepal"
              />
            </div>
          </div>
          <div className="indonesia-container position-absolute">
            <div className="common-location-wrap">
              <img
                className="world-img cursor-pointer"
                src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_5.jpg"
                alt="Indonesia"
              />
            </div>
          </div>
          <div className="uae-container position-absolute">
            <div className="common-location-wrap">
              <img
                className="world-img cursor-pointer"
                src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_6.jpg"
                alt="UAE"
              />
            </div>
          </div>
          <img
            src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetImage.jpg"
            alt="Map"
          />
        </div>
        <div className="world-detail d-flex flex-column justify-content-center m-lg-3">
          <h3 className="fw-bolder my-2">
            World's leading chain of hotels and homes
          </h3>
          <p>More Destinations. More Ease. More Affordable.</p>
          <div className="mt-5">
            <div className="expansion">
              <div className="numberCountries">
                <span className="fw-bold">35</span> Countries
              </div>
            </div>
            <div className="expansion border-left">
              <div className="numberCountries">
                <span className="fw-bold me-1">157,000+</span> Hotels &amp;
                Homes
              </div>
            </div>
          </div>
          <ul className="countryList p-0 d-flex flex-wrap">
            <li className="countryName d-block">
              <span
                className="circle"
                style={{ backgroundColor: " rgb(26, 182, 79)" }}
              >
                &nbsp;
              </span>
              <span className="">India</span>
            </li>
            <li className="countryName d-block">
              <span
                className="circle"
                style={{ backgroundColor: "rgb(255, 127, 123)" }}
              >
                &nbsp;
              </span>
              <span className="">China</span>
            </li>
            <li className="countryName d-block">
              <span
                className="circle"
                style={{ backgroundColor: "rgb(245, 166, 35)" }}
              >
                &nbsp;
              </span>
              <span className="">Malaysia</span>
            </li>
            <li className="countryName d-block">
              <span
                className="circle"
                style={{ backgroundColor: " rgb(95, 214, 242)" }}
              >
                &nbsp;
              </span>
              <span className="">Nepal</span>
            </li>
            <li className="countryName d-block">
              <span
                className="circle"
                style={{ backgroundColor: "rgb(254, 148, 241)" }}
              >
                &nbsp;
              </span>
              <span className="">Indonesia</span>
            </li>
            <li className="countryName d-block">
              <span
                className="circle"
                style={{ backgroundColor: "rgb(126, 137, 228)" }}
              >
                &nbsp;
              </span>
              <span className="">UAE</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WorldDetail;
