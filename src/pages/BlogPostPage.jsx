import { Link, useParams } from "react-router-dom";
import posts, { formatDate, readingTime } from "../data/posts";
import NotFoundPage from "./NotFoundPage";
import "./BlogPostPage.css";

const renderBlock = (block, i) => {
  switch (block.type) {
    case "h2":
      return <h2 key={i}>{block.text}</h2>;
    case "quote":
      return <blockquote key={i}>{block.text}</blockquote>;
    case "ul":
      return (
        <ul key={i}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    default:
      return <p key={i}>{block.text}</p>;
  }
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <NotFoundPage />;

  const morePosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <article id="blog-post">

      <header className="post-header" data-reveal>
        <Link to="/blog" className="post-back">
          ← All articles
        </Link>
        <span className="post-meta">
          {post.category} · <time dateTime={post.date}>{formatDate(post.date)}</time>{" "}
          · {readingTime(post)} min read
        </span>
        <h1>{post.title}</h1>
        <p className="post-lead">{post.excerpt}</p>
        <p className="post-author">By {post.author}</p>
      </header>

      <img
        className="post-cover"
        data-reveal
        style={{ "--reveal-delay": "150ms" }}
        src={`/images/${post.image}-1400.webp`}
        srcSet={`/images/${post.image}-800.webp 800w, /images/${post.image}-1400.webp 1400w`}
        sizes="(max-width: 1000px) 100vw, 1000px"
        alt=""
        width="1400"
        height="933"
        fetchPriority="high"
      />

      <div className="post-body">{post.body.map(renderBlock)}</div>

      <div className="post-cta" data-reveal>
        <h2>Ready to build a brand people remember?</h2>
        <Link to="/contact" className="btn btn--dark">Talk to Us</Link>
      </div>

      <aside className="post-more" data-reveal>
        <h2>More from the blog</h2>
        <ul>
          {morePosts.map((p) => (
            <li key={p.slug}>
              <Link to={`/blog/${p.slug}`}>
                <span className="post-meta">{p.category}</span>
                <span className="post-more-title">{p.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </article>
  );
};

export default BlogPostPage;
