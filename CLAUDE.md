# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running locally

```
python3 -m http.server 3400
```

Then open [http://localhost:3400](http://localhost:3400). No build step, no install.

## Architecture

This is a static site with no framework, no bundler, and no dependencies beyond Google Fonts (Inter). Everything is self-contained HTML + CSS + JS.

- `index.html` — main landing page, all styles and scripts inline
- `about.html` — about page, shares the same CSS design system (duplicated, not shared via import)
- `chitcoin.svg` — standalone Chitcoin logo; also inlined as `<svg>` directly in the HTML files where needed
- `CNAME` — GitHub Pages custom domain (`poordash.com`)

## Design system

CSS custom properties are defined in `:root` at the top of each HTML file:

| Variable | Use |
|---|---|
| `--red` / `--red-dark` | Primary brand color, CTAs |
| `--gold` / `--gold-bg` | Chitcoin / CHIT token accents |
| `--text` / `--mid` / `--light` | Text hierarchy |
| `--rule` / `--bg` / `--bg-gray` | Borders and backgrounds |

The Chitcoin glyph inline SVG uses `.chit-glyph` class to scale with surrounding text.

## Tone and content

This is satire. The copy should read as a real tech startup landing page — earnest, VC-pitched, full of hollow optimism — while being obviously dystopian on close reading. Chitcoin (CHIT) is the fictional proprietary token paid to contractors; it's designed (in-universe) to be hard to cash out. Contact for the project: cbrislain@gmail.com.
