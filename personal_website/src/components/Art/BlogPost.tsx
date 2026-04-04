import ReactMarkdown from "react-markdown";
import { blogPosts } from "../../data/artBlog";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";

import physarumMathematicsMd from "../../content/blog/physarum-mathematics.md?raw";

const blogContentMap: Record<string, string> = {
  "physarum-mathematics": physarumMathematicsMd,
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const markdownContent = slug ? blogContentMap[slug] : null;

  if (!post || !markdownContent) {
    return (
      <section className="w-full max-w-container mx-auto px-4 md:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <Link to="/art" className="text-link hover:underline">
            ← Back to Art
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-4xl mx-auto px-4 md:px-8 py-12">
      <Link
        to="/art"
        className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors mb-8"
      >
        <FiArrowLeft className="w-4 h-4" />
        Back to Art
      </Link>

      <article className="bg-surface-elevated rounded-xl shadow-card p-6 md:p-10">
        <header className="mb-8 pb-8 border-b border-white/10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-surface text-text-muted rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <span className="inline-flex items-center gap-2">
              <FiCalendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <FiClock className="w-4 h-4" />
              {post.readingTime} min read
            </span>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      </article>
    </section>
  );
};

export default BlogPost;
