import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const initialValues = {
  search: "",
};

const NavForm = ({ setShowForm }) => {
  const { register, handleSubmit, errors, reset } = useForm(initialValues);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (values) => {
    dispatch({ type: "SEARCH_MOVIE", payload: values.search });
    history.push("/results");
    setShowForm(false);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Movie title"
          ref={register({ required: true })}
        />
        {errors.search && <p className="error">This Fiels is required</p>}
      </label>
    </form>
  );
};

export default NavForm;
