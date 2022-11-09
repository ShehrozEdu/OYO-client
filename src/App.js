import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Rooms from "./Components/Rooms/Rooms";
import AllRoomsSection from "./Components/Rooms/AllRoomsSection";
import RoomDetail from "./Components/RoomDetails/RoomDetail";
import Register from "./Components/User/Register";
import Login from "./Components/User/Login";
import ContextApi from "./Components/ContextApi/api";

function App() {
  return (
    <>
      <ContextApi>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/rooms/:id" element={<Rooms />} />
          <Route path="/all-rooms/" element={<AllRoomsSection />} />
          <Route
            path="/roomsDetails/:id/:checkIn/:checkOut"
            element={<RoomDetail />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ContextApi>
    </>
  );
}

export default App;
