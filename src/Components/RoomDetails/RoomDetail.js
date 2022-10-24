import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const RoomDetail = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="roomDetails-container">
        <div>
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={true}
            autoPlay={false}
            dotListclassName="custom-dot-list-style"
            itemclassName="carousel-item-padding-40-px"
            containerclassName="carousel-container"
            className="carousel-container-details"
          >
            <img
              className="banner-img-details"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/large/b6bbb10ed9dd289e.jpg"
              alt="room"
            />
            <img
              className="banner-img-details"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/large/d50ee715e8233ec6.jpg"
              alt="room"
            />
            <img
              className="banner-img-details"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/large/eaf76beee8328589.jpg"
              alt="room"
            />
            <img
              className="banner-img-details"
              src="https://images.oyoroomscdn.com/uploads/hotel_image/102192/large/11263bf33c8b089a.jpg"
              alt="room"
            />
          </Carousel>
        </div>
        <div className="roomDetails-text-main d-flex justify-content-space-between col-9">
          <div className="roomDetails-text-left p-5">
            <h2 className="fw-bold ">OYO 72887 LODGE STAY Heights</h2>
            <p className="small text-muted">147, RS PURA NEAR BORDER LINE</p>
            <span className="ratings-detail-border p-2">
              <span className="small fw-bold ratings-detail-green">
                5.0
                <i className="ms-2 fa-solid fa-star me-2"></i>
                {`Check in rating >`}
              </span>
              <span className="small"> Delightful experience</span>
            </span>
            <h4 className="fw-bold mt-5">Description</h4>
            <i>
              Did you know that we’ve got 2.5 Crore bookings since March 2020?
              And this is all thanks to the sanitisation & safety measures
              followed at our properties, from disinfecting surfaces with
              high-quality cleaning products and maintaining social distance to
              using protective gear and more.
            </i>

            {/*----------------------------------------------
             AMENITIES
             ------------------------------------------------
              */}
            <h4 className="fw-bold mt-5 ">Amenities</h4>
            <div className="d-flex align-items-center ">
              <div className="d-flex flex-column">
                <p className="margin-amenities">
                  <i className="bx bx-check-circle me-2"></i>WiFi
                </p>
                <p className="margin-amenities">
                  <i className="bx bx-check-circle me-2"></i>Wardrobe
                </p>
              </div>
              <div className="d-flex flex-column">
                <p className="margin-amenities">
                  <i className="bx bx-check-circle me-2"></i>Cot
                </p>
                <p className="margin-amenities">
                  <i className="bx bx-bed"></i>Queen size bed
                </p>
              </div>
              <div className="d-flex flex-column">
                <p className="margin-amenities">
                  <i className="bx bx-window"></i>Window
                </p>
                <p className="margin-amenities">
                  <i className="bx bx-wind"></i>AC
                </p>
              </div>
            </div>

            {/*------------------------
            
                     RATINGS
            ---------------------------
             */}
            <div className="ratingsAndReviews mt-5">
              <h4 className="fw-bold">Ratings and reviews</h4>
              <svg
                width="85"
                height="20"
                viewBox="0 0 85 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M79.3193 20H5.2916C2.37387 20 0 17.6261 0 14.7084V5.2916C0 2.37387 2.37387 0 5.2916 0H79.3193C82.237 0 84.6109 2.37387 84.6109 5.2916V14.7084C84.6109 17.6261 82.237 20 79.3193 20ZM5.2916 0.865401C2.84932 0.865401 0.865401 2.85274 0.865401 5.2916V14.7084C0.865401 17.1507 2.85274 19.1346 5.2916 19.1346H79.3193C81.7616 19.1346 83.7455 17.1473 83.7455 14.7084V5.2916C83.7455 2.84932 81.7582 0.865401 79.3193 0.865401H5.2916Z"
                    fill="#E81D2D"
                  ></path>
                  <path
                    d="M20.8757 13.6788H18.8029V5.77048H20.8757V13.6788Z"
                    fill="#E81D2D"
                  ></path>
                  <path
                    d="M21.8814 11.2571C22.5655 11.7223 23.5301 12.0814 24.4194 12.0814C25.0762 12.0814 25.644 11.9412 25.644 11.452C25.644 11.0655 25.4011 10.9355 24.9735 10.7816L23.7763 10.4327C22.4492 10.0462 21.7137 9.38943 21.7137 8.07594C21.7137 6.5059 23.0409 5.6405 24.7033 5.6405C25.774 5.6405 26.5333 5.8731 27.1901 6.23226V8.13751C26.482 7.64837 25.6953 7.35078 24.7957 7.35078C24.2039 7.35078 23.7524 7.51839 23.7524 7.91859C23.7524 8.27775 23.9953 8.42142 24.4091 8.54798L25.6063 8.90714C27.0498 9.35865 27.7066 10.118 27.7066 11.3289C27.7066 13.0426 26.2528 13.802 24.4741 13.802C23.4172 13.802 22.4628 13.5044 21.8848 13.1589V11.2571H21.8814Z"
                    fill="#E81D2D"
                  ></path>
                  <path
                    d="M32.1225 13.8088C29.841 13.8088 28.271 12.0814 28.271 9.72465C28.271 7.3542 29.841 5.6405 32.1225 5.6405C34.4143 5.6405 35.998 7.3542 35.998 9.72465C35.998 12.0814 34.4143 13.8088 32.1225 13.8088ZM32.1225 7.45682C31.0519 7.45682 30.3575 8.35985 30.3575 9.72465C30.3575 11.0895 31.0519 11.9925 32.1225 11.9925C33.1898 11.9925 33.9115 11.0895 33.9115 9.72465C33.9115 8.35985 33.1898 7.45682 32.1225 7.45682Z"
                    fill="#E81D2D"
                  ></path>
                  <path
                    d="M39.8359 7.0566C39.8359 7.3234 39.7606 7.58678 39.5486 7.95962L38.8063 9.25602H38.3753L39.0594 8.06566C38.9739 8.12039 38.8303 8.16144 38.7037 8.16144C38.0777 8.16144 37.6262 7.68256 37.6262 7.0566C37.6262 6.42379 38.0983 5.94492 38.7311 5.94492C39.3673 5.94492 39.8359 6.42379 39.8359 7.0566ZM38.7276 7.8057C39.1415 7.8057 39.4494 7.47733 39.4494 7.0566C39.4494 6.63245 39.1415 6.3075 38.7276 6.3075C38.3138 6.3075 38.0059 6.63245 38.0059 7.0566C38.0059 7.47391 38.3138 7.8057 38.7276 7.8057Z"
                    fill="#E81D2D"
                  ></path>
                  <path
                    d="M40.1163 7.62441C40.1163 6.62903 40.6055 5.94492 41.3341 5.94492C42.0626 5.94492 42.5518 6.62903 42.5518 7.62441C42.5518 8.61637 42.0626 9.3039 41.3341 9.3039C40.6055 9.3039 40.1163 8.61637 40.1163 7.62441ZM40.5268 7.62441C40.5268 8.38377 40.8039 8.92764 41.3341 8.92764C41.8608 8.92764 42.1413 8.38719 42.1413 7.62441C42.1413 6.86505 41.8608 6.32118 41.3341 6.32118C40.8039 6.32118 40.5268 6.86505 40.5268 7.62441Z"
                    fill="#E81D2D"
                  ></path>
                  <path
                    d="M42.8699 7.62441C42.8699 6.62903 43.359 5.94492 44.0876 5.94492C44.8162 5.94492 45.3053 6.62903 45.3053 7.62441C45.3053 8.61637 44.8162 9.3039 44.0876 9.3039C43.359 9.3039 42.8699 8.61637 42.8699 7.62441ZM43.2803 7.62441C43.2803 8.38377 43.5574 8.92764 44.0876 8.92764C44.6144 8.92764 44.8948 8.38719 44.8948 7.62441C44.8948 6.86505 44.6144 6.32118 44.0876 6.32118C43.5574 6.32118 43.2803 6.86505 43.2803 7.62441Z"
                    fill="#E81D2D"
                  ></path>
                  <path
                    d="M46.7624 9.25601H46.3519V6.4922L45.5447 6.90609V6.48194L46.5127 5.98938H46.7624V9.25601Z"
                    fill="#E81D2D"
                  ></path>
                  <path
                    d="M39.6374 13.4462V13.819H37.5543V13.7985L38.5531 12.5705C38.8883 12.1669 39.1586 11.8522 39.1586 11.4452C39.1586 11.1168 38.9499 10.8808 38.5565 10.8808C38.1803 10.8808 37.8553 11.0997 37.6262 11.3323V10.9081C37.8451 10.679 38.2008 10.5079 38.5873 10.5079C39.1859 10.5079 39.5588 10.8637 39.5588 11.4281C39.5588 11.8967 39.2509 12.2832 38.8883 12.7313L38.2863 13.4496H39.6374V13.4462Z"
                    fill="#E81D2D"
                  ></path>
                  <path
                    d="M40.0205 12.1874C40.0205 11.192 40.5096 10.5079 41.2382 10.5079C41.9668 10.5079 42.4559 11.192 42.4559 12.1874C42.4559 13.1794 41.9668 13.8669 41.2382 13.8669C40.5096 13.8669 40.0205 13.1794 40.0205 12.1874ZM40.431 12.1874C40.431 12.9468 40.708 13.4907 41.2382 13.4907C41.765 13.4907 42.0455 12.9502 42.0455 12.1874C42.0455 11.4281 41.765 10.8842 41.2382 10.8842C40.708 10.8842 40.431 11.4281 40.431 12.1874Z"
                    fill="#E81D2D"
                  ></path>
                  <path
                    d="M44.0192 13.819H43.6088V11.0552L42.8015 11.4691V11.045L43.7695 10.5524H44.0192V13.819Z"
                    fill="#E81D2D"
                  ></path>
                  <path
                    d="M46.6052 12.8134C46.6052 13.477 46.0955 13.8669 45.4353 13.8669C45.0693 13.8669 44.8025 13.7677 44.5973 13.607V13.1554C44.8299 13.3846 45.1035 13.5078 45.4216 13.5078C45.8561 13.5078 46.2186 13.2512 46.2186 12.8168C46.2186 12.3927 45.8561 12.1327 45.4148 12.1327C45.1172 12.1327 44.9462 12.1977 44.7238 12.2866V10.5592H46.4341V10.9321H45.0693V11.8283C45.1651 11.7906 45.3019 11.7735 45.4558 11.7735C46.0955 11.7735 46.6052 12.1566 46.6052 12.8134Z"
                    fill="#E81D2D"
                  ></path>
                  <path
                    d="M12.2969 8.15803L9.99485 10.4601L9.06104 9.52626C8.79765 9.26287 8.36666 9.26287 8.12722 9.52626C7.86384 9.78964 7.86384 10.2206 8.12722 10.4601L9.51597 11.8488C9.63569 11.9685 9.82724 12.0404 9.99485 12.0404C10.1625 12.0404 10.3301 11.9685 10.4737 11.8488L13.2546 9.0679C13.518 8.80452 13.518 8.37353 13.2546 8.13409C12.9673 7.89465 12.5603 7.89465 12.2969 8.15803Z"
                    fill="#E81D2D"
                  ></path>
                  <path
                    d="M10.6893 15.7209C7.53551 15.7209 4.96667 13.1555 4.96667 9.99829C4.96667 6.84111 7.53209 4.2757 10.6893 4.2757C13.8464 4.2757 16.4119 6.84111 16.4119 9.99829C16.4119 13.1555 13.8464 15.7209 10.6893 15.7209ZM10.6893 5.14452C8.01097 5.14452 5.83208 7.32341 5.83208 10.0017C5.83208 12.68 8.01097 14.8589 10.6893 14.8589C13.3676 14.8589 15.5465 12.68 15.5465 10.0017C15.5499 7.32341 13.3676 5.14452 10.6893 5.14452Z"
                    fill="#E81D2D"
                  ></path>
                  <path
                    d="M51.0962 7.63809C51.5717 7.63809 51.948 7.76465 52.2319 7.98015V8.89344C51.9001 8.60269 51.5512 8.46929 51.1407 8.46929C50.3608 8.46929 49.8512 9.03026 49.8512 9.88882C49.8512 10.7405 50.3608 11.3015 51.1407 11.3015C51.5512 11.3015 51.9001 11.1749 52.2319 10.8842V11.7975C51.948 12.0096 51.5717 12.1395 51.0962 12.1395C49.8341 12.1395 48.9344 11.2399 48.9344 9.89224C48.9344 8.5377 49.8341 7.63809 51.0962 7.63809Z"
                    fill="black"
                  ></path>
                  <path
                    d="M55.9192 7.70993V8.5035H53.8532V9.45441H55.7243V10.2275H53.8532V11.2639H55.9192V12.0643H52.9604V7.70993H55.9192Z"
                    fill="black"
                  ></path>
                  <path
                    d="M57.5235 10.4395V12.0643H56.6239V7.70993H58.4197C59.333 7.70993 59.9453 8.19907 59.9453 9.09184C59.9453 9.78621 59.5622 10.2275 58.9533 10.3745L60.1026 12.0643H59.0799L58.0024 10.4395H57.5235ZM57.5235 9.69385H58.3615C58.8165 9.69385 59.0491 9.45099 59.0491 9.09184C59.0491 8.72242 58.8165 8.48298 58.3615 8.48298H57.5235V9.69385Z"
                    fill="black"
                  ></path>
                  <path
                    d="M60.3146 7.70993H64.0327V8.5035H62.6269V12.0643H61.7136V8.5035H60.318V7.70993H60.3146Z"
                    fill="black"
                  ></path>
                  <path
                    d="M65.5344 12.0643H64.6279V7.70993H65.5344V12.0643Z"
                    fill="black"
                  ></path>
                  <path
                    d="M66.3656 12.0643V7.70993H69.2662V8.5035H67.2652V9.61176H69.1157V10.3985H67.2652V12.0643H66.3656Z"
                    fill="black"
                  ></path>
                  <path
                    d="M70.8193 12.0643H69.9128V7.70993H70.8193V12.0643Z"
                    fill="black"
                  ></path>
                  <path
                    d="M74.6058 7.70993V8.5035H72.5397V9.45441H74.4108V10.2275H72.5397V11.2639H74.6058V12.0643H71.647V7.70993H74.6058Z"
                    fill="black"
                  ></path>
                  <path
                    d="M75.3104 7.70993H76.8497C78.17 7.70993 78.9978 8.56165 78.9978 9.88883C78.9978 11.216 78.1666 12.0677 76.8497 12.0677H75.3104V7.70993ZM76.812 11.2639C77.6432 11.2639 78.0947 10.7303 78.0947 9.88883C78.0947 9.03711 77.6398 8.50692 76.812 8.50692H76.21V11.2673H76.812V11.2639Z"
                    fill="black"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="84.6109" height="20" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div className="border mt-3 d-flex">
                <div className="left border-end p-5 ">
                  <span className=" fw-bolder p-2 green-background text-light">
                    5.0<i className="ms-2 fa-solid fa-star me-2"></i>
                  </span>
                  <p className="small fw-bold m-0 p-0 mt-3">FABULOUS</p>
                  <p className="small m-0 p-0 ms-2">2 ratings</p>
                </div>
                <div className="right p-5"></div>
              </div>
            </div>
            <div>
              <h4 className="fw-bold mt-5">Hotel policies</h4>
            </div>
          </div>

          <div className="roomDetails-text-right p-5">RIGHT</div>
        </div>
      </div>
    </>
  );
};

export default RoomDetail;
