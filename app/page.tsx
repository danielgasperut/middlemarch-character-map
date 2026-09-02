'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronRight,
  Link2,
  Sparkles,
} from 'lucide-react';

import { Slider } from '@/components/ui/slider';

type Person = {
  id: string;
  name: string;
  circle: string;
  introduced: number;
  initials: string;
  role: string;
  detail: string;
};

type Tie = {
  from: string;
  to: string;
  introduced: number;
  label: string;
};

type RelationshipConnection = {
  tie: Tie;
  person: Person;
  x: number;
  y: number;
  labelX: number;
  labelY: number;
};

const books = [
  { roman: 'I', start: 1, end: 12 },
  { roman: 'II', start: 13, end: 22 },
  { roman: 'III', start: 23, end: 29 },
  { roman: 'IV', start: 30, end: 42 },
  { roman: 'V', start: 43, end: 53 },
  { roman: 'VI', start: 54, end: 62 },
  { roman: 'VII', start: 63, end: 71 },
  { roman: 'VIII', start: 72, end: 86 },
] as const;

function bookPosition(globalChapter: number) {
  const book =
    books.find(
      (candidate) =>
        globalChapter >= candidate.start && globalChapter <= candidate.end,
    ) ?? books[books.length - 1];
  const chapter = globalChapter - book.start + 1;

  return {
    book,
    chapter,
    label: 'Book ' + book.roman + ' · Chapter ' + chapter,
    detail: 'Book ' + book.roman + ' · Chapter ' + chapter + ' of ' + (book.end - book.start + 1),
  };
}

const circles = [
  { id: 'brookes', title: 'The Brookes & their circle', eyebrow: 'Tipton Grange · Lowick', tone: 'violet' },
  { id: 'vincys', title: 'The Vincys & Stone Court', eyebrow: 'Middlemarch households', tone: 'rose' },
  { id: 'garths', title: 'The Garth family', eyebrow: 'Work, friendship & home', tone: 'sage' },
  { id: 'town', title: 'Middlemarch town', eyebrow: 'Medicine, church & public life', tone: 'blue' },
] as const;

