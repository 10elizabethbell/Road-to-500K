# Agent Handoff

## Project Summary

This repository is an Astro-based personal blog for Ellie Bell.

Current site name:

- `Road to 500K`

Primary goal:

- Host personal blog posts written in Markdown
- Keep the site simple, dark-mode only, personal, and easy to maintain
- Deploy via GitHub Pages
- Serve the live site at `https://roadto500k.com`

## User Requirements Captured Earlier

The user originally requested:

- Homepage
- About page
- Contact page
- Markdown-based writing workflow
- Reading time
- Private/unlisted posts
- Scheduled publishing
- Search
- Embedded comments at the end of posts
- Newsletter signup near the bottom, not as a popup
- RSS
- SEO support
- Analytics for private review
- Footnotes and embeds
- Dark mode only
- Header font: Open Sans
- Body font: Arial
- Personal tone, not visually noisy
- One long homepage feed for now
- Single author only

There is also an earlier planning file:

- [blog-project-brief.md](C:\Users\Ellie\blog\blog-project-brief.md)

## Existing Content and Assets

User-provided files in the repo root:

- [Post 1.md](C:\Users\Ellie\blog\Post%201.md)
- [Personal Photo.png](C:\Users\Ellie\blog\Personal%20Photo.png)

The photo is copied into the site public assets as:

- [public/personal-photo.png](C:\Users\Ellie\blog\public\personal-photo.png)

The original post content was normalized into Astro content here:

- [src/content/blog/Post_1.md](C:\Users\Ellie\blog\src\content\blog\Post_1.md)

## Current Stack

- Framework: Astro
- Output mode: static
- Content: Astro content collections with Markdown files
- Styling: plain CSS in a custom global stylesheet
- Fonts:
  - Open Sans for headings
  - Arial for body text

Key config file:

- [astro.config.mjs](C:\Users\Ellie\blog\astro.config.mjs)

Current Astro config is intended for custom-domain GitHub Pages hosting:

- `site: "https://roadto500k.com"`
- `base: "/"`
- `output: "static"`

## Site Structure

Important application files:

- [src/lib/site.ts](C:\Users\Ellie\blog\src\lib\site.ts)
- [src/lib/posts.ts](C:\Users\Ellie\blog\src\lib\posts.ts)
- [src/content.config.ts](C:\Users\Ellie\blog\src\content.config.ts)
- [src/styles/global.css](C:\Users\Ellie\blog\src\styles\global.css)
- [src/components/BaseLayout.astro](C:\Users\Ellie\blog\src\components\BaseLayout.astro)
- [src/components/PostList.astro](C:\Users\Ellie\blog\src\components\PostList.astro)
- [src/components/Search.astro](C:\Users\Ellie\blog\src\components\Search.astro)
- [src/components/NewsletterSignup.astro](C:\Users\Ellie\blog\src\components\NewsletterSignup.astro)
- [src/components/Comments.astro](C:\Users\Ellie\blog\src\components\Comments.astro)
- [src/pages/index.astro](C:\Users\Ellie\blog\src\pages\index.astro)
- [src/pages/about.astro](C:\Users\Ellie\blog\src\pages\about.astro)
- [src/pages/contact.astro](C:\Users\Ellie\blog\src\pages\contact.astro)
- [src/pages/blog/[slug].astro](C:\Users\Ellie\blog\src\pages\blog\[slug].astro)
- [src/pages/api/search.json.ts](C:\Users\Ellie\blog\src\pages\api\search.json.ts)
- [src/pages/rss.xml.ts](C:\Users\Ellie\blog\src\pages\rss.xml.ts)
- [src/pages/robots.txt.ts](C:\Users\Ellie\blog\src\pages\robots.txt.ts)

## Content Model

Posts live in:

- [src/content/blog](C:\Users\Ellie\blog\src\content\blog)

Collection schema is defined in:

- [src/content.config.ts](C:\Users\Ellie\blog\src\content.config.ts)

Supported frontmatter fields:

- `title`
- `description`
- `publishDate`
- `updatedDate`
- `scheduledDate`
- `draft`
- `unlisted`
- `featured`

