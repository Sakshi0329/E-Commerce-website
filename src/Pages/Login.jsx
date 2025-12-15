import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ registeredUser, setUser, setStatusMessage }) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      registeredUser &&
      form.username === registeredUser.username &&
      form.password === registeredUser.password
    ) {
      setUser(registeredUser);
      setStatusMessage("Login successful!");
      navigate("/profile");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <form className="p-4 shadow bg-white rounded" style={{ maxWidth: 400, margin: "0 auto" }} onSubmit={handleSubmit}>
      <h3 className="text-center">Login</h3>
      <div className="form-group">
        <label>Username</label>
        <input className="form-control" name="username" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" name="password" onChange={handleChange} required />
      </div>
      <button className="btn btn-success btn-block mt-3 w-100">Login</button>
    </form>
  );
};