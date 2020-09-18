import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ForgotPassword = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [error]);

  const onSubmit = (data) => {
    setLoading(true);
    axios
      .patch(`${process.env.REACT_APP_API_SERVER_URL}/api/forgotpassword`, data)
      .then((res) => {
        setLoading(false);
        reset();
        setTimeout(() => alert(res.data.message), 1000);
      })
      .catch((err) => {
        console.log(err.response.data.errorMessage);
        setError(err.response.data.errorMessage);
        setLoading(false);
      });
  };
  return (
    <div className="ForgotPassword">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>reset password</h2>
        <label htmlFor="forgot">
          <input
            type="email"
            id="forgot"
            name="email"
            placeholder="Enter email"
            ref={register({ required: true })}
          />
          <p className="error-message">{errors.email && "Require Filed"}</p>
          <p className="error-message">{error && error}</p>
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
