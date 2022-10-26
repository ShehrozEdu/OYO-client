import React from "react";
import Banner from "./Banner";
import BelowNavbar from "./BelowNavbar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchContainer from "./SearchContainer";
import WorldDetail from "./WorldDetail";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <BelowNavbar />
      <SearchContainer />
      <Banner />
      <WorldDetail />
      <Footer />
    </>
  );
};

export default Homepage;
