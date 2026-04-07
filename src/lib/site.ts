export const siteConfig = {
  title: "Road to 500K",
  description:
    "A personal blog by me, Ellie Bell, about my journey towards ambitious goals; my highs, my lows, and what I learn through the journey.",
  author: "Ellie Bell",
  homeTitle: "Building something bigger than a 9 to 5.",
  homeIntro:
    "This is where I share the beauty and the ugly of my journey towards financial freedom.",
  aboutIntro:
    "I am documenting my long-term goal: building $500,000 outside of a full-time job before turning 30.",
  aboutBody:
    "This site is meant to stay simple, personal, and honest. By tracking every road I attempt to travel down, I hope to sketch out a map for others liek myself, and to meet fellow travelers along the way.",
  newsletterHeading: "Newsletter",
  // newsletterBlurb:
  //   "A quiet signup will live here once a provider is connected.",
  contactHeading: "Contact",
  // contactBlurb:
  //   "There is not a public inbox listed on the site yet.",
  // commentsBlurb:
  //   "Comments will appear here once the embedded discussion provider is configured."
};

export function withBase(path: string) {
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return normalizedBase ? `${normalizedBase}${normalizedPath}` : normalizedPath;
}
