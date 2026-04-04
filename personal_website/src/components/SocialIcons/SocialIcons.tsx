import { socialLinks, SocialLink } from "../../data/socialLinks";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { IconType } from "react-icons";

const iconMap: Record<SocialLink["icon"], IconType> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  codewars: SiCodewars,
};

interface SocialIconsProps {
  size?: number;
  md?: number;
  lg?: number;
  gap?: number;
  className?: string;
  label?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({
  size = 32,
  md,
  lg,
  gap = 12,
  className = "",
  label = "Social media links",
}) => {
  const mdSize = md ?? size;
  const lgSize = lg ?? mdSize;

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        gap: `${gap}px`,
      }}
      role="list"
      aria-label={label}
    >
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        const iconSize = lg ? lgSize : md ? mdSize : size;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer transition-colors duration-300 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-full"
            aria-label={link.name}
            style={{ width: iconSize, height: iconSize }}
          >
            <Icon size={iconSize} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
