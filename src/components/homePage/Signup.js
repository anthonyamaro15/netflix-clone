import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { axiosWithAuthDB } from "../../utils/axiosWithAuth";
import Navbar from "./Navbar";

const validationSchema = yup.object().shape({
  username: yup.string().required("Please enter username"),
  email: yup
    .string()
    .lowercase()
    .email("invalid email")
    .required("Please enter email"),
  password: yup
    .string()
    .min(4, "Too short")
    .max(15, "Too long")
    .required("Please enter password"),
  confirm: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not  match")
    .required("Please confirm password"),
});

const Signup = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [errorr, setError] = useState("");
  const [togglePass, setTogglePass] = useState(false);

  const toggle = () => {
    setTogglePass(!togglePass);
  };
  return (
    <div>
      <Navbar />
      <div className="Signup">
        <div className="Signup-form">
          <h2>Sign Up</h2>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirm: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              const { username, email, password } = values;
              const storeValues = {
                email,
                username,
                password,
              };
              setLoading(true);
              axiosWithAuthDB()
                .post("/api/auth/register", storeValues)
                .then((res) => {
                  history.push("/login");
                  setLoading(false);
                })
                .catch((err) => {
                  console.log(err.response.data.message);
                  setError(err.response.data.message);
                  setLoading(false);
                });

              if (loading) {
                resetForm();
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <label htmlFor="username">
                  <Field
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                  />
                  {errors && touched && (
                    <p className="error-message">{errors.name}</p>
                  )}
                </label>
                <label htmlFor="email">
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                  />
                  {errors && touched && errorr && (
                    <p className="error-message">{errors.email || errorr}</p>
                  )}
                </label>
                <label htmlFor="password">
                  <Field
                    type={!togglePass ? "password" : "text"}
                    name="password"
                    id="password"
                    placeholder="password"
                  />
                  <span className="togglePassword" onClick={toggle}>
                    {!togglePass ? "show" : "hide"}
                  </span>
                  {errors && touched && (
                    <p className="error-message">{errors.password}</p>
                  )}
                </label>
                <label htmlFor="confirm">
                  <Field
                    type={!togglePass ? "password" : "text"}
                    name="confirm"
                    id="confirm"
                    placeholder="confirm password"
                  />
                  <span className="togglePassword" onClick={toggle}>
                    {!togglePass ? "show" : "hide"}
                  </span>
                  {errors && touched && (
                    <p className="error-message">{errors.confirm}</p>
                  )}
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className={loading ? "submitting btn" : "btn"}
                >
                  {loading ? "Creating account..." : "Sign Up"}
                </button>
              </Form>
            )}
          </Formik>
          <p className="already-member">
            Already a member? <Link to="/login">Log In</Link>
          </p>
          <p className="terms">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <Link to="www.google.com">Learn more.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
