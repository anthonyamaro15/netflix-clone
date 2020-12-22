import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BiHide, BiShow } from "react-icons/bi";
import Navbar from "./Navbar";
import { loginReq } from './apiRequest/index';

const Login = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [togglePass, setTogglePass] = useState(false);
  const [error, setError] = useState("");
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
    setLoading(true);
    try {
      const { data } = await loginReq(values);
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("id", JSON.stringify(data.id));
      history.push("/acc/browse");
      setLoading(false)

    } catch (error) {
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
                {!togglePass ? <BiHide /> : <BiShow />}
              </span>

              <p className="error-message">
                {errors.password && "Require Field"}
              </p>
              <p className="error-message">{error && error}</p>
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
