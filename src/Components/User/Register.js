import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPass, setConfirmedPass] = useState("");
  const [] = useState("");
  let navigate = useNavigate();

  const register = async () => {
    if (password === confirmedPass) {
      const user = { name, email, password, confirmedPass };
      try {
        let URL = "http://localhost:9000/api/register";
        const result = await axios.post(URL, user).data;
        localStorage.setItem("user_auth-OYO", result);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Passwords didn't match");
    }
  };
  return (
    <>
      <div className="user-container-wrap col-12">
        <div className="user-container-header d-flex align-items-center z-100   position-absolute">
          <a className="navbar-brand  me-3 fs-1 fw-bolder text-light" href="/">
            <span> OYO </span>
          </a>
          <span className="fs-5 fw-bold text-light">
            Hotels and homes across 800 cities, 24+ countries
          </span>
        </div>
        <div className="user-container-body d-flex wrap-row position-absolute   justify-content-space-between flex-grow d-flex z-100">
          <div className="left-user-container d-flex flex-column ">
            <p className="user-left-text-head fs-1 fw-bolder m-0">
              There’s a smarter way to OYO around
            </p>
            <p className="user-left-text-body fs-6 fw-bold">
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
              partners.
            </p>
          </div>
          <div className="right-user-container-wrap ms-5 col-6 d-flex flex-column z-100  ">
            <div className="right-user-container text-dark p-3">
              <div className="user-right-top">
                <div className="user-right-heading">
                  <h3 className="fw-bolder d-flex  align-items-center ">
                    Register
                  </h3>
                  <p className="fw-bold ">Please fill the fields below</p>
                </div>
                <div className="register-inputs">
                  <input
                    type="text"
                    value={name}
                    className="form-control"
                    placeholder="Enter your name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    value={email}
                    className="form-control mt-3"
                    placeholder="Enter your email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <input
                    type="password"
                    value={password}
                    className="form-control mt-3"
                    placeholder="Enter your password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <input
                    type="password"
                    value={confirmedPass}
                    className="form-control mt-3"
                    mt-3
                    placeholder="Confirm your Password"
                    onChange={(e) => {
                      setConfirmedPass(e.target.value);
                    }}
                  />

                  <button
                    className="btn w-75 ms-5 btn-success mt-3 px-3"
                    onClick={register}
                  >
                    Register
                  </button>
                  <div className="mt-4 ">
                    <span className="alreadyAccount">
                      Already have an account?
                    </span>
                    <Link
                      className="text-muted ms-1 text-underline-danger "
                      to="/login"
                    >
                      Click here
                    </Link>
                  </div>
                </div>
              </div>
              <div className="user-right-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
