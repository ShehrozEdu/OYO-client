import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const RoomsSection = () => {
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
  return (
    <>
      <div className="p-4 col-9  roomSection-container">
        <div>
          <h4>11 OYOs in Jammu, Jammu</h4>
          <hr className="hr-filter" />
          <img
            className="border-end cursor-pointer"
            src="/img/offer.png"
            alt="offer"
          />
        </div>
        <div className="d-flex mt-5">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={true}
            autoPlay={false}
            dotListclassName="custom-dot-list-style"
            itemclassName="carousel-item-padding-40-px"
            containerclassName="carousel-container"
            className="carousel-container"
          >
            <img
              className="banner-img"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/medium/11263bf33c8b089a.jpg"
              alt="room"
            />
            <img
              className="banner-img"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/medium/947e5ac471022b09.jpg"
              alt="room"
            />
            <img
              className="banner-img"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/medium/eaf76beee8328589.jpg"
              alt="room"
            />
          </Carousel>
          <div className="ms-2">
            <h5 className="fw-bold">OYO 72887 LODGE STAY Height</h5>
            <p className="small">147, RS PURA NEAR BORDER LINE</p>
            <p className="small">
              <span className="ratings text-light  ">
                5.0 <i className="fa-solid fa-star"></i>
              </span>
              <span> (2 ratings) . Fabulous</span>
            </p>
            <p className="small">
              <span className="">
                <i class="bx bx-check-circle me-2"></i>Living Room
              </span>
              <i class="bx bx-check-circle me-2"></i>
              <span className="ms-5">Cot</span>
              <i class="bx bx-check-circle me-2"></i>
              <span className="ms-5">{"Washing Machine".slice(0, 6)}...</span>
            </p>
            <div className="room-pricing-margin">
              <span
                className="me-3 fw-bold fs-4"
                style={{ color: "rgb(238, 42, 36)" }}
              >
                &#8377; 757
              </span>
              <span>
                <strike>&#8377; 1447</strike>
              </span>
              <span className="ms-3" style={{ color: "rgb(245, 166, 35)" }}>
                47% off
              </span>
              <p className="small">per room per night</p>
            </div>
          </div>
        </div>
        <div className="d-flex mt-5">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={true}
            autoPlay={false}
            dotListclassName="custom-dot-list-style"
            itemclassName="carousel-item-padding-40-px"
            containerclassName="carousel-container"
            className="carousel-container"
          >
            <img
              className="banner-img"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/medium/11263bf33c8b089a.jpg"
              alt="room"
            />
            <img
              className="banner-img"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/medium/947e5ac471022b09.jpg"
              alt="room"
            />
            <img
              className="banner-img"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/medium/eaf76beee8328589.jpg"
              alt="room"
            />
          </Carousel>
          <div className="ms-2">
            <h5 className="fw-bold">OYO 72887 LODGE STAY Height</h5>
            <p className="small">147, RS PURA NEAR BORDER LINE</p>
            <p className="small">
              <span className="ratings text-light  ">
                5.0 <i className="fa-solid fa-star"></i>
              </span>
              <span> (2 ratings) . Fabulous</span>
            </p>
            <p className="small">
              <span className="">
                <i class="bx bx-check-circle me-2"></i>Living Room
              </span>
              <i class="bx bx-check-circle me-2"></i>
              <span className="ms-5">Cot</span>
              <i class="bx bx-check-circle me-2"></i>
              <span className="ms-5">{"Washing Machine".slice(0, 6)}...</span>
            </p>
            <div className="room-pricing-margin">
              <span
                className="me-3 fw-bold fs-4"
                style={{ color: "rgb(238, 42, 36)" }}
              >
                &#8377; 757
              </span>
              <span>
                <strike>&#8377; 1447</strike>
              </span>
              <span className="ms-3" style={{ color: "rgb(245, 166, 35)" }}>
                47% off
              </span>
              <p className="small">per room per night</p>
            </div>
          </div>
        </div>
        <div className="d-flex mt-5">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={true}
            autoPlay={false}
            dotListclassName="custom-dot-list-style"
            itemclassName="carousel-item-padding-40-px"
            containerclassName="carousel-container"
            className="carousel-container"
          >
            <img
              className="banner-img"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/medium/11263bf33c8b089a.jpg"
              alt="room"
            />
            <img
              className="banner-img"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/medium/947e5ac471022b09.jpg"
              alt="room"
            />
            <img
              className="banner-img"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/medium/eaf76beee8328589.jpg"
              alt="room"
            />
          </Carousel>
          <div className="ms-2">
            <h5 className="fw-bold">OYO 72887 LODGE STAY Height</h5>
            <p className="small">147, RS PURA NEAR BORDER LINE</p>
            <p className="small">
              <span className="ratings text-light  ">
                5.0 <i className="fa-solid fa-star"></i>
              </span>
              <span> (2 ratings) . Fabulous</span>
            </p>
            <p className="small">
              <span className="">
                <i class="bx bx-check-circle me-2"></i>Living Room
              </span>
              <i class="bx bx-check-circle me-2"></i>
              <span className="ms-5">Cot</span>
              <i class="bx bx-check-circle me-2"></i>
              <span className="ms-5">{"Washing Machine".slice(0, 6)}...</span>
            </p>
            <div className="room-pricing-margin">
              <span
                className="me-3 fw-bold fs-4"
                style={{ color: "rgb(238, 42, 36)" }}
              >
                &#8377; 757
              </span>
              <span>
                <strike>&#8377; 1447</strike>
              </span>
              <span className="ms-3" style={{ color: "rgb(245, 166, 35)" }}>
                47% off
              </span>
              <p className="small">per room per night</p>
            </div>
          </div>
        </div>
        <div className="d-flex mt-5">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={true}
            autoPlay={false}
            dotListclassName="custom-dot-list-style"
            itemclassName="carousel-item-padding-40-px"
            containerclassName="carousel-container"
            className="carousel-container"
          >
            <img
              className="banner-img"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/medium/11263bf33c8b089a.jpg"
              alt="room"
            />
            <img
              className="banner-img"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/medium/947e5ac471022b09.jpg"
              alt="room"
            />
            <img
              className="banner-img"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/medium/eaf76beee8328589.jpg"
              alt="room"
            />
          </Carousel>
          <div className="ms-2">
            <h5 className="fw-bold">OYO 72887 LODGE STAY Height</h5>
            <p className="small">147, RS PURA NEAR BORDER LINE</p>
            <p className="small">
              <span className="ratings text-light  ">
                5.0 <i className="fa-solid fa-star"></i>
              </span>
              <span> (2 ratings) . Fabulous</span>
            </p>
            <p className="small">
              <span className="">
                <i class="bx bx-check-circle me-2"></i>Living Room
              </span>
              <i class="bx bx-check-circle me-2"></i>
              <span className="ms-5">Cot</span>
              <i class="bx bx-check-circle me-2"></i>
              <span className="ms-5">{"Washing Machine".slice(0, 6)}...</span>
            </p>
            <div className="room-pricing-margin">
              <span
                className="me-3 fw-bold fs-4"
                style={{ color: "rgb(238, 42, 36)" }}
              >
                &#8377; 757
              </span>
              <span>
                <strike>&#8377; 1447</strike>
              </span>
              <span className="ms-3" style={{ color: "rgb(245, 166, 35)" }}>
                47% off
              </span>
              <p className="small">per room per night</p>
            </div>
          </div>
        </div>
        <div className="d-flex mt-5">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={true}
            autoPlay={false}
            dotListclassName="custom-dot-list-style"
            itemclassName="carousel-item-padding-40-px"
            containerclassName="carousel-container"
            className="carousel-container"
          >
            <img
              className="banner-img"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/medium/11263bf33c8b089a.jpg"
              alt="room"
            />
            <img
              className="banner-img"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/medium/947e5ac471022b09.jpg"
              alt="room"
            />
            <img
              className="banner-img"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/medium/eaf76beee8328589.jpg"
              alt="room"
            />
          </Carousel>
          <div className="ms-2">
            <h5 className="fw-bold">OYO 72887 LODGE STAY Height</h5>
            <p className="small">147, RS PURA NEAR BORDER LINE</p>
            <p className="small">
              <span className="ratings text-light  ">
                5.0 <i className="fa-solid fa-star"></i>
              </span>
              <span> (2 ratings) . Fabulous</span>
            </p>
            <p className="small">
              <span className="">
                <i class="bx bx-check-circle me-2"></i>Living Room
              </span>
              <i class="bx bx-check-circle me-2"></i>
              <span className="ms-5">Cot</span>
              <i class="bx bx-check-circle me-2"></i>
              <span className="ms-5">{"Washing Machine".slice(0, 6)}...</span>
            </p>
            <div className="room-pricing-margin">
              <span
                className="me-3 fw-bold fs-4"
                style={{ color: "rgb(238, 42, 36)" }}
              >
                &#8377; 757
              </span>
              <span>
                <strike>&#8377; 1447</strike>
              </span>
              <span className="ms-3" style={{ color: "rgb(245, 166, 35)" }}>
                47% off
              </span>
              <p className="small">per room per night</p>
            </div>
          </div>
        </div>
        <div className="d-flex mt-5">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={true}
            autoPlay={false}
            dotListclassName="custom-dot-list-style"
            itemclassName="carousel-item-padding-40-px"
            containerclassName="carousel-container"
            className="carousel-container"
          >
            <img
              className="banner-img"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/medium/11263bf33c8b089a.jpg"
              alt="room"
            />
            <img
              className="banner-img"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/medium/947e5ac471022b09.jpg"
              alt="room"
            />
            <img
              className="banner-img"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/medium/eaf76beee8328589.jpg"
              alt="room"
            />
          </Carousel>
          <div className="ms-2">
            <h5 className="fw-bold">OYO 72887 LODGE STAY Height</h5>
            <p className="small">147, RS PURA NEAR BORDER LINE</p>
            <p className="small">
              <span className="ratings text-light  ">
                5.0 <i className="fa-solid fa-star"></i>
              </span>
              <span> (2 ratings) . Fabulous</span>
            </p>
            <p className="small">
              <span className="">
                <i class="bx bx-check-circle me-2"></i>Living Room
              </span>
              <i class="bx bx-check-circle me-2"></i>
              <span className="ms-5">Cot</span>
              <i class="bx bx-check-circle me-2"></i>
              <span className="ms-5">{"Washing Machine".slice(0, 6)}...</span>
            </p>
            <div className="room-pricing-margin">
              <span
                className="me-3 fw-bold fs-4"
                style={{ color: "rgb(238, 42, 36)" }}
              >
                &#8377; 757
              </span>
              <span>
                <strike>&#8377; 1447</strike>
              </span>
              <span className="ms-3" style={{ color: "rgb(245, 166, 35)" }}>
                47% off
              </span>
              <p className="small">per room per night</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomsSection;
