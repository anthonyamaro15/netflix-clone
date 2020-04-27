import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";

const Login = () => {
  return (
    <div className="Signup">
      <div className="Signup-form">
        <h2>Log In</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
          {() => (
            <Form>
              <label htmlFor="email">
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                />
                <p className="error-message">your name must be valid</p>
              </label>
              <label htmlFor="password">
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                />
                <p className="error-message">your name must be valid</p>
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
