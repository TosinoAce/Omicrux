// Single source of truth for page metadata: titles, descriptions, canonical URLs,
// social-share images and structured data (JSON-LD). Used by <Seo /> in the
// browser and by scripts/prerender.mjs at build time.
import posts from "../data/posts";
import socials from "../data/socials";
import services from "../data/services";
import packages from "../data/packages";

// Set by Netlify at build time (process.env.URL) or VITE_SITE_URL; see vite.config.js.
export const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://omicrux.netlify.app").replace(/\/$/, "");
export const SITE_NAME = "Omicrux";
const DEFAULT_IMAGE = { url: "/og/og-default.jpg", width: 1200, height: 630, alt: "Omicrux – PR & Branding Agency" };

const abs = (path) => `${SITE_URL}${path}`;

const founders = [
  { "@type": "Person", name: "Oluwatosin Joseph", jobTitle: "Co-Founder" },
  { "@type": "Person", name: "Adedeji Aderounmu", jobTitle: "Co-Founder" },
];

// Only real profile URLs (not the placeholder platform homepages) go into sameAs.
const sameAs = socials.map((s) => s.href).filter((href) => new URL(href).pathname.length > 1);

const organization = {
  "@type": "Organization",
  "@id": abs("/#organization"),
  name: SITE_NAME,
  url: abs("/"),
  logo: { "@type": "ImageObject", url: abs("/icons/icon-512.png"), width: 512, height: 512 },
  description:
    "Omicrux is a PR and branding agency in Nigeria crafting brand identities, PR and social media, experiential marketing, websites and events.",
  founders,
  areaServed: "NG",
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+234-902-811-1613", contactType: "customer service", areaServed: "NG", availableLanguage: "English" },
    { "@type": "ContactPoint", telephone: "+234-904-323-2126", contactType: "sales", areaServed: "NG", availableLanguage: "English" },
  ],
  ...(sameAs.length ? { sameAs } : {}),
};

const website = {
  "@type": "WebSite",
  "@id": abs("/#website"),
  name: SITE_NAME,
  url: abs("/"),
  publisher: { "@id": abs("/#organization") },
};

const breadcrumbs = (trail) => ({
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...trail].map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: abs(item.path),
  })),
});

const serviceNode = (service) => ({
  "@type": "Service",
  "@id": abs(`/services/${service.slug}#service`),
  name: service.title,
  description: service.tagline,
  url: abs(`/services/${service.slug}`),
  serviceType: service.title,
  areaServed: { "@type": "Country", name: "Nigeria" },
  provider: { "@id": abs("/#organization") },
});

const packageOffers = packages.map((pkg) => ({
  "@type": "Offer",
  name: `${pkg.name} package`,
  description: `${pkg.tagline}: ${pkg.features.join(", ")}.`,
  priceSpecification: {
    "@type": "UnitPriceSpecification",
    price: pkg.price,
    priceCurrency: "NGN",
    unitText: "MONTH",
  },
  seller: { "@id": abs("/#organization") },
}));

const pages = {
  "/": {
    title: "Omicrux | PR & Branding Agency in Nigeria",
    description:
      "Omicrux is a PR and branding agency in Nigeria. We create strategic, innovative and impactful brand identities, PR campaigns, social media, websites and events that drive brand success.",
    jsonLd: [organization, website],
  },
  "/about": {
    title: "About Us | Omicrux",
    description:
      "Meet Omicrux: a PR and branding agency founded by two friends from Nigeria, Oluwatosin Joseph and Adedeji Aderounmu. Our story, vision and mission.",
    jsonLd: [
      { "@type": "AboutPage", name: "About Omicrux", url: abs("/about"), about: { "@id": abs("/#organization") } },
      organization,
      breadcrumbs([{ name: "About Us", path: "/about" }]),
    ],
  },
  "/services": {
    title: "Branding, PR & Web Services | Omicrux",
    description:
      "Brand identity design, PR and social media management, experiential marketing, web design and event management. Explore Omicrux services and pricing packages.",
    jsonLd: [
      {
        ...organization,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Omicrux Services",
          itemListElement: services.map((service) => ({ "@type": "Offer", itemOffered: serviceNode(service) })),
        },
        makesOffer: packageOffers,
      },
      breadcrumbs([{ name: "Services", path: "/services" }]),
    ],
  },
  "/contact": {
    title: "Contact Us | Omicrux",
    description:
      "Talk to Omicrux about your brand. Call +234 902 811 1613 or send us a message about branding, PR, social media, web or event projects.",
    jsonLd: [
      { "@type": "ContactPage", name: "Contact Omicrux", url: abs("/contact"), about: { "@id": abs("/#organization") } },
      breadcrumbs([{ name: "Contact Us", path: "/contact" }]),
    ],
  },
  "/blog": {
    title: "Blog: Branding, PR & Marketing Insights | Omicrux",
    description:
      "Practical insights on branding, PR, social media and experiential marketing from the Omicrux team.",
    jsonLd: [
      {
        "@type": "Blog",
        name: "Omicrux Blog",
        url: abs("/blog"),
        publisher: { "@id": abs("/#organization") },
        blogPost: posts.map((post) => ({ "@type": "BlogPosting", headline: post.title, url: abs(`/blog/${post.slug}`), datePublished: post.date })),
      },
      breadcrumbs([{ name: "Blog", path: "/blog" }]),
    ],
  },
  "/privacy": {
    title: "Privacy Policy | Omicrux",
    description: "How Omicrux collects, uses and protects your personal information.",
    jsonLd: [breadcrumbs([{ name: "Privacy Policy", path: "/privacy" }])],
  },
};

