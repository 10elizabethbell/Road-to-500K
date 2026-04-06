# Blog Website Project Brief

## Project Goal

Build a personal blog website for Ellie Bell that is simple to maintain, dark-mode only, and visually playful without feeling noisy. The site should prioritize local Markdown-based writing, clean reading, and straightforward publishing.

## Existing Content and Assets

- Existing post: `Post 1.md`
- Existing author photo: `Personal Photo.png`
- Author name: `Ellie Bell`

## Required Pages

- Homepage
- About page
- Contact page

## Content Workflow

- Posts will be written in Markdown files locally.
- The site should support a single-author workflow.
- Posts should be organized by date.
- The homepage should show recent posts in date order on one long page.
- No archive page is needed for now.
- No placeholder content should be added.

## Required Post Features

- Reading time
- Private/unlisted posts
- Scheduled publishing
- Search
- Embedded comments at the end of each post
- RSS feed
- Newsletter signup near the bottom of the site or post pages
- SEO support
- Analytics for the owner only, not publicly visible
- Footnotes
- Embeds

## Design Direction

- Primary visual direction: playful
- Possible later simplification toward a more minimal look
- Tone: very personal
- UX goal: not noisy to the eyes
- Theme: dark mode only
- Header font: Open Sans
- Body font: Arial

## Visual References

- `https://steipete.me/posts`
- `https://bloggerspassion.com/`

Note: the second reference is useful for general structure inspiration, but the final site should avoid a photo-heavy presentation.

## Explicitly Not Needed Right Now

- Social sharing buttons
- Social profile links
- Categories
- Tags
- Featured images
- Archive page
- Multi-author support
- Public-facing analytics display

## Technical Direction

### Recommended Stack

- Framework: Astro
- Site type: static-first site with scheduled/private post support handled through content metadata and deployment workflow
- Authoring model: local Markdown files

### Why This Stack

- Keeps the site simple and fast
- Works well with Markdown content
- Easy to host on GitHub Pages or AWS
- Low maintenance compared with a heavier dynamic app
- Good fit for a personal blog with future expansion

## Hosting

- Candidate hosts:
  - GitHub Pages
  - AWS

### Recommendation

Start with GitHub Pages unless there is a later need for more custom infrastructure. It is simpler, cheaper, and better aligned with the priority of maintainability.

## Publishing and Privacy Requirements

- Support scheduled posts via frontmatter date fields and build/deploy logic
- Support private/unlisted posts via frontmatter flags and routing behavior
- Keep the writing workflow file-based and local

## Homepage Requirements

- Show recent posts by date
- Keep layout as one continuous page for now
- Reserve room for featured posts later, but do not implement them yet unless it falls naturally out of the chosen structure

## About Page Requirements

- Use the existing personal photo if it fits the design cleanly
- Keep the tone personal and lightweight

## Contact Page Requirements

- Include a simple contact method
- Keep presentation subtle and consistent with the rest of the site

## Comments

- Comments should be embedded at the end of each post
- The integration should be lightweight and unobtrusive

## Newsletter

- Newsletter signup should exist, but not as a popup
- Placement should be subtle, likely near the bottom of pages or posts

## SEO and Analytics

- Include standard SEO support:
  - metadata
  - sitemap
  - Open Graph tags
  - structured data
- Include private analytics suitable for personal review

## Open Recommendations

### Suggested Site Names

- Ellie Bell
- Ellie’s Notes
- Bell Writes
- Late Notes
- Small Posts
- Afterthoughts by Ellie

### Suggested Domain Ideas

- `elliebell.blog`
- `elliebell.net`
- `elliewrites.blog`
- `notesbyellie.com`
- `elliesnotes.com`
- `bellwrites.com`

Availability would need to be checked before choosing one.

## Future Features To Potentially Implement

- Featured posts on the homepage
- Optional switch from playful to a more minimal visual style
- Social profile links
- Support for post images
- More advanced contact options
- Better post discovery or filtering if the post count grows
- Additional homepage sections beyond recent posts
- Expanded metadata such as tags or series if organization needs become more complex

## Implementation Priorities

1. Build a maintainable blog foundation.
2. Preserve a simple Markdown writing workflow.
3. Make the reading experience clean, personal, and dark-mode only.
4. Support search, RSS, comments, newsletter signup, SEO, analytics, scheduled posts, and private/unlisted posts without adding unnecessary complexity.

