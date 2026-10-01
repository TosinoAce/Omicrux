import { useRef } from "react";
import useGsap, { MOTION_OK } from "../../hooks/useGsap";
import "./Process.css";

const steps = [
  ["Discover", "We learn your business, your audience and your competitors before we design anything."],
  ["Define", "Together we agree on a clear position: what you stand for and how you should sound."],
  ["Design", "We build the identity, content and campaigns around that core, with your feedback at every stage."],
  ["Deliver", "We launch, measure what works and keep refining so your brand keeps growing."],
];

// The heading stays put while a line draws down through the steps, lighting
// each one as it is reached, so the order of the process is felt, not just read.
const Process = () => {
  const scope = useRef(null);

  useGsap(scope, ({ gsap, mm }) => {
    mm.add(MOTION_OK, () => {
      const q = gsap.utils.selector(scope.current);

      gsap.fromTo(
        q(".process-line span"),
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: q(".process-steps")[0],
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );

      const stepEls = q(".process-step");
      stepEls.forEach((step) => {
        gsap.from(step, {
          x: 24,
          ease: "power3.out",
          duration: 0.8,
          scrollTrigger: {
            trigger: step,
            start: "top 68%",
            toggleActions: "play none none reverse",
            // A step stays lit once reached; scrolling back above it unlights it.
            onEnter: () => step.classList.add("is-active"),
            onLeaveBack: () => step.classList.remove("is-active"),
          },
        });
      });
      return () => stepEls.forEach((step) => step.classList.remove("is-active"));
    });
  });

  return (
    <section className="process" ref={scope} aria-labelledby="process-title">
      <div className="process-intro">
        <h2 id="process-title">How we work</h2>
        <p>Every project follows the same four steps, so you always know what comes next.</p>
      </div>
      <div className="process-body">
        <div className="process-line" aria-hidden="true">
          <span />
        </div>
        <ol className="process-steps">
          {steps.map(([title, text]) => (
            <li key={title} className="process-step">
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
