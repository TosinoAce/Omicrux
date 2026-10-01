import { useRef } from "react";
import { Link } from "react-router-dom";
import services from "../../data/services";
import useGsap, { MOTION_OK, headerOffset } from "../../hooks/useGsap";
import "./ServicesPan.css";

// Desktop: the section pins and vertical scrolling pans the five services
// sideways, each photo drifting slightly against the movement (parallax).
// Mobile / reduced motion: a native swipeable row with scroll-snap.
const ServicesPan = () => {
  const scope = useRef(null);

  useGsap(scope, ({ gsap, mm }) => {
    mm.add(`(min-width: 768px) and ${MOTION_OK}`, () => {
      const q = gsap.utils.selector(scope.current);
      const viewport = q(".pan-viewport")[0];
      const track = q(".pan-track")[0];
      const distance = () => track.scrollWidth - viewport.clientWidth;

      gsap.set(viewport, { overflow: "hidden" });

      const pan = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: () => `top ${headerOffset()}px`,
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.fromTo(
        q(".pan-progress span"),
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: () => `top ${headerOffset()}px`,
            end: () => `+=${distance()}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      q(".pan-card img").forEach((img) => {
        const card = img.closest(".pan-card");
        gsap.fromTo(
          img,
          { xPercent: -7 },
          {
            xPercent: 7,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: pan,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          }
        );
      });
    });
  });

  return (
    <section className="pan" ref={scope} aria-labelledby="pan-title">
      <div className="pan-head">
        <h2 id="pan-title">What we do</h2>
        <p>Five ways we help brands get seen, remembered and chosen.</p>
      </div>

      <div className="pan-viewport">
        <ul className="pan-track">
          {services.map((service) => (
            <li key={service.slug} className="pan-card">
              <Link to={`/services/${service.slug}`}>
                <img src={service.image} alt="" loading="lazy" />
                <span className="pan-card-body">
                  <span className="pan-card-title">{service.title}</span>
                  <span className="pan-card-tagline">{service.tagline}</span>
                  <span className="pan-card-more">Learn more</span>
                </span>
              </Link>
            </li>
          ))}
          <li className="pan-card pan-card--end">
            <Link to="/services">
              <span className="pan-card-title">See all services and packages</span>
              <span className="pan-card-more">Explore</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="pan-progress" aria-hidden="true">
        <span />
      </div>
    </section>
  );
};

export default ServicesPan;
