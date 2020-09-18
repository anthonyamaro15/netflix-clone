import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { BiHide, BiShow } from "react-icons/bi";
import { useForm } from "react-hook-form";
import axios from "axios";

const ResetPassword = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [togglePass, setTogglePass] = useState(false);
  const [invalid, setInvalid] = useState("");
  const { token } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (invalid) {
      setTimeout(() => {
        setInvalid("");
      }, 3000);
    }
  }, [invalid]);

  const toggle = () => {
    setTogglePass(!togglePass);
  };

  const onSubmit = (data) => {
    const { password, confirm } = data;

    let newPassword = { password };
    if (password === confirm) {
      setLoading(true);
      axios
        .patch(
          `${process.env.REACT_APP_API_SERVER_URL}/api/resetpassword/${token}`,
          newPassword
        )
        .then((res) => {
          history.push("/login");
          setTimeout(() => alert("Password updated successfully!"), 1000);
          setLoading(false);
          reset();
        })
        .catch((err) => {
          console.log(err.response.data);
          setLoading(false);
        });
    } else {
      setInvalid("Passwords dont match");
    }
  };
  return (
    <div className="ForgotPassword">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Enter new password</h2>
        <label htmlFor="password">
          <input
            type={!togglePass ? "password" : "text"}
            id="password"
            name="password"
            placeholder="Enter password"
            ref={register({ required: true })}
          />
          <span className="togglePassword" onClick={toggle}>
            {!togglePass ? <BiHide /> : <BiShow />}
          </span>
          <p className="error-message">{errors.password && "Require Filed"}</p>
        </label>
        <label htmlFor="confirm">
          <input
            type={!togglePass ? "password" : "text"}
            id="confirm"
            name="confirm"
            placeholder="Confirm password"
            ref={register({ required: true })}
          />
          <p className="error-message">{errors.confirm && "Require Filed"}</p>
          <p className="error-message">{invalid && invalid}</p>
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
