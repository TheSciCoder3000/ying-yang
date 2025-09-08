"use client";

import React from "react";
import "@/styles/css/ContactForm.css";

const ContactForm = () => {
  return (
    <form>
      <input placeholder="Email" type="email" className="email" />
      <input placeholder="Full Name" type="text" className="fullname" />
      <input placeholder="Project Budget" type="text" className="budget" />
      <input
        placeholder="How id you hear about us?"
        type="text"
        className="reception"
      />

      <textarea
        placeholder="Tell us about your product and goals"
        name="message"
        className="message"
        rows={6}
      />

      <div className="button-cont">
        <button type="submit">Send message</button>
      </div>
    </form>
  );
};

export default ContactForm;
