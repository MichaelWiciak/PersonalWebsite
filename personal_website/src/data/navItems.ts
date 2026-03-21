export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: "intro", label: "Home" },
  { id: "skills", label: "About" },
  { id: "progLang", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "teams", label: "Teams" },
  { id: "artworkPage", label: "Art" },
  { id: "cv", label: "CV" },
  { id: "courses", label: "Courses" },
];

export const contactNavItem: NavItem = {
  id: "contact",
  label: "Contact",
};
