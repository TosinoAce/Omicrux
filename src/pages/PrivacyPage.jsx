import PageHeader from "../components/PageHeader";
import "./PrivacyPage.css";

// Placeholder policy: have this reviewed and replaced with the real policy.
const PrivacyPage = () => {
  return (
    <>
      <PageHeader title="Privacy Policy">
        <p>Last updated: [Date]</p>
      </PageHeader>
      <section id="privacy">
        <h3>Information We Collect</h3>
        <p>
          When you contact us through our website we collect the details you
          provide, such as your name, email address, phone number and message.
        </p>
        <h3>How We Use Your Information</h3>
        <p>
          We use this information only to respond to your enquiry and to
          provide the services you request. We do not sell your personal data.
        </p>
        <h3>Data Storage</h3>
        <p>
          Form submissions are stored securely with our hosting provider and
          kept only for as long as needed to serve you.
        </p>
        <h3>Your Rights</h3>
        <p>
          You can ask us to access, correct or delete the personal data we hold
          about you at any time by contacting our team.
        </p>
        <h3>Contact</h3>
        <p>
          For privacy questions, reach us on +234 9028111613 or through our
          contact page.
        </p>
      </section>
    </>
  );
};

export default PrivacyPage;
