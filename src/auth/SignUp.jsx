import React, { useState } from "react";
import Home from "../components/Home";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/logs")
  };

  return (
    <div className="container mt-2">
      <div className="row justify-content">
              <button onClick={() => navigate("/")} className="btn btn-primary w-100">
        Sign up
      </button>
        <div className="col-md-4">
          <h1 className="text-center mb-4">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="First name"
                name="First name"
                value={form.text}
                onChange={handleChange}
                placeholder="First name"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="Last name"
                name="Last name"
                value={form.text}
                onChange={handleChange}
                placeholder="Last name"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="Jshshr"
                name="jshshr"
                value={form.number}
                onChange={handleChange}
                placeholder="jshshr"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="address"
                name="address"
                value={form.text0}
                onChange={handleChange}
                placeholder="address"
                className="form-control"
                required
              />
            </div>
            <button type="submit"  className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp