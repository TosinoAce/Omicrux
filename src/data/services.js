// Omicrux services: the Services page cards and each /services/:slug detail page.
// Detail copy (included, process, idealFor) is placeholder text: adjust to the real offer.
const services = [
  {
    slug: "brand-identity-development",
    title: "Brand Identity & Development",
    tagline: "Brands people recognise, remember and trust.",
    summary:
      "Your brand is more than just a logo—it’s the story, values, and visuals that set you apart. We craft unique brand identities that resonate with your audience and reflect your vision. Whether you’re launching a new brand or rebranding an existing one, we help you create a brand that leaves a lasting impression.",
    intro:
      "A strong identity makes every other piece of marketing work harder. We start with who you are and who you serve, then build a visual and verbal identity that is distinctive, consistent and ready to grow with your business.",
    included: [
      "Brand strategy & positioning",
      "Logo design & brand mark",
      "Colour palette & typography",
      "Brand voice & messaging",
      "Brand guidelines document",
      "Stationery & brand collateral",
    ],
    process: [
      ["Discover", "Workshops and research into your business, audience and competitors."],
      ["Define", "A clear positioning, personality and messaging framework."],
      ["Design", "Logo, colours, typography and visual system, refined with your feedback."],
      ["Deliver", "Final files, brand guidelines and support rolling it out."],
    ],
    idealFor: ["New businesses getting ready to launch", "Companies planning a rebrand", "Brands with inconsistent or outdated visuals"],
    pkg: "Professional",
  },
  {
    slug: "pr-social-media-content",
    title: "PR / Social Media & Content",
    tagline: "Stay top of mind with content your audience actually wants.",
    summary:
      "In today’s digital world, connecting with your audience is everything. We manage your social platforms, create engaging content, and build a strong online presence that keeps your brand top of mind. From daily posts to storytelling campaigns, we bring your brand to life across social media.",
    intro:
      "Consistency builds trust. We plan, create and publish content across your channels, manage your community, and secure media coverage that tells your story in the places your audience already pays attention.",
    included: [
      "Social media strategy",
      "Content calendar & creation",
      "Copywriting & graphic design",
      "Community management",
      "Press releases & media relations",
      "Monthly performance reports",
    ],
    process: [
      ["Audit", "A review of your channels, content and competitors."],
      ["Plan", "Content pillars and a monthly calendar built around your goals."],
      ["Create & publish", "Posts, visuals, stories and press material, on schedule."],
      ["Report & refine", "Monthly results and recommendations to keep improving."],
    ],
    idealFor: ["Brands without time to post consistently", "Businesses launching a product or campaign", "Companies that want more press coverage"],
    pkg: "Basic",
  },
  {
    slug: "brand-activation-experiential-marketing",
    title: "Branding Activation / Experiential Marketing",
    tagline: "Put your brand in people’s hands, not just in front of their eyes.",
    summary:
      "We design strategic ad campaigns and PR solutions that cut through the noise and put your brand in front of the right people. Our approach blends creativity with data, ensuring that every campaign delivers results and positions your brand exactly where it needs to be.",
    intro:
      "The campaigns people remember are the ones they take part in. We design activations and ad campaigns that create real interactions with your brand, online and offline, and measure what they deliver.",
    included: [
      "Campaign concept & strategy",
      "Brand activations & pop-ups",
      "Product sampling & roadshows",
      "Digital & outdoor ad campaigns",
      "On-site staffing & coordination",
      "Campaign measurement & reporting",
    ],
    process: [
      ["Brief", "Your goals, audience, budget and key moments."],
      ["Concept", "Creative ideas and a campaign plan with clear success measures."],
      ["Execute", "Production, logistics, staffing and media buying handled for you."],
      ["Measure", "Reach, engagement and leads reported after the campaign."],
    ],
    idealFor: ["Product launches", "Brands entering a new market or city", "Businesses that want to be talked about"],
    pkg: "Premium",
  },
  {
    slug: "web-solutions",
    title: "Web Solutions",
    tagline: "A website that looks great and works even harder.",
    summary:
      "Your website is your digital storefront—it’s often the first impression people have of your brand. We develop sleek, user-friendly websites that showcase your brand and drive business growth. From design to functionality, we ensure your site works as good as it looks.",
    intro:
      "We design and build fast, mobile-friendly websites that reflect your brand and turn visitors into customers, then help you keep them secure, up to date and easy to find on search engines.",
    included: [
      "Website design (UI/UX)",
      "Website development",
      "E-commerce stores",
      "SEO optimisation",
      "Analytics setup",
      "Hosting & maintenance",
    ],
    process: [
      ["Plan", "Goals, pages, content and features mapped out together."],
      ["Design", "Mobile-first designs for you to review before any code is written."],
      ["Build", "A fast, accessible site built and tested across devices."],
      ["Launch & support", "Go-live, analytics, training and ongoing maintenance."],
    ],
    idealFor: ["Businesses without a website yet", "Outdated sites that don’t convert", "Brands ready to sell online"],
    pkg: "Premium",
  },
  {
    slug: "event-strategy-management",
    title: "Event Strategy & Management",
    tagline: "Events that feel effortless, because every detail is handled.",
    summary:
      "Great brands don’t just exist online—they create real-world experiences. We plan and manage events that bring your brand to life, from product launches to corporate gatherings. Every detail is handled with care, ensuring your event leaves a lasting impact.",
    intro:
      "From the first idea to the last guest leaving, we plan, brand and run events that reflect your brand and give your guests something worth talking about.",
    included: [
      "Event concept & planning",
      "Venue & vendor management",
      "Event branding & décor",
      "Guest management & invitations",
      "On-the-day coordination",
      "Photo, video & post-event coverage",
    ],
    process: [
      ["Plan", "Objectives, audience, budget and timeline agreed up front."],
      ["Design", "Theme, branding, run of show and guest experience."],
      ["Coordinate", "Venue, vendors, logistics and rehearsals managed end to end."],
      ["Deliver & review", "Flawless execution on the day, followed by a full recap."],
    ],
    idealFor: ["Product and brand launches", "Corporate events and conferences", "Brand parties and community events"],
    pkg: "Premium",
  },
];

export default services;
