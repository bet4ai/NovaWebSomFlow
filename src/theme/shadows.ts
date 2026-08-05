export const shadows = {
  surface: {
    none: "none",

    sm: "0 1px 2px rgba(0,0,0,.03)",

    md: `
      0 4px 6px -1px rgba(0,0,0,.03),
      0 2px 4px -1px rgba(0,0,0,.02)
    `,

    lg: `
      0 10px 15px -3px rgba(0,0,0,.04),
      0 4px 6px -2px rgba(0,0,0,.02)
    `,
  },

  brand: {
    focus: `
      0 0 0 2px #FCFBF7,
      0 0 0 4px #146243
    `,
  },
} as const;