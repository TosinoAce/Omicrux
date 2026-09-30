import "./ContactIntro.css";

const ContactIntro = () => {
  return (
    <section id="contact-hero">
      <div>
        <h1 data-reveal>
          &ldquo;Good communication is the bridge between confusion and clarity.&rdquo;<span> – Nat Turner</span>
        </h1>
        
        <p data-reveal style={{ "--reveal-delay": "150ms" }}>
          At Omicrux, we believe every great partnership begins with a
          conversation. Whether you’re looking to build a bold new brand,
          refresh your identity, or craft a strategic campaign, we’re here to
          listen and bring your vision to life.
        </p>
      </div>
    </section>
  );
};

export default ContactIntro;
