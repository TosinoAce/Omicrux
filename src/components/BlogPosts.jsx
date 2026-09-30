import { Link } from "react-router-dom";
import posts, { formatDate, readingTime } from "../data/posts";
import "./BlogPosts.css";

const BlogPosts = () => {
  return (
    <section id="blog-posts">
      {posts.map((post, i) => (
        <article
          className="blog-card"
          key={post.slug}
          data-reveal
          style={{ "--reveal-delay": `${(i % 4) * 90}ms` }}
        >
          <Link to={`/blog/${post.slug}`} className="blog-card-link">
            <img
              src={`/images/${post.image}-800.webp`}
              alt=""
              loading="lazy"
              width="800"
              height="533"
            />
            <div className="blog-card-body">
              <span className="blog-meta">
                {post.category} ·{" "}
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <span className="blog-more">
                Read article · {readingTime(post)} min
              </span>
            </div>
          </Link>
        </article>
      ))}
    </section>
  );
};

export default BlogPosts;
