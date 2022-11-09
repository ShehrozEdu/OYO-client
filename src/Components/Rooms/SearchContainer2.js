import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "antd";
import "antd/dist/antd.min.css";
import moment from "moment";
import axios from "axios";
import { DataContext } from "../ContextApi/api";

const SearchContainer2 = () => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectLocation, setSelectLocation] = useState(null);
  const { roomList, setRoomList, checkIn, setCheckIn, checkout, setCheckOut } =
    useContext(DataContext);
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
      <div className="searchContainer d-flex position-fixed ">
        <div className="d-flex justify-content-center align-items-center ">
          <a
            className="navbar-brand ms-5 margin-logo-search text-light fs-2 mt-2"
            href="/"
          >
            <strong>OYO</strong>
          </a>
        </div>
        <div className="searchContainer__wrapper mt-2 ">
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

export default SearchContainer2;
