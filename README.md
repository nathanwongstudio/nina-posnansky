# NinaPosnansky.com

website for nina posnansky's art

Code written and maintained by [Nathan Wong](https://itsallwong.com)

All artwork images are ©Copyright Nina Posnansky Ginsberg

## Prerequisites

- [Ruby](https://www.ruby-lang.org/en/downloads/) 2.7+
- [Bundler](https://bundler.io/) 2.x (`gem install bundler -v '~> 2.0'`)

> **Note:** The lockfile was generated with Bundler 2.x. Bundler 4 changed the lockfile format, which may cause issues with GitHub Pages builds. Stick with Bundler 2.x to be safe:
> ```bash
> gem install bundler -v '~> 2.0'
> ```

See the [Jekyll docs](https://jekyllrb.com/docs/installation/) for platform-specific setup instructions.

## Quick Start

This repo uses Jekyll and is hosted on Github Pages. The site source is in the `docs/` directory.

```bash
cd docs
bundle install
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`.

## Content Structure

All artworks live in a single collection at `docs/_artworks/`. Each artwork is a markdown file with a `year` field that determines which page it appears on.

Images live in `docs/assets/collections/art_<year>/`.

Navigation is auto-generated from page files that use the `artwork-display` layout, sorted by `nav_order`.

### Artwork front matter

```yaml
---
year: "2025"
title: Artwork Title
width: 11
height: 15
sold: false
image: NP01.jpg
layout_width: 1
---
```

| Field | Type | Description |
|-------|------|-------------|
| `year` | string | Groups the artwork to a page (`"2025"`, `"2024"`, `"previous"`) |
| `title` | string | Display name of the artwork |
| `width` | number | Width in inches |
| `height` | number | Height in inches |
| `sold` | boolean | Shows a red dot indicator when `true` |
| `image` | string | Filename of the image in `assets/collections/art_<year>/` |
| `layout_width` | string | `1` for standard or `1-2` for wide layout |

### Artwork filenames

Files are prefixed with the year for uniqueness: `<year>-<order>-<slug>.md`

Examples: `2025-01-red-poppies-in-bloom.md`, `previous-05-flemenco.md`

## Adding a New Year

1. **Add artwork files** to `docs/_artworks/` with the new year prefix and `year` field:

    ```
    docs/_artworks/2026-01-painting-name.md
    docs/_artworks/2026-02-another-painting.md
    ```

2. **Add images** to `docs/assets/collections/art_2026/`

3. **Create a page file** (e.g. `docs/2026.md`):

    ```yaml
    ---
    title: 2026
    year: "2026"
    nav_order: 1
    subtitle: Acrylics on Paper
    layout: artwork-display
    permalink: /2026/
    ---

    Body text for the page goes here.
    ```

    Set `nav_order` to control the position in the nav (lower = first). You may need to bump existing pages' `nav_order` values up by one.

That's it — no changes to `_config.yml`, nav data, or templates needed.
