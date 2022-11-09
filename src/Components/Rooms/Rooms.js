import React from "react";
import SearchContainer2 from "../Rooms/SearchContainer2";
import FilterSection from "./FilterSection";
import RoomsSection from "./RoomsSection";

const Rooms = () => {
  return (
    <>
      <SearchContainer2 />
      <div className="d-flex">
        <FilterSection />
        <RoomsSection />
      </div>
    </>
  );
};

export default Rooms;
