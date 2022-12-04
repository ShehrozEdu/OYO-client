import React, { useContext, useEffect, useRef, useState } from "react";
import FilterSection from "./FilterSection";
import RoomsSection from "./RoomsSection";
import { DatePicker } from "antd";
import "antd/dist/antd.min.css";
import moment from "moment";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { DataContext } from "../ContextApi/api";

const Rooms = () => {
  const [searchParams] = useSearchParams();
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectLocation, setSelectLocation] = useState(null);

  let [filterObj, setFilterObj] = useState({});
  let [result, setResult] = useState([]);
  let [cityName, setCityName] = useState([]);

  const {
    roomList,
    setRoomList,
    checkIn,
    setCheckIn,
    setDuplicateRoom,
    duplicateRoom,
    checkout,
    setCheckOut,
  } = useContext(DataContext);
  const navigate = useNavigate();

  let locationRef = useRef();
  // console.log(checkIn);
  const { RangePicker } = DatePicker;
  let getLocationList = async (e) => {
    let city = e.target.value;

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
      setCityName([...result]);
      setDuplicateRoom([...result]);
      navigate(
        `/rooms?city_id=${selectLocation.city_id}&id=${selectLocation._id}`
      );
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
  //----------------------------------------------------
  //--------------------Filter--------------------------//
  //----------------------------------------------------

  const filterAll = async (_filterObj) => {
    _filterObj = { ..._filterObj };

    let url = "http://localhost:9000/api/filter-rooms";
    if (searchParams.get("city_id"))
      _filterObj["city"] = searchParams.get("city_id");
    try {
      const { data } = await axios.post(url, _filterObj);
      setCityName(data);

      console.log(data, "filter");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    filterAll(filterObj);
  }, [filterObj]);

  let filterData = (e, option) => {
    // console.log(filterObj);
    let { value } = e.target;
    let _filterObj = {};
    switch (option) {
      case "city":
        _filterObj["city"] = value;
        break;

      case "collections":
        let checked = e.target.checked;
        let collections =
          filterObj.collections == undefined ? [] : [...filterObj.collections];
        if (checked) {
          let isAvailable = collections.includes(Number(value));
          if (isAvailable === false) collections.push(Number(value));
        } else {
          let position = collections.indexOf(Number(value));
          collections.splice(position, 1);
        }
        if (collections.length > 0) {
          _filterObj["collections"] = collections;
        }

        break;
      case "accommodation":
        let check = e.target.checked;
        let accommodation =
          filterObj.accommodation == undefined
            ? []
            : [...filterObj.accommodation];
        if (check) {
          let isAvailable = accommodation.includes(Number(value));
          if (isAvailable === false) accommodation.push(Number(value));
        } else {
          let position = accommodation.indexOf(Number(value));
          accommodation.splice(position, 1);
        }
        if (accommodation.length > 0) {
          _filterObj["accommodation"] = accommodation;
        }

        break;
      case "category":
        let checkedd = e.target.checked;
        let category =
          filterObj.category == undefined ? [] : [...filterObj.category];
        if (checkedd) {
          let isAvailable = category.includes(Number(value));
          if (isAvailable === false) category.push(Number(value));
        } else {
          let position = category.indexOf(Number(value));
          category.splice(position, 1);
        }
        if (category.length > 0) {
          _filterObj["category"] = category;
        }

        break;

      default:
        break;
    }
    setFilterObj({ ...filterObj, ..._filterObj });
    console.log(filterObj);
    console.log(_filterObj);
  };
  return (
    <>
      <div className="searchContainer d-flex position-sticky">
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
      <div className="d-flex">
        <FilterSection
          setRoomList={setRoomList}
          duplicateRoom={duplicateRoom}
          filterData={filterData}
        />
        <RoomsSection cityName={cityName} />
      </div>
    </>
  );
};

export default Rooms;