const notFound = {
  title: "Page Not Found | Omicrux",
  description: "The page you're looking for doesn't exist or may have been moved.",
  noindex: true,
};

const postMeta = (post) => {
  const url = abs(`/blog/${post.slug}`);
  const image = { url: `/og/${post.image}.jpg`, width: 1200, height: 630, alt: post.title };
  return {
    title: `${post.title} | Omicrux Blog`,
    description: post.excerpt,
    type: "article",
    image,
    article: { publishedTime: post.date, author: post.author, section: post.category },
    jsonLd: [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: abs(image.url),
        datePublished: post.date,
        dateModified: post.date,
        articleSection: post.category,
        author: { "@type": "Person", name: post.author },
        publisher: { "@id": abs("/#organization") },
        mainEntityOfPage: url,
      },
      organization,
      breadcrumbs([{ name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]),
    ],
  };
};

const serviceMeta = (service) => ({
  title: `${service.title} in Nigeria | Omicrux`,
  description: `${service.tagline} ${service.intro}`.slice(0, 158).replace(/\s+\S*$/, "") + "…",
  jsonLd: [
    serviceNode(service),
    organization,
    breadcrumbs([
      { name: "Services", path: "/services" },
      { name: service.title, path: `/services/${service.slug}` },
    ]),
  ],
});

// Every indexable URL (used for pre-rendering and the sitemap).
export const indexablePaths = [
  ...Object.keys(pages),
  ...services.map((s) => `/services/${s.slug}`),
  ...posts.map((p) => `/blog/${p.slug}`),
];

export const lastModified = (path) => {
  const post = posts.find((p) => `/blog/${p.slug}` === path);
  if (post) return post.date;
  if (path === "/blog") return posts.map((p) => p.date).sort().at(-1);
  return null;
};

export const metaForPath = (pathname) => {
  const path = pathname !== "/" ? pathname.replace(/\/$/, "") : "/";
  const post = path.startsWith("/blog/") && posts.find((p) => `/blog/${p.slug}` === path);
  const service = path.startsWith("/services/") && services.find((s) => `/services/${s.slug}` === path);
  const meta = pages[path] ?? (post ? postMeta(post) : service ? serviceMeta(service) : notFound);
  return { type: "website", image: DEFAULT_IMAGE, ...meta, path: meta === notFound ? null : path };
};

// Turns metadata into a flat list of head tags: { tag, attrs, text }.
export const headTags = (meta) => {
  const url = meta.path ? abs(meta.path) : null;
  const image = abs(meta.image.url);
  const tags = [
    { tag: "title", text: meta.title },
    { tag: "meta", attrs: { name: "description", content: meta.description } },
    meta.noindex && { tag: "meta", attrs: { name: "robots", content: "noindex, follow" } },
    url && { tag: "link", attrs: { rel: "canonical", href: url } },
    { tag: "meta", attrs: { property: "og:type", content: meta.type } },
    { tag: "meta", attrs: { property: "og:site_name", content: SITE_NAME } },
    { tag: "meta", attrs: { property: "og:title", content: meta.title } },
    { tag: "meta", attrs: { property: "og:description", content: meta.description } },
    url && { tag: "meta", attrs: { property: "og:url", content: url } },
    { tag: "meta", attrs: { property: "og:image", content: image } },
    { tag: "meta", attrs: { property: "og:image:width", content: String(meta.image.width) } },
    { tag: "meta", attrs: { property: "og:image:height", content: String(meta.image.height) } },
    { tag: "meta", attrs: { property: "og:image:alt", content: meta.image.alt } },
    meta.article && { tag: "meta", attrs: { property: "article:published_time", content: meta.article.publishedTime } },
    meta.article && { tag: "meta", attrs: { property: "article:author", content: meta.article.author } },
    meta.article && { tag: "meta", attrs: { property: "article:section", content: meta.article.section } },
    { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },
    { tag: "meta", attrs: { name: "twitter:title", content: meta.title } },
    { tag: "meta", attrs: { name: "twitter:description", content: meta.description } },
    { tag: "meta", attrs: { name: "twitter:image", content: image } },
    meta.jsonLd && {
      tag: "script",
      attrs: { type: "application/ld+json" },
      text: JSON.stringify({ "@context": "https://schema.org", "@graph": meta.jsonLd }).replace(/</g, "\\u003c"),
    },
  ];
  return tags.filter(Boolean);
};
