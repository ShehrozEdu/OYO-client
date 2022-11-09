import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "antd";
import "antd/dist/antd.min.css";
import axios from "axios";
import moment from "moment";
import { DataContext } from "../ContextApi/api";

const SearchContainer = () => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectLocation, setSelectLocation] = useState(null);
  const { setRoomList, setCheckIn, setCheckOut } = useContext(DataContext);
  const navigate = useNavigate();
  let locationRef = useRef();
  const { RangePicker } = DatePicker;
  let getLocationList = async (event) => {
    let city = event.target.value;

    if (city === "" || city.length < 2) {
      setSelectLocation(null);
      setLocation([]);

      return false;
    }
    let url = "http://localhost:9000/api/get-location-by-name?city=" + city;

    try {
      let response = await axios.get(url);
      let { location } = response.data;
      setLocation([...location]);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
  let locationClicked = (location) => {
    location = JSON.parse(location);
    locationRef.current.value = `${location.city}`;
    setSelectLocation({ ...location });
    setLocation([]);
  };
  let getRoomFiltered = async () => {
    let room = locationRef.current.value;

    let url = `http://localhost:9000/api/get-room-location-by-id?lid=${selectLocation.city_id}&city=${room}`;

    try {
      let response = await axios.get(url);
      let { result } = response.data;
      setRoomList([...result]);
      const test = result.map((item) => item.name);
      // console.log(result);
      navigate("/rooms/" + test);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
  let quantityInc = () => {
    setQuantity(quantity + 1);
  };
  let quantityDec = () => {
    if (quantity < 1) {
      setQuantity(quantity);
    } else {
      setQuantity(quantity - 1);
    }
  };
  const filterByDates = (dates) => {
    setCheckIn(moment(dates[0]).format("DD-MM-YYYY"));
    setCheckOut(moment(dates[1]).format("DD-MM-YYYY"));
  };
  return (
    <>
      <div className="searchContainer">
        <div className="searchContainer__wrapper">
          <span class="searchContainer__bannerSvg searchContainer__bannerSvg--1">
            <svg width="212" height="93" xmlns="http://www.w3.org/2000/svg">
              <g
                transform="translate(0 -31)"
                fill="none"
                fill-rule="evenodd"
                opacity=".6"
              >
                <rect
                  fill="#C11F3D"
                  x="14.311"
                  y="32.451"
                  width="19.209"
                  height="6.616"
                  rx="3.308"
                ></rect>
                <rect
                  fill="#C11F3D"
                  x="165.943"
                  y="48.731"
                  width="11.338"
                  height="6.616"
                  rx="3.308"
                ></rect>
                <path
                  d="M62.465 95.555H115.3v27.822H62.465V95.555zm149.313 28.424H.482l.14-.6h211.156v.6zM63.78 35.212h50.956v4.694H63.78v-4.694z"
                  fill="#A81433"
                  fill-rule="nonzero"
                ></path>
                <path
                  fill="#880F2F"
                  d="M114.736 35.212h26.043v4.694h-26.043z"
                ></path>
                <path
                  fill="#880F2F"
                  d="M114.736 39.905h22.808v83.474h-22.808z"
                ></path>
                <path
                  fill="#B21737"
                  d="M66.874 39.905h47.862v54.33H66.874z"
                ></path>
                <path
                  fill="#880F2F"
                  d="M57.587 90.017h57.15v6.292h-57.15z"
                ></path>
                <path
                  d="M120.978 107.52h10.324v15.857h-10.324V107.52zm-3.426-58.042h17.176v3.471h-17.177v-3.471zm0 10.321h17.176v3.472h-17.177v-3.472zm0 10.325h17.176v3.47h-17.177v-3.47zm0 10.324h17.176v3.47h-17.177v-3.47z"
                  fill="#A81433"
                  fill-rule="nonzero"
                ></path>
                <path
                  d="M73.353 49.478h34.722v3.471H73.353v-3.471zm0 10.321h34.722v3.472H73.353v-3.472zm0 10.324h34.722v3.472H73.353v-3.472zm0 10.325h34.722v3.47H73.353v-3.47z"
                  fill="#880F2F"
                  fill-rule="nonzero"
                ></path>
                <path
                  fill="#A81433"
                  d="M72.623 25.29h33.267v7.375H72.623z"
                ></path>
                <path
                  d="M78.398 32.349h1.126v2.864h-1.126v-2.864zm20.595 0h1.126v2.864h-1.126v-2.864z"
                  fill="#A81433"
                  fill-rule="nonzero"
                ></path>
                <g transform="translate(5.912 63.749)">
                  <circle
                    fill="#B31941"
                    cx="8.86"
                    cy="8.829"
                    r="8.801"
                  ></circle>
                  <path
                    fill="#931435"
                    d="M8.362 17.63h.565v14.283h-.565z"
                  ></path>
                </g>
                <g transform="translate(30.125 59.243)">
                  <path
                    fill="#931435"
                    d="M10.172 12.205h.845v24.213h-.845z"
                  ></path>
                  <circle
                    fill="#B31941"
                    cx="10.454"
                    cy="10.516"
                    r="10.417"
                  ></circle>
                </g>
                <g transform="translate(151.187 70.224)">
                  <path fill="#931435" d="M6.667.901h.845v24.213h-.845z"></path>
                  <circle
                    fill="#B31941"
                    cx="7.089"
                    cy="6.926"
                    r="6.827"
                  ></circle>
                </g>
                <g transform="translate(184.69 59.807)">
                  <path
                    fill="#931435"
                    d="M10.037 11.642h.845v24.213h-.845z"
                  ></path>
                  <circle
                    fill="#B31941"
                    cx="10.459"
                    cy="10.516"
                    r="10.417"
                  ></circle>
                </g>
              </g>
            </svg>
          </span>
          <span className="searchContainer__bannerSvg position-absolute searchContainer__bannerSvg--2">
            <svg width="212" height="93" xmlns="http://www.w3.org/2000/svg">
              <g
                transform="translate(0 -31)"
                fill="none"
                fill-rule="evenodd"
                opacity=".6"
              >
                <rect
                  fill="#C11F3D"
                  x="14.311"
                  y="32.451"
                  width="19.209"
                  height="6.616"
                  rx="3.308"
                ></rect>
                <rect
                  fill="#C11F3D"
                  x="165.943"
                  y="48.731"
                  width="11.338"
                  height="6.616"
                  rx="3.308"
                ></rect>
                <path
                  d="M62.465 95.555H115.3v27.822H62.465V95.555zm149.313 28.424H.482l.14-.6h211.156v.6zM63.78 35.212h50.956v4.694H63.78v-4.694z"
                  fill="#A81433"
                  fill-rule="nonzero"
                ></path>
                <path
                  fill="#880F2F"
                  d="M114.736 35.212h26.043v4.694h-26.043z"
                ></path>
                <path
                  fill="#880F2F"
                  d="M114.736 39.905h22.808v83.474h-22.808z"
                ></path>
                <path
                  fill="#B21737"
                  d="M66.874 39.905h47.862v54.33H66.874z"
                ></path>
                <path
                  fill="#880F2F"
                  d="M57.587 90.017h57.15v6.292h-57.15z"
                ></path>
                <path
                  d="M120.978 107.52h10.324v15.857h-10.324V107.52zm-3.426-58.042h17.176v3.471h-17.177v-3.471zm0 10.321h17.176v3.472h-17.177v-3.472zm0 10.325h17.176v3.47h-17.177v-3.47zm0 10.324h17.176v3.47h-17.177v-3.47z"
                  fill="#A81433"
                  fill-rule="nonzero"
                ></path>
                <path
                  d="M73.353 49.478h34.722v3.471H73.353v-3.471zm0 10.321h34.722v3.472H73.353v-3.472zm0 10.324h34.722v3.472H73.353v-3.472zm0 10.325h34.722v3.47H73.353v-3.47z"
                  fill="#880F2F"
                  fill-rule="nonzero"
                ></path>
                <path
                  fill="#A81433"
                  d="M72.623 25.29h33.267v7.375H72.623z"
                ></path>
                <path
                  d="M78.398 32.349h1.126v2.864h-1.126v-2.864zm20.595 0h1.126v2.864h-1.126v-2.864z"
                  fill="#A81433"
                  fill-rule="nonzero"
                ></path>
                <g transform="translate(5.912 63.749)">
                  <circle
                    fill="#B31941"
                    cx="8.86"
                    cy="8.829"
                    r="8.801"
                  ></circle>
                  <path
                    fill="#931435"
                    d="M8.362 17.63h.565v14.283h-.565z"
                  ></path>
                </g>
                <g transform="translate(30.125 59.243)">
                  <path
                    fill="#931435"
                    d="M10.172 12.205h.845v24.213h-.845z"
                  ></path>
                  <circle
                    fill="#B31941"
                    cx="10.454"
                    cy="10.516"
                    r="10.417"
                  ></circle>
                </g>
                <g transform="translate(151.187 70.224)">
                  <path fill="#931435" d="M6.667.901h.845v24.213h-.845z"></path>
                  <circle
                    fill="#B31941"
                    cx="7.089"
                    cy="6.926"
                    r="6.827"
                  ></circle>
                </g>
                <g transform="translate(184.69 59.807)">
                  <path
                    fill="#931435"
                    d="M10.037 11.642h.845v24.213h-.845z"
                  ></path>
                  <circle
                    fill="#B31941"
                    cx="10.459"
                    cy="10.516"
                    r="10.417"
                  ></circle>
                </g>
              </g>
            </svg>
          </span>
          <h1 className="searchContainer__tagline">
            Over 157,000 hotels and homes across 35 countries
          </h1>
          <div className="p-lg-4 ms-lg-5 d-flex justify-content-center align-items-center searchInput position-relative">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <input
                type="text"
                placeholder="Search for a location"
                className="p-lg-2 searchInput fw-bold"
                onChange={getLocationList}
                ref={locationRef}
                onClick={() => setOpen(false)}
              />
              <div className="list-group position-absolute location_list ">
                {location.map((location) => {
                  return (
                    <li
                      className="list-group-item list-group-item-action list-group-item mb-0 position-relative cursor-pointer "
                      key={location._id}
                      onClick={() =>
                        locationClicked(`${JSON.stringify(location)}`)
                      }
                    >
                      {location.city}
                    </li>
                  );
                })}
              </div>
            </div>
            <div>
              <RangePicker
                className="p-lg-2 searchInput fw-bolder"
                onClick={() => setOpen(false)}
                onChange={filterByDates}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder={`1 Room, ${quantity} Guest`}
                className="p-lg-2 searchInput fw-bold"
                onClick={() => setOpen(true)}
              />
              {open && (
                <div className="list-group position-absolute location_list ">
                  <li
                    className="list-group-item list-group-item-action list-group-item mb-0 position-relative cursor-pointer "
                    key={location._id}
                  >
                    <div className="d-flex justify-content-between fw-bold">
                      <p className="ms-3">Rooms</p>
                      <p className="me-3">Guests</p>
                    </div>
                    <hr style={{ color: "black" }} />
                    <div className="d-flex justify-content-between ">
                      <p className="ms-3">Room</p>
                      <div className="d-flex justify-content-center ">
                        <span
                          className="me-2 border cursor-pointer btnAdd"
                          onClick={() => quantityDec()}
                        >
                          -
                        </span>
                        <span className="me-2">{quantity}</span>
                        <span
                          className="ms-1 border cursor-pointer btnAdd"
                          onClick={() => quantityInc()}
                        >
                          +
                        </span>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between mt-3">
                      <p>Delete Room</p>
                      <p>Add Room</p>
                    </div>
                  </li>
                </div>
              )}
            </div>
            <button
              className="btn btn-success px-5 py-3 "
              onClick={() => getRoomFiltered()}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchContainer;
