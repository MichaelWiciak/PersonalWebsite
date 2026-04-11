import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOData {
  title: string;
  description: string;
  image?: string;
  article?: boolean;
}

const defaultSEO: SEOData = {
  title: "Michael Wiciak | Software Engineer",
  description: "Michael Wiciak - Software Engineer",
  image: "https://michaelwiciak.com/logo.jpeg",
};

const pageSEO: Record<string, SEOData> = {
  "/": {
    title: "Michael Wiciak | Software Engineer",
    description: "Michael Wiciak - Software Engineer",
  },
  "/projects": {
    title: "Projects | Michael Wiciak",
    description: "Explore my public projects on GitHub.",
  },
  "/live-projects": {
    title: "Live Projects | Michael Wiciak",
    description:
      "Commercial projects built and maintained by me. Real-world applications with active users.",
  },
  "/art": {
    title: "Art| Michael Wiciak",
    description:
      "Generative art and creative coding projects. Beautiful patterns emerging from mathematical chaos.",
  },
  "/cv": {
    title: "CV | Michael Wiciak",
    description: "View or download my CV.",
  },
  "/courses": {
    title: "Courses | Michael Wiciak",
    description: "Courses completed by me.",
  },
  "/contact": {
    title: "Contact | Michael Wiciak",
    description:
      "Get in touch with me. Contact form for inquiries about projects, collaborations, or just to say hello.",
  },
};

const BASE_URL = "https://michaelwiciak.com";

export const useSEO = (customSEO?: Partial<SEOData>) => {
  const location = useLocation();

  useEffect(() => {
    const pathKey = location.pathname;
    const seo = pageSEO[pathKey] || defaultSEO;
    const mergedSEO = { ...seo, ...customSEO };

    const title = mergedSEO.title || defaultSEO.title;
    const description = mergedSEO.description || defaultSEO.description;
    const image = mergedSEO.image || defaultSEO.image;

    document.title = title;

    const updateMetaTag = (
      property: string,
      content: string,
      isName = false,
    ) => {
      const useNameAttribute = isName || property.startsWith("twitter:");
      const selector = useNameAttribute
        ? `meta[name="${property}"]`
        : `meta[property="${property}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        if (useNameAttribute) {
          element.name = property;
        } else {
          element.setAttribute("property", property);
        }
        document.head.appendChild(element);
      }
      element.content = content;
    };

    updateMetaTag("description", description, true);
    updateMetaTag("og:title", title);
    updateMetaTag("og:description", description);
    updateMetaTag("og:image", image || "");
    updateMetaTag("og:url", `${BASE_URL}${location.pathname}`);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image || "");

    const canonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (canonical) {
      canonical.href = `${BASE_URL}${location.pathname}`;
    }

    const existingSchema = document.querySelector(
      "script[data-webpage-schema]",
    );
    if (existingSchema) existingSchema.remove();

    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${BASE_URL}${location.pathname}#webpage`,
      url: `${BASE_URL}${location.pathname}`,
      name: title,
      description: description,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#person` },
      datePublished: "2024-01-01T00:00:00Z",
      dateModified: new Date().toISOString().split("T")[0] + "T00:00:00Z",
    };

    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.setAttribute("data-webpage-schema", "");
    schemaScript.textContent = JSON.stringify(webPageSchema);
    document.head.appendChild(schemaScript);
  }, [location.pathname, customSEO]);
};

export default useSEO;
