import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const NotFoundPage = () => {
  return (
    <div style={{ minHeight: "70vh" }}>
      <PageHeader title={<>Page <span>Not Found</span></>}>
        <p>
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>
        <Link to="/" className="btn">Back to Home</Link>
      </PageHeader>
    </div>
  );
};

export default NotFoundPage;
