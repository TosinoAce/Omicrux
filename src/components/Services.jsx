import { Link } from "react-router-dom";
import services from "../data/services";
import "./Services.css";

const Services = () => {
  return (
    <section id="services-container">
      <h2 data-reveal>Our Services</h2>
      <p data-reveal style={{ "--reveal-delay": "100ms" }}>
        Explore our services and discover how we can shape your brand’s
        future—together.
      </p>
      <div id="services-card-container">
        <div className="parent">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className={`service-card div${i + 1}`}
              data-reveal
              style={{ "--reveal-delay": `${(i % 2) * 120}ms` }}
            >
              <h3 className="services-heading">{service.title}</h3>
              <p>{service.summary}</p>
              <span className="service-more">Learn more</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
