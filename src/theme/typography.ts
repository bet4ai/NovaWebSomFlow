export const typography = {
  family: {
    heading: "'Larken', Georgia, serif",
    body: "'Inter', system-ui, sans-serif",
  },

  size: {
    display: "6rem",      // 96px
    hero: "4.5rem",       // 72px
    h1: "3.75rem",        // 60px
    h2: "2.75rem",        // 44px
    h3: "2rem",           // 32px

    lead: "1.25rem",      // 20px
    body: "1.125rem",     // 18px
    small: "1rem",        // 16px
    caption: "0.875rem",  // 14px
    quote: "1.5rem",      // 24px
  },

  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
  },

  lineHeight: {
    tight: 1.1,
    heading: 1.15,
    snug: 1.2,
    base: 1.65,
    relaxed: 1.8,
  },

  letterSpacing: {
    tighter: "-0.02em",
    tight: "-0.01em",
    normal: "0",
    wide: "0.02em",
  },
} as const;