# Ellie's Notes

Personal Astro blog for Markdown-based writing, dark-mode-only presentation, one long homepage feed, and a simple single-author workflow.

## What is included

- Homepage, About, and Contact pages
- Markdown content collection for posts
- Reading time on post cards and post pages
- Search via a generated JSON endpoint
- RSS feed at `/rss.xml`
- SEO baseline:
  - canonical tags
  - Open Graph metadata
  - JSON-LD structured data
  - sitemap integration
  - robots.txt
- Support in content frontmatter for:
  - `draft`
  - `unlisted`
  - `scheduledDate`
- Newsletter section and embedded comments hook
- Existing author photo copied to `public/personal-photo.png`

## Content workflow

Add posts in `src/content/blog/` as Markdown files with frontmatter like this:

```md
---
title: Example Post
description: Short summary for the homepage and SEO.
publishDate: 2026-04-06
updatedDate: 2026-04-06
scheduledDate: 2026-04-20
draft: false
unlisted: false
featured: false
---
```

### Publishing rules

- `draft: true` keeps a post out of the built site.
- `unlisted: true` builds the post page, but excludes it from the homepage, search, and RSS.
- `scheduledDate` keeps a post out of public listings until that date/time has passed at build time.

If you deploy on a schedule, scheduled posts can go live without editing the file again.

## Run locally

PowerShell may block `npm.ps1`, so use `npm.cmd`:

```powershell
npm.cmd install
npm.cmd run dev
```

## Optional environment variables

Create a `.env` file if you want these integrations:

```env
SITE_URL=https://your-domain.com
PUBLIC_NEWSLETTER_ACTION=https://your-newsletter-provider-endpoint
PUBLIC_PLAUSIBLE_DOMAIN=your-domain.com
PUBLIC_GISCUS_REPO=owner/repo
PUBLIC_GISCUS_REPO_ID=...
PUBLIC_GISCUS_CATEGORY=General
PUBLIC_GISCUS_CATEGORY_ID=...
```

### Comments

The comments block is wired for Giscus because it is lightweight and fits a static blog. It will appear automatically once the four `PUBLIC_GISCUS_*` values are configured.

### Newsletter

The newsletter form is present in the UI and becomes live once `PUBLIC_NEWSLETTER_ACTION` is set to your provider endpoint.

## Deployment

### GitHub Pages

This project includes a GitHub Actions workflow at `.github/workflows/deploy-github-pages.yml`.

Before using it:

1. Push the repo to GitHub.
2. In the repository settings, enable GitHub Pages and choose GitHub Actions as the source.
3. Add a repository variable named `SITE_URL` with your final production URL.

### AWS

Astro has an official AWS deployment guide:

- `https://docs.astro.build/en/guides/deploy/aws/`

The site is static-first, so S3 + CloudFront is the simplest AWS path.

## Customization points

- Site text and branding: `src/lib/site.ts`
- Global design: `src/styles/global.css`
- Post schema: `src/content.config.ts`
- Existing post content: `src/content/blog/starting-the-500k-journey.md`

## Notes

- The current site name is `Ellie's Notes`. Change it in `src/lib/site.ts` if you want a different title.
- The contact page is intentionally minimal because no public contact address was provided yet.
- The homepage is a single continuous list for now, but the content model already includes `featured` for later use.
