import { Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import useGsap, { FINE_POINTER, MOTION_OK } from "../../hooks/useGsap";
import "./HomeCta.css";

const statement = "Your brand already has a crux. Let's build everything around it.".split(" ");

// The closing statement fills in word by word as it is read (scroll-linked),
// then the button pulls toward the cursor, inviting the click.
const HomeCta = () => {
  const scope = useRef(null);

  useGsap(scope, ({ gsap, mm }) => {
    mm.add({ motion: MOTION_OK, fine: FINE_POINTER }, (context) => {
      const { motion, fine } = context.conditions;
      if (!motion) return;
      const q = gsap.utils.selector(scope.current);

      // Words fill from a dim grey (still readable, 3:1+) to their final colour.
      const words = q(".cta-word");
      const finals = words.map((word) => getComputedStyle(word).color);
      gsap.fromTo(
        words,
        { color: "#727171" },
        {
          color: (i) => finals[i],
          ease: "none",
          stagger: 0.1,
          scrollTrigger: { trigger: q(".cta-statement")[0], start: "top 80%", end: "bottom 45%", scrub: 0.5 },
        }
      );

      if (!fine) return;

      // Magnetic button: the button follows the cursor a little, its label a little more.
      const zone = q(".cta-magnet")[0];
      const button = q(".cta-button")[0];
      const label = q(".cta-button span")[0];
      const bx = gsap.quickTo(button, "x", { duration: 0.6, ease: "elastic.out(1, 0.5)" });
      const by = gsap.quickTo(button, "y", { duration: 0.6, ease: "elastic.out(1, 0.5)" });
      const lx = gsap.quickTo(label, "x", { duration: 0.6, ease: "elastic.out(1, 0.5)" });
      const ly = gsap.quickTo(label, "y", { duration: 0.6, ease: "elastic.out(1, 0.5)" });

      const onMove = (e) => {
        const r = button.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        bx(dx * 0.35);
        by(dy * 0.35);
        lx(dx * 0.15);
        ly(dy * 0.15);
      };
      const onLeave = () => {
        bx(0);
        by(0);
        lx(0);
        ly(0);
      };
      zone.addEventListener("pointermove", onMove);
      zone.addEventListener("pointerleave", onLeave);
      return () => {
        zone.removeEventListener("pointermove", onMove);
        zone.removeEventListener("pointerleave", onLeave);
      };
    });
  });

  return (
    <section className="home-cta" ref={scope} aria-labelledby="cta-title">
      <h2 id="cta-title" className="cta-statement">
        {statement.map((word, i) => (
          <Fragment key={i}>
            <span className="cta-word">{word}</span>{" "}
          </Fragment>
        ))}
      </h2>
      <div className="cta-magnet">
        <Link to="/contact" className="btn cta-button">
          <span>Talk to Us</span>
        </Link>
      </div>
    </section>
  );
};

export default HomeCta;
