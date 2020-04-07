import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { withFormik, Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";

// const NavForm = (props) => {
//   const { status, setShowForm, touched, errors } = props;
//   const dispatch = useDispatch();
//   const history = useHistory();

//   useEffect(() => {
//     status && dispatch({ type: "SEARCH_MOVIE", payload: status.search });
//     status && setShowForm(false);
//   }, [status, dispatch, setShowForm]);

//   useEffect(() => {
//     status && history.push("/results");
//   }, [status, history]);

//   return (
//     <Form className="form">
//       <label htmlFor="search">
//         <Field
//           type="text"
//           name="search"
//           id="search"
//           placeholder="Movie title"
//         />
//       </label>
//       {errors.search && touched.search && (
//         <p className="error">{errors.search}</p>
//       )}
//     </Form>
//   );
// };

// export default withFormik({
//   mapPropsToValues: () => ({
//     search: "",
//   }),
//   validationSchema: yup.object().shape({
//     search: yup.string().required("please enter movie title"),
//   }),
//   handleSubmit: (values, { resetForm, setStatus }) => {
//     setStatus(values);
//     resetForm();
//   },
// })(NavForm);

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