const people: Person[] = [
  { id: 'dorothea', name: 'Dorothea Brooke', circle: 'brookes', introduced: 1, initials: 'DB', role: 'Mr. Brooke’s elder niece', detail: 'Earnest and idealistic, Dorothea is trying to make a life that feels purposeful.' },
  { id: 'celia', name: 'Celia Brooke', circle: 'brookes', introduced: 1, initials: 'CB', role: 'Dorothea’s younger sister', detail: 'Practical and observant, Celia sees the same household from a rather different angle.' },
  { id: 'brooke', name: 'Mr. Brooke', circle: 'brookes', introduced: 1, initials: 'MB', role: 'Guardian of Dorothea and Celia', detail: 'The sisters’ uncle and guardian, fond of ideas, conversation, and leaving matters pleasantly unsettled.' },
  { id: 'casaubon', name: 'Edward Casaubon', circle: 'brookes', introduced: 1, initials: 'EC', role: 'A scholar at Lowick', detail: 'A reserved scholar whose intellectual seriousness makes a deep impression on Dorothea.' },
  { id: 'chettam', name: 'Sir James Chettam', circle: 'brookes', introduced: 3, initials: 'JC', role: 'Neighbor and family friend', detail: 'A considerate neighboring landowner who is warmly involved in the Brookes’ social world.' },
  { id: 'cadwallader', name: 'Mrs. Cadwallader', circle: 'brookes', introduced: 5, initials: 'CC', role: 'A perceptive neighbor', detail: 'The rector’s wife: quick-witted, candid, and alert to the undercurrents in her neighbors’ lives.' },
  { id: 'vincy', name: 'Mr. Vincy', circle: 'vincys', introduced: 12, initials: 'MV', role: 'A Middlemarch manufacturer', detail: 'A prosperous manufacturer whose family is firmly rooted in Middlemarch society.' },
  { id: 'mrs-vincy', name: 'Mrs. Vincy', circle: 'vincys', introduced: 12, initials: 'VV', role: 'Mrs. Vincy', detail: 'A socially attentive mother with clear hopes for her children’s futures.' },
  { id: 'rosamond', name: 'Rosamond Vincy', circle: 'vincys', introduced: 12, initials: 'RV', role: 'The Vincys’ daughter', detail: 'Accomplished and admired, Rosamond has been raised with a refined sense of what life ought to offer.' },
  { id: 'fred', name: 'Fred Vincy', circle: 'vincys', introduced: 12, initials: 'FV', role: 'The Vincys’ son', detail: 'Good-natured and often improvident, Fred is finding the expectations around him harder to meet than he expected.' },
  { id: 'featherstone', name: 'Peter Featherstone', circle: 'vincys', introduced: 12, initials: 'PF', role: 'An elderly relative at Stone Court', detail: 'A wealthy, ailing relation whose household draws a range of interested visitors and dependents.' },
  { id: 'mary', name: 'Mary Garth', circle: 'garths', introduced: 14, initials: 'MG', role: 'Companion at Stone Court', detail: 'Clear-sighted and steady, Mary works at Stone Court while remaining closely connected to her family.' },
  { id: 'caleb', name: 'Caleb Garth', circle: 'garths', introduced: 16, initials: 'CG', role: 'Mary’s father', detail: 'A capable land agent and surveyor whose work is guided by practical fairness and great energy.' },
  { id: 'susan', name: 'Susan Garth', circle: 'garths', introduced: 16, initials: 'SG', role: 'Mary’s mother', detail: 'Caleb’s practical, warm-hearted wife, with a firm grasp of the family’s realities.' },
  { id: 'lydgate', name: 'Tertius Lydgate', circle: 'town', introduced: 15, initials: 'TL', role: 'A newly arrived doctor', detail: 'An ambitious young doctor, newly arrived in Middlemarch with large professional hopes.' },
  { id: 'bulstrode', name: 'Nicholas Bulstrode', circle: 'town', introduced: 14, initials: 'NB', role: 'A leading Middlemarch figure', detail: 'A prominent, serious-minded man in the town’s financial and charitable life.' },
  { id: 'farebrother', name: 'Camden Farebrother', circle: 'town', introduced: 18, initials: 'CF', role: 'A clergyman and scholar', detail: 'A thoughtful clergyman with scholarly interests and a sympathetic eye for other people.' },
  { id: 'will', name: 'Will Ladislaw', circle: 'brookes', introduced: 24, initials: 'WL', role: 'A young relative of Casaubon', detail: 'An intelligent, restless young relative in Casaubon’s orbit, with strong opinions of his own.' },
];

const ties: Tie[] = [
  { from: 'dorothea', to: 'celia', introduced: 1, label: 'sisters' },
  { from: 'brooke', to: 'dorothea', introduced: 1, label: 'guardian & niece' },
  { from: 'brooke', to: 'celia', introduced: 1, label: 'guardian & niece' },
  { from: 'dorothea', to: 'casaubon', introduced: 5, label: 'engaged' },
  { from: 'chettam', to: 'brooke', introduced: 3, label: 'neighbors & friends' },
  { from: 'cadwallader', to: 'brooke', introduced: 5, label: 'neighbors & friends' },
  { from: 'vincy', to: 'mrs-vincy', introduced: 12, label: 'married' },
  { from: 'vincy', to: 'rosamond', introduced: 12, label: 'father & daughter' },
  { from: 'vincy', to: 'fred', introduced: 12, label: 'father & son' },
  { from: 'mrs-vincy', to: 'rosamond', introduced: 12, label: 'mother & daughter' },
  { from: 'rosamond', to: 'fred', introduced: 12, label: 'siblings' },
  { from: 'featherstone', to: 'fred', introduced: 13, label: 'family connection' },
  { from: 'featherstone', to: 'mary', introduced: 14, label: 'employer & companion' },
  { from: 'caleb', to: 'mary', introduced: 16, label: 'father & daughter' },
  { from: 'caleb', to: 'susan', introduced: 16, label: 'married' },
  { from: 'susan', to: 'mary', introduced: 16, label: 'mother & daughter' },
  { from: 'lydgate', to: 'bulstrode', introduced: 16, label: 'professional connection' },
  { from: 'farebrother', to: 'fred', introduced: 18, label: 'acquainted' },
  { from: 'will', to: 'casaubon', introduced: 24, label: 'distant relatives' },
  { from: 'will', to: 'dorothea', introduced: 24, label: 'met at Lowick' },
];

