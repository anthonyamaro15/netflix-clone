import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { axiosWithAuthDB } from "../../utils/axiosWithAuth";

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
  return (
    <div className="Signup">
      <div className="Signup-form">
        <h2>Log In</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            axiosWithAuthDB()
              .post("/api/auth/login", values)
              .then((res) => {
                console.log(res);
                localStorage.setItem("token", JSON.stringify(res.data.token));
                history.push("/browse");
              });
            resetForm();
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
                {errors && touched && (
                  <p className="error-message">{errors.email}</p>
                )}
              </label>
              <label htmlFor="password">
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                />
                {errors && touched && (
                  <p className="error-message">{errors.password}</p>
                )}
              </label>
              <button type="submit">Log In</button>
            </Form>
          )}
        </Formik>
        <p className="already-member">
          Not a member? <Link to="/signup">Sign Up</Link>.
        </p>
        <p className="terms">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <Link to="www.google.com">Learn more.</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
