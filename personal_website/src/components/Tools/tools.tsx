import { FiExternalLink } from "react-icons/fi";
import { tools } from "../../data/tools";
import { usePostHog } from "@posthog/react";

const Tools: React.FC = () => {
  const posthog = usePostHog();

  return (
    <section
      id="tools"
      className="w-full max-w-card mx-auto px-4 md:px-8 py-12 flex flex-col items-center"
    >
      <h1 className="text-4xl md:text-5xl font-semibold mb-8">Tools</h1>

      <p className="text-lg md:text-xl text-text-muted text-center mb-12 max-w-[600px]">
        Tools I have built and use day to day.
      </p>

      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <li key={tool.id}>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                posthog?.capture("tool_opened", { tool: tool.displayUrl })
              }
              className="flex items-center justify-between gap-4 p-6 md:p-8 h-full bg-surface-elevated rounded-xl shadow-card transition-all duration-300 hover:shadow-cardHover hover:-translate-y-1 group"
            >
              <span className="text-lg md:text-xl font-medium break-all group-hover:text-accent transition-colors duration-300">
                {tool.displayUrl}
              </span>
              <FiExternalLink className="w-5 h-5 shrink-0 text-text-muted group-hover:text-accent transition-colors duration-300" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tools;