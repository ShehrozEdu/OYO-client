import React, { useState } from "react";

const FilterSection = ({ setRoomList, duplicateRoom }) => {
  const [searchKey, setSearchKey] = useState("");
  const filterBySearch = () => {
    const tempRooms = duplicateRoom.filter((room) =>
      room.name?.toLowerCase()?.includes(searchKey?.toLowerCase())
    );
    setRoomList(tempRooms);
  };
  return (
    <>
      <div className="d-flex flex-column p-4 col-3 filter-container shadow position-sticky">
        <h2 className="fw-bold">Filters</h2>
        <p className="fw-bold">Popular locations in this city</p>
        <input
          type="text"
          placeholder="Search.."
          className="p-2"
          value={searchKey}
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
          onKeyUp={filterBySearch}
        />
        <label htmlFor="customRange2" className="form-label mt-3 fw-bold">
          Price
        </label>
        <input
          type="range"
          className="form-range"
          min="500"
          max="50000"
          id="customRange2"
        ></input>
        <hr className="hr-filter fw-bold" />
        <div>
          <p className="mb-4 fw-bold">Collections</p>
          <input type="checkbox" name="FamilyOYOs" id="familyOyo" />
          <label className="pb-3 ms-3 filter-label" htmlFor="collections">
            Family OYO
          </label>
          <br />
          <input type="checkbox" name="ForGroupTravelers" id="group" />
          <label className="pb-3 ms-3 filter-label" htmlFor="collections">
            For Group Travelers
          </label>
          <br />
          <input type="checkbox" name="LocalIDsAccepted" id="localId" />
          <label className="pb-3 ms-3 filter-label" htmlFor="collections">
            Local IDs Accepted
          </label>
          <br />
          <input type="checkbox" name="OYOsWelcomesCouples" id="couples" />
          <label className="pb-3 ms-3 filter-label" htmlFor="collections">
            OYOs Welcomes Couples
          </label>
          <br />
          <input type="checkbox" name="BusinessTravelers" id="business" />
          <label className="pb-3 ms-3 filter-label" htmlFor="collections">
            Business Travelers
          </label>
          <br />
        </div>
        <hr className="hr-filter fw-bold" />
        <div>
          <p className="mb-4 fw-bold">Categories</p>
          <input type="checkbox" name="OYORooms" id="OYORooms" />
          <label className="pb-3 ms-3 filter-label" htmlFor="categories">
            OYO Rooms- Super Affordable
          </label>
          <br />
          <input type="checkbox" name="Flagships" id="flagships" />
          <label className="pb-3 ms-3 filter-label" htmlFor="categories">
            Flagships- Affordable Hotels at Prime
          </label>
          <br />
          <input type="checkbox" name="CollectionO" id="collection" />
          <label className="pb-3 ms-3 filter-label" htmlFor="categories">
            Collection O-For new age travelers
          </label>
          <br />
        </div>
        <hr className="hr-filter fw-bold" />
        <div>
          <p className="mb-4 fw-bold"> Accommodation Type</p>
          <input type="checkbox" name="OYOHome" id="OYOHome" />
          <label className="pb-3 ms-3 filter-label" htmlFor="Accommodation">
            OYO Home
          </label>
          <br />
          <input type="checkbox" name="Hotel" id="Hotel" />
          <label className="pb-3 ms-3 filter-label" htmlFor="Accommodation">
            Hotel
          </label>
          <br />
        </div>
      </div>
    </>
  );
};

export default FilterSection;
