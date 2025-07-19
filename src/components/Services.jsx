import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services-container">
      <h2>Our Services</h2>
      <p>
        Explore our services and discover how we can shape your brand’s
        future—together.
      </p>
      <div id="services-card-container">
        <div class="parent">
          <div class="div1">
            <h3 className="services-heading">Brand Identity & Development</h3>
            <p>
              Your brand is more than just a logo—it’s the story, values, and
              visuals that set you apart. We craft unique brand identities that
              resonate with your audience and reflect your vision. Whether
              you’re launching a new brand or rebranding an existing one, we
              help you create a brand that leaves a lasting impression.
            </p>
          </div>
          <div class="div2">
            <h3 className="services-heading"> PR / Social Media & Content</h3>
            <p>
              In today’s digital world, connecting with your audience is
              everything. We manage your social platforms, create engaging
              content, and build a strong online presence that keeps your brand
              top of mind. From daily posts to storytelling campaigns, we bring
              your brand to life across social media.
            </p>
          </div>
          <div class="div3">
            <h3 className="services-heading">Branding Activation / Experiential Marketing</h3>
            <p>
              We design strategic ad campaigns and PR solutions that cut through
              the noise and put your brand in front of the right people. Our
              approach blends creativity with data, ensuring that every campaign
              delivers results and positions your brand exactly where it needs
              to be.
            </p>
          </div>
          <div class="div4">
            <h3 className="services-heading">Web Solutions</h3>
            <p>
              Your website is your digital storefront—it’s often the first
              impression people have of your brand. We develop sleek,
              user-friendly websites that showcase your brand and drive business
              growth. From design to functionality, we ensure your site works as
              good as it looks
            </p>
          </div>
          <div class="div5">
            <h3 className="services-heading">Event Strategy & Management</h3>
            <p>
              Great brands don’t just exist online—they create real-world
              experiences. We plan and manage events that bring your brand to
              life, from product launches to corporate gatherings. Every detail
              is handled with care, ensuring your event leaves a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
