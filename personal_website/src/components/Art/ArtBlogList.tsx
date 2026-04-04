import { FiCalendar, FiClock } from "react-icons/fi";
import { blogPosts } from "../../data/artBlog";
import { FiArrowRight } from "react-icons/fi";

const ArtBlogList: React.FC = () => {
  if (blogPosts.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
        Deep Dives & Essays
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <a
            key={post.id}
            href={`/art/blog/${post.slug}`}
            className="group p-6 bg-surface-elevated rounded-xl shadow-card hover:shadow-cardHover transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
          >
            <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-text-muted mb-4 flex-grow">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
              <span className="inline-flex items-center gap-1.5">
                <FiCalendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FiClock className="w-3.5 h-3.5" />
                {post.readingTime} min read
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-medium bg-surface text-text-muted rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-2 text-sm text-link group-hover:underline">
              Read more <FiArrowRight className="w-4 h-4" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ArtBlogList;
