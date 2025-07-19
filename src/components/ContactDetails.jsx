import React from "react";
import "./ContactDetails.css";

const ContactDetails = () => {
  return (
    <section id="contact-details">
      <h2>Contact our team</h2>
      <p>
        Got any questions about the our seervices? We're here to help. Chat to
        our friendly team 24/7 and get onboard in less than 5 minutes.
      </p>
      <div id="contact-container">
        <div>
          <form action="">
            <div id="name-section">
              <div>
                <p>First Name</p>
                <input type="text" placeholder="John"/>
              </div>
              <div>
                <p>Last Name</p>
                <input type="text" placeholder="Doe"/>
              </div>
            </div>
            <p>Email Address</p>
            <input type="email" placeholder="example@gmail.com"/>
            <p>Phone Number</p>
            <input type="number" name="" id="" placeholder="+234 812342157"/>
            <p>Message</p>
            <textarea name="" id="" placeholder="Leave us a message"></textarea><br />
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div id="contact-link-container">
          <h3>Follow Us</h3>
          <p>Connect with us on out Social media platforms</p>
          <div id="contact-socials">
            <div>
              <img src="/facebook.svg" alt="Facebook" />
              <p>Facebook</p>
            </div>
            <div>
              <img src="/instagram.svg" alt="Instagram" />
              <p>Instagram</p>
            </div>
            <div>
              <img src="/icons8-x.svg" alt="X" />
              <p>X</p>
            </div>
            <div>
              <img src="/linkedin.svg" alt="LinkedIn" />
              <p>LinkedIn</p>
            </div>
          </div>
          <h3>Call Us</h3>
          <p>+234 9028111613, +234 9043232126</p>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
