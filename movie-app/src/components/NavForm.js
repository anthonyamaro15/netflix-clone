import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  search: yup.string().required("please enter movie title"),
});

const NavForm = ({ setShowForm }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Formik
      initialValues={{ search: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch({ type: "SEARCH_MOVIE", payload: values.search });
        history.push("/results");
        //   setShowForm(false);
        console.log(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className="form">
          <label htmlFor="search">
            <Field
              type="text"
              name="search"
              id="search"
              placeholder="Movie title"
            />
          </label>
          {errors.search && touched.search && (
            <p className="error">{errors.search}</p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default NavForm;
