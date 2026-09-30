import "./MV.css";

const MV = () => {
  return (
    <section id="mv">
      <div id="vision" data-reveal>
        <h2>Our Vision</h2>
        <p>
          To become Africa&apos;s foremost Leading PR & Branding Agency, known for
          crafting compelling stories, building remarkable brands, and driving
          communications that shape and inspire audiences.
        </p>
      </div>
      <div id="mission" data-reveal style={{ "--reveal-delay": "150ms" }}>
        <h2>Our Mission</h2>
        <p>
          To elevate brands, amplify voices and create meaningful connection
          through strategic PR, creative branding and insightful storytelling, ultimately helping
          our clients achieve their goals, and build lasting reputations.
        </p>
      </div>
    </section>
  );
};

export default MV;
