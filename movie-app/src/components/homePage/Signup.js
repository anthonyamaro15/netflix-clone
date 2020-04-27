import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required("Please enter name"),
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
  return (
    <div className="Signup">
      <div className="Signup-form">
        <h2>Sign Up</h2>
        <Formik
          initialValues={{ name: "", email: "", password: "", confirm: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <label htmlFor="name">
                <Field type="text" name="name" id="name" placeholder="name" />
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
              <label htmlFor="confirm">
                <Field
                  type="password"
                  name="confirm"
                  id="confirm"
                  placeholder="confirm password"
                />
                {errors && touched && (
                  <p className="error-message">{errors.confirm}</p>
                )}
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
