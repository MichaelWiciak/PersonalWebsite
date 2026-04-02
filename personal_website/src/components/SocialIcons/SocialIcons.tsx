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
  gap?: number;
  className?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({
  size = 32,
  gap = 12,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ gap: `${gap}px` }}
    >
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer transition-colors duration-300 hover:text-accent"
            aria-label={link.name}
            style={{ width: size, height: size }}
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
