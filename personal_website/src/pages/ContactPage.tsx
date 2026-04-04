import Contact from "../components/Contact/contact";
import { useSEO } from "../hooks/useSEO";

const ContactPage: React.FC = () => {
  useSEO();

  return <Contact />;
};

export default ContactPage;