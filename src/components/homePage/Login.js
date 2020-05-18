import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { axiosWithAuthDB } from "../../utils/axiosWithAuth";
import Navbar from "./Navbar";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .lowercase()
    .email("invalid email")
    .required("Please enter email"),
  password: yup.string().required("Please enter password"),
});

const Login = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [errorr, setError] = useState("");
  return (
    <div>
      <Navbar />
      <div className="Signup">
        <div className="Signup-form">
          <h2>Log In</h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              setLoading(true);
              axiosWithAuthDB()
                .post("/api/auth/login", values)
                .then((res) => {
                  localStorage.setItem("token", JSON.stringify(res.data.token));
                  localStorage.setItem(
                    "token",
                    JSON.stringify(res.data.username)
                  );
                  history.push("/browse");
                  setLoading(false);
                })
                .catch((err) => {
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
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                  />
                  {errors && touched && errorr && (
                    <p className="error-message">{errors.email || errorr}</p>
                  )}
                </label>
                <button
                  type="submit"
                  disabled={loading}
                  className={loading ? "submitting btn" : "btn"}
                >
                  {loading ? "Submitting" : "Log In"}
                </button>
              </Form>
            )}
          </Formik>
          <p className="already-member">
            Not a member? <Link to="/signup">Sign Up</Link>.
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

export default Login;
