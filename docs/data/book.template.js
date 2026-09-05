/*
 * Copy this file to book.js when starting a new book map.
 * Keep the renderer-facing names unchanged; replace the example content.
 */
(function () {
  const metadata = {
    title: 'Book title',
    eyebrow: 'A reader’s companion',
    subtitle: 'Character map, one chapter at a time.',
    readingPrompt: 'Move to the chapter you’ve finished. Later people and connections stay out of sight.',
    defaultPersonId: 'protagonist',
    principalIds: ['protagonist'],
    source: { title: 'Primary source', url: 'https://example.com', localText: '' },
    theme: { accent: '#6961b5', accentPale: '#f0effa' }
  };

  const books = [{ roman: 'I', start: 1, end: 1 }];
  const circles = [{ id: 'central', tone: 'violet', title: 'Central circle', eyebrow: 'The opening chapters' }];
  const people = [{
    id: 'protagonist', name: 'Protagonist', initials: 'P', circle: 'central', introduced: 1,
    profiles: [{ from: 1, role: 'Central character', detail: 'Replace this with only what the reader knows at this chapter.' }]
  }];
  const ties = [];

  function circlePresentation(circle) { return { title: circle.title, eyebrow: circle.eyebrow }; }
  function profileAtChapter(person, chapter) {
    return [...person.profiles].reverse().find((profile) => profile.from <= chapter) || person.profiles[0];
  }
  function relationshipStatement(left, right, label) { return `${left.name} and ${right.name}: ${label}.`; }
  const relationshipTimelines = {};
  function characterRecap(person, chapter) { return profileAtChapter(person, chapter).detail; }
  function relationshipRecap(left, right, tie, chapter) {
    const key = [left.id, right.id].sort().join('|');
    const note = [...(relationshipTimelines[key] || [])].reverse().find((entry) => entry.from <= chapter);
    return note?.text || relationshipStatement(left, right, tie.label);
  }

  window.BOOK_DATA = { metadata, books, circles, people, ties, circlePresentation, relationshipStatement, profileAtChapter, relationshipTimelines, characterRecap, relationshipRecap };
})();
