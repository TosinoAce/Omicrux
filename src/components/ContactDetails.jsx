import { useState } from "react";
import socials from "../data/socials";
import "./ContactDetails.css";

// Submissions go to Netlify Forms. The matching hidden form in index.html lets
// Netlify detect the "contact" form at build time.
const ContactDetails = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      if (!res.ok) throw new Error(res.statusText);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact-details">
      <h2 data-reveal>Contact our team</h2>
      <p data-reveal style={{ "--reveal-delay": "100ms" }}>
        Got any questions about our services? We&apos;re here to help. Chat to
        our friendly team 24/7 and get onboard in less than 5 minutes.
      </p>
      <div id="contact-container">
        <div data-reveal style={{ "--reveal-delay": "150ms" }}>
          <form name="contact" method="POST" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>
            <div id="name-section">
              <div>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="firstName" placeholder="John" autoComplete="given-name" required />
              </div>
              <div>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="lastName" placeholder="Doe" autoComplete="family-name" required />
              </div>
            </div>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="example@gmail.com" autoComplete="email" required />
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="+234 812342157" autoComplete="tel" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Leave us a message" required></textarea>
            <button type="submit" className="btn" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" && (
              <p className="form-status" role="status">
                Thanks! Your message has been sent. We&apos;ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="form-status error" role="alert">
                Something went wrong. Please try again or call us directly.
              </p>
            )}
          </form>
        </div>
        <div id="contact-link-container" data-reveal style={{ "--reveal-delay": "250ms" }}>
          <h3>Follow Us</h3>
          <p>Connect with us on our social media platforms</p>
          <div id="contact-socials">
            {socials.map(({ name, icon, href }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt="" width="35" height="35" loading="lazy" />
                <p>{name}</p>
              </a>
            ))}
          </div>
          <h3>Call Us</h3>
          <p>
            <a href="tel:+2349028111613">+234 9028111613</a>,{" "}
            <a href="tel:+2349043232126">+234 9043232126</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
