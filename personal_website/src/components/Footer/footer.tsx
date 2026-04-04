import SocialIcons from "../SocialIcons/SocialIcons";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-surface py-6 px-4 flex flex-col items-center justify-center text-text-muted text-sm font-light gap-3" role="contentinfo">
      <SocialIcons size={20} gap={16} aria-label="Social media links" />
      <span className="text-center">Copyright &#169; {currentYear} Michael Wiciak. All rights reserved.</span>
    </footer>
  );
};

export default Footer;
