export const siteConfig = {
  title: "Road to 500K",
  description:
    "A personal blog by Ellie Bell about documenting ambitious goals, work, and what happens along the way.",
  author: "Ellie Bell",
  homeTitle: "A personal blog about building something bigger than a 9 to 5.",
  homeIntro:
    "This is where Ellie Bell writes in public about goals, progress, and the uncomfortable middle between starting and arriving.",
  aboutIntro:
    "Ellie Bell is documenting a long-term goal: building $500,000 outside of a full-time job before turning 30.",
  aboutBody:
    "The site is meant to stay simple, personal, and honest. It tracks what is being tried, what fails, what changes, and what ends up mattering.",
  newsletterHeading: "Newsletter",
  newsletterBlurb:
    "A quiet signup will live here once a provider is connected.",
  contactHeading: "Contact",
  contactBlurb:
    "There is not a public inbox listed on the site yet.",
  commentsBlurb:
    "Comments will appear here once the embedded discussion provider is configured."
};

export function withBase(path: string) {
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return normalizedBase ? `${normalizedBase}${normalizedPath}` : normalizedPath;
}
