import { ReactNode, ButtonHTMLAttributes } from "react";
import "./Button.css";
import { FiDownload, FiSend, FiArrowRight, FiExternalLink } from "react-icons/fi";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  icon?: "download" | "send" | "arrow" | "external" | "none";
  children: ReactNode;
}

const iconMap = {
  download: FiDownload,
  send: FiSend,
  arrow: FiArrowRight,
  external: FiExternalLink,
  none: null,
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  icon = "none",
  children,
  className = "",
  ...props
}) => {
  const IconComponent = iconMap[icon];

  return (
    <button className={`btn btn-${variant} ${className}`} {...props}>
      {IconComponent && <IconComponent className="btn-icon" />}
      {children}
    </button>
  );
};

interface LinkButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  icon?: "download" | "send" | "arrow" | "external" | "none";
  children: ReactNode;
  download?: boolean;
  className?: string;
  external?: boolean;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  variant = "primary",
  icon = "none",
  children,
  download = false,
  className = "",
  external = false,
}) => {
  const IconComponent = iconMap[icon];

  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {IconComponent && <IconComponent className="btn-icon" />}
      {children}
    </a>
  );
};