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
  through?: number;
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
  { roman: 'III', start: 23, end: 33 },
  { roman: 'IV', start: 34, end: 42 },
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
  return {
    book,
    chapter: globalChapter,
    label: 'Book ' + book.roman + ' · Chapter ' + globalChapter,
  };
}

const circles = [
  { id: 'brookes', title: 'The Brookes, Lowick & Freshitt', eyebrow: 'Country families & households', tone: 'violet' },
  { id: 'vincys', title: 'The Vincy household', eyebrow: 'Family, school & home', tone: 'rose' },
  { id: 'stone', title: 'Stone Court connections', eyebrow: 'Featherstones, Waules & Mary Garth', tone: 'gold' },
  { id: 'farebrothers', title: 'The Farebrother household', eyebrow: 'Church, family & friendship', tone: 'sage' },
  { id: 'medicine', title: 'Medicine & the hospital', eyebrow: 'Doctors, patients & professional rivals', tone: 'blue' },
  { id: 'town', title: 'Middlemarch public life', eyebrow: 'Clergy, business & society', tone: 'teal' },
  { id: 'rome', title: 'The Rome circle', eyebrow: 'Art & acquaintance abroad', tone: 'plum' },
] as const;

const people: Person[] = [
  { id: 'dorothea', name: 'Dorothea Brooke', circle: 'brookes', introduced: 1, initials: 'DB', role: 'Later Mrs Edward Casaubon', detail: 'Arthur Brooke’s earnest elder niece and Celia’s sister. By Chapter 22 she is married to Edward Casaubon.' },
  { id: 'celia', name: 'Celia Brooke', circle: 'brookes', introduced: 1, initials: 'CB', role: 'Dorothea’s younger sister', detail: 'Practical and observant, Celia often sees the social reality that Dorothea overlooks.' },
  { id: 'brooke', name: 'Arthur Brooke', circle: 'brookes', introduced: 1, initials: 'AB', role: 'Usually called Mr Brooke', detail: 'Bachelor uncle and guardian of Dorothea and Celia; owner of Tipton Grange.' },
  { id: 'casaubon', name: 'Edward Casaubon', circle: 'brookes', introduced: 1, initials: 'EC', role: 'Scholar and clergyman at Lowick', detail: 'A reserved scholar of religious history; Dorothea’s husband by Chapter 22.' },
  { id: 'chettam', name: 'James Chettam', circle: 'brookes', introduced: 1, initials: 'JC', role: 'Usually called Sir James Chettam', detail: 'A considerate neighboring baronet at Freshitt Hall and friend of the Brookes.' },
  { id: 'lady-chettam', name: 'Lady Chettam', circle: 'brookes', introduced: 6, initials: 'LC', role: 'First name not given', detail: 'Sir James Chettam’s mother and the lady of Freshitt Hall.' },
  { id: 'cadwallader', name: 'Elinor Cadwallader', circle: 'brookes', introduced: 1, initials: 'ECa', role: 'Usually called Mrs Cadwallader', detail: 'The rector’s quick-witted wife and an intimate observer of the Brooke family.' },
  { id: 'humphrey', name: 'Humphrey Cadwallader', circle: 'brookes', introduced: 8, initials: 'HC', role: 'Rector at Tipton and Freshitt', detail: 'Elinor Cadwallader’s husband and a neighboring clergyman.' },
  { id: 'tantripp', name: 'Tantripp', circle: 'brookes', introduced: 4, initials: 'T', role: 'First name not given', detail: 'The maid attending Dorothea and Celia and a channel for local household news.' },
  { id: 'mrs-carter', name: 'Mrs Carter', circle: 'brookes', introduced: 6, initials: 'MC', role: 'First name not given', detail: 'A Tipton Grange household member known for her pastry.' },
  { id: 'mrs-fitchett', name: 'Mrs Fitchett', circle: 'brookes', introduced: 6, initials: 'MF', role: 'First name not given', detail: 'A Lowick parishioner visited by Edward Casaubon and Dorothea.' },
  { id: 'tucker', name: 'Mr Tucker', circle: 'brookes', introduced: 9, initials: 'MT', role: 'First name not given', detail: 'Casaubon’s middle-aged curate at Lowick.' },
  { id: 'will', name: 'Will Ladislaw', circle: 'brookes', introduced: 9, initials: 'WL', role: 'Casaubon’s young cousin', detail: 'An intelligent young relation, first met by Dorothea at Lowick and encountered again in Rome.' },

  { id: 'vincy', name: 'Walter Vincy', circle: 'vincys', introduced: 10, initials: 'WV', role: 'Usually called Mr Vincy', detail: 'A prosperous manufacturer and alderman; husband of Lucy and father of Fred and Rosamond.' },
  { id: 'mrs-vincy', name: 'Lucy Vincy', circle: 'vincys', introduced: 11, initials: 'LV', role: 'Usually called Mrs Vincy', detail: 'Walter Vincy’s sociable wife and mother of Fred, Rosamond, and their younger siblings.' },
  { id: 'rosamond', name: 'Rosamond Vincy', circle: 'vincys', introduced: 11, initials: 'RV', role: 'Walter and Lucy’s daughter', detail: 'Accomplished, admired, and attentive to refinement; Fred’s sister and Mary Garth’s old school friend.' },
  { id: 'fred', name: 'Fred Vincy', circle: 'vincys', introduced: 11, initials: 'FV', role: 'Walter and Lucy’s son', detail: 'Good-natured and improvident; expected to enter the Church but uncertain about his future.' },
  { id: 'harriet', name: 'Harriet Bulstrode', circle: 'vincys', introduced: 12, initials: 'HB', role: 'Walter Vincy’s sister', detail: 'Usually called Mrs Bulstrode; Walter Vincy’s sister and Nicholas Bulstrode’s wife.' },
  { id: 'pritchard', name: 'Pritchard', circle: 'vincys', introduced: 11, initials: 'P', role: 'First name not given', detail: 'A servant in the Vincy household who is sent to wake Fred.' },
  { id: 'miss-morgan', name: 'Miss Morgan', circle: 'vincys', introduced: 11, initials: 'MM', role: 'First name not given', detail: 'The governess teaching the younger Vincy girls.' },
  { id: 'mrs-lemon', name: 'Mrs Lemon', circle: 'vincys', introduced: 11, initials: 'ML', role: 'First name not given', detail: 'Head of the county school where Rosamond was the exemplary pupil.' },

  { id: 'featherstone', name: 'Peter Featherstone', circle: 'stone', introduced: 12, initials: 'PF', role: 'Owner of Stone Court', detail: 'A wealthy, ailing widower whose household attracts expectant relatives.' },
  { id: 'mary', name: 'Mary Garth', circle: 'stone', introduced: 11, initials: 'MG', role: 'Companion at Stone Court', detail: 'Caleb Garth’s clear-sighted daughter; Peter Featherstone’s paid companion and Fred’s childhood friend.' },
  { id: 'jane-waule', name: 'Jane Waule', circle: 'stone', introduced: 12, initials: 'JW', role: 'Usually called Mrs Waule', detail: 'Peter Featherstone’s widowed sister, formerly Jane Featherstone.' },
  { id: 'solomon', name: 'Solomon Featherstone', circle: 'stone', introduced: 12, initials: 'SF', role: 'Peter Featherstone’s brother', detail: 'Jane Waule’s brother and one of the close Featherstone relations.' },
  { id: 'john-waule', name: 'John Waule', circle: 'stone', introduced: 14, initials: 'JW', role: 'Jane Waule’s son', detail: 'Peter Featherstone’s nephew; a steady young man who visits Stone Court.' },
  { id: 'simmons', name: 'Simmons', circle: 'stone', introduced: 14, initials: 'S', role: 'First name not given', detail: 'Peter Featherstone’s servant at Stone Court.' },

  { id: 'farebrother', name: 'Camden Farebrother', circle: 'farebrothers', introduced: 13, initials: 'CF', role: 'Vicar of St Botolph’s', detail: 'A clergyman and naturalist who supports his small household and befriends Lydgate.' },
  { id: 'mrs-farebrother', name: 'Mrs Farebrother', circle: 'farebrothers', introduced: 17, initials: 'MFa', role: 'First name not given', detail: 'Camden Farebrother’s lively, sharp-eyed mother.' },
  { id: 'winifred', name: 'Winifred Farebrother', circle: 'farebrothers', introduced: 17, initials: 'WF', role: 'Camden’s elder sister', detail: 'Camden Farebrother’s unmarried elder sister and a member of his dependent household.' },
  { id: 'miss-noble', name: 'Miss Noble', circle: 'farebrothers', introduced: 17, initials: 'MN', role: 'First name not given', detail: 'Mrs Farebrother’s tiny, gentle sister and Camden’s aunt; cared for by Winifred.' },

  { id: 'lydgate', name: 'Tertius Lydgate', circle: 'medicine', introduced: 10, initials: 'TL', role: 'Newly arrived doctor', detail: 'An ambitious young doctor with plans for medical research and reform.' },
  { id: 'peacock', name: 'Mr Peacock', circle: 'medicine', introduced: 11, initials: 'MP', role: 'First name not given', detail: 'The retiring practitioner whose practice Lydgate pays to enter.' },
  { id: 'wrench', name: 'Mr Wrench', circle: 'medicine', introduced: 11, initials: 'MW', role: 'First name not given', detail: 'The Vincy family’s established doctor and an early critic of Lydgate.' },
  { id: 'toller', name: 'Mr Toller', circle: 'medicine', introduced: 15, initials: 'MTo', role: 'First name not given', detail: 'An established Middlemarch medical practitioner.' },
  { id: 'sprague', name: 'Dr Sprague', circle: 'medicine', introduced: 15, initials: 'DS', role: 'First name not given', detail: 'The senior Middlemarch physician, locally regarded as a doctor of weight.' },
  { id: 'minchin', name: 'Dr Minchin', circle: 'medicine', introduced: 15, initials: 'DM', role: 'First name not given', detail: 'A Middlemarch physician said locally to possess more penetration than Dr Sprague.' },
  { id: 'laure', name: 'Madame Laure', circle: 'medicine', introduced: 15, initials: 'MLa', role: 'French actress in Lydgate’s past', detail: 'An actress connected with an episode from Lydgate’s earlier life in Paris, recounted in Chapter 15.' },

  { id: 'bulstrode', name: 'Nicholas Bulstrode', circle: 'town', introduced: 10, initials: 'NB', role: 'Banker and civic influence', detail: 'A prominent banker active in charitable, religious, and hospital affairs; Harriet’s husband.' },
  { id: 'tyke', name: 'Walter Tyke', circle: 'town', introduced: 13, initials: 'WT', role: 'Evangelical clergyman', detail: 'Bulstrode’s preferred candidate for the new hospital chaplaincy.' },
  { id: 'thesiger', name: 'Edward Thesiger', circle: 'town', introduced: 18, initials: 'ET', role: 'Evangelical clergyman', detail: 'A moderate evangelical who supports his friend Walter Tyke.' },
  { id: 'hackbutt', name: 'Mr Hackbutt', circle: 'town', introduced: 18, initials: 'MH', role: 'First name not given', detail: 'A rich, fluent tanner who takes part in the hospital board discussion.' },
  { id: 'powderell', name: 'Mr Powderell', circle: 'town', introduced: 18, initials: 'MPo', role: 'First name not given', detail: 'A retired ironmonger and hospital board participant.' },
  { id: 'hawley', name: 'Frank Hawley', circle: 'town', introduced: 18, initials: 'FH', role: 'Lawyer and town clerk', detail: 'An outspoken lawyer who intervenes in the hospital chaplaincy debate.' },
  { id: 'larcher', name: 'Mr Larcher', circle: 'town', introduced: 18, initials: 'MLa', role: 'First name not given', detail: 'An eminent carrier who speaks at the hospital board meeting.' },
  { id: 'chichely', name: 'Mr Chichely', circle: 'town', introduced: 10, initials: 'MCh', role: 'First name not given', detail: 'A middle-aged bachelor and sporting man who openly admires Rosamond.' },
  { id: 'standish', name: 'Mr Standish', circle: 'town', introduced: 10, initials: 'MSt', role: 'First name not given', detail: 'A Middlemarch gentleman in the Vincy family’s social company.' },
  { id: 'renfrew', name: 'Mrs Renfrew', circle: 'town', introduced: 10, initials: 'MR', role: 'First name not given', detail: 'A colonel’s widow and guest in the Vincys’ social circle.' },
  { id: 'crowse', name: 'Mr Crowse', circle: 'town', introduced: 14, initials: 'MC', role: 'First name not given', detail: 'A curate whom Mary mentions while teasing Fred about the clergy.' },
  { id: 'bowyer', name: 'Mr Bowyer', circle: 'town', introduced: 16, initials: 'MB', role: 'First name not given', detail: 'A musician known to Rosamond and Lydgate through Middlemarch society.' },
  { id: 'trawley', name: 'Trawley', circle: 'town', introduced: 17, initials: 'Tr', role: 'First name not given', detail: 'Lydgate’s former Paris roommate and a correspondent of Farebrother.' },

  { id: 'naumann', name: 'Adolf Naumann', circle: 'rome', introduced: 22, initials: 'AN', role: 'German painter in Rome', detail: 'Will Ladislaw’s artist friend, who meets Dorothea and Casaubon in Rome.' },
];

