import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginSchema } from "./YUPUserSchema/LoginSchema";
import { useFormik } from "formik";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // // const [] = useState("");
  const navigate = useNavigate();
  // const loginAPI = async () => {
  //   const user = { email, password };
  //   try {
  //     let URL = "https://oyo-server.vercel.app/api/login";
  //     const { data } = await axios.post(URL, user);
  //     localStorage.setItem("OYO_Auth", JSON.stringify(data.user));
  //     // console.log(data.user);
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const initialValues = {
    email: "",
    password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,
      onSubmit: async (values, action) => {
        // console.log(values);
        try {
          let URL = "https://oyo-server.vercel.app/api/login";
          const { data } = await axios.post(URL, values);
          localStorage.setItem("OYO_Auth", JSON.stringify(data.user));
          console.log(data);
          navigate("/");
        } catch (error) {
          alert("Email or Password didn't match");
          console.log(error);
        }
        action.resetForm();
      },
    });
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
                    Login
                  </h3>
                  <p className="fw-bold ">Please fill the fields below</p>
                </div>
                <div className="register-inputs">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="email"
                      autoComplete="off"
                      className="form-control mt-3"
                      placeholder="Enter your email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error small text-danger">
                        {errors.email}
                      </p>
                    ) : null}
                    <input
                      type="password"
                      name="password"
                      autoComplete="off"
                      className="form-control mt-3"
                      placeholder="Enter your password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error small text-danger">
                        {errors.password}
                      </p>
                    ) : null}
                    <button
                      className="btn w-75 ms-5 btn-success mt-3 px-3"
                      type="submit"
                    >
                      Login
                    </button>
                    <div className="mt-4 ">
                      <span className=""> New here?</span>
                      <Link
                        className="text-muted ms-1 alreadyAccount "
                        to="/register"
                      >
                        Click to register
                      </Link>
                    </div>
                  </form>
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

export default Login;
