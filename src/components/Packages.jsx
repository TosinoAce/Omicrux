import React from "react";
import "./Packages.css";

const Packages = () => {
  return (
    <section id="packages-container">
      <h2>A <span>Package perfect</span> for your brand needs</h2>
      <p>From catering for your personal & coporate needs, you can be rest assured we have you in mind in our pricing.</p>
      <div className="overlay">
        <div className="div-1">
          <h3>Basic</h3>
          <h2>$150/month</h2>
          <p>Standard plan for all Clients</p>
          <ul>
            <li> Unlimited URL Shortening</li>
            <li> Basic Link Analytics</li>
            <li> Customizable Short Links</li>
            <li> Standard Suport</li>
            <li> Ad-supported</li>
          </ul>
        </div>
        <div className="div-2">
          <h3>Professional</h3>
          <h2>$250/Month</h2>
          <p>Ideal for Medium Scale Businesses</p>
          <ul>
            <li> Enhanced Link Annalytics</li>
            <li> Custom Branded Domains</li>
            <li> Advanced Link Customization</li>
            <li> Priority Suport</li>
            <li> Ad-free Experience</li>
          </ul>
        </div>
        <div className="div-3">
          <h3>Premium</h3>
          <h2>$350/Month</h2>
          <p>Ideal for Large company and firms</p>
          <ul>
            <li> Team Collaboration</li>
            <li> User Rules And Permission</li>
            <li> Enhanced Security</li>
            <li> API Access</li>
            <li> Dedicated Account Manager</li>
          </ul>
        </div>
      </div>
      <div className="button">
        <button>Get Custom Pricing</button>
      </div>
    </section>
  );
};

export default Packages;
