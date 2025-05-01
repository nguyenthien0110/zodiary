module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      typography: {
        custom: {
          css: {
            maxWidth: "none",
            color: "rgba(255, 255, 255, 0.9)",
            "h1, h2, h3, h4, h5, h6": {
              fontFamily: "'Cinzel', serif",
              color: "white",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
              marginBottom: "0.5rem",
            },
            h1: { fontSize: "2.25rem", fontWeight: "700" },
            h2: { fontSize: "1.875rem", fontWeight: "600" },
            p: {
              fontSize: "1.125rem",
              lineHeight: "1.75",
              marginBottom: "1rem",
            },
            "ul, ol": {
              marginBottom: "1rem",
              paddingLeft: "1.5rem",
            },
            li: {
              fontSize: "1.125rem",
              marginBottom: "0.5rem",
            },
            table: {
              marginBottom: "1.5rem",
              borderCollapse: "collapse",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            },
            th: {
              padding: "0.75rem",
              fontWeight: "600",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            },
            td: {
              padding: "0.75rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            },
            a: {
              color: "rgba(147, 197, 253, 0.9)",
              textDecoration: "underline",
              transition: "color 0.2s",
            },
            "a:hover": {
              color: "rgba(191, 219, 254, 1)",
            },
            blockquote: {
              borderLeft: "4px solid rgba(255, 255, 255, 0.3)",
              paddingLeft: "1rem",
              marginBottom: "1rem",
              fontStyle: "italic",
              color: "rgba(255, 255, 255, 0.8)",
            },
          },
        },
      },
    },
  },
};
