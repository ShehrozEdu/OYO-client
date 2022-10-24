import React from "react";
import FilterSection from "./FilterSection";
import RoomsSection from "./RoomsSection";

const Rooms = () => {
  return (
    <>
      <div className="d-flex">
        <FilterSection />
        <RoomsSection />
      </div>
    </>
  );
};

export default Rooms;