Publishing behavior:

- `draft: true` excludes posts from the built site
- `scheduledDate` excludes posts until the scheduled time has passed at build time
- `unlisted: true` is intended for direct-link posts not shown in public listings

Implementation note:

- The public listings logic excludes unlisted posts
- The dynamic post route currently only includes published posts in `getStaticPaths`
- That means unlisted posts are not actually emitted unless the route logic is expanded again
- This is an unresolved behavior mismatch between requirement and current implementation

Relevant logic:

- [src/lib/posts.ts](C:\Users\Ellie\blog\src\lib\posts.ts)
- [src/pages/blog/[slug].astro](C:\Users\Ellie\blog\src\pages\blog\[slug].astro)

## UI and Design Direction

Design choices already implemented:

- Dark mode only
- Playful but restrained visual style
- Soft gradients and glassy dark panels
- Open Sans heading typography
- Arial body typography
- Single continuous homepage feed

Global styling:

- [src/styles/global.css](C:\Users\Ellie\blog\src\styles\global.css)

## Branding Changes Made

The site was originally named `Ellie's Notes` and was later renamed to `Road to 500K`.

Updated branding locations:

- [src/lib/site.ts](C:\Users\Ellie\blog\src\lib\site.ts)
- [README.md](C:\Users\Ellie\blog\README.md)
- [package.json](C:\Users\Ellie\blog\package.json)
- [package-lock.json](C:\Users\Ellie\blog\package-lock.json)

## Search

Search is implemented as a lightweight client-side search using a generated JSON endpoint.

Files:

- [src/components/Search.astro](C:\Users\Ellie\blog\src\components\Search.astro)
- [src/pages/api/search.json.ts](C:\Users\Ellie\blog\src\pages\api\search.json.ts)

Behavior:

- Searches post title and description
- Only indexes published, non-unlisted posts

## RSS / SEO / Metadata

Implemented:

- RSS feed
- Canonical URLs
- Open Graph tags
- JSON-LD structured data
- Sitemap
- robots.txt

Files:

- [src/pages/rss.xml.ts](C:\Users\Ellie\blog\src\pages\rss.xml.ts)
- [src/pages/robots.txt.ts](C:\Users\Ellie\blog\src\pages\robots.txt.ts)
- [src/components/BaseLayout.astro](C:\Users\Ellie\blog\src\components\BaseLayout.astro)
- [src/pages/index.astro](C:\Users\Ellie\blog\src\pages\index.astro)
- [src/pages/blog/[slug].astro](C:\Users\Ellie\blog\src\pages\blog\[slug].astro)

## Comments and Newsletter

Comments:

- Wired for Giscus
- Only becomes active when the required `PUBLIC_GISCUS_*` env vars are set

Newsletter:

- UI exists
- Only becomes active when `PUBLIC_NEWSLETTER_ACTION` is set

Files:

- [src/components/Comments.astro](C:\Users\Ellie\blog\src\components\Comments.astro)
- [src/components/NewsletterSignup.astro](C:\Users\Ellie\blog\src\components\NewsletterSignup.astro)

## Deployment History

There were several deployment iterations:

1. Initial Astro scaffold
2. GitHub Pages support for project-path deployment using repo base paths
3. Switch to official Astro GitHub Pages workflow
4. Switch from GitHub Pages project URL to custom domain configuration

The repo is now set up for:

- custom domain: `roadto500k.com`
- GitHub Pages via GitHub Actions

## Current Deployment Files

Workflow:

- [deploy.yml](C:\Users\Ellie\blog\.github\workflows\deploy.yml)

Current workflow intent:

- trigger on push to `main`
- build and deploy to GitHub Pages
- use `withastro/action@v5`
- use `actions/deploy-pages@v4`

Important deployment-support files:

- [CNAME](C:\Users\Ellie\blog\CNAME)
- [public/CNAME](C:\Users\Ellie\blog\public\CNAME)
- [\.nojekyll](C:\Users\Ellie\blog\.nojekyll)
- [public/.nojekyll](C:\Users\Ellie\blog\public\.nojekyll)

