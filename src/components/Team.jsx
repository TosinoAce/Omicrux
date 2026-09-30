import "./Team.css";

// Roles and bios are placeholders: update them with each founder's real details.
// Add a `photo` path (e.g. "/images/oluwatosin.webp") to show an image instead of initials.
const team = [
  {
    name: "Oluwatosin Joseph",
    role: "Co-Founder",
    bio: "Drives the creative and technical side of Omicrux, turning bold ideas into brand identities and digital experiences that connect.",
  },
  {
    name: "Adedeji Aderounmu",
    role: "Co-Founder",
    bio: "Leads strategy and client partnerships, making sure every campaign is rooted in clear positioning and delivers real results.",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

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
