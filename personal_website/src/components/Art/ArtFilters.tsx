import { ArtFilter, filterLabels } from "../../data/artFilters";

interface ArtFiltersProps {
  activeFilter: ArtFilter;
  onFilterChange: (filter: ArtFilter) => void;
}

const ArtFilters: React.FC<ArtFiltersProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  const filters: ArtFilter[] = ["all", "background-maker", "physarum"];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            activeFilter === filter
              ? "bg-accent text-black shadow-accent"
              : "bg-surface-elevated text-text-muted hover:bg-surface hover:text-text-primary"
          }`}
        >
          {filterLabels[filter]}
        </button>
      ))}
    </div>
  );
};

export default ArtFilters;
