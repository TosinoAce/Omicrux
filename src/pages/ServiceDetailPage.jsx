import { Link, useParams } from "react-router-dom";
import services from "../data/services";
import packages, { formatNaira } from "../data/packages";
import NotFoundPage from "./NotFoundPage";
import "./ServiceDetailPage.css";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const index = services.findIndex((s) => s.slug === slug);
  if (index === -1) return <NotFoundPage />;

  const service = services[index];
  const pkg = packages.find((p) => p.name === service.pkg);
  const others = services.filter((s) => s.slug !== slug);

  return (
    <article id="service-detail">
      <header className="service-header" data-reveal>
        <Link to="/services" className="service-back">
          ← All services
        </Link>
        <span className="service-eyebrow">
          Service {String(index + 1).padStart(2, "0")}
        </span>
        <h1>{service.title}</h1>
        <p className="service-tagline">{service.tagline}</p>
        <Link to="/contact" className="btn">
          Start a project
        </Link>
      </header>

      <section className="service-intro" data-reveal>
        <p>{service.intro}</p>
      </section>

      <section className="service-section">
        <h2 data-reveal>What&apos;s included</h2>
        <ul className="service-included">
          {service.included.map((item, i) => (
            <li key={item} data-reveal style={{ "--reveal-delay": `${i * 60}ms` }}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="service-section">
        <h2 data-reveal>How we work</h2>
        <ol className="service-process">
          {service.process.map(([step, text], i) => (
            <li key={step} data-reveal style={{ "--reveal-delay": `${i * 90}ms` }}>
              <span className="step-number">{String(i + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="service-section service-split">
        <div data-reveal>
          <h2>Ideal for</h2>
          <ul className="service-ideal">
            {service.idealFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        {pkg && (
          <aside className="service-package" data-reveal style={{ "--reveal-delay": "120ms" }}>
            <span className="service-eyebrow">Recommended package</span>
            <h3>{pkg.name}</h3>
            <p className="service-price">
              {formatNaira(pkg.price)}
              <span>/month</span>
            </p>
            <ul>
              {pkg.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <Link to="/services#packages-container" className="service-compare">
              Compare all packages
            </Link>
          </aside>
        )}
      </section>

      <div className="service-cta" data-reveal>
        <h2>Let&apos;s talk about your {service.title.toLowerCase()} project.</h2>
        <Link to="/contact" className="btn btn--dark">
          Talk to Us
        </Link>
      </div>

      <nav className="service-others" aria-label="Other services" data-reveal>
        <h2>Other services</h2>
        <ul>
          {others.map((s) => (
            <li key={s.slug}>
              <Link to={`/services/${s.slug}`}>
                <span className="service-others-title">{s.title}</span>
                <span className="service-others-tagline">{s.tagline}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  );
};

export default ServiceDetailPage;
