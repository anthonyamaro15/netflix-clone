import React, { useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";

const NavForm = ({ status }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    status && dispatch({ type: "SEARCH_MOVIE", payload: status.search });
  }, [status, dispatch]);

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
    search: "",
  }),
  validationSchema: yup.object().shape({
    search: yup.string().required("please enter value"),
  }),
  handleSubmit: (values, { resetForm, setStatus }) => {
    console.log(values);
    setStatus(values);
    resetForm();
  },
})(NavForm);
