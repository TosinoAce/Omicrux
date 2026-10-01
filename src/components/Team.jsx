import team, { initials } from "../data/team";
import "./Team.css";

const Team = () => {
  return (
    <section id="team">
      <h2 data-reveal>Meet the Founders</h2>
      <p data-reveal style={{ "--reveal-delay": "100ms" }}>
        Two friends, one vision. Together they bring strategy, design, content
        and technology to every brand Omicrux works with.
      </p>
      <div id="team-grid">
        {team.map(({ name, role, bio, photo }, i) => (
          <div
            className="team-card"
            key={name}
            data-reveal
            style={{ "--reveal-delay": `${150 + i * 120}ms` }}
          >
            {photo ? (
              <img src={photo} alt={name} className="team-avatar" loading="lazy" />
            ) : (
              <div className="team-avatar" aria-hidden="true">
                {initials(name)}
              </div>
            )}
            <h3>{name}</h3>
            <span>{role}</span>
            <p>{bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
