import React, { useState } from 'react';
import {
  FaEnvelope,
  FaUser,
  FaCommentDots,
  FaPhone,
  FaMapMarkerAlt,
  FaTruck,
  FaUndoAlt,
  FaHeadset
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      alert('❌ Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      alert('✅ Thank you for contacting us!');
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row g-4">
        {/* Contact Form */}
        <div className="col-md-6">
          <div className="card shadow border-0 p-4">
            <h3 className="text-primary mb-3">📩 Contact Support</h3>

            {submitted && (
              <div className="alert alert-success" role="alert">
                Your message has been sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label className="fw-bold">
                  <FaUser className="me-2" /> Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label className="fw-bold">
                  <FaEnvelope className="me-2" /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mb-4">
                <label className="fw-bold">
                  <FaCommentDots className="me-2" /> Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="form-control"
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 fw-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Sending...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Help Info + Image */}
        <div className="col-md-6">
          <div className="card shadow border-0 p-4 bg-light h-100">
            <h4 className="mb-3 text-success">🛒 Customer Help Center</h4>
            <p><FaPhone className="me-2" /> +91 12345 67890</p>
            <p><FaMapMarkerAlt className="me-2" /> Mumbai, India</p>
            <hr />
            <ul className="list-unstyled">
              <li className="mb-3">
                <FaTruck className="me-2 text-primary" /> Track your order
              </li>
              <li className="mb-3">
                <FaUndoAlt className="me-2 text-danger" /> Returns & Refunds
              </li>
              <li className="mb-3">
                <FaHeadset className="me-2 text-warning" /> Help & Support
              </li>
            </ul>

          
          </div>
        </div>
      </div>
    </div>
  );
};
