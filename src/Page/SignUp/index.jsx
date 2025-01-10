import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpImg from "../../assets/images/signup-img.png";
import { Logo } from "../Logo";

const SignUp = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({}); // State to store field errors

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "phone") {
      // Allow only numeric values for the phone field
      if (!/^\d*$/.test(value)) return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.username.trim()) newErrors.username = "Username is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.phone.trim() || formData.phone.length !== 10)
      newErrors.phone = "Phone number must be 10 digits.";
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the terms.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if any field is invalid
    } else {
      setErrors({});
      alert("Form submitted successfully!");
      console.log("Form Data:", formData);
      navigate("/home");

    }
  };

  return (
    <div className="container">
      <div className="signup-page">
        <div className="signup-left">
          <img src={SignUpImg} className="signup-img" alt="signup" />
          <h1>Discover new things on Superapp</h1>
        </div>
        <div className="signup-right">
          <div className="signup-logo">
           <Logo/>
            <p>Create your new account</p>
          </div>
          <div className="signup-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  style={{ borderColor: errors.name ? "red" : "#ccc" }}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <input
                  type="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  style={{ borderColor: errors.username ? "red" : "#ccc" }}
                />
                {errors.username && (
                  <span className="error-message">{errors.username}</span>
                )}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  style={{ borderColor: errors.email ? "red" : "#ccc" }}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  style={{ borderColor: errors.phone ? "red" : "#ccc" }}
                />
                {errors.phone && (
                  <span className="error-message">{errors.phone}</span>
                )}
              </div>

              <div className="terms">
                <label className="terms-wrap">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={handleChange}
                    name="agreeToTerms"
                    value={formData.agreeToTerms}
                  />
                  Share my registration data with Superapp
                </label>
                {errors.agreeToTerms && (
                  <span className="error-messages">{errors.agreeToTerms}</span>
                )}
              </div>

              <button type="submit">Sign Up</button>
            </form>

            <p className="policies">
              By clicking on Sign up, you agree to Superapp{" "}
              <a href="/terms">Terms and Conditions of Use</a>.
              <br />
              To learn more about how Superapp collects, uses, shares, and
              protects your personal data, please head to Superapp{" "}
              <a href="/privacy">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
