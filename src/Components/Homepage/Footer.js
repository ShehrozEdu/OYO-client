import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-main-wrapper ">
        <div className="footer-heading d-flex justify-content-center align-items-center">
          <div className="margin-logo-footer">
            <a className="navbar-brand ms-5 me-5 fs-2" href="/">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>OYO</title>
                <path
                  d="M19.843 16.185C22.135 16.185 24 14.307 24 12c0-2.309-1.865-4.185-4.157-4.185-2.293 0-4.158 1.876-4.158 4.185 0 2.307 1.865 4.185 4.158 4.185zm0-5.677c.817 0 1.482.67 1.482 1.492s-.666 1.49-1.483 1.49A1.488 1.488 0 0 1 18.36 12c0-.824.665-1.493 1.482-1.493zM4.157 16.185c2.293 0 4.158-1.878 4.158-4.185 0-2.309-1.865-4.185-4.158-4.185C1.866 7.815 0 9.691 0 12c0 2.307 1.866 4.185 4.157 4.185zm0-5.677c.818 0 1.483.67 1.483 1.492s-.665 1.49-1.483 1.49A1.488 1.488 0 0 1 2.677 12c0-.824.664-1.493 1.48-1.493zm7.84-.094L10.722 7.87H7.733l2.791 5.564v2.62h2.948v-2.62l2.791-5.564h-2.99l-1.275 2.544Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </div>
          <h5 className="fw-bolder">
            World's leading chain of hotels and homes Join our network and grow
            your business!
          </h5>

          <button
            type="button"
            className="btn-footer me-lg-5 d-flex justify-content-center align-items-center"
          >
            <span className="me-2 ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 6H5"
                  stroke="#6F787C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M19 12H17"
                  stroke="#6F787C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M14 8H22V22H14M14 22V2H2V22H14ZM6 16H10V22H6V16Z"
                  stroke="#6F787C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <span className="small text-muted fw-bold ">
              List your property
            </span>
          </button>
        </div>
        <hr />
        <div className="footerIcons-container d-flex ">
          <div className="border-right">
            <div className="footerAppIcons d-flex flex-column">
              <span>Download OYO app for exciting offers.</span>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div
                className="btn d-flex text-dark"
                style={{ backgroundColor: "#000" }}
              >
                <i className="fa-brands fa-apple fs-2 me-2 text-light "></i>
                <div className="d-flex flex-column">
                  <div className="small text-light">Download on the</div>
                  <div className="text-light fw-bolder">APP STORE</div>
                </div>
              </div>
              <div
                className="btn d-flex text-dark ms-2 me-4"
                style={{ backgroundColor: "#000" }}
              >
                <i className="fa-brands fa-google-play fs-2 me-2 text-light "></i>
                <div className="d-flex flex-column">
                  <div className="small text-light">Get it on</div>
                  <div className="text-light fw-bolder">Google Play</div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-right d-flex second-footer-links  flex-wrap">
            <div className="d-flex flex-column flex-wrap me-3 ">
              <a href="" className="mb-3">
                About us
              </a>
              <a href="" className="mb-3">
                Team/Careers
              </a>
              <a href="" className="mb-3">
                Blogs
              </a>
              <a href="">Support</a>
            </div>
            <div className="d-flex flex-column flex-wrap ms-5 ">
              <a href="" className="mb-3">
                Official OYO Blog
              </a>
              <a href="" className="mb-3">
                Investor Relations
              </a>
              <a href="" className="mb-3">
                OYO Circle
              </a>
              <a href="">OYO Frames</a>
            </div>
          </div>
          <div className=" d-flex second-footer-links ms-lg-5 flex-wrap decoration-none">
            <div className="d-flex flex-column flex-wrap me-3 ">
              <a href="" className="mb-3">
                About us
              </a>
              <a href="" className="mb-3">
                Team/Careers
              </a>
              <a href="" className="mb-3">
                Blogs
              </a>
              <a href="">Support</a>
            </div>
            <div className="d-flex flex-column flex-wrap ms-5 ">
              <a href="" className="mb-3">
                Official OYO Blog
              </a>
              <a href="" className="mb-3">
                Investor Relationns
              </a>
              <a href="" className="mb-3">
                OYO Circle
              </a>
              <a href="">OYO Frames</a>
            </div>
          </div>
        </div>
        <hr />
        <div className="footerIcons-container">
          <h4 className="mb-3">OYO Hotels</h4>
          <div className=" d-flex second-footer-links-2  flex-wrap decoration-none">
            <div className="d-flex flex-column flex-wrap me-5 ">
              <a href="" className="mb-3">
                About us
              </a>
              <a href="" className="mb-3">
                Team/Careers
              </a>
              <a href="" className="mb-3">
                Blogs
              </a>
              <a href="" className="mb-3">
                Support
              </a>
              <a href="" className="mb-3">
                About us
              </a>
              <a href="" className="mb-3">
                Team/Careers
              </a>
              <a href="" className="mb-3">
                Blogs
              </a>
              <a href="">Support</a>
            </div>
            <div className="d-flex flex-column flex-wrap ms-5 me-5 ">
              <a href="" className="mb-3">
                Official OYO Blog
              </a>
              <a href="" className="mb-3">
                Investor Relationns
              </a>
              <a href="" className="mb-3">
                OYO Circle
              </a>
              <a href="" className="mb-3">
                OYO Frames
              </a>
              <a href="" className="mb-3">
                Official OYO Blog
              </a>
              <a href="" className="mb-3">
                Investor Relationns
              </a>
              <a href="" className="mb-3">
                OYO Circle
              </a>
              <a href="" className="mb-3">
                OYO Frames
              </a>
            </div>
            <div className="d-flex flex-column flex-wrap ms-5 me-5 ">
              <a href="" className="mb-3">
                Official OYO Blog
              </a>
              <a href="" className="mb-3">
                Investor Relationns
              </a>
              <a href="" className="mb-3">
                OYO Circle
              </a>
              <a href="" className="mb-3">
                OYO Frames
              </a>
              <a href="" className="mb-3">
                Official OYO Blog
              </a>
              <a href="" className="mb-3">
                Investor Relationns
              </a>
              <a href="" className="mb-3">
                OYO Circle
              </a>
              <a href="" className="mb-3">
                OYO Frames
              </a>
            </div>
            <div className="d-flex flex-column flex-wrap ms-5 me-5 ">
              <a href="" className="mb-3">
                Official OYO Blog
              </a>
              <a href="" className="mb-3">
                Investor Relationns
              </a>
              <a href="" className="mb-3">
                OYO Circle
              </a>
              <a href="" className="mb-3">
                OYO Frames
              </a>
              <a href="" className="mb-3">
                Official OYO Blog
              </a>
              <a href="" className="mb-3">
                Investor Relationns
              </a>
              <a href="" className="mb-3">
                OYO Circle
              </a>
              <a href="" className="mb-3">
                OYO Frames
              </a>
            </div>
            <div className="d-flex flex-column flex-wrap ms-5 me-4 ">
              <a href="" className="mb-3">
                Official OYO Blog
              </a>
              <a href="" className="mb-3">
                Investor Relationns
              </a>
              <a href="" className="mb-3">
                OYO Circle
              </a>
              <a href="" className="mb-3">
                OYO Frames
              </a>
              <a href="" className="mb-3">
                Official OYO Blog
              </a>
              <a href="" className="mb-3">
                Investor Relationns
              </a>
              <a href="" className="mb-3">
                OYO Circle
              </a>
              <a href="" className="mb-3">
                OYO Frames
              </a>
            </div>
            <div className="d-flex flex-column flex-wrap ms-5  ">
              <a href="" className="mb-3">
                Official OYO Blog
              </a>
              <a href="" className="mb-3">
                Investor Relationns
              </a>
              <a href="" className="mb-3">
                OYO Circle
              </a>
              <a href="" className="mb-3">
                OYO Frames
              </a>
              <a href="" className="mb-3">
                Official OYO Blog
              </a>
              <a href="" className="mb-3">
                Investor Relationns
              </a>
              <a href="" className="mb-3">
                OYO Circle
              </a>
              <a href="" className="mb-3">
                OYO Frames
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-start ps-5 ms-4 text-center text-md-end ">
          <ul className="social-network social-circle d-flex">
            <li>
              <a href="#" className="icoFacebook me-3" title="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" className="icoInstagram me-3" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="icoTwitter me-3" title="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="icoPinterest me-3" title="Pinterest">
                <i className="fab fa-pinterest"></i>
              </a>
            </li>
            <li>
              <a href="#" className="icoLinkedin me-3" title="Linkedin">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
