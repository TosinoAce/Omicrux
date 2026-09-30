import { Link } from "react-router-dom";
import packages, { formatNaira } from "../data/packages";
import "./Packages.css";

const Packages = () => {
  return (
    <section id="packages-container">
      <h2 data-reveal>A <span>Package perfect</span> for your brand needs</h2>
      <p data-reveal style={{ "--reveal-delay": "100ms" }}>From catering for your personal & corporate needs, you can be rest assured we have you in mind in our pricing.</p>
      <div className="overlay">
        {packages.map(({ name, price, tagline, features }, i) => (
          <div
            key={name}
            className={`div-${i + 1}`}
            data-reveal
            style={{ "--reveal-delay": `${i * 120}ms` }}
          >
            <h3>{name}</h3>
            <h2>
              {formatNaira(price)}
              <span className="per-month">/Month</span>
            </h2>
            <p>{tagline}</p>
            <ul>
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="button" data-reveal>
        <Link to="/contact" className="btn">Get Custom Pricing</Link>
      </div>
    </section>
  );
};

export default Packages;
