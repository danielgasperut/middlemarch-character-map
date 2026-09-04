# Middlemarch Character Map

A spoiler-safe, chapter-by-chapter relationship map for George Eliot’s *Middlemarch*.

Choose the chapter you have just finished and the map shows only the characters, relationships, household names, and character descriptions available at that point in the novel. The map starts at Chapter 1 and uses the novel’s continuous chapter numbering, with Book I–VIII shown alongside the slider.

## What it includes

- Chapter-aware spoiler guard across all 86 chapters
- Grouped households and social circles, with expandable relationship drawers
- A selected-person panel with a connected relationship map
- Chapter-specific relationship summaries written in natural language
- Visually quieter tiles for supporting characters
- A responsive layout for desktop and mobile reading

## Use it online

The current private site is available at:

https://middlemarch-character-map-8.daniel-gasperut.chatgpt.site

## Run the interactive site locally

This project requires Node.js 22.13 or later.

```bash
npm install
npm run dev
```

Open the local address printed in the terminal.

To create a production build:

```bash
npm run build
```

## Standalone offline version

The current self-contained export is here:

[`exports/Middlemarch-Character-Map-current.html`](exports/Middlemarch-Character-Map-current.html)

Open that file in any modern browser. It contains its own CSS, JavaScript, characters, relationships, chapter-aware descriptions, and Book I–VIII slider index—no server or installation required.

To regenerate the offline version after editing the site’s data or copy, run:

```bash
node export-standalone.mjs
```

The generator reads the current data and narrative helper functions from `app/page.tsx` and writes the updated HTML export.

## Project structure

- `app/page.tsx` — character data, relationship data, spoiler rules, and interactive interface
- `app/globals.css` — visual design and responsive layout
- `export-standalone.mjs` — generator for the offline HTML version
- `exports/` — generated standalone deliverables
- `middlemarch-gutenberg.txt` — Project Gutenberg reference text used while preparing the map

## Spoiler-safety note

The map is deliberately conservative, but it is still a reader-made guide rather than a scholarly edition. If you spot a character, title, relationship, or description that appears too early, please treat it as a bug and adjust the chapter slider backward while it is corrected.
