import PageHeader from "../components/PageHeader";
import BlogPosts from "../components/BlogPosts";

const BlogPage = () => {
  return (
    <>
      <PageHeader title="Insights & Stories">
        <p>
          Ideas, tips and behind-the-scenes stories from the Omicrux team on
          branding, PR, content and building brands that last.
        </p>
      </PageHeader>
      <BlogPosts />
    </>
  );
};

export default BlogPage;
