import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterForm = ({ setUser, setStatusMessage }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setUser({
      firstName: form.firstName,
      lastName: form.lastName,
      username: form.username,
      password: form.password,
    });
    setStatusMessage("Registered successfully! Please login.");
    navigate("/login");
  };

  return (
    <form className="p-4 shadow bg-white rounded" style={{ maxWidth: 500, margin: "0 auto" }} onSubmit={handleSubmit}>
      <h3 className="text-center">Register</h3>
      <div className="form-group mb-2">
        <label>First Name</label>
        <input className="form-control" name="firstName" onChange={handleChange} required />
      </div>
      <div className="form-group mb-2">
        <label>Last Name</label>
        <input className="form-control" name="lastName" onChange={handleChange} required />
      </div>
      <div className="form-group mb-2">
        <label>Username</label>
        <input className="form-control" name="username" onChange={handleChange} required />
      </div>
      <div className="form-group mb-2">
        <label>Password</label>
        <input type="password" className="form-control" name="password" onChange={handleChange} required />
      </div>
      <div className="form-group mb-3">
        <label>Confirm Password</label>
        <input type="password" className="form-control" name="confirmPassword" onChange={handleChange} required />
      </div>
      <button className="btn btn-primary w-100">Register</button>
    </form>
  );
};