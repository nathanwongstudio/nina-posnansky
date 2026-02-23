# NinaPosnansky.com

website for nina posnansky's art

Code written and maintained by [Nathan Wong](https://itsallwong.com)

All artwork images are ©Copyright Nina Posnansky Ginsberg

## Prerequisites

- Ruby 2.7.0 or higher
- RubyGems
- GCC and Make

See the [Jekyll docs](https://jekyllrb.com/docs/installation/#requirements) for up to date information.

## Quick Start

This repo uses Jekyll and is hosted on Github Pages.

Clone the repo, then run:

```bash
bundle install
bundle exec jekyll serve
```

## Content Structure

Collections are defined in `_config.yml`. Use the collection names defined here to reference them in the template.

The template takes markdown files from the folder named `_${COLLECTION_NAME}` and images referenced in these files have a base url of `/assets/collections/${COLLECTION_NAME}`.

The structure for markdown with frontmatter:

```yaml
---
title: Artwork Title # STRING
width: 11 # NUMBER
height: 15 # NUMBER
sold: false # BOOLEAN
image: NP01.jpg # STRING
layout_width: 1 # 1 | 1-2
---
```
