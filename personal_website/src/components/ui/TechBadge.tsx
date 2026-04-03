interface TechBadgeProps {
  tech: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => {
  return (
    <span className="px-3 py-1 text-sm bg-surface rounded-full text-text-muted">
      {tech}
    </span>
  );
};

export default TechBadge;
