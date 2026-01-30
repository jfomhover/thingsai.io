# Blog Section

This directory contains the English blog listing page.

## Structure

- `index.html` - Main blog listing page showing all English blog posts in chronological order

## Adding New Blog Posts

1. Create a new file in `_posts/en/` with format: `YYYY-MM-DD-title-slug.md`
2. Add front matter with required fields:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: YYYY-MM-DD HH:MM:SS -0800
   categories: [category1, category2]
   lang: en
   ---
   ```
3. Write your content in Markdown
4. The post will automatically appear on this listing page

## Categories

Available categories are defined in `_data/categories.yml`:
- ai-systems
- identity
- knowledge-work
- career
- publishing
- repo-meta
- technology
- product

Posts can have multiple categories.
