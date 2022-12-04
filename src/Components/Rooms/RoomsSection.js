import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../ContextApi/api";
const RoomsSection = ({ cityName }) => {
  const { roomList, checkIn, checkOut } = useContext(DataContext);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const navigate = useNavigate();
  const goToDetails = (id) => {
    if (!localStorage.getItem("OYO_Auth")) {
      window.location.href = "/login";
    }

    navigate(`/roomsDetails/${id}/${checkIn}/${checkOut}`);
  };
  return (
    <>
      <div className="p-4 col-9  roomSection-container">
        <div>
          <h4>{`${cityName.length} OYOs in this city`}</h4>
          <hr className="hr-filter" />
          <img
            className="border-end cursor-pointer"
            src="/img/offer.png"
            alt="offer"
          />
        </div>
        {cityName.map((item, index) => {
          return (
            <div className="d-flex mt-5" key={index}>
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                infinite={true}
                autoPlay={false}
                dotListclassName="custom-dot-list-style"
                itemclassName="carousel-item-padding-40-px"
                containerclassName="carousel-container"
                className="carousel-container  cursor-pointer"
              >
                {item.imageUrls.map((value, index) => {
                  return (
                    <img
                      className="banner-img"
                      src={value}
                      alt="room"
                      key={index}
                    />
                  );
                })}
              </Carousel>
              <div className="ms-2 ">
                <h5
                  className="fw-bold  cursor-pointer"
                  onClick={() => goToDetails(item._id)}
                >
                  {item.name}
                </h5>
                <p className="small">{item.area}</p>
                <p className="small">{item.city}</p>
                <p className="small">
                  <span className="ratings text-light p-1 ">
                    {item.ratings} <i className="fa-solid fa-star"></i>
                  </span>
                  <span> (2 ratings) . Fabulous</span>
                </p>
                <p className="small">
                  {item.amenities.map((value, index) => {
                    return (
                      <span key={index}>
                        <i className="bx bx-check-circle me-2 ms-1"></i>
                        {value}
                      </span>
                    );
                  })}
                </p>
                <div className="room-pricing-margin">
                  <span
                    className="me-3 fw-bold fs-4"
                    style={{ color: "rgb(238, 42, 36)" }}
                  >
                    &#8377; {item.discountedRate}
                  </span>
                  <span>
                    <strike>&#8377; {item.actualRate}</strike>
                  </span>
                  <span className="ms-3" style={{ color: "rgb(245, 166, 35)" }}>
                    47% off
                  </span>
                  <p className="small">per room per night</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RoomsSection;