Why both root and public copies were added:

- The user explicitly asked for a root `CNAME`
- GitHub Pages serves the built artifact, so placing `CNAME` and `.nojekyll` in `public/` ensures they are copied into `dist/`

## Important Deployment Caveat

The current workflow file satisfies the user's requested shape at a high level, but it should be reviewed carefully before further deployment debugging.

Current file:

- [deploy.yml](C:\Users\Ellie\blog\.github\workflows\deploy.yml)

What it currently does:

- uses `withastro/action@v5` in the `build` job
- has a separate `deploy` job using `actions/deploy-pages@v4`

Why this may need review:

- `withastro/action` is often used as the full install/build/upload flow by itself
- depending on the exact action contract, the separate deploy job may be correct or may duplicate part of the deployment lifecycle
- if future deployment problems continue, this workflow should be the first file inspected

## Current Build Status

Local verification completed successfully after the latest custom-domain changes.

Verified commands:

- `npm.cmd run check`
- `npm.cmd run build`

Both passed successfully.

The Astro build output directory is:

- `dist/`

## Root Files Present

Current notable root files/directories:

- [astro.config.mjs](C:\Users\Ellie\blog\astro.config.mjs)
- [package.json](C:\Users\Ellie\blog\package.json)
- [package-lock.json](C:\Users\Ellie\blog\package-lock.json)
- [README.md](C:\Users\Ellie\blog\README.md)
- [CNAME](C:\Users\Ellie\blog\CNAME)
- [\.nojekyll](C:\Users\Ellie\blog\.nojekyll)
- [blog-project-brief.md](C:\Users\Ellie\blog\blog-project-brief.md)
- [agent-handoff.md](C:\Users\Ellie\blog\agent-handoff.md)

No manual root `index.html` copy was present when last checked.

## Known Issues / Follow-Up Candidates

1. Unlisted posts are not fully implemented end-to-end.
   The schema and filtering support them, but the static path generation currently excludes them.

2. The deployment workflow should be validated against the latest Astro Pages recommendation if GitHub deployment problems continue.
   The repo has already gone through several workflow iterations.

3. The contact page is intentionally minimal because no public contact endpoint/email was provided.

4. The newsletter and comments are placeholder-ready but not configured with real providers yet.
   Newsletter signup has now been removed from the live UI and should be treated as a future feature to re-enable later.

5. Analytics was requested in principle, but no provider-specific configuration has been completed.
   There is a Plausible hook in the layout via `PUBLIC_PLAUSIBLE_DOMAIN`.

6. The README may now be slightly stale compared with the latest custom-domain deployment configuration and should be reviewed.

## Suggested Next Steps For The Next Agent

1. Verify the live GitHub Pages workflow against the current repository settings on GitHub.

2. Confirm the Pages source is `GitHub Actions`.

3. Confirm the custom domain is set in the GitHub Pages settings and matches `roadto500k.com`.

4. If deployment still serves a placeholder page, inspect:
   - the latest Actions run logs
   - whether the `CNAME` file is present inside the built artifact
   - whether the Pages deployment is publishing the intended artifact

5. Decide whether to improve unlisted-post support so unlisted posts are statically emitted but omitted from listings.

6. Optionally refresh the copywriting in:
   - [src/lib/site.ts](C:\Users\Ellie\blog\src\lib\site.ts)
   - [src/pages/about.astro](C:\Users\Ellie\blog\src\pages\about.astro)
   - [src/pages/contact.astro](C:\Users\Ellie\blog\src\pages\contact.astro)

7. Review README deployment/setup instructions for accuracy after the move from project-path Pages deployment to custom domain root deployment.

8. Reintroduce newsletter signup later when a provider is chosen and the UI should go live again.

## Quick Command Notes

Because PowerShell script execution was restricted in this environment, the working commands used locally were:

```powershell
npm.cmd install
npm.cmd run check
npm.cmd run build
```

`npm` alone may fail in PowerShell due to execution policy on `npm.ps1`.
