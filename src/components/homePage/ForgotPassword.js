import React from "react";
import { useForm } from "react-hook-form";
// import { axiosWithAuthDB } from "../../utils/axiosWithAuth";

const ForgotPassword = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="ForgotPassword">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="forgot">
          <input
            type="email"
            id="forgot"
            name="forgot"
            placeholder="Enter email"
            ref={register({ required: true })}
          />
          <p className="error-message">{errors.forgot && "Require Filed"}</p>
        </label>

        <button type="submit">Reset</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
