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
  const [location, setLocation] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectLocation, setSelectLocation] = useState(null);

  let [filterObj, setFilterObj] = useState({});
  let [cityName, setCityName] = useState([]);

  const {
    setRoomList,
    setCheckIn,
    setDuplicateRoom,
    duplicateRoom,
    checkIn,
    checkOut,
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
        // console.log(room);
      }
      setRoomList(tempRooms);
      // console.log(duplicateRoom);
    }
  };
  //----------------------------------------------------
  //--------------------Filter--------------------------//
  //----------------------------------------------------

  const filterAll = async (_filterObj) => {
    _filterObj = { ..._filterObj };

    let url = "https://oyo-server.vercel.app/api/filter-rooms";
    if (searchParams.get("city_id"))
      _filterObj["city"] = searchParams.get("city_id");
    try {
      const { data } = await axios.post(url, _filterObj);
      setCityName(data);

      // console.log(data, "filter");
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
          filterObj.collections === undefined ? [] : [...filterObj.collections];
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
          filterObj.accommodation === undefined
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
          filterObj.category === undefined ? [] : [...filterObj.category];
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
    // console.log(filterObj);
    // console.log(_filterObj);
  };
  return (
    <>
      <div className="searchContainer d-lg-flex d-md-flex position-sticky">
        <div className="d-flex justify-content-center align-items-center ">
          <a
            className="navbar-brand ms-lg-5 margin-logo-search text-light fs-2 mt-2"
            href="/"
          >
            <strong>OYO</strong>
          </a>
        </div>
        <div className="searchContainer__wrapper mt-2 ">
          <div className="p-lg-4 ms-lg-5 d-lg-flex d-md-flex justify-content-center align-items-center searchInput position-relative">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <input
                type="text"
                placeholder="Search for the city"
                className="p-lg-2 mb-lg-0 mb-md-0 mb-3 searchInput fw-bold"
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
            <div>
              <RangePicker
                className="p-lg-2 searchInput fw-bolder mb-lg- mb-md-0 mb-3"
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
      <div className="d-flex flex-lg-row flex-md-row flex-column">
        <FilterSection
          setRoomList={setRoomList}
          duplicateRoom={duplicateRoom}
          filterData={filterData}
          cityName={cityName}
        />
        <RoomsSection cityName={cityName} />
      </div>
    </>
  );
};

export default Rooms;
