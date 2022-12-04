import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import { signUpSchema } from "./YUPUserSchema/SignupSchema";
const Register = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmedPass, setConfirmedPass] = useState("");

  // const registerApi = async () => {
  //   if (password === confirmedPass) {
  //     const user = { name, email, password, confirmedPass };
  //
  //   } else {
  //     alert("Passwords didn't match");
  //   }
  // };
  let navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      try {
        let URL = "http://localhost:9000/api/register";
        const { data } = await axios.post(URL, values);
        localStorage.setItem("OYO_auth", JSON.stringify(data.user));
        // console.log(result);
        navigate("/login");
      } catch (error) {
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
                    Register
                  </h3>
                  <p className="fw-bold ">Please fill the fields below</p>
                </div>
                <div className="register-inputs">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      autoComplete="off"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="form-error small text-danger">
                        {errors.name}
                      </p>
                    ) : null}
                    <input
                      type="text"
                      autoComplete="off"
                      name="email"
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
                      autoComplete="off"
                      name="password"
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
                    <input
                      type="password"
                      autoComplete="off"
                      name="confirm_password"
                      className="form-control mt-3"
                      placeholder="Confirm your Password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error small text-danger">
                        {errors.confirm_password}
                      </p>
                    ) : null}

                    <button
                      className="btn w-75 ms-5 btn-success mt-3 px-3"
                      type="submit"
                    >
                      Register
                    </button>
                  </form>
                  <div className="mt-4 ">
                    <span className="">Already have an account?</span>
                    <Link
                      className="alreadyAccount text-muted ms-1 text-underline-danger "
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
