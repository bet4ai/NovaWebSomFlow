export const animation = {
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
    ambient: "1000ms",
  },

  easing: {
    default: "cubic-bezier(0.4,0,0.2,1)",

    smooth: "cubic-bezier(0.22,1,0.36,1)",

    linear: "linear",
  },

  distance: {
    sm: "8px",
    md: "16px",
    lg: "32px",
  },
} as const;