const ties: Tie[] = [
  { from: 'dorothea', to: 'celia', introduced: 1, label: 'sisters' },
  { from: 'brooke', to: 'dorothea', introduced: 1, label: 'uncle & guardian' },
  { from: 'brooke', to: 'celia', introduced: 1, label: 'uncle & guardian' },
  { from: 'dorothea', to: 'casaubon', introduced: 5, through: 19, label: 'engaged' },
  { from: 'dorothea', to: 'casaubon', introduced: 20, label: 'married' },
  { from: 'chettam', to: 'brooke', introduced: 1, label: 'neighbors & friends' },
  { from: 'chettam', to: 'dorothea', introduced: 1, label: 'initially courts' },
  { from: 'chettam', to: 'celia', introduced: 3, label: 'friends' },
  { from: 'lady-chettam', to: 'chettam', introduced: 6, label: 'mother & son' },
  { from: 'cadwallader', to: 'brooke', introduced: 1, label: 'neighbors & friends' },
  { from: 'cadwallader', to: 'humphrey', introduced: 8, label: 'married' },
  { from: 'humphrey', to: 'brooke', introduced: 8, label: 'neighboring rector' },
  { from: 'tantripp', to: 'dorothea', introduced: 4, label: 'maid & mistress' },
  { from: 'tantripp', to: 'celia', introduced: 4, label: 'maid & mistress' },
  { from: 'mrs-carter', to: 'brooke', introduced: 6, label: 'household staff' },
  { from: 'mrs-fitchett', to: 'casaubon', introduced: 6, label: 'Lowick parishioner' },
  { from: 'tucker', to: 'casaubon', introduced: 9, label: 'curate & rector' },
  { from: 'will', to: 'casaubon', introduced: 9, label: 'cousins / relatives' },
  { from: 'will', to: 'dorothea', introduced: 9, label: 'acquainted' },

  { from: 'vincy', to: 'mrs-vincy', introduced: 11, label: 'married' },
  { from: 'vincy', to: 'fred', introduced: 11, label: 'father & son' },
  { from: 'vincy', to: 'rosamond', introduced: 11, label: 'father & daughter' },
  { from: 'mrs-vincy', to: 'fred', introduced: 11, label: 'mother & son' },
  { from: 'mrs-vincy', to: 'rosamond', introduced: 11, label: 'mother & daughter' },
  { from: 'fred', to: 'rosamond', introduced: 11, label: 'siblings' },
  { from: 'vincy', to: 'harriet', introduced: 12, label: 'brother & sister' },
  { from: 'harriet', to: 'bulstrode', introduced: 12, label: 'married' },
  { from: 'vincy', to: 'bulstrode', introduced: 12, label: 'brothers-in-law' },
  { from: 'pritchard', to: 'mrs-vincy', introduced: 11, label: 'household servant' },
  { from: 'miss-morgan', to: 'mrs-vincy', introduced: 11, label: 'children’s governess' },
  { from: 'mrs-lemon', to: 'rosamond', introduced: 11, label: 'former schoolmistress' },

  { from: 'featherstone', to: 'mary', introduced: 12, label: 'employer & companion' },
  { from: 'featherstone', to: 'jane-waule', introduced: 12, label: 'brother & sister' },
  { from: 'featherstone', to: 'solomon', introduced: 12, label: 'brothers' },
  { from: 'jane-waule', to: 'solomon', introduced: 12, label: 'siblings' },
  { from: 'jane-waule', to: 'john-waule', introduced: 14, label: 'mother & son' },
  { from: 'featherstone', to: 'john-waule', introduced: 14, label: 'uncle & nephew' },
  { from: 'featherstone', to: 'simmons', introduced: 14, label: 'master & servant' },
  { from: 'fred', to: 'featherstone', introduced: 12, label: 'family connection' },
  { from: 'rosamond', to: 'featherstone', introduced: 12, label: 'family connection' },
  { from: 'mrs-vincy', to: 'featherstone', introduced: 11, label: 'late sister married him' },
  { from: 'fred', to: 'mary', introduced: 12, label: 'childhood friends; Fred loves Mary' },
  { from: 'rosamond', to: 'mary', introduced: 12, label: 'old school friends' },
  { from: 'john-waule', to: 'mary', introduced: 14, label: 'acquainted' },

  { from: 'farebrother', to: 'mrs-farebrother', introduced: 17, label: 'son & mother' },
  { from: 'farebrother', to: 'winifred', introduced: 17, label: 'brother & sister' },
  { from: 'mrs-farebrother', to: 'miss-noble', introduced: 17, label: 'sisters' },
  { from: 'winifred', to: 'miss-noble', introduced: 17, label: 'niece & aunt' },
  { from: 'farebrother', to: 'lydgate', introduced: 17, label: 'friends' },
  { from: 'farebrother', to: 'fred', introduced: 18, label: 'acquainted' },

  { from: 'lydgate', to: 'peacock', introduced: 11, label: 'successor in practice' },
  { from: 'wrench', to: 'vincy', introduced: 11, label: 'family doctor' },
  { from: 'lydgate', to: 'wrench', introduced: 11, label: 'professional rivals' },
  { from: 'lydgate', to: 'toller', introduced: 15, label: 'professional rivals' },
  { from: 'lydgate', to: 'sprague', introduced: 15, label: 'medical colleagues' },
  { from: 'lydgate', to: 'minchin', introduced: 15, label: 'medical colleagues' },
  { from: 'sprague', to: 'minchin', introduced: 15, label: 'fellow physicians' },
  { from: 'lydgate', to: 'laure', introduced: 15, label: 'former attachment' },
  { from: 'lydgate', to: 'bulstrode', introduced: 13, label: 'hospital allies' },
  { from: 'lydgate', to: 'rosamond', introduced: 12, label: 'mutual interest' },
  { from: 'lydgate', to: 'featherstone', introduced: 12, label: 'doctor & patient' },
  { from: 'lydgate', to: 'trawley', introduced: 17, label: 'former roommates' },
  { from: 'farebrother', to: 'trawley', introduced: 17, label: 'correspondents' },

  { from: 'bulstrode', to: 'tyke', introduced: 13, label: 'supports as chaplain' },
  { from: 'farebrother', to: 'tyke', introduced: 18, label: 'chaplaincy candidates' },
  { from: 'thesiger', to: 'tyke', introduced: 18, label: 'friends & allies' },
  { from: 'hackbutt', to: 'bulstrode', introduced: 18, label: 'hospital board' },
  { from: 'powderell', to: 'bulstrode', introduced: 18, label: 'hospital board' },
  { from: 'hawley', to: 'bulstrode', introduced: 18, label: 'civic opponents' },
  { from: 'larcher', to: 'bulstrode', introduced: 18, label: 'hospital board' },
  { from: 'chichely', to: 'rosamond', introduced: 10, label: 'admires' },
  { from: 'standish', to: 'vincy', introduced: 10, label: 'social acquaintance' },
  { from: 'renfrew', to: 'vincy', introduced: 10, label: 'social acquaintance' },
  { from: 'crowse', to: 'mary', introduced: 14, label: 'mentioned by Mary' },
  { from: 'bowyer', to: 'rosamond', introduced: 16, label: 'musical acquaintance' },

  { from: 'naumann', to: 'will', introduced: 22, label: 'artist friends' },
  { from: 'naumann', to: 'dorothea', introduced: 22, label: 'meets in Rome' },
  { from: 'naumann', to: 'casaubon', introduced: 22, label: 'meets in Rome' },
];

