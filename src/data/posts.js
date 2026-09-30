// Placeholder articles: replace with real posts (or load them from a CMS).
// Each post body is a list of blocks: { type: "p" | "h2" | "quote", text } or { type: "ul", items }.
const posts = [
  {
    slug: "signs-your-brand-needs-a-refresh",
    title: "5 Signs Your Brand Needs a Refresh",
    excerpt:
      "Outdated visuals, mixed messaging and a shifting audience are all signals it may be time to rethink your brand identity.",
    category: "Branding",
    date: "2025-02-10",
    author: "Oluwatosin Joseph",
    image: "blog-1",
    body: [
      { type: "p", text: "Brands are living things. The identity that felt fresh when you launched can quietly drift out of step with your business, your customers and the market around you. A refresh is not about chasing trends; it is about making sure your brand still tells the truth about who you are today." },
      { type: "p", text: "Here are five signs it might be time." },
      { type: "h2", text: "1. Your visuals feel dated" },
      { type: "p", text: "If your logo, colours or typography look like they belong to another era, customers notice, even if they cannot say why. Dated visuals can make a modern business look behind the times." },
      { type: "h2", text: "2. Your messaging is inconsistent" },
      { type: "p", text: "When your website, social pages and sales decks all describe you differently, your audience is left to guess what you stand for. A refresh brings everything back to one clear voice." },
      { type: "h2", text: "3. Your audience has changed" },
      { type: "p", text: "Maybe you started out serving students and now work with corporate clients, or you have expanded into new cities. Your brand should speak to the people you serve now, not the ones you served five years ago." },
      { type: "h2", text: "4. You have outgrown your offer" },
      { type: "p", text: "New products and services often get bolted on to an old identity. If your brand no longer reflects the full scope of what you do, it is holding you back." },
      { type: "h2", text: "5. You are hard to tell apart from competitors" },
      { type: "p", text: "If a customer could swap your logo for a competitor's without noticing, you are blending in. A strong brand gives people a reason to remember you." },
      { type: "quote", text: "A refresh is not about chasing trends; it is about telling the truth about who you are today." },
      { type: "p", text: "If any of these sound familiar, start with an honest brand audit. Look at every touchpoint, gather feedback from customers, and decide what to keep, what to evolve and what to let go." },
    ],
  },
  {
    slug: "social-media-content-calendar",
    title: "Building a Social Media Content Calendar That Works",
    excerpt:
      "Consistency beats volume. Here is how we plan a month of content that keeps brands top of mind without burning out.",
    category: "Social Media",
    date: "2025-01-28",
    author: "Adedeji Aderounmu",
    image: "blog-2",
    body: [
      { type: "p", text: "Posting every day means nothing if the content has no direction. A content calendar turns random posts into a strategy, helping your brand show up consistently with a message that builds over time." },
      { type: "h2", text: "Start with your content pillars" },
      { type: "p", text: "Pick three to five themes that matter to your audience and your business. For most brands these include education, behind-the-scenes, social proof, and promotion. Every post should fit one pillar." },
      { type: "h2", text: "Plan monthly, adjust weekly" },
      { type: "p", text: "Map out key dates, launches and campaigns a month ahead, then leave room each week for timely content and trends. Structure keeps you consistent; flexibility keeps you relevant." },
      { type: "h2", text: "What goes into our calendar" },
      {
        type: "ul",
        items: [
          "Post date, time and platform",
          "Content pillar and campaign",
          "Caption, hashtags and call to action",
          "Visual assets and who is creating them",
          "Status: idea, in progress, approved, scheduled",
        ],
      },
      { type: "h2", text: "Batch your creation" },
      { type: "p", text: "Shoot photos, design graphics and write captions in focused blocks rather than day by day. Batching saves hours and keeps your visual style consistent." },
      { type: "quote", text: "Consistency beats volume. Three great posts a week will outperform seven rushed ones." },
      { type: "h2", text: "Review what works" },
      { type: "p", text: "At the end of each month, look at reach, engagement and conversions by pillar. Double down on what resonates and rethink what does not. Your calendar should get smarter every month." },
    ],
  },
  {
    slug: "memorable-experiential-campaigns",
    title: "What Makes an Experiential Campaign Memorable",
    excerpt:
      "The best brand activations turn audiences into participants. We break down the ingredients of events people talk about.",
    category: "Experiential",
    date: "2025-01-15",
    author: "Oluwatosin Joseph",
    image: "blog-3",
    body: [
      { type: "p", text: "People forget adverts. They remember experiences. Experiential marketing puts your brand in the real world, where people can see it, touch it and share it. But not every activation leaves a mark." },
      { type: "h2", text: "Make people participants, not spectators" },
      { type: "p", text: "The strongest campaigns invite the audience to do something: play, create, taste, compete. Participation turns a passing glance into a personal memory." },
      { type: "h2", text: "Design for the share" },
      { type: "p", text: "Every guest has a camera in their pocket. Build moments worth capturing, from striking installations to clever photo spots, so your event lives on across social media long after it ends." },
      { type: "h2", text: "Stay true to the brand" },
      { type: "p", text: "A flashy stunt that has nothing to do with who you are will be remembered for the wrong reasons. The experience should feel like your brand come to life." },
      { type: "quote", text: "People forget adverts. They remember experiences." },
      { type: "h2", text: "Sweat the details" },
      { type: "p", text: "Smooth registration, friendly staff, good sound and clear signage are invisible when they work and unforgettable when they do not. Great experiences are built on careful planning." },
      { type: "h2", text: "Measure the impact" },
      { type: "p", text: "Track attendance, social mentions, leads captured and sales in the weeks that follow. Knowing what worked makes your next activation even stronger." },
    ],
  },
  {
    slug: "pr-in-the-digital-age",
    title: "PR in the Digital Age: Earning Attention That Lasts",
    excerpt:
      "Press releases alone are not enough. Learn how modern PR blends storytelling, media relations and online reputation.",
    category: "PR",
    date: "2025-01-02",
    author: "Adedeji Aderounmu",
    image: "blog-4",
    body: [
      { type: "p", text: "Public relations used to mean sending a press release and hoping a journalist picked it up. Today your reputation is shaped in newsrooms, on social feeds, in search results and in customer reviews, all at once." },
      { type: "h2", text: "Lead with a story, not an announcement" },
      { type: "p", text: "Journalists and audiences care about people, problems and impact. Frame your news around a story that matters to them, and the coverage will follow." },
      { type: "h2", text: "Build relationships before you need them" },
      { type: "p", text: "The best media coverage comes from trust. Get to know the journalists, creators and editors in your space, and be a helpful source even when you have nothing to promote." },
      { type: "h2", text: "Own your channels" },
      { type: "p", text: "Your website, blog and social pages are your own newsroom. Publish your story there first so that anyone searching for you finds a clear, credible picture." },
      { type: "quote", text: "Your reputation is shaped in newsrooms, on social feeds and in search results, all at once." },
      { type: "h2", text: "Prepare for the hard days" },
      { type: "p", text: "Every brand faces criticism eventually. A simple crisis plan, with who responds, how quickly and in what tone, turns a potential disaster into a chance to show your values." },
      { type: "h2", text: "Measure what matters" },
      { type: "p", text: "Look beyond the number of articles. Track share of voice, sentiment, website traffic from coverage, and the quality of the outlets talking about you." },
    ],
  },
];

export const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

// Rough reading time at ~200 words per minute.
export const readingTime = (post) => {
  const words = post.body
    .map((block) => block.text ?? block.items.join(" "))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
};

export default posts;
