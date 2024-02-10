import React, { useState } from "react";
import "./Footer.css";
import Axios from "axios";
const base_url = "https://portfoliobackend-s19e.onrender.com";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post(`${base_url}/feedback`, {
      email: email,
      message: message,
    });
    alert("Thank You for Your Feedback");

    setEmail("");
    setMessage("");
  };

  return (
    <div className="footer" id="contact">
      <div className="footer-logo">
        <p>Contact Me</p>
      </div>
      <div className="detail">
        Please contact me directly at{" "}
        <b>
          <u>abhishek.cse.28@gmail.com </u>
        </b>{" "}
        or through this form.
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <input
            type="email"
            className="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="message"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="btttn">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023. Created by ABHISHEK SINGH</p>
      </div>
    </div>
  );
};

export default Footer;
