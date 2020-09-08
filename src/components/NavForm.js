import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialValues = {
  search: "",
};

const NavForm = ({ setShowForm }) => {
  const { register, handleSubmit, errors, reset } = useForm(initialValues);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (values) => {
    //  dispatch({ type: "SEARCH_MOVIE", payload: values.search });
    dispatch({ type: "FETCHING_SEARCH" });
    axiosWithAuth()
      .get(
        `/search/movie?api_key=${process.env.REACT_APP_API}&language=en-US&query=${values.search}&page=1&include_adult=false`
      )
      .then((res) => {
        dispatch({ type: "GETTING_SEARCH_VALUES", payload: res.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
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
