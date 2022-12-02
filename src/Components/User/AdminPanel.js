import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AdminPanel = () => {
  const [adminBookings, setAdminBookings] = useState([]);
  const [adminRooms, setAdminRooms] = useState([]);
  const [users, setUsers] = useState([]);

  //----------------------------- AddRooms constants-------------//

  const [name, setName] = useState();
  const [area, setArea] = useState();
  const [city, setCity] = useState();
  const [roomType, setRoomType] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [collection1, setCollection1] = useState();
  const [collection2, setCollection2] = useState();
  const [amenities1, setAmenities1] = useState();
  const [amenities2, setAmenities2] = useState();
  const [amenities3, setAmenities3] = useState();
  const [amenities4, setAmenities4] = useState();
  const [amenities5, setAmenities5] = useState();
  const [accommodation, setAccommodation] = useState();
  const [discountedRate, setDiscountedRate] = useState();
  const [actualRate, setActualRate] = useState();
  const [description, setDescription] = useState();
  const [city_id, setCity_id] = useState();
  const [imgUrl1, setImgUrl1] = useState();
  const [imgUrl2, setImgUrl2] = useState();
  const [imgUrl3, setImgUrl3] = useState();
  const [ratings, setRatings] = useState();

  const getBookings = async () => {
    let URL = "http://localhost:9000/api/admin-all-bookings";
    const { data } = await axios.get(URL);
    setAdminBookings(data);
    // console.log(data);
  };
  useEffect(() => {
    getBookings();
  }, []);

  const getRooms = async () => {
    let URL = "http://localhost:9000/api/get-rooms";
    const { data } = await axios.get(URL);
    setAdminRooms(data);
    // console.log(data);
  };
  useEffect(() => {
    getRooms();
  }, []);
  const getUsers = async () => {
    let URL = "http://localhost:9000/api/get-users";
    const { data } = await axios.get(URL);
    setUsers(data);
    // console.log(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const addRoomsAdmin = async () => {
    const newRoom = {
      name,
      area,
      roomType,
      phoneNumber,
      collections: [{ collection1 }, { collection2 }],
      amenities: [
        { amenities1 },
        { amenities2 },
        { amenities3 },
        { amenities4 },
        { amenities5 },
      ],
      accommodation,
      discountedRate,
      actualRate,
      description,
      city,
      ratings,
      city_id,
      imageUrls: [imgUrl1, imgUrl2, imgUrl3],
    };

    let url = "http://localhost:9000/api/add-new-room";
    try {
      let { data } = await axios.post(url, newRoom);
      console.log(data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Room has added successfully!!",
        showConfirmButton: false,
        timer: 3000,
      }).then(() => window.location.assign("/"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <>
        <div className="d-flex justify-content-center fw-bold mt-4 ">
          <h2 className="helvetica">Admin Panel</h2>
        </div>
        <div className="p-4">
          {/* //HeadingTable */}
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Bookings
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Rooms
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                User
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="add-room-tab"
                data-bs-toggle="tab"
                data-bs-target="#add-room"
                type="button"
                role="tab"
                aria-controls="add-room"
                aria-selected="false"
              >
                Add Room
              </button>
            </li>
          </ul>
          <div className="tab-content ms-3" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              {/*--------------------------
              -------------------------------
              ------------------- //Bookings ------------
              -----------------------
              ---------------*/}
              <p>
                <ul className="list-group">
                  <ul className="list-group-item list-group-item-action d-none d-lg-inline-block border-bottom bg-danger bg-gradient text-white">
                    <div className="row p-lg-2">
                      <div className="col-lg fw-bold ">
                        <strong>Room Name</strong>
                      </div>
                      <div className="col fw-bold ">
                        <strong>User ID</strong>
                      </div>
                      <div className="col fw-bold ">
                        <strong>Check In</strong>
                      </div>
                      <div className="col fw-bold ">
                        <strong>Check Out</strong>
                      </div>
                      <div className="col fw-bold ">
                        <strong>Status</strong>
                      </div>
                    </div>
                  </ul>
                  {adminBookings &&
                    adminBookings.map((book, index) => {
                      return (
                        <a
                          href="#"
                          className="list-group-item list-group-item-action helvetica p-lg-3"
                          key={index}
                        >
                          <div className="row">
                            <div className="col-12 pb-2 pb-lg-0 col-lg">
                              <strong>{book.roomsDetails}</strong>
                            </div>
                            <div className="col-6 col-lg small small">
                              <small className="d-lg-none mt-1">
                                User ID
                                <br />
                              </small>
                              {book.userId}
                            </div>
                            <div className="col-6 col-lg small">
                              <small className="d-lg-none mt-1">
                                CheckIn
                                <br />
                              </small>
                              {book.checkInDate}
                            </div>
                            <div className="col-6 col-lg small">
                              <small className="d-lg-none mt-1">
                                CheckOut
                                <br />
                              </small>{" "}
                              {book.checkOutDate}
                            </div>
                            <div className="col-6 col-lg small">
                              <span className="d-lg-none">Status: </span>
                              {book.status}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                </ul>
              </p>
            </div>

            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <p>
                <ul className="list-group ">
                  <ul className="list-group-item list-group-item-action d-none d-lg-inline-block border-bottom bg-danger bg-gradient text-white ">
                    <div className="row p-lg-2">
                      <div className="col-lg fw-bold ">
                        <strong>Room Name</strong>
                      </div>
                      <div className="col fw-bold ">
                        <strong>Rent/day</strong>
                      </div>
                      <div className="col fw-bold ">
                        <strong>City</strong>
                      </div>
                      <div className="col fw-bold ">
                        <strong>Type</strong>
                      </div>
                      <div className="col fw-bold ">
                        <strong>Ratings</strong>
                      </div>
                    </div>
                  </ul>

                  {adminRooms &&
                    adminRooms.map((room, index) => {
                      return (
                        <a
                          href="#"
                          className="list-group-item list-group-item-action p-lg-3"
                          key={index}
                        >
                          <div className="row">
                            <div className="col-12 pb-2 pb-lg-0 col-lg">
                              <strong>{room.name}</strong>
                            </div>
                            <div className="col-6 col-lg small">
                              <small className="d-lg-none mt-1">
                                Rent/day
                                <br />
                              </small>
                              Rs. {room.actualRate}
                            </div>
                            <div className="col-6 col-lg small">
                              <small className="d-lg-none mt-1">
                                City
                                <br />
                              </small>
                              {room.city}
                            </div>
                            <div className="col-6 col-lg small">
                              {room.roomType}
                            </div>
                            <div className="col-6 col-lg small">
                              <span className="d-lg-none">Rating: </span>
                              {room.ratings}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                </ul>
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <ul className="list-group ">
                <ul className="list-group-item list-group-item-action d-none d-lg-inline-block border-bottom bg-danger bg-gradient text-white ">
                  <div className="row p-lg-2">
                    <div className="col-lg fw-bold ">
                      <strong>Name</strong>
                    </div>
                    <div className="col fw-bold ">
                      <strong>Email</strong>
                    </div>
                    <div className="col fw-bold ">
                      <strong>Admin</strong>
                    </div>
                  </div>
                </ul>

                {users &&
                  users.map((room, index) => {
                    return (
                      <a
                        href="#"
                        className="list-group-item list-group-item-action p-lg-3"
                        key={index}
                      >
                        <div className="row">
                          <div className="col-12 pb-2 pb-lg-0 col-lg">
                            <strong>{room.name}</strong>
                          </div>
                          <div className="col-6 col-lg small">
                            <small className="d-lg-none mt-1">
                              Email
                              <br />
                            </small>
                            {room.email}
                          </div>
                          <div className="col-6 col-lg small">
                            <small className="d-lg-none mt-1">
                              Admin
                              <br />
                            </small>
                            {room.isAdmin ? "True" : "False"}
                          </div>
                        </div>
                      </a>
                    );
                  })}
              </ul>
            </div>

            {/* ---------------------------------------------------------
            FORM FOR ADDING Room--------------------------------------
            ---------------------------------------------------------
            -------------------------------------- */}

            <div
              className="tab-pane fade"
              id="add-room"
              role="tabpanel"
              aria-labelledby="add-room-tab"
            >
              {/* //First Row */}
              <div class="row g-3 mt-lg-3 mt-2">
                <div class="col-sm-7 col-lg-3">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10Example1"
                      class="form-control"
                      placeholder="Room Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-sm col-lg-3">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10Example2"
                      class="form-control"
                      placeholder="Area"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-sm col-lg-3">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10Example3"
                      class="form-control"
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-sm col-lg-3">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10Example3"
                      class="form-control"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* //Second Row */}
              <div class="row g-3 mt-lg-3 mt-2">
                <div class="col-sm-7 col-lg-3">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10Example1"
                      class="form-control"
                      placeholder="Collection1"
                      value={collection1}
                      onChange={(e) => setCollection1(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-sm col-lg-3">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10Example2"
                      class="form-control"
                      placeholder="Collection2"
                      value={collection2}
                      onChange={(e) => setCollection2(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-sm col-lg-3">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10Example3"
                      class="form-control"
                      placeholder="Amenities 1"
                      value={amenities1}
                      onChange={(e) => setAmenities1(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-sm col-lg-3">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10Example3"
                      class="form-control"
                      placeholder="Amenities 2"
                      value={amenities2}
                      onChange={(e) => setAmenities2(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {/* //Third Row */}
              <div class="row g-3 mt-lg-3 mt-2">
                <div class="col-sm-7 col-lg-3">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10Example1"
                      class="form-control"
                      placeholder="Amenities 3"
                      value={amenities3}
                      onChange={(e) => setAmenities3(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-sm col-lg-3">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10Example2"
                      class="form-control"
                      placeholder="Amenities 4"
                      value={amenities4}
                      onChange={(e) => setAmenities4(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-sm col-lg-3">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10Example3"
                      class="form-control"
                      placeholder="Amenities 5"
                      value={amenities5}
                      onChange={(e) => setAmenities5(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-sm col-lg-3">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10Example3"
                      class="form-control"
                      placeholder="Accommodation"
                      value={accommodation}
                      onChange={(e) => setAccommodation(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {/* //Fourth Row */}
              <div class="row g-3 mt-lg-3 mt-2">
                <div class="col-sm-7 col-lg-3">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10Example1"
                      class="form-control"
                      placeholder="Discounted Rate"
                      value={discountedRate}
                      onChange={(e) => setDiscountedRate(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-sm col-lg-3">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10Example2"
                      class="form-control"
                      placeholder="Actual Rate"
                      value={actualRate}
                      onChange={(e) => setActualRate(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-sm col-lg-3">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10Example3"
                      class="form-control"
                      placeholder="Room Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-sm col-lg-3">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10Example3"
                      class="form-control"
                      placeholder="City_id"
                      value={city_id}
                      onChange={(e) => setCity_id(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* //Row 5 */}
              <div class="row g-3 mt-lg-3 mt-2">
                <div class="col-sm-7 col-lg-3">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10Example1"
                      class="form-control"
                      placeholder="Img Url 1"
                      value={imgUrl1}
                      onChange={(e) => setImgUrl1(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-sm col-lg-3">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10Example2"
                      class="form-control"
                      placeholder="Img Url 2"
                      value={imgUrl2}
                      onChange={(e) => setImgUrl2(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-sm col-lg-3">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10Example3"
                      class="form-control"
                      placeholder="Img Url 3"
                      value={imgUrl3}
                      onChange={(e) => setImgUrl3(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-sm col-lg-3">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10Example3"
                      class="form-control"
                      placeholder="Room Type"
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div class="row g-3 mt-lg-3 mt-2">
                <div class="col-sm-7 col-lg-3">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10Example1"
                      class="form-control"
                      placeholder="ratings"
                      value={ratings}
                      onChange={(e) => setRatings(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-lg-3 mt-2 d-flex justify-content-center">
                <div className="col-sm-6 col-lg-2 ms-5">
                  <button
                    className="btn p-2 small ms-3 btn-secondary"
                    onClick={addRoomsAdmin}
                  >
                    Add Room
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default AdminPanel;
