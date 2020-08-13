import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { axiosWithAuthDB } from "../../utils/axiosWithAuth";
import Navbar from "./Navbar";

const Login = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [togglePass, setTogglePass] = useState(false);
  const [errorr, setError] = useState("");
  const { register, handleSubmit, errors, reset } = useForm();

  const toggle = () => {
    setTogglePass(!togglePass);
  };

  const onSubmit = (values) => {
    setLoading(true);
    axiosWithAuthDB()
      .post("/api/auth/login", values)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("name", JSON.stringify(res.data.username));
        history.push("/browse");
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.message);
        setLoading(false);
      });
    if (loading) {
      reset();
    }
  };
  return (
    <div>
      <Navbar />
      <div className="Signup">
        <div className="Signup-form">
          <h2>Log In</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                ref={register({ required: true })}
              />

              <p className="error-message">{errors.email && "Require Field"}</p>
            </label>
            <label htmlFor="password">
              <input
                type={!togglePass ? "password" : "text"}
                name="password"
                id="password"
                placeholder="password"
                ref={register({ required: true })}
              />
              <span className="togglePassword" onClick={toggle}>
                {!togglePass ? "show" : "hide"}
              </span>

              <p className="error-message">
                {errors.password && "Require Field"}
              </p>
            </label>
            <button
              type="submit"
              disabled={loading}
              className={loading ? "submitting btn" : "btn"}
            >
              {loading ? "Submitting..." : "Log In"}
            </button>
          </form>
          <p className="already-member">
            Not a member? <Link to="/signup">Sign Up</Link>.
          </p>
          <p className="terms">
            Forgot password? <Link to="/forgot">Click here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
