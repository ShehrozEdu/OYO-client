import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Homepage/Navbar";

const UserProfile = () => {
  const [bookings, setBookings] = useState([]);
  const user = JSON.parse(localStorage.getItem("OYO_Auth"));

  const getBookings = async () => {
    try {
      let Url = "https://oyo-server.vercel.app/api/getBookingsByUserId/";
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

  const cancelBooking = async (bookingId, roomId) => {
    const url = "https://oyo-server.vercel.app/api/cancel-booking";
    try {
      const { data } = await axios.post(url, { bookingId, roomId });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
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
                    <div className="d-flex flex-row mb-3 align-items-center">
                      <img
                        src={
                          item.status === "booked"
                            ? "/img/greenTick.png"
                            : "/img/redCross.png"
                        }
                        width="70"
                      />
                      <div className="d-flex flex-column ml-2 ms-2">
                        <span>
                          {item.status === "booked"
                            ? "Booking Confirmed"
                            : "Cancelled"}
                        </span>
                        <span className="text-black-50">{user.email}</span>
                        <span className="text-black-50">
                          TransactionId: {item.transactionId}
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-column py-2">
                      <strong className="mt-2">
                        Hotel Name: {item.roomsDetails}
                      </strong>
                      <em className="mt-2">
                        <strong> Check In:</strong> {item.checkInDate}
                      </em>
                      <em className="mt-2">
                        <strong> Check Out:</strong> {item.checkOutDate}
                      </em>
                      <strong className="mt-2">
                        Status:
                        {item.status === "booked" ? "Booked" : "Cancelled"}
                      </strong>
                    </div>
                    <div className="d-flex justify-content-between align-items-center install mt-3">
                      <span className="fw-bold py-2">
                        Total Amount: Rs.{item.totalAmount}
                      </span>
                      {item.status === "booked" && (
                        <span
                          className="text-danger cursor-pointer bg-dark rounded-2 p-2"
                          onClick={() => cancelBooking(item._id, item.roomId)}
                        >
                          Cancel Booking <i className="fa ms-1 fa-multiply"></i>
                        </span>
                      )}
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