export default function Home() {
  const [chapter, setChapter] = useState(8);
  const [selectedId, setSelectedId] = useState('dorothea');

  const visiblePeople = useMemo(() => people.filter((person) => person.introduced <= chapter), [chapter]);
  const visibleIds = useMemo(() => new Set(visiblePeople.map((person) => person.id)), [visiblePeople]);
  const visibleTies = useMemo(
    () => ties.filter((tie) => tie.introduced <= chapter && visibleIds.has(tie.from) && visibleIds.has(tie.to)),
    [chapter, visibleIds],
  );
  const selected = people.find((person) => person.id === selectedId) ?? visiblePeople[0];

  useEffect(() => {
    if (!visibleIds.has(selectedId)) setSelectedId(visiblePeople[0]?.id ?? 'dorothea');
  }, [selectedId, visibleIds, visiblePeople]);

  const named = (id: string) => people.find((person) => person.id === id)?.name ?? '';
  const selectedTies = visibleTies.filter((tie) => tie.from === selected?.id || tie.to === selected?.id);
  const currentPosition = bookPosition(chapter);
  const selectedPosition = selected ? bookPosition(selected.introduced) : null;
  const relationshipConnections = selected
    ? selectedTies.reduce<RelationshipConnection[]>((connections, tie, index) => {
        const otherId = tie.from === selected.id ? tie.to : tie.from;
        const person = people.find((candidate) => candidate.id === otherId);
        if (!person) return connections;

        const count = selectedTies.length;
        const angle =
          (count === 1 ? 0 : -Math.PI / 2) +
          (index * Math.PI * 2) / count;
        const cosine = Math.cos(angle);
        const sine = Math.sin(angle);

        connections.push({
          tie,
          person,
          x: 160 + cosine * 102,
          y: 120 + sine * 73,
          labelX: 160 + cosine * 48,
          labelY: 120 + sine * 38 + (sine < 0 ? -9 : 14),
        });
        return connections;
      }, [])
    : [];

  return (
    <main className="map-page">
      <div className="page-orb orb-one" />
      <div className="page-orb orb-two" />
      <section className="map-shell" aria-label="Middlemarch spoiler-safe character map">
        <header className="map-header">
          <div className="eyebrow"><BookOpen size={16} aria-hidden="true" /> A reader’s companion</div>
          <div className="header-copy">
            <div><h1>Middlemarch</h1><p>Character map, one chapter at a time.</p></div>
            <div className="chapter-medallion" aria-label={'Showing ' + currentPosition.label}>
              <span>Book {currentPosition.book.roman}</span>
              <strong>Chapter {currentPosition.chapter}</strong>
            </div>
          </div>
        </header>

        <section className="reading-panel" aria-labelledby="reading-position-title">
          <div className="reading-copy">
            <p className="section-kicker" id="reading-position-title">Reading position</p>
            <p>Move to the chapter you’ve finished. Later people and connections stay out of sight.</p>
          </div>
          <div className="slider-wrap">
            <Slider
              aria-label="Chapter completed"
              min={1}
              max={86}
              step={1}
              value={[chapter]}
              onValueChange={(value) =>
                setChapter(Array.isArray(value) ? value[0] : value)
              }
              className="chapter-slider"
            />
            <div className="slider-reading-position">
              <strong>{currentPosition.label}</strong>
              <span>Chapter {currentPosition.chapter} of {currentPosition.book.end - currentPosition.book.start + 1}</span>
            </div>
            <div className="book-index" aria-hidden="true">
              {books.map((book) => (
                <span className={book.roman === currentPosition.book.roman ? 'is-current' : ''} key={book.roman}>
                  <b>Book {book.roman}</b>
                  <small>{book.start}–{book.end}</small>
                </span>
              ))}
            </div>
          </div>
          <div className="chapter-actions">
            <button type="button" onClick={() => setChapter((value) => Math.max(1, value - 1))} disabled={chapter === 1}><ArrowLeft size={17} aria-hidden="true" /> Earlier</button>
            <button type="button" onClick={() => setChapter((value) => Math.min(86, value + 1))} disabled={chapter === 86}>Next <ArrowRight size={17} aria-hidden="true" /></button>
          </div>
        </section>

        <div className="map-note" role="note"><Sparkles size={17} aria-hidden="true" /><span><strong>Conservative spoiler guard:</strong> when a first appearance is uncertain, this map waits rather than revealing early.</span></div>

        <div className="map-layout">
          <section className="circles" aria-label="Character groups">
            <div className="map-summary"><span>{visiblePeople.length} people</span><i /><span>{visibleTies.length} named ties</span></div>
            {circles.map((circle) => {
              const members = visiblePeople.filter((person) => person.circle === circle.id);
              if (!members.length) return null;
              const groupTies = visibleTies.filter((tie) => {
                const left = people.find((person) => person.id === tie.from);
                const right = people.find((person) => person.id === tie.to);
                return left?.circle === circle.id && right?.circle === circle.id;
              });

              return (
                <section className={'circle-section tone-' + circle.tone} key={circle.id} aria-labelledby={circle.id + '-title'}>
                  <div className="circle-heading">
                    <div><p>{circle.eyebrow}</p><h2 id={circle.id + '-title'}>{circle.title}</h2></div>
                    <span>{members.length}</span>
                  </div>
                  <div className="people-grid">
                    {members.map((person) => (
                      <button className={['person-card', selected?.id === person.id ? 'is-selected' : ''].filter(Boolean).join(' ')} key={person.id} type="button" onClick={() => setSelectedId(person.id)} aria-pressed={selected?.id === person.id}>
                        <span className="person-initials">{person.initials}</span>
                        <span className="person-name">{person.name}</span>
                        <span className="person-role">{person.role}</span>
                        <ChevronRight className="card-chevron" size={18} aria-hidden="true" />
                      </button>
                    ))}
                  </div>
                  {groupTies.length > 0 && (
                    <div className="group-ties" aria-label={circle.title + ' relationships'}>
                      {groupTies.map((tie) => (
                        <button type="button" className="tie-row" key={tie.from + '-' + tie.to} onClick={() => setSelectedId(tie.from)}>
                          <span>{named(tie.from)}</span><em>{tie.label}</em><span>{named(tie.to)}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </section>

          {selected && (
            <aside className="detail-panel" aria-live="polite">
              <div className="detail-topline"><span>Selected person</span><span>Book {selectedPosition?.book.roman} · Ch. {selectedPosition?.chapter}</span></div>
              <div className="detail-identity">
                <div className="detail-initials">{selected.initials}</div>
                <div><h2>{selected.name}</h2><p>{selected.role}</p></div>
              </div>
              <p className="detail-copy">{selected.detail}</p>
              <div className="detail-divider" />
              <section className="relationship-section" aria-label={'Relationship map for ' + selected.name}>
                <p className="relationship-title"><Link2 size={16} aria-hidden="true" /> Relationship map</p>
                {relationshipConnections.length ? (
                  <div className="relationship-network">
                    <svg viewBox="0 0 320 240" aria-hidden="true">
                      {relationshipConnections.map((connection) => (
                        <g key={connection.tie.from + '-' + connection.tie.to}>
                          <line x1="160" y1="120" x2={connection.x} y2={connection.y} />
                          <circle cx={connection.labelX} cy={connection.labelY - 3} r="2.5" />
                          <text x={connection.labelX} y={connection.labelY}>{connection.tie.label}</text>
                        </g>
                      ))}
                    </svg>
                    <div className="relationship-center">
                      <span>{selected.initials}</span>
                      <strong>{selected.name}</strong>
                    </div>
                    {relationshipConnections.map((connection) => (
                      <button
                        aria-label={selected.name + ' — ' + connection.tie.label + ' — ' + connection.person.name}
                        className="relationship-node"
                        key={connection.tie.from + '-' + connection.tie.to}
                        onClick={() => setSelectedId(connection.person.id)}
                        style={{
                          left: (connection.x / 320) * 100 + '%',
                          top: (connection.y / 240) * 100 + '%',
                        }}
                        type="button"
                      >
                        <span>{connection.person.initials}</span>
                        <strong>{connection.person.name}</strong>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="relationship-empty">No named tie is visible at this reading position yet.</p>
                )}
              </section>
              <div className="detail-connections">
                <p>Connections shown so far</p>
                {selectedTies.length ? (
                  <ul>
                    {selectedTies.map((tie) => {
                      const otherId = tie.from === selected.id ? tie.to : tie.from;
                      return <li key={tie.from + '-' + tie.to}><button type="button" onClick={() => setSelectedId(otherId)}>{named(otherId)}</button><span>{tie.label}</span></li>;
                    })}
                  </ul>
                ) : <span className="no-ties">No named connection is shown yet.</span>}
              </div>
            </aside>
          )}
        </div>
      </section>
    </main>
  );
}
