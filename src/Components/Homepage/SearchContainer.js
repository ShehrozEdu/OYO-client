import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "antd";
import "antd/dist/antd.min.css";
import axios from "axios";
import moment from "moment";
import { DataContext } from "../ContextApi/api";

const SearchContainer = () => {
  const [location, setLocation] = useState([]);
  const [selectLocation, setSelectLocation] = useState(null);
  const [cityName, setCityName] = useState([]);
  const {
    setRoomList,
    checkIn,
    checkOut,
    setCheckIn,
    setCheckOut,
    setDuplicateRoom,
    duplicateRoom,
  } = useContext(DataContext);
  const navigate = useNavigate();
  let locationRef = useRef();
  const { RangePicker } = DatePicker;
  let getLocationList = async (e) => {
    let city = e.target.value;

    if (city === "" || city.length < 2) {
      setSelectLocation(null);
      setLocation([]);

      return false;
    }
    let url =
      "https://oyo-server.vercel.app/api/get-location-by-name?city=" + city;

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

    let url = `https://oyo-server.vercel.app/api/get-room-location-by-id?lid=${selectLocation.city_id}&city=${room}`;

    try {
      let response = await axios.get(url);
      let { result } = response.data;
      setCityName([...result]);
      setDuplicateRoom([...result]);
      console.log(selectLocation);

      navigate(
        `/rooms?city_id=${selectLocation.city_id}&id=${selectLocation._id}`
      );
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  const filterByDates = (dates) => {
    setCheckIn(moment(dates[0]).format("DD-MM-YYYY"));
    setCheckOut(moment(dates[1]).format("DD-MM-YYYY"));

    let tempRooms = [];

    let availability = false;

    for (const room of duplicateRoom) {
      if (room?.currentBookings?.length > 0) {
        for (const bookings of room.currentBookings) {
          if (
            !moment(moment(dates[0]).format("DD-MM-YYYY")).isBetween(
              bookings.checkInDate,
              bookings.checkOutDate
            ) &&
            !moment(moment(dates[1]).format("DD-MM-YYYY")).isBetween(
              bookings.checkInDate,
              bookings.checkOutDate
            )
          ) {
            if (
              moment(dates[0]).format("DD-MM-YYYY") !== bookings.checkInDate &&
              moment(dates[0]).format("DD-MM-YYYY") !== bookings.checkOutDate &&
              moment(dates[1]).format("DD-MM-YYYY") !== bookings.checkInDate &&
              moment(dates[1]).format("DD-MM-YYYY") !== bookings.checkOutDate
            ) {
              availability = true;
            }
          }
        }
      }
      if (availability === true || room.currentBookings?.length === 0) {
        tempRooms.push(room);
        console.log(room);
      }
      setRoomList(tempRooms);
      console.log(duplicateRoom);
    }
  };
  return (
    <>
      <div className="searchContainer">
        <div className="searchContainer__wrapper">
          <span className="searchContainer__bannerSvg searchContainer__bannerSvg--1">
            <svg width="212" height="93" xmlns="http://www.w3.org/2000/svg">
              <g
                transform="translate(0 -31)"
                fill="none"
                fillRule="evenodd"
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
                  fillRule="nonzero"
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
                  fillRule="nonzero"
                ></path>
                <path
                  d="M73.353 49.478h34.722v3.471H73.353v-3.471zm0 10.321h34.722v3.472H73.353v-3.472zm0 10.324h34.722v3.472H73.353v-3.472zm0 10.325h34.722v3.47H73.353v-3.47z"
                  fill="#880F2F"
                  fillRule="nonzero"
                ></path>
                <path
                  fill="#A81433"
                  d="M72.623 25.29h33.267v7.375H72.623z"
                ></path>
                <path
                  d="M78.398 32.349h1.126v2.864h-1.126v-2.864zm20.595 0h1.126v2.864h-1.126v-2.864z"
                  fill="#A81433"
                  fillRule="nonzero"
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
                fillRule="evenodd"
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
                  fillRule="nonzero"
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
                  fillRule="nonzero"
                ></path>
                <path
                  d="M73.353 49.478h34.722v3.471H73.353v-3.471zm0 10.321h34.722v3.472H73.353v-3.472zm0 10.324h34.722v3.472H73.353v-3.472zm0 10.325h34.722v3.47H73.353v-3.47z"
                  fill="#880F2F"
                  fillRule="nonzero"
                ></path>
                <path
                  fill="#A81433"
                  d="M72.623 25.29h33.267v7.375H72.623z"
                ></path>
                <path
                  d="M78.398 32.349h1.126v2.864h-1.126v-2.864zm20.595 0h1.126v2.864h-1.126v-2.864z"
                  fill="#A81433"
                  fillRule="nonzero"
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
          <div className="p-lg-4 ms-lg-5 d-lg-flex d-md-flex justify-content-center align-items-center searchInput position-relative">
            <div className="d-flex flex-column justify-content-center align-items-center search-input-media-query">
              <input
                type="text"
                placeholder="Search for the city"
                className="p-lg-2 searchInput fw-bold"
                onChange={getLocationList}
                ref={locationRef}
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
            <div className="range-picker-media-query mt-lg-0 mt-md-0 mt-2">
              <RangePicker
                className="p-lg-2 searchInput fw-bolder"
                onChange={filterByDates}
              />
            </div>

            {checkIn && checkOut && (
              <button
                className="btn btn-success px-5 py-3 search-btn-media-query mt-lg-0 mt-md-0 mt-2"
                onClick={() => getRoomFiltered()}
              >
                Search
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchContainer;
