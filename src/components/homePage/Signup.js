import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { BiHide, BiShow } from "react-icons/bi";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import { signupRequest } from './apiRequest';

const Signup = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [togglePass, setTogglePass] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [error]);

  const toggle = () => {
    setTogglePass(!togglePass);
  };

  const onSubmit = async (values) => {
    const { username, email, password } = values;
    const storeValues = {
      email,
      username,
      password,
    };
    setLoading(true);
    try {
       await signupRequest(storeValues);
       history.push("/login");
       setLoading(false);
    } catch (error) {
       console.log(error.response.data.message);
       setError(error.response.data.message);
       setLoading(false);
    }
    
    if (loading) {
      reset();
    }
  };
  return (
    <div>
      <Navbar />
      <div className="Signup">
        <div className="Signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                ref={register({ required: true })}
              />
              <p className="error-message">
                {errors.username && "Require Field"}
              </p>
            </label>
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
                {!togglePass ? <BiHide /> : <BiShow />}
              </span>
              <p className="error-message">
                {errors.password && "Require Field"}
              </p>
            </label>
            <label htmlFor="confirm">
              <input
                type={!togglePass ? "password" : "text"}
                name="confirm"
                id="confirm"
                placeholder="confirm password"
                ref={register({ required: true })}
              />
              <p className="error-message">{error && error}</p>
              <p className="error-message">
                {errors.confirm && "Require Field"}
              </p>
            </label>

            <button
              type="submit"
              disabled={loading}
              className={loading ? "submitting btn" : "btn"}
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </form>
          <p className="already-member">
            Already a member? <Link to="/login">Log In</Link>
          </p>
          <p className="terms">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <Link to="www.google.com">Learn more.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
