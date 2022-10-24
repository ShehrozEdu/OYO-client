import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Homepage/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Rooms from "./Components/Rooms/Rooms";
import RoomDetail from "./Components/RoomDetails/RoomDetail";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/roomsDetails" element={<RoomDetail />} />
      </Routes>
    </>
  );
}

export default App;
