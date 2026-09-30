import { Link } from "react-router-dom";
import "./Cover.css";

const Cover = () => {
  return (
    <>
      <section className="hero">
        <div id="heroText">
          <h1>
            We Create <span>Strategic</span>, <span>Innovative</span>, and{" "}
            <span>Impactful</span> Solutions That Drive Brand Success.
          </h1>
          <Link to="/contact" className="btn hero-cta">
            Talk to Us <img src="/arrow.svg" alt="" width="18" height="8" />
          </Link>
        </div>
        <div id="heroImg">
          <img
            src="/images/hero-1200.webp"
            srcSet="/images/hero-600.webp 600w, /images/hero-1200.webp 1200w"
            sizes="(max-width: 981px) 100vw, 35vw"
            alt="The Omicrux team collaborating on a brand strategy"
            width="1200"
            height="1798"
            fetchPriority="high"
          />
        </div>
      </section>
    </>
  );
};

export default Cover;
