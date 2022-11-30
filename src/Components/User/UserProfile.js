import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Homepage/Navbar";

const UserProfile = () => {
  const [bookings, setBookings] = useState([]);
  const user = JSON.parse(localStorage.getItem("OYO_Auth"));

  const getBookings = async () => {
    try {
      let Url = "http://localhost:9000/api/getBookingsByUserId/";
      let { data } = await axios.post(Url, { userId: user._id });
      console.log(data);
      setBookings(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBookings();
  }, []);
  return (
    <>
      <Navbar />
      <div className="mt-4 ms-3">
        <div className="container mt-5">
          <h2 className="fw-bold">My Bookings</h2>
          <div className="row">
            {bookings.map((item, index) => {
              return (
                <div className="col-md-5" key={index}>
                  <div className="card p-3">
                    <div className="d-flex flex-row mb-3">
                      <img
                        src={
                          item.status === "booked"
                            ? "/img/greenTick.png"
                            : "/img/redCross.png"
                        }
                        width="70"
                      />
                      <div className="d-flex flex-column ml-2">
                        <span>
                          {item.status === "booked"
                            ? "Booking Confirmed"
                            : "Cancelled"}
                        </span>
                        <span className="text-black-50">{user.email}</span>
                      </div>
                    </div>
                    <div className="d-flex flex-column py-2">
                      <strong className="mt-2">
                        Hotel Name: {item.roomsDetails}
                      </strong>
                      <em className="mt-2">Check In: {item.checkInDate}</em>
                      <em className="mt-2">Check Out: {item.checkOutDate}</em>
                      <strong className="mt-2">
                        Status:{" "}
                        {item.status === "booked" ? "Booked" : "Cancelled"}
                      </strong>
                    </div>
                    <div className="d-flex justify-content-between install mt-3">
                      <span className="fw-bold">
                        Total Amount: Rs.{item.totalAmount}
                      </span>
                      <span className="text-danger cursor-pointer bg-dark rounded-2 p-1">
                        Cancel Booking<i className="fa ms-1 fa-multiply"></i>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
