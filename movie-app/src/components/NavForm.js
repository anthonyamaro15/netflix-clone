import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

const NavForm = () => {
  return (
    <Form className="form">
      <label htmlFor="search">
        <Field
          type="text"
          name="search"
          id="search"
          placeholder="Movie title"
        />
      </label>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    search: ""
  }),
  validationSchema: yup.object().shape({
    search: yup.string().required("please enter value")
  }),
  handleSubmit: (values, { resetForm, setStatus }) => {
    setStatus(values);
    resetForm();
  }
})(NavForm);
