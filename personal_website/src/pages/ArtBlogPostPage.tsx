import BlogPost from "../components/Art/BlogPost";
import { useSEO } from "../hooks/useSEO";
import { useParams } from "react-router-dom";
import { blogPosts } from "../data/artBlog";

const ArtBlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useSEO(
    post
      ? {
          title: `${post.title} | Art Blog | Michael Wiciak`,
          description: post.excerpt,
        }
      : undefined
  );

  return <BlogPost />;
};

export default ArtBlogPostPage;
