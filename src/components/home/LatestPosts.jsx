import { useRef } from "react";
import { Link } from "react-router-dom";
import posts, { formatDate } from "../../data/posts";
import useGsap, { FINE_POINTER, MOTION_OK } from "../../hooks/useGsap";
import "./LatestPosts.css";

const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

// Big typographic rows; on hover (mouse only) the article's cover image floats
// at the cursor, previewing where the link goes. Touch screens get thumbnails.
const LatestPosts = () => {
  const scope = useRef(null);

  useGsap(scope, ({ gsap, mm }) => {
    mm.add(`${FINE_POINTER} and ${MOTION_OK}`, () => {
      const q = gsap.utils.selector(scope.current);
      const list = q(".latest-list")[0];
      const preview = q(".latest-preview")[0];
      const img = preview.querySelector("img");

      gsap.set(preview, { autoAlpha: 0, scale: 0.85, xPercent: -50, yPercent: -50 });
      const x = gsap.quickTo(preview, "x", { duration: 0.55, ease: "power3" });
      const y = gsap.quickTo(preview, "y", { duration: 0.55, ease: "power3" });
      const rotate = gsap.quickTo(preview, "rotation", { duration: 0.8, ease: "power3" });
      let lastX = 0;

      const onMove = (e) => {
        const box = list.getBoundingClientRect();
        x(e.clientX - box.left);
        y(e.clientY - box.top);
        rotate(gsap.utils.clamp(-8, 8, (e.clientX - lastX) * 0.6));
        lastX = e.clientX;
      };
      const show = (e) => {
        img.src = e.currentTarget.dataset.image;
        gsap.to(preview, { autoAlpha: 1, scale: 1, duration: 0.35, ease: "power3.out" });
      };
      const hide = () => gsap.to(preview, { autoAlpha: 0, scale: 0.85, duration: 0.25, ease: "power2.out" });

      const rows = q(".latest-row");
      list.addEventListener("pointermove", onMove);
      list.addEventListener("pointerleave", hide);
      rows.forEach((row) => row.addEventListener("pointerenter", show));
      return () => {
        list.removeEventListener("pointermove", onMove);
        list.removeEventListener("pointerleave", hide);
        rows.forEach((row) => row.removeEventListener("pointerenter", show));
      };
    });
  });

  return (
    <section className="latest" ref={scope} aria-labelledby="latest-title">
      <div className="latest-head" data-reveal>
        <h2 id="latest-title">Latest writing</h2>
        <Link to="/blog" className="latest-all">
          All articles
        </Link>
      </div>

      <ul className="latest-list">
        {latest.map((post, i) => (
          <li key={post.slug} data-reveal style={{ "--reveal-delay": `${i * 90}ms` }}>
            <Link
              to={`/blog/${post.slug}`}
              className="latest-row"
              data-image={`/images/${post.image}-800.webp`}
            >
              <img
                className="latest-thumb"
                src={`/images/${post.image}-800.webp`}
                alt=""
                loading="lazy"
                width="800"
                height="533"
              />
              <span className="latest-meta">{post.category}</span>
              <span className="latest-title">{post.title}</span>
              <time className="latest-date" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
            </Link>
          </li>
        ))}
        <li className="latest-preview" aria-hidden="true">
          <img alt="" />
        </li>
      </ul>
    </section>
  );
};

export default LatestPosts;
