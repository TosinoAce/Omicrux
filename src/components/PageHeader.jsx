import "./PageHeader.css";

// Plain text header for pages without a background-image hero.
const PageHeader = ({ title, children }) => {
  return (
    <section className="page-header" data-reveal>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default PageHeader;
