import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid d-flex p-1">
          <div className="margin-logo">
            <a className="navbar-brand ms-5 me-5 fs-2" href="/">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>OYO</title>
                <path
                  d="M19.843 16.185C22.135 16.185 24 14.307 24 12c0-2.309-1.865-4.185-4.157-4.185-2.293 0-4.158 1.876-4.158 4.185 0 2.307 1.865 4.185 4.158 4.185zm0-5.677c.817 0 1.482.67 1.482 1.492s-.666 1.49-1.483 1.49A1.488 1.488 0 0 1 18.36 12c0-.824.665-1.493 1.482-1.493zM4.157 16.185c2.293 0 4.158-1.878 4.158-4.185 0-2.309-1.865-4.185-4.158-4.185C1.866 7.815 0 9.691 0 12c0 2.307 1.866 4.185 4.157 4.185zm0-5.677c.818 0 1.483.67 1.483 1.492s-.665 1.49-1.483 1.49A1.488 1.488 0 0 1 2.677 12c0-.824.664-1.493 1.48-1.493zm7.84-.094L10.722 7.87H7.733l2.791 5.564v2.62h2.948v-2.62l2.791-5.564h-2.99l-1.275 2.544Z"
                  fill="red"
                ></path>
              </svg>
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav d-lg-flex justify-content-center align-items-center ">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.95603 5.4489C1.84279 5.19704 1.54682 5.08467 1.29497 5.1979C1.04311 5.31114 0.930736 5.60711 1.04397 5.85896L1.95603 5.4489ZM8.0625 20.2501L7.60647 20.4551C7.68914 20.639 7.87413 20.7552 8.07565 20.7499C8.27717 20.7446 8.45579 20.6188 8.52868 20.4309L8.0625 20.2501ZM12.4662 10.277C12.566 10.0196 12.4382 9.7299 12.1808 9.63006C11.9233 9.53022 11.6337 9.658 11.5338 9.91546L12.4662 10.277ZM1.04397 5.85896L7.60647 20.4551L8.51853 20.0451L1.95603 5.4489L1.04397 5.85896ZM8.52868 20.4309L12.4662 10.277L11.5338 9.91546L7.59632 20.0693L8.52868 20.4309Z"
                  fill="#212121"
                ></path>{" "}
                <path
                  d="M22.044 5.4489C22.1572 5.19704 22.4532 5.08467 22.705 5.1979C22.9569 5.31114 23.0693 5.60711 22.956 5.85896L22.044 5.4489ZM15.9375 20.2501L16.3935 20.4551C16.3094 20.6421 16.1197 20.7589 15.9149 20.7496C15.71 20.7403 15.5316 20.6069 15.4648 20.413L15.9375 20.2501ZM12.8398 12.7976C12.7498 12.5366 12.8885 12.252 13.1496 12.162C13.4106 12.072 13.6952 12.2107 13.7852 12.4718L12.8398 12.7976ZM22.956 5.85896L16.3935 20.4551L15.4815 20.0451L22.044 5.4489L22.956 5.85896ZM15.4648 20.413L12.8398 12.7976L13.7852 12.4718L16.4102 20.0871L15.4648 20.413Z"
                  fill="#212121"
                ></path>{" "}
                <path
                  d="M8.0625 13.9038L12 3.75L15.9375 13.7055L19.875 5.01923M4.125 5.01923L6.75 11.3654"
                  stroke="#212121"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </svg>
              <div className="d-flex flex-column  justify-content-center  border-end me-lg-3 ">
                <a
                  className="nav-link active mb-0 pb-0"
                  aria-current="page"
                  href="#"
                >
                  Become a Member
                </a>
                <p className="text-muted small me-2 ms-2">
                  Additional discount
                </p>
              </div>

              <svg
                className="me-2"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="28"
                viewBox="0 0 20 17"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M-2-4h24v24H-2z"></path>{" "}
                  <path
                    fill="black"
                    fill-rule="nonzero"
                    d="M9.943 0c-1.9 0-3.55.237-3.82 1.818H3.181C1.41 1.818 0 3.345 0 5.192v7.791c0 1.846 1.41 3.38 3.182 3.38h13.636c1.772 0 3.182-1.534 3.182-3.38V5.192c0-1.847-1.41-3.374-3.182-3.374h-3.054C13.494.237 11.844 0 9.944 0zM10 .911c1.385 0 2.47-.093 2.727.907H7.273C7.53.818 8.615.911 10 .911zM3.182 2.727h13.636c1.25 0 2.273 1.004 2.273 2.306v.996c-1.926 1.136-4.512 1.925-7.415 2.153-.23-.694-.919-1.203-1.733-1.203-.814 0-1.503.509-1.733 1.203-2.846-.224-5.387-.986-7.3-2.086V5.033c0-1.302 1.022-2.306 2.272-2.306zM19.09 7.19v5.781c0 1.398-1.023 2.485-2.273 2.485H3.182c-1.25 0-2.273-1.087-2.273-2.485V7.273c1.996 1.125 4.442 1.734 7.205 1.962l.073.287a1.83 1.83 0 0 0 1.756 1.363 1.83 1.83 0 0 0 1.745-1.322c.012-.04.077-.288.086-.328 2.815-.232 5.304-.887 7.317-2.046zM10 8c.558 0 1 .442 1 1s-.442 1-1 1-1-.442-1-1 .442-1 1-1z"
                    opacity=".7"
                  ></path>{" "}
                </g>{" "}
              </svg>
              <div className="d-flex flex-column  justify-content-center  border-end me-lg-3 ">
                <a className="nav-link mb-0 pb-0" href="#">
                  OYO for business
                </a>
                <p className="text-muted small me-2">
                  Corporate booking solutions
                </p>
              </div>
              <svg
                className="me-2"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 6H5"
                  stroke="#6F787C"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M19 12H17"
                  stroke="#6F787C"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M14 8H22V22H14M14 22V2H2V22H14ZM6 16H10V22H6V16Z"
                  stroke="#6F787C"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </svg>
              <div className="d-flex flex-column  justify-content-center  border-end me-lg-3">
                <a className="nav-link mb-0 pb-0 me-2" href="#">
                  List your property
                </a>
                <p className="text-muted small me-2">
                  Start Earning in 30 mins
                </p>
              </div>
              <svg
                className="me-2"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                class="bi bi-people"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                  fill="#000000"
                ></path>{" "}
              </svg>
              <a className="nav-link" href="#">
                Login/Signup
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