const circleById = new Map(circles.map((circle) => [circle.id, circle]));
const personById = new Map(people.map((person) => [person.id, person]));

export default function Home() {
  const [chapter, setChapter] = useState(22);
  const [selectedId, setSelectedId] = useState('dorothea');

  const visiblePeople = useMemo(() => people.filter((person) => person.introduced <= chapter), [chapter]);
  const visibleIds = useMemo(() => new Set(visiblePeople.map((person) => person.id)), [visiblePeople]);
  const visibleTies = useMemo(
    () => ties.filter((tie) => tie.introduced <= chapter && (tie.through === undefined || chapter <= tie.through) && visibleIds.has(tie.from) && visibleIds.has(tie.to)),
    [chapter, visibleIds],
  );
  const selected = personById.get(selectedId) ?? visiblePeople[0];

  useEffect(() => {
    if (!visibleIds.has(selectedId)) setSelectedId(visiblePeople[0]?.id ?? 'dorothea');
  }, [selectedId, visibleIds, visiblePeople]);

  const named = (id: string) => personById.get(id)?.name ?? '';
  const selectedTies = visibleTies.filter((tie) => tie.from === selected?.id || tie.to === selected?.id);
  const currentPosition = bookPosition(chapter);
  const selectedPosition = selected ? bookPosition(selected.introduced) : null;
  const visualTies = selectedTies.slice(0, 10);
  const relationshipConnections = selected
    ? visualTies.reduce<RelationshipConnection[]>((connections, tie, index) => {
        const otherId = tie.from === selected.id ? tie.to : tie.from;
        const person = personById.get(otherId);
        if (!person) return connections;

        const count = visualTies.length;
        const angle =
          (count === 1 ? 0 : -Math.PI / 2) +
          (index * Math.PI * 2) / count;
        const cosine = Math.cos(angle);
        const sine = Math.sin(angle);

        connections.push({
          tie,
          person,
          x: 160 + cosine * 112,
          y: 128 + sine * 86,
          labelX: 160 + cosine * 53,
          labelY: 128 + sine * 46 + (sine < 0 ? -8 : 13),
        });
        return connections;
      }, [])
    : [];
  const crossCircleTies = visibleTies.filter((tie) => {
    const left = personById.get(tie.from);
    const right = personById.get(tie.to);
    return left && right && left.circle !== right.circle;
  });

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
              <strong>Chapter {chapter}</strong>
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
              onValueChange={(value) => setChapter(value[0] ?? 1)}
              className="chapter-slider"
            />
            <div className="slider-reading-position">
              <strong>{currentPosition.label}</strong>
              <span>Continuous chapter numbering · {chapter} of 86</span>
            </div>
            <div className="book-index" aria-hidden="true">
              {books.map((book) => (
                <span className={book.roman === currentPosition.book.roman ? 'is-current' : ''} key={book.roman}>
                  <b>Book {book.roman}</b>
                  <small>Ch. {book.start}–{book.end}</small>
                </span>
              ))}
            </div>
          </div>
          <div className="chapter-actions">
            <button type="button" onClick={() => setChapter((value) => Math.max(1, value - 1))} disabled={chapter === 1}><ArrowLeft size={17} aria-hidden="true" /> Earlier</button>
            <button type="button" onClick={() => setChapter((value) => Math.min(86, value + 1))} disabled={chapter === 86}>Next <ArrowRight size={17} aria-hidden="true" /></button>
          </div>
        </section>

        <div className="map-note" role="note"><Sparkles size={17} aria-hidden="true" /><span><strong>Conservative spoiler guard:</strong> first names are supplied where known, but later actions and revelations remain hidden. Unnamed people stay labeled as the novel labels them.</span></div>

        <div className="map-layout">
          <section className="circles" aria-label="Character groups">
            <div className="map-summary"><span>{visiblePeople.length} people</span><i /><span>{visibleTies.length} named ties</span></div>
            {circles.map((circle) => {
              const members = visiblePeople.filter((person) => person.circle === circle.id);
              if (!members.length) return null;
              const groupTies = visibleTies.filter((tie) => {
                const left = personById.get(tie.from);
                const right = personById.get(tie.to);
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
                      {groupTies.map((tie, index) => (
                        <button type="button" className="tie-row" key={tie.from + '-' + tie.to + '-' + index} onClick={() => setSelectedId(tie.from)}>
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
              <div className="detail-topline"><span>Selected person</span><span>First shown: Book {selectedPosition?.book.roman} · Ch. {selected.introduced}</span></div>
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
                    <svg viewBox="0 0 320 256" aria-hidden="true">
                      {relationshipConnections.map((connection, index) => (
                        <g key={connection.tie.from + '-' + connection.tie.to + '-' + index}>
                          <line x1="160" y1="128" x2={connection.x} y2={connection.y} />
                          <circle cx={connection.labelX} cy={connection.labelY - 3} r="2.5" />
                          <text x={connection.labelX} y={connection.labelY}>{connection.tie.label}</text>
                        </g>
                      ))}
                    </svg>
                    <div className="relationship-center">
                      <span>{selected.initials}</span>
                      <strong>{selected.name}</strong>
                    </div>
                    {relationshipConnections.map((connection, index) => (
                      <button
                        aria-label={selected.name + ' — ' + connection.tie.label + ' — ' + connection.person.name}
                        className="relationship-node"
                        key={connection.tie.from + '-' + connection.tie.to + '-' + index}
                        onClick={() => setSelectedId(connection.person.id)}
                        style={{
                          left: (connection.x / 320) * 100 + '%',
                          top: (connection.y / 256) * 100 + '%',
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
                {selectedTies.length > 10 && <p className="network-note">The map shows ten nearby people; every connection is listed below.</p>}
              </section>
              <div className="detail-connections">
                <p>All connections shown so far</p>
                {selectedTies.length ? (
                  <ul>
                    {selectedTies.map((tie, index) => {
                      const otherId = tie.from === selected.id ? tie.to : tie.from;
                      return <li key={tie.from + '-' + tie.to + '-' + index}><button type="button" onClick={() => setSelectedId(otherId)}>{named(otherId)}</button><span>{tie.label}</span></li>;
                    })}
                  </ul>
                ) : <span className="no-ties">No named connection is shown yet.</span>}
              </div>
            </aside>
          )}
        </div>

        {crossCircleTies.length > 0 && (
          <section className="cross-circle-panel" aria-labelledby="cross-circle-title">
            <div className="cross-circle-heading">
              <div>
                <p className="section-kicker">The web between households</p>
                <h2 id="cross-circle-title">Cross-circle view</h2>
                <p>These are the bridges joining otherwise separate families and social worlds at {currentPosition.label}. Select any person to open their full relationship map.</p>
              </div>
              <span>{crossCircleTies.length} bridges</span>
            </div>
            <div className="circle-legend">
              {circles.filter((circle) => visiblePeople.some((person) => person.circle === circle.id)).map((circle) => (
                <span className={'legend-chip tone-' + circle.tone} key={circle.id}><i />{circle.title}</span>
              ))}
            </div>
            <div className="bridge-grid">
              {crossCircleTies.map((tie, index) => {
                const left = personById.get(tie.from)!;
                const right = personById.get(tie.to)!;
                const leftCircle = circleById.get(left.circle)!;
                const rightCircle = circleById.get(right.circle)!;
                return (
                  <article className="bridge-card" key={tie.from + '-' + tie.to + '-' + index}>
                    <button className={'bridge-person tone-' + leftCircle.tone} type="button" onClick={() => setSelectedId(left.id)}>
                      <span>{left.initials}</span><strong>{left.name}</strong><small>{leftCircle.title}</small>
                    </button>
                    <div className="bridge-relation"><i /><em>{tie.label}</em><i /></div>
                    <button className={'bridge-person tone-' + rightCircle.tone} type="button" onClick={() => setSelectedId(right.id)}>
                      <span>{right.initials}</span><strong>{right.name}</strong><small>{rightCircle.title}</small>
                    </button>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        <p className="scope-note">Scope: named people who appear, are directly discussed, or connect to the principal network by this chapter. Passing historical, mythological, and literary references are not treated as characters.</p>
      </section>
    </main>
  );
}
