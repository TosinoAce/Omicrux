import { Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import useGsap, { FINE_POINTER, MOTION_OK, headerOffset } from "../../hooks/useGsap";
import "./CruxSequence.css";

// "From noise to crux": the brand problems Omicrux solves drift around the
// screen (and dodge the cursor). Scrolling pulls every one of them into the
// centre, where they collapse into the Omicrux mark: omicron (circle) + crux.
// x / y are offsets from the centre of the stage, as a % of its width / height.
const fragments = [
  { text: "Random posts", style: "chip", x: -14, y: -27, r: -6 },
  { text: "Ten different fonts", style: "ghost", x: 27, y: -33, r: 4 },
  { text: "No clear message", style: "strike", x: -39, y: 4, r: 3 },
  { text: "Outdated website", style: "chip", x: 35, y: -6, r: -4 },
  { text: "Silent PR", style: "ghost", x: -22, y: 32, r: -3 },
  { text: "Forgettable events", style: "chip", x: 21, y: 30, r: 5 },
  { text: "Mixed colours", style: "strike", x: -4, y: -38, r: 2 },
  { text: "Copy-paste campaigns", style: "chip", x: 6, y: 41, r: -5 },
  { text: "No strategy", style: "ghost", x: 15, y: -18, r: 3 },
  { text: "Low engagement", style: "chip", x: 42, y: 19, r: -2, desktop: true },
  { text: "Unclear audience", style: "ghost", x: -37, y: -10, r: 2, desktop: true },
  { text: "A logo nobody remembers", style: "strike", x: -30, y: 19, r: -3, desktop: true },
];

const headline = "We find the crux of your brand.".split(" ");

const CruxSequence = () => {
  const scope = useRef(null);

  useGsap(scope, ({ gsap, mm }) => {
    mm.add({ motion: MOTION_OK, fine: FINE_POINTER }, (context) => {
      const { motion, fine } = context.conditions;
      if (!motion) return; // reduced motion keeps the static, fully-formed layout

      const root = scope.current;
      const q = gsap.utils.selector(root);
      const stage = q(".crux-stage")[0];
      const mark = q(".crux-mark")[0];
      const field = q(".crux-field")[0];
      const frags = q(".crux-frag");

      // Where every fragment converges: the centre of the mark, measured in the
      // field's coordinates (a fragment's offsetLeft/Top is its own centre,
      // because it is centred with `translate`). The mark's cursor lean is ignored.
      const target = () => {
        const f = field.getBoundingClientRect();
        const m = mark.getBoundingClientRect();
        return {
          x: m.left + m.width / 2 - f.left - gsap.getProperty(mark, "x"),
          y: m.top + m.height / 2 - f.top - gsap.getProperty(mark, "y"),
        };
      };

      gsap.set(q(".crux-end-word, .crux-end-rest"), { autoAlpha: 0, y: 32 });
      gsap.set(q(".crux-ring"), { strokeDashoffset: 290 });
      gsap.set(q(".crux-disc"), { autoAlpha: 0, scale: 0.8, transformOrigin: "50% 50%" });
      gsap.set(q(".crux-star"), { autoAlpha: 0, scale: 0.3, rotation: -135, transformOrigin: "50% 50%" });
      gsap.set(frags, { rotation: (i, el) => +el.dataset.r });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root,
          start: () => `top ${headerOffset()}px`,
          end: "+=170%",
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      tl.to(q(".crux-lede"), { autoAlpha: 0, y: -48, duration: 0.22 }, 0)
        // Pulled in, accelerating toward the core (outermost first).
        .to(
          frags,
          {
            x: (i, el) => target().x - el.offsetLeft,
            y: (i, el) => target().y - el.offsetTop,
            rotation: 0,
            scale: 0.12,
            ease: "power1.in",
            duration: 0.55,
            stagger: { each: 0.018, from: "edges" },
          },
          0.04
        )
        .to(frags, { autoAlpha: 0, duration: 0.1, stagger: { each: 0.018, from: "edges" } }, 0.5)
        .to(q(".crux-ring"), { strokeDashoffset: 0, duration: 0.24 }, 0.36)
        .to(q(".crux-disc"), { autoAlpha: 1, scale: 1, ease: "power2.out", duration: 0.12 }, 0.6)
        .to(q(".crux-star"), { autoAlpha: 1, scale: 1, rotation: 0, ease: "back.out(2)", duration: 0.16 }, 0.66)
        .to(q(".crux-end-word"), { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.14, stagger: 0.025 }, 0.74)
        .to(q(".crux-end-rest"), { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.12, stagger: 0.04 }, 0.9)
        .to({}, { duration: 0.08 }); // a beat to hold the finished mark

      // The noise is alive: each fragment drifts on its own.
      gsap.to(q(".crux-frag-float"), {
        x: "random(-8, 8)",
        y: "random(-12, 12)",
        rotation: "random(-3, 3)",
        duration: "random(2.6, 4.4)",
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      if (!fine) return;

      // ...and it dodges the cursor. The mark leans toward it.
      const repel = q(".crux-frag-repel").map((el) => ({
        x: gsap.quickTo(el, "x", { duration: 0.7, ease: "power3" }),
        y: gsap.quickTo(el, "y", { duration: 0.7, ease: "power3" }),
      }));
      const markX = gsap.quickTo(mark, "x", { duration: 0.9, ease: "power3" });
      const markY = gsap.quickTo(mark, "y", { duration: 0.9, ease: "power3" });
      const RADIUS = 230;
      const PUSH = 90;

      const onMove = (e) => {
        const box = stage.getBoundingClientRect();
        frags.forEach((frag, i) => {
          const r = frag.getBoundingClientRect();
          const dx = r.left + r.width / 2 - e.clientX;
          const dy = r.top + r.height / 2 - e.clientY;
          const dist = Math.hypot(dx, dy) || 1;
          const force = dist < RADIUS ? (1 - dist / RADIUS) * PUSH : 0;
          repel[i].x((dx / dist) * force);
          repel[i].y((dy / dist) * force);
        });
        markX((e.clientX - box.left - box.width / 2) * 0.05);
        markY((e.clientY - box.top - box.height / 2) * 0.05);
      };
      const onLeave = () => {
        repel.forEach((r) => {
          r.x(0);
          r.y(0);
        });
        markX(0);
        markY(0);
      };

      stage.addEventListener("pointermove", onMove);
      stage.addEventListener("pointerleave", onLeave);
      return () => {
        stage.removeEventListener("pointermove", onMove);
        stage.removeEventListener("pointerleave", onLeave);
      };
    });
  });

  return (
    <section className="crux" ref={scope} aria-labelledby="crux-title">
      <div className="crux-stage">
        <h2 className="crux-lede">Most brands are just noise.</h2>

        <div className="crux-field" aria-hidden="true">
          {fragments.map((f) => (
            <span
              key={f.text}
              className={`crux-frag crux-frag--${f.style}${f.desktop ? " crux-frag--desktop" : ""}`}
              style={{ "--x": `${f.x}%`, "--y": `${f.y}%` }}
              data-r={f.r}
            >
              <span className="crux-frag-repel">
                <span className="crux-frag-float">{f.text}</span>
              </span>
            </span>
          ))}
        </div>

        <div className="crux-core">
          <svg className="crux-mark" viewBox="0 0 100 100" aria-hidden="true">
            <circle className="crux-disc" cx="50" cy="50" r="46" />
            <circle className="crux-ring" cx="50" cy="50" r="46" />
            <path
              className="crux-star"
              d="M50 20 Q53.5 46.5 80 50 Q53.5 53.5 50 80 Q46.5 53.5 20 50 Q46.5 46.5 50 20Z"
            />
          </svg>
          <h2 id="crux-title" className="crux-end">
            {headline.map((word, i) => (
              <Fragment key={i}>
                <span className="crux-end-word">{word}</span>{" "}
              </Fragment>
            ))}
          </h2>
          <p className="crux-end-rest">
            The core of who you are, built into everything your audience sees.
          </p>
          <Link to="/about" className="crux-end-rest crux-link">
            Read our story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CruxSequence;
