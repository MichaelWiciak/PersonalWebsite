import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOData {
  title: string;
  description: string;
  image?: string;
  article?: boolean;
}

const defaultSEO: SEOData = {
  title: "Michael Wiciak | Software Engineer & Developer",
  description:
    "Michael Wiciak - Software Engineer & Developer. Specializing in ROS2, PyTorch, Python, C++, and creative coding projects.",
  image: "https://michaelwiciak.com/logo.jpeg",
};

const pageSEO: Record<string, SEOData> = {
  "/": {
    title: "Michael Wiciak | Software Engineer & Developer",
    description:
      "Michael Wiciak - Software Engineer & Developer. Specializing in ROS2, PyTorch, Python, C++, and creative coding projects.",
  },
  "/projects": {
    title: "Projects | Michael Wiciak",
    description:
      "Explore Michael Wiciak's public projects on GitHub. Featuring ROS2, PyTorch, Computer Vision, and more open-source work.",
  },
  "/live-projects": {
    title: "Live Projects | Michael Wiciak",
    description:
      "Commercial projects built and maintained by Michael Wiciak. Real-world applications with active users.",
  },
  "/art": {
    title: "Art & Generative Projects | Michael Wiciak",
    description:
      "Generative art and creative coding projects by Michael Wiciak. Beautiful patterns emerging from mathematical chaos.",
  },
  "/cv": {
    title: "CV | Michael Wiciak",
    description:
      "View or download Michael Wiciak's CV. Software Engineer with experience in ROS2, PyTorch, Python, and C++.",
  },
  "/courses": {
    title: "Courses | Michael Wiciak",
    description:
      "Courses completed by Michael Wiciak. Stanford CS courses, DeepLearning.AI, and more continuous learning.",
  },
  "/contact": {
    title: "Contact | Michael Wiciak",
    description:
      "Get in touch with Michael Wiciak. Contact form for inquiries about projects, collaborations, or just to say hello.",
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

    const updateMetaTag = (property: string, content: string, isName = false) => {
      const selector = isName ? `meta[name="${property}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        if (isName) {
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

    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.href = `${BASE_URL}${location.pathname}`;
    }
  }, [location.pathname, customSEO]);
};

export default useSEO;
