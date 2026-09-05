# Character-map authoring rules

Use this guide when adding or revising a book’s `docs/data/book.js`.

## Spoiler-safe chronology

- Introduce a person at the first chapter where the reader encounters or is directly told enough to identify them. When uncertain, choose the later chapter.
- Introduce a tie only when both people and the connection itself are on the page. Use `through` when a connection should disappear from the visible map.
- Treat a title, kinship fact, marriage, motive, reputation, or outcome as a development: do not put it in an early role, profile, circle title, or relationship note merely because it is permanently true later.
- Every profile and timeline entry begins at `from`, using the novel’s continuous chapter number. Its wording must be true for that chapter and every following chapter until the next entry.

## Writing chapter-stage notes

- Write as a short reader’s companion, not as metadata: explain what the connection feels like or what has happened between the two people so far.
- Use concrete events from the text when they clarify the relationship. Prefer “Celia sees…” to “their connection is established.”
- A selected-person summary should say where that person stands in the current chapter, without summarizing future scenes.
- A relationship summary should answer: “What is the relationship between these people here, and what matters about it so far?”
- Avoid generic fallbacks. Add an explicit timeline entry whenever a change in knowledge, feeling, status, or circumstance matters.

## Data checklist

1. Add book ranges in `books`, then circles in `circles`.
2. Add each person with a stable `id`, display name, initials, circle, `introduced` chapter, and at least one profile.
3. Add each named connection to `ties` with `from`, `to`, label, and `introduced` chapter.
4. Add relationship notes under a sorted `leftId|rightId` key in `relationshipTimelines`.
5. Add selected-person recaps through the existing recap structure or the book’s helper convention.
6. Check chapters immediately before and at every introduction or development. If a fact appears a chapter early, move it later.

## Sources

Record the edition or primary-text URL in `metadata.source`. Keep a local text copy only when its license and size are appropriate for the repository, and use it as a checking aid rather than presenting it as the map’s text.
