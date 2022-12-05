import React, { useState } from "react";

const FilterSection = ({ setRoomList, duplicateRoom, filterData }) => {
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
          <input
            type="checkbox"
            name="FamilyOYOs"
            id="family"
            value="1"
            onChange={(e) => filterData(e, "collections")}
          />
          <label className="pb-3 ms-3 filter-label" htmlFor="collections">
            Family OYO
          </label>
          <br />
          <input
            type="checkbox"
            name="Group"
            id="group"
            value="3"
            onChange={(e) => filterData(e, "collections")}
          />
          <label className="pb-3 ms-3 filter-label" htmlFor="collections">
            For Group Travelers
          </label>
          <br />
          <input
            type="checkbox"
            name="ID"
            id="ID"
            value="5"
            onChange={(e) => filterData(e, "collections")}
          />
          <label className="pb-3 ms-3 filter-label" htmlFor="collections">
            Local IDs Accepted
          </label>
          <br />
          <input
            type="checkbox"
            name="Couples"
            id="couples"
            value="2"
            onChange={(e) => filterData(e, "collections")}
          />
          <label className="pb-3 ms-3 filter-label" htmlFor="collections">
            OYOs Welcomes Couples
          </label>
          <br />
          <input
            type="checkbox"
            name="BusinessTravelers"
            id="business"
            value="4"
            onChange={(e) => filterData(e, "collections")}
          />
          <label className="pb-3 ms-3 filter-label" htmlFor="collections">
            Business Travelers
          </label>
          <br />
        </div>
        <hr className="hr-filter fw-bold" />
        <div>
          {/* //Categories// */}
          <p className="mb-4 fw-bold">Categories</p>
          <input
            type="checkbox"
            name="OYO"
            id="OYO"
            value="1"
            onChange={(e) => filterData(e, "categories")}
          />
          <label className="pb-3 ms-3 filter-label" htmlFor="categories">
            OYO Rooms- Super Affordable
          </label>
          <br />
          <input
            type="checkbox"
            name="Flagship"
            id="flagship"
            value="2"
            onChange={(e) => filterData(e, "categories")}
          />
          <label className="pb-3 ms-3 filter-label" htmlFor="categories">
            Flagships- Affordable Hotels
          </label>
          <br />
          <input
            type="checkbox"
            name="Collection"
            id="collection"
            value="3"
            onChange={(e) => filterData(e, "categories")}
          />
          <label className="pb-3 ms-3 filter-label" htmlFor="categories">
            CollectionO-For new age travelers
          </label>
          <br />
        </div>
        <hr className="hr-filter fw-bold" />
        <div>
          <p className="mb-4 fw-bold"> Accommodation Type</p>
          <input
            type="checkbox"
            name="OYO"
            id="OYO"
            value="1"
            onChange={(e) => filterData(e, "accommodation")}
          />
          <label className="pb-3 ms-3 filter-label" htmlFor="Accommodation">
            OYO Home
          </label>
          <br />
          <input
            type="checkbox"
            name="Hotel"
            id="Hotel"
            value="2"
            onChange={(e) => filterData(e, "accommodation")}
          />
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
