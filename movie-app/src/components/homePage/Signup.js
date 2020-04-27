import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";

const Signup = () => {
  return (
    <div className="Signup">
      <div className="Signup-form">
        <h2>Sign Up</h2>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
          {() => (
            <Form>
              <label htmlFor="name">
                <Field type="text" name="name" id="name" placeholder="name" />
                <p className="error-message">your name must be valid</p>
              </label>
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
              <button type="submit">Sign Up</button>
            </Form>
          )}
        </Formik>
        <p className="already-member">
          Already a member? <Link to="/login">Log In</Link>
        </p>
        <p className="terms">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <Link to="www.google.com">Learn more.</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
