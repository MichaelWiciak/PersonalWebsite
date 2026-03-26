export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: "intro", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "courses", label: "Courses" },
  { id: "teams", label: "Teams" },
  { id: "art", label: "Art" },
  { id: "cv", label: "CV" },
];

export const contactNavItem: NavItem = {
  id: "contact",
  label: "Contact",
};
