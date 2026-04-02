import SocialIcons from "../SocialIcons/SocialIcons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface py-6 flex flex-col items-center justify-center text-text-muted text-sm font-light gap-3">
      <SocialIcons size={20} gap={16} />
      <span>Copyright &#169; 2026 Michael Wiciak. All rights reserved.</span>
    </footer>
  );
};

export default Footer;
