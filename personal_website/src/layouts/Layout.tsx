import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/Footer/footer";

const breadcrumbSchema: Record<string, { name: string; position: number }[]> = {
  "/": [{ name: "Home", position: 1 }],
  "/projects": [{ name: "Home", position: 1 }, { name: "Projects", position: 2 }],
  "/live-projects": [{ name: "Home", position: 1 }, { name: "Live Projects", position: 2 }],
  "/art": [{ name: "Home", position: 1 }, { name: "Art", position: 2 }],
  "/cv": [{ name: "Home", position: 1 }, { name: "CV", position: 2 }],
  "/courses": [{ name: "Home", position: 1 }, { name: "Courses", position: 2 }],
  "/contact": [{ name: "Home", position: 1 }, { name: "Contact", position: 2 }],
};

const Layout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const existingSchema = document.querySelector('script[data-breadcrumb-schema]');
    if (existingSchema) existingSchema.remove();

    const breadcrumbs = breadcrumbSchema[location.pathname];
    if (breadcrumbs) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item) => ({
          "@type": "ListItem",
          "position": item.position,
          "name": item.name,
          "item": item.position === 1 ? "https://michaelwiciak.com" : `https://michaelwiciak.com${location.pathname}`,
        })),
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-breadcrumb-schema", "");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-black focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;