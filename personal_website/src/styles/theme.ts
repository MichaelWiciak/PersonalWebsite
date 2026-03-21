export const theme = {
  colors: {
    background: {
      DEFAULT: "rgb(var(--color-background))",
      rgb: "30 30 30",
    },
    surface: {
      DEFAULT: "rgb(var(--color-surface))",
      elevated: "rgb(var(--color-surface-elevated))",
      rgb: "40 40 40",
      elevatedRgb: "50 50 50",
    },
    text: {
      primary: "rgb(var(--color-text-primary))",
      muted: "rgb(var(--color-text-muted))",
      primaryRgb: "255 255 255",
      mutedRgb: "217 217 217",
    },
    accent: {
      DEFAULT: "rgb(var(--color-accent))",
      hover: "rgb(var(--color-accent-hover))",
      rgb: "255 255 0",
      hoverRgb: "230 230 0",
    },
    border: "rgb(var(--color-border))",
    link: "rgb(var(--color-link))",
    projectType: "rgb(240 165 0)",
  },
  spacing: {
    section: "4rem",
    container: "75rem",
    card: "2rem",
    navbar: "5rem",
    footer: "4rem",
  },
  breakpoints: {
    sm: "480px",
    md: "720px",
    lg: "840px",
    xl: "1024px",
  },
  transitions: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
  },
} as const;

export const spacingClasses = {
  section: "py-16 md:py-24",
  container: "w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8",
  card: "p-6 md:p-8",
  cardFull: "p-8",
  button: "px-7 py-3.5",
  buttonRadius: "rounded-full",
} as const;

export const buttonClasses = {
  base: "inline-flex items-center justify-center gap-3 font-semibold transition-all duration-300 border-none rounded-full cursor-pointer",
  primary: "bg-accent text-background shadow-accent hover:bg-accent-hover hover:shadow-accentHover hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none",
  secondary: "bg-surface-elevated text-text-primary shadow-card hover:bg-surface hover:shadow-cardHover hover:-translate-y-0.5",
  outline: "bg-transparent text-text-primary border-2 border-surface-elevated hover:border-accent hover:text-accent hover:-translate-y-0.5",
} as const;

export const cardClasses = {
  base: "bg-surface-elevated rounded-card shadow-card transition-all duration-300",
  hover: "hover:shadow-cardHover hover:-translate-y-1",
  padding: "p-6 md:p-8",
  width: "w-full max-w-[80%] mx-auto",
} as const;

export const titleClasses = {
  display: "text-4xl md:text-5xl font-bold mb-6 text-center",
  heading: "text-3xl md:text-4xl font-semibold mb-4",
  subheading: "text-2xl md:text-3xl font-medium mb-3",
  section: "text-3xl md:text-4xl font-bold pt-12 mb-6 text-center",
} as const;

export const emblaClasses = {
  viewport: "overflow-hidden w-full",
  container: "flex backface-hidden",
  slide: "flex-0-0-100% min-w-0 relative",
  dots: "flex justify-center items-center gap-2 mt-4",
  dot: "w-3 h-3 rounded-full bg-white/30 border-none cursor-pointer p-0 transition-colors duration-300",
  dotSelected: "bg-[#f0a500]",
} as const;
