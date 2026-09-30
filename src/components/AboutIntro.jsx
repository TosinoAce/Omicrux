import "./AboutIntro.css";

const AboutIntro = () => {
  return (
    <section id="about-hero">
      <div id="story">
        <h1 data-reveal>The Omicrux Story</h1>
        <p data-reveal style={{ "--reveal-delay": "150ms" }}>Born out of the shared ambition of <span>two friends from Nigeria</span>, united by a
          passion for creativity and branding. What started as late-night
          conversations between friends soon turned into a bold vision—to build
          an agency that helps businesses tell their stories through powerful,
          lasting brand identities.
          Inspired by the Greek letter <span>“omicron” and the Latin word “crux”</span>, meaning
          the <span>core or essence</span>, the name symbolizes precision, unity, and
          getting to the heart of what makes a brand unique. Combining their
          strengths in <span>design, strategy, content, and technology</span>, the two
          founders set out to <span>help brands stand out in a crowded market</span>. From
          startups to growing and already established businesses, Omicrux is known for
          <span> delivering creative, innovative, and results-driven solutions</span>.
          More than just an agency, <span>Omicrux is a story of friendship,
          collaboration, and the belief that branding can shape the future</span>.
        </p>
      </div>
    </section>
  );
};

export default AboutIntro;
