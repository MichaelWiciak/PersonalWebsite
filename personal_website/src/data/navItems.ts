export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: "intro", label: "Home" },
  { id: "projects", label: "Public Projects" },
  { id: "live-projects", label: "Live Projects" },
  { id: "courses", label: "Courses" },
  { id: "art", label: "Art" },
  { id: "cv", label: "CV" },
];

export const contactNavItem: NavItem = {
  id: "contact",
  label: "Contact",
};
