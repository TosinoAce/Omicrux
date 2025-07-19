import React from "react";
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
          <Link to="/contact">
            <button>
              Talk to Us <img src="/arrow.svg" alt="arrow" />
            </button>
          </Link>
        </div>
        <div id="heroImg">
          <img src="/hero3.jpg" alt="hero image" />
        </div>
      </section>
    </>
  );
};

export default Cover;
