import { useRef } from "react";
import { Link } from "react-router-dom";
import team, { initials } from "../../data/team";
import useGsap, { MOTION_OK } from "../../hooks/useGsap";
import "./FoundersTeaser.css";

// The two founders as monograms: each ring draws itself as it scrolls into
// view (the same omicron circle as the logo), and the pair drift at slightly
// different speeds for a sense of depth.
const FoundersTeaser = () => {
  const scope = useRef(null);

  useGsap(scope, ({ gsap, mm }) => {
    mm.add(MOTION_OK, () => {
      const q = gsap.utils.selector(scope.current);

      q(".founder").forEach((founder, i) => {
        gsap.fromTo(
          founder.querySelector(".founder-ring"),
          { strokeDashoffset: 290 },
          {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: { trigger: founder, start: "top 85%", end: "top 35%", scrub: 0.6 },
          }
        );
        gsap.fromTo(
          founder,
          { y: 60 + i * 50 },
          {
            y: -30 - i * 30,
            ease: "none",
            scrollTrigger: { trigger: scope.current, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });
    });
  });

  return (
    <section className="founders" ref={scope} aria-labelledby="founders-title">
      <div className="founders-copy" data-reveal>
        <h2 id="founders-title">
          Started by two friends who believe <em>branding can shape the future</em>.
        </h2>
        <p>
          Omicrux brings strategy, design, content and technology under one roof,
          so your brand speaks with one voice everywhere.
        </p>
        <Link to="/about" className="founders-link">
          Meet the founders
        </Link>
      </div>

      <ul className="founders-list">
        {team.map((person) => (
          <li key={person.name} className="founder">
            <span className="founder-mark" aria-hidden="true">
              <svg viewBox="0 0 100 100">
                <circle className="founder-ring" cx="50" cy="50" r="46" />
              </svg>
              <span>{initials(person.name)}</span>
            </span>
            <span className="founder-name">{person.name}</span>
            <span className="founder-role">{person.role}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FoundersTeaser;
