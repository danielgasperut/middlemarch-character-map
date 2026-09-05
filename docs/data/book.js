/*
 * BOOK DATA — edit this file to adapt the map to another book.
 * The renderer in ../assets/map.js reads window.BOOK_DATA.
 */
(function () {
const metadata = {
  title: 'Middlemarch',
  eyebrow: 'A reader’s companion',
  subtitle: 'Character map, one chapter at a time.',
  readingPrompt: 'Move to the chapter you’ve finished. Later people and connections stay out of sight.',
  defaultPersonId: 'dorothea',
  principalIds: ['dorothea','celia','brooke','casaubon','chettam','will','vincy','mrs-vincy','rosamond','fred','harriet','featherstone','mary','caleb','susan','farebrother','lydgate','bulstrode'],
  source: { title: 'Middlemarch, Project Gutenberg eBook #145', url: 'https://www.gutenberg.org/ebooks/145', localText: '../../middlemarch-gutenberg.txt' },
  theme: { accent: '#6961b5', accentPale: '#f0effa' }
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
];
const circles = [
  { id: 'brookes', title: 'The Brookes, Lowick & Freshitt', eyebrow: 'Country families & households', tone: 'violet' },
  { id: 'vincys', title: 'The Vincy household', eyebrow: 'Family, school & home', tone: 'rose' },
  { id: 'stone', title: 'Stone Court connections', eyebrow: 'Featherstones, Waules & Mary Garth', tone: 'gold' },
  { id: 'garths', title: 'The Garth household', eyebrow: 'Family, work & education', tone: 'olive' },
  { id: 'farebrothers', title: 'The Farebrother household', eyebrow: 'Church, family & friendship', tone: 'sage' },
  { id: 'medicine', title: 'Medicine & the hospital', eyebrow: 'Doctors, patients & professional rivals', tone: 'blue' },
  { id: 'town', title: 'Middlemarch public life', eyebrow: 'Clergy, business & society', tone: 'teal' },
  { id: 'rome', title: 'The Rome circle', eyebrow: 'Art & acquaintance abroad', tone: 'plum' },
];
const people = [
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

  { id: 'naumann', name: 'Adolf Naumann', circle: 'rome', introduced: 19, initials: 'AN', role: 'German painter in Rome', detail: 'Will Ladislaw’s artist friend, who meets Dorothea and Casaubon in Rome.' },

  { id: 'caleb', name: 'Caleb Garth', circle: 'garths', introduced: 23, initials: 'CG', role: 'Land agent and surveyor', detail: 'Susan Garth’s husband and Mary’s father; a capable, energetic man devoted to useful work.' },
  { id: 'susan', name: 'Susan Garth', circle: 'garths', introduced: 23, initials: 'SG', role: 'Usually called Mrs Garth', detail: 'Caleb’s practical, educated wife and the firm center of the Garth household.' },
  { id: 'ben', name: 'Ben Garth', circle: 'garths', introduced: 24, initials: 'BG', role: 'Young Garth son', detail: 'One of Caleb and Susan’s younger children; energetic and resistant to grammar lessons.' },
  { id: 'letty', name: 'Letty Garth', circle: 'garths', introduced: 24, initials: 'LG', role: 'Young Garth daughter', detail: 'Caleb and Susan’s young daughter and Ben’s classroom companion.' },
  { id: 'alfred', name: 'Alfred Garth', circle: 'garths', introduced: 40, initials: 'AG', role: 'Garth son', detail: 'A son of Caleb and Susan who is intended for engineering.' },
  { id: 'christy', name: 'Christy Garth', circle: 'garths', introduced: 40, initials: 'CG', role: 'Garth son', detail: 'The scholarly Garth son studying cheaply in Scotland.' },
  { id: 'mrs-plymdale', name: 'Mrs Plymdale', circle: 'town', introduced: 16, initials: 'MP', role: 'First name not given', detail: 'Ned Plymdale’s mother and a socially competitive Middlemarch matron.' },
  { id: 'ned-plymdale', name: 'Ned Plymdale', circle: 'town', introduced: 27, initials: 'NP', role: 'Middlemarch manufacturer’s son', detail: 'A prosperous young Middlemarch man encouraged as a possible match for Rosamond.' },
  { id: 'bambridge', name: 'Mr Bambridge', circle: 'town', introduced: 23, initials: 'MBa', role: 'First name not given', detail: 'A horse-dealer and convivial associate involved in Fred’s financial troubles.' },
  { id: 'horrock', name: 'Mr Horrock', circle: 'medicine', introduced: 23, initials: 'MH', role: 'Veterinary surgeon', detail: 'The veterinarian associated with Bambridge and the horse transaction affecting Fred.' },
  { id: 'trumbull', name: 'Borthrop Trumbull', circle: 'town', introduced: 32, initials: 'BT', role: 'Auctioneer and appraiser', detail: 'A florid Middlemarch auctioneer involved with Featherstone’s property and effects.' },
  { id: 'joshua-rigg', name: 'Joshua Rigg Featherstone', circle: 'stone', introduced: 35, initials: 'JR', role: 'New master of Stone Court', detail: 'Peter Featherstone’s previously unacknowledged son and principal heir.' },
  { id: 'raffles', name: 'John Raffles', circle: 'stone', introduced: 41, initials: 'JR', role: 'Rigg’s stepfather', detail: 'A swaggering traveler from the pasts of Joshua Rigg and Nicholas Bulstrode.' },
  { id: 'mrs-abel', name: 'Mrs Abel', circle: 'stone', introduced: 69, initials: 'MA', role: 'First name not given', detail: 'The housekeeper at Stone Court who helps nurse the ill John Raffles.' },
  { id: 'mawmsey', name: 'Mr Mawmsey', circle: 'town', introduced: 45, initials: 'MM', role: 'First name not given', detail: 'A Middlemarch grocer whose political support is courted during the election.' },
  { id: 'mrs-mawmsey', name: 'Mrs Mawmsey', circle: 'town', introduced: 45, initials: 'MM', role: 'First name not given', detail: 'The grocer’s wife, present in the household political discussion.' },
  { id: 'mrs-dollop', name: 'Mrs Dollop', circle: 'town', introduced: 45, initials: 'MD', role: 'First name not given', detail: 'Landlady of the Tankard and a vigorous participant in Middlemarch opinion.' },
  { id: 'gambit', name: 'Mr Gambit', circle: 'medicine', introduced: 45, initials: 'MG', role: 'First name not given', detail: 'A Middlemarch surgeon mentioned in the town’s comparisons of medical men.' },
  { id: 'sir-godwin', name: 'Sir Godwin Lydgate', circle: 'medicine', introduced: 36, initials: 'GL', role: 'Tertius Lydgate’s uncle', detail: 'Lydgate’s titled uncle, from whom Rosamond imagines the couple might receive help.' },
  { id: 'captain-lydgate', name: 'Captain Lydgate', circle: 'medicine', introduced: 58, initials: 'CL', role: 'First name not given', detail: 'A fashionable cousin of Tertius who visits the Lydgate household.' },
  { id: 'dagley', name: 'Mr Dagley', circle: 'town', introduced: 39, initials: 'MD', role: 'First name not given', detail: 'A tenant on Arthur Brooke’s estate who confronts him over neglected conditions.' },
  { id: 'mrs-dagley', name: 'Mrs Dagley', circle: 'town', introduced: 39, initials: 'MD', role: 'First name not given', detail: 'Mr Dagley’s wife and a tenant on the Tipton estate.' },
  { id: 'pratt', name: 'Pratt', circle: 'brookes', introduced: 48, initials: 'P', role: 'First name not given', detail: 'Edward Casaubon’s butler at Lowick.' },
  { id: 'arthur-chettam', name: 'Arthur Chettam', circle: 'brookes', introduced: 55, initials: 'AC', role: 'Celia and James’s young son', detail: 'The young child of Celia Brooke and Sir James Chettam.' },
  { id: 'julia', name: 'Julia Casaubon', circle: 'brookes', introduced: 28, initials: 'JC', role: 'Casaubon’s late aunt', detail: 'Edward Casaubon’s aunt and Will Ladislaw’s paternal grandmother, known through her miniature and family history.' },
  { id: 'sarah-dunkirk', name: 'Sarah Dunkirk Ladislaw', circle: 'town', introduced: 61, initials: 'SD', role: 'Will Ladislaw’s mother', detail: 'The daughter of the Dunkirk household who left for the stage and later became Will’s mother.' },
  { id: 'mrs-dunkirk', name: 'Mrs Dunkirk', circle: 'town', introduced: 61, initials: 'MD', role: 'First name not given', detail: 'Sarah Dunkirk’s mother and Nicholas Bulstrode’s first wife.' },
  { id: 'mrs-hackbutt', name: 'Mrs Hackbutt', circle: 'town', introduced: 74, initials: 'MH', role: 'First name not given', detail: 'Mr Hackbutt’s wife and a node in the town’s rapid circulation of news.' },
  { id: 'mrs-sprague', name: 'Mrs Sprague', circle: 'town', introduced: 74, initials: 'MS', role: 'First name not given', detail: 'Dr Sprague’s wife and another participant in Middlemarch’s information network.' },
];
const ties = [
  { from: 'dorothea', to: 'celia', introduced: 1, label: 'sisters' },
  { from: 'brooke', to: 'dorothea', introduced: 1, label: 'uncle & guardian' },
  { from: 'brooke', to: 'celia', introduced: 1, label: 'uncle & guardian' },
  { from: 'brooke', to: 'casaubon', introduced: 1, through: 4, label: 'host & visiting scholar' },
  { from: 'brooke', to: 'casaubon', introduced: 5, label: 'uncle by marriage' },
  { from: 'dorothea', to: 'casaubon', introduced: 1, through: 4, label: 'new acquaintance' },
  { from: 'dorothea', to: 'casaubon', introduced: 5, through: 19, label: 'engaged' },
  { from: 'dorothea', to: 'casaubon', introduced: 20, through: 47, label: 'married' },
  { from: 'dorothea', to: 'casaubon', introduced: 48, label: 'widow & late husband' },
  { from: 'chettam', to: 'brooke', introduced: 1, label: 'neighbors & friends' },
  { from: 'chettam', to: 'dorothea', introduced: 1, label: 'initially courts' },
  { from: 'chettam', to: 'casaubon', introduced: 5, label: 'Dorothea’s disappointed suitor & fiancé' },
  { from: 'cadwallader', to: 'dorothea', introduced: 1, label: 'family friend & candid adviser' },
  { from: 'cadwallader', to: 'celia', introduced: 1, label: 'family friend & candid adviser' },
  { from: 'cadwallader', to: 'casaubon', introduced: 1, label: 'neighbours at Lowick' },
  { from: 'chettam', to: 'celia', introduced: 3, through: 27, label: 'friends' },
  { from: 'chettam', to: 'celia', introduced: 28, through: 54, label: 'engaged' },
  { from: 'chettam', to: 'celia', introduced: 55, label: 'married' },
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
  { from: 'will', to: 'dorothea', introduced: 9, through: 85, label: 'acquainted' },
  { from: 'will', to: 'dorothea', introduced: 86, label: 'married' },

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
  { from: 'fred', to: 'mary', introduced: 12, through: 85, label: 'childhood friends; Fred loves Mary' },
  { from: 'fred', to: 'mary', introduced: 86, label: 'engaged; later married' },
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
  { from: 'lydgate', to: 'rosamond', introduced: 12, through: 35, label: 'mutual interest' },
  { from: 'lydgate', to: 'rosamond', introduced: 36, through: 42, label: 'engaged' },
  { from: 'lydgate', to: 'rosamond', introduced: 43, label: 'married' },
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

  { from: 'naumann', to: 'will', introduced: 19, label: 'artist friends' },
  { from: 'naumann', to: 'dorothea', introduced: 19, label: 'meets in Rome' },
  { from: 'naumann', to: 'casaubon', introduced: 19, label: 'meets in Rome' },

  { from: 'caleb', to: 'susan', introduced: 23, label: 'married' },
  { from: 'caleb', to: 'mary', introduced: 23, label: 'father & daughter' },
  { from: 'susan', to: 'mary', introduced: 23, label: 'mother & daughter' },
  { from: 'caleb', to: 'ben', introduced: 24, label: 'father & son' },
  { from: 'susan', to: 'ben', introduced: 24, label: 'mother & son' },
  { from: 'caleb', to: 'letty', introduced: 24, label: 'father & daughter' },
  { from: 'susan', to: 'letty', introduced: 24, label: 'mother & daughter' },
  { from: 'mary', to: 'ben', introduced: 24, label: 'siblings' },
  { from: 'mary', to: 'letty', introduced: 24, label: 'siblings' },
  { from: 'caleb', to: 'alfred', introduced: 40, label: 'father & son' },
  { from: 'susan', to: 'alfred', introduced: 40, label: 'mother & son' },
  { from: 'caleb', to: 'christy', introduced: 40, label: 'father & son' },
  { from: 'susan', to: 'christy', introduced: 40, label: 'mother & son' },
  { from: 'fred', to: 'caleb', introduced: 23, label: 'debt guaranteed by Caleb' },
  { from: 'fred', to: 'susan', introduced: 24, label: 'family friend' },
  { from: 'farebrother', to: 'mary', introduced: 40, label: 'friend; speaks for Fred' },
  { from: 'farebrother', to: 'caleb', introduced: 40, label: 'friends' },

  { from: 'mrs-plymdale', to: 'ned-plymdale', introduced: 27, label: 'mother & son' },
  { from: 'ned-plymdale', to: 'rosamond', introduced: 27, label: 'would-be suitor' },
  { from: 'mrs-plymdale', to: 'mrs-vincy', introduced: 16, label: 'social rivals' },
  { from: 'bambridge', to: 'fred', introduced: 23, label: 'horse deal & debt' },
  { from: 'bambridge', to: 'horrock', introduced: 23, label: 'business associates' },
  { from: 'horrock', to: 'fred', introduced: 23, label: 'examines Fred’s horse' },
  { from: 'trumbull', to: 'featherstone', introduced: 32, label: 'auctioneer & adviser' },
  { from: 'joshua-rigg', to: 'featherstone', introduced: 35, label: 'son & principal heir' },
  { from: 'joshua-rigg', to: 'trumbull', introduced: 35, label: 'estate business' },
  { from: 'raffles', to: 'joshua-rigg', introduced: 41, label: 'stepfather & stepson' },
  { from: 'bulstrode', to: 'joshua-rigg', introduced: 41, label: 'buys Stone Court from' },
  { from: 'bulstrode', to: 'raffles', introduced: 53, label: 'former associate & blackmailer' },
  { from: 'mrs-abel', to: 'raffles', introduced: 69, label: 'nurse & patient' },
  { from: 'mrs-abel', to: 'bulstrode', introduced: 69, label: 'employed by' },

  { from: 'mawmsey', to: 'mrs-mawmsey', introduced: 45, label: 'married' },
  { from: 'mawmsey', to: 'brooke', introduced: 45, label: 'voter courted by' },
  { from: 'mrs-dollop', to: 'mawmsey', introduced: 45, label: 'town acquaintances' },
  { from: 'gambit', to: 'lydgate', introduced: 45, label: 'medical comparison' },
  { from: 'sir-godwin', to: 'lydgate', introduced: 36, label: 'uncle & nephew' },
  { from: 'captain-lydgate', to: 'lydgate', introduced: 58, label: 'cousins' },
  { from: 'captain-lydgate', to: 'rosamond', introduced: 58, label: 'guest & cousin by marriage' },
  { from: 'dagley', to: 'mrs-dagley', introduced: 39, label: 'married' },
  { from: 'dagley', to: 'brooke', introduced: 39, label: 'tenant & landlord' },
  { from: 'mrs-dagley', to: 'brooke', introduced: 39, label: 'tenant & landlord' },
  { from: 'pratt', to: 'casaubon', introduced: 48, label: 'butler & master' },
  { from: 'arthur-chettam', to: 'chettam', introduced: 55, label: 'son & father' },
  { from: 'arthur-chettam', to: 'celia', introduced: 55, label: 'son & mother' },
  { from: 'julia', to: 'casaubon', introduced: 28, label: 'aunt & nephew' },
  { from: 'julia', to: 'will', introduced: 28, label: 'paternal grandmother & grandson' },
  { from: 'sarah-dunkirk', to: 'will', introduced: 61, label: 'mother & son' },
  { from: 'mrs-dunkirk', to: 'sarah-dunkirk', introduced: 61, label: 'mother & daughter' },
  { from: 'mrs-dunkirk', to: 'bulstrode', introduced: 61, label: 'first wife & husband' },
  { from: 'bulstrode', to: 'will', introduced: 61, label: 'hidden family connection revealed' },
  { from: 'mrs-hackbutt', to: 'hackbutt', introduced: 74, label: 'married' },
  { from: 'mrs-sprague', to: 'sprague', introduced: 74, label: 'married' },
  { from: 'mrs-hackbutt', to: 'mrs-sprague', introduced: 74, label: 'exchange town news' },
];
function circlePresentation(circle, chapter) {
  if (circle.id === 'brookes') {
    if (chapter < 5) return { title: 'The Brooke household', eyebrow: 'Tipton Grange' };
    if (chapter < 20) return { title: 'The Brookes & Lowick', eyebrow: 'Family, courtship & parish life' };
  }
  if (circle.id === 'stone' && chapter < 12) {
    return { title: 'Stone Court & Mary Garth', eyebrow: 'A household on the edge of the Vincy circle' };
  }
  return { title: circle.title, eyebrow: circle.eyebrow };
}

function relationshipStatement(left, right, label) {
  const names = left.name + ' and ' + right.name;
  const directed = {
    'uncle & guardian': `${left.name} is ${right.name}’s uncle and guardian.`,
    'mother & son': `${left.name} is ${right.name}’s mother.`,
    'mother & daughter': `${left.name} is ${right.name}’s mother.`,
    'father & son': `${left.name} is ${right.name}’s father.`,
    'father & daughter': `${left.name} is ${right.name}’s father.`,
    'maid & mistress': `${left.name} works as ${right.name}’s maid.`,
    'household staff': `${left.name} belongs to ${right.name}’s household staff.`,
    'curate & rector': `${left.name} serves as curate under ${right.name} at Lowick.`,
    'children’s governess': `${left.name} teaches the younger children in ${right.name}’s household.`,
    'former schoolmistress': `${left.name} was ${right.name}’s schoolmistress.`,
    'Lowick parishioner': `${left.name} is a parishioner at ${right.name}’s Lowick living.`,
    'neighboring rector': `${left.name} is the neighboring rector in ${right.name}’s circle.`,
    'late sister married him': `${left.name} is connected to ${right.name} through her late sister’s marriage.`,
    'former attachment': `${left.name} had an earlier attachment to ${right.name} before coming to Middlemarch.`,
    'admires': `${left.name} openly admires ${right.name}.`,
    'employer & companion': `${left.name} employs ${right.name} as his companion at Stone Court.`,
    'master & servant': `${left.name} is ${right.name}’s master at Stone Court.`,
    'doctor & patient': `${left.name} is called on as ${right.name}’s doctor.`,
    'family doctor': `${left.name} is the established doctor for ${right.name}’s family.`,
    'successor in practice': `${left.name} takes over the practice that ${right.name} is leaving.`,
    'supports as chaplain': `${left.name} is backing ${right.name} for the hospital chaplaincy.`,
    'debt guaranteed by Caleb': `${left.name}’s debt has drawn ${right.name} into an unwelcome act of help.`,
    'horse deal & debt': `${left.name}’s dealings with ${right.name} are part of the money trouble surrounding his horse.`,
    'examines Fred’s horse': `${left.name} is brought in to examine ${right.name}’s horse.`,
    'auctioneer & adviser': `${left.name} is helping ${right.name} with the business of an estate sale.`,
    'buys Stone Court from': `${left.name} buys Stone Court from ${right.name}.`,
    'former associate & blackmailer': `${left.name} and ${right.name} share a troubled past that has returned as a threat.`,
    'nurse & patient': `${left.name} is engaged to nurse ${right.name}.`,
    'employed by': `${left.name} is employed by ${right.name}.`,
    'tenant & landlord': `${left.name} is one of ${right.name}’s tenants.`,
    'butler & master': `${left.name} is ${right.name}’s butler.`,
    'aunt & nephew': `${left.name} is ${right.name}’s aunt.`,
    'paternal grandmother & grandson': `${left.name} is ${right.name}’s paternal grandmother.`,
    'first wife & husband': `${left.name} was ${right.name}’s first wife.`,
    'hidden family connection revealed': `${left.name} and ${right.name} are linked by a family history that has only now come to light.`,
    'voter courted by': `${left.name} is one of the voters ${right.name} hopes to win over.`,
    'medical comparison': `${left.name} is a point of comparison in the local talk about ${right.name}’s medical work.`,
  };
  if (directed[label]) return directed[label];

  const shared = {
    'sisters': `${names} are sisters.`,
    'siblings': `${names} are siblings.`,
    'brothers': `${names} are brothers.`,
    'brother & sister': `${names} are brother and sister.`,
    'cousins': `${names} are cousins.`,
    'cousins / relatives': `${names} are related cousins.`,
    'widow & late husband': `${left.name} is the widow of ${right.name}.`,
    'initially courts': `${left.name} has been courting ${right.name}.`,
    'mother & son': `${left.name} is ${right.name}’s mother.`,
    'mother & daughter': `${left.name} is ${right.name}’s mother.`,
    'father & son': `${left.name} is ${right.name}’s father.`,
    'father & daughter': `${left.name} is ${right.name}’s father.`,
    'married': `${names} are married.`,
    'engaged': `${names} are engaged.`,
    'friends': `${names} are friends.`,
    'neighbors & friends': `${names} are neighbors and friends.`,
    'artist friends': `${names} are friends in Rome’s artistic circle.`,
    'professional rivals': `${names} are professional rivals.`,
    'medical colleagues': `${names} work in the same medical world.`,
    'fellow physicians': `${names} are fellow physicians.`,
    'former roommates': `${names} once shared rooms in Paris.`,
    'correspondents': `${names} are correspondents.`,
    'hospital board': `${names} meet through the hospital board.`,
    'civic opponents': `${names} are on opposing sides of a civic dispute.`,
    'social acquaintance': `${names} move in the same Middlemarch social circle.`,
    'town acquaintances': `${names} know one another through town life.`,
    'social rivals': `${names} compete for standing within Middlemarch society.`,
    'family connection': `${names} are related through the Featherstone family.`,
    'family friend': `${left.name} is a family friend of ${right.name}.`,
    'friends & allies': `${names} are friends and allies.`,
    'chaplaincy candidates': `${names} are on opposite sides of the contest for the hospital chaplaincy.`,
    'old school friends': `${names} knew one another at school.`,
    'musical acquaintance': `${names} know one another through music and Middlemarch society.`,
    'meets in Rome': `${names} meet briefly in Rome.`,
    'acquainted': `${names} are acquainted.`,
    'mentioned by Mary': `${left.name} appears in ${right.name}’s conversation about the clergy.`,
    'would-be suitor': `${left.name} hopes to marry ${right.name}.`,
    'estate business': `${names} are brought together by business over the Featherstone estate.`,
    'stepfather & stepson': `${left.name} is ${right.name}’s stepfather.`,
    'guest & cousin by marriage': `${left.name} is visiting as ${right.name}’s cousin by marriage.`,
    'son & principal heir': `${left.name} is ${right.name}’s son and principal heir.`,
    'exchange town news': `${names} trade the news that moves quickly through Middlemarch.`,
  };
  return shared[label] ?? `${names} have an established place in one another’s lives.`;
}

function profileAtChapter(person, chapter) {
  const detail = person.detail
    .replace(/\s*By Chapter \d+[^.]*\./gi, '')
    .replace(/;[^.]*by Chapter \d+[^.]*\./gi, '')
    .replace(/\s*Later [^.]*\./gi, '');

  if (person.id === 'dorothea') {
    return chapter < 20
      ? { role: 'Arthur Brooke’s elder niece', detail: 'The earnest elder of the two Brooke sisters, living at Tipton Grange with Celia under their uncle Arthur’s guardianship.' }
      : { role: 'Mrs Edward Casaubon', detail: 'Arthur Brooke’s earnest elder niece and Celia’s sister, now beginning married life with Edward Casaubon at Lowick.' };
  }
  if (person.id === 'casaubon') {
    return chapter < 20
      ? { role: 'Scholar and clergyman at Lowick', detail: 'A reserved scholar of religious history and owner of Lowick Manor, whose learning makes a strong impression on Dorothea Brooke.' }
      : { role: 'Dorothea’s husband; scholar at Lowick', detail: 'A reserved scholar of religious history, now married to Dorothea and living with her at Lowick.' };
  }
  if (person.id === 'will') {
    return chapter < 19
      ? { role: 'Edward Casaubon’s young cousin', detail: 'A lively young relation of Casaubon’s, who has only briefly met Dorothea before leaving England.' }
      : { role: 'Edward Casaubon’s young cousin', detail: 'A lively young relation of Casaubon’s, encountered again by Dorothea and Casaubon in Rome.' };
  }
  if (person.id === 'chettam') {
    return chapter < 5
      ? { role: 'Baronet at Freshitt Hall', detail: 'A considerate neighboring baronet who is drawn to Dorothea Brooke and often visits the Brooke household.' }
      : { role: 'Baronet at Freshitt Hall', detail: 'A considerate neighboring baronet at Freshitt Hall who remains close to the Brooke circle after Dorothea’s engagement.' };
  }
  if (person.id === 'celia') {
    return { role: 'Dorothea’s younger sister', detail: 'Dorothea’s affectionate younger sister, practical and observant in the Brooke household at Tipton Grange.' };
  }

  return { role: person.role.replace(/^Later\s+/i, ''), detail };
}

const relationshipTimelines = {
  'farebrother|mrs-farebrother': [
    { from: 17, text: 'Camden Farebrother supports his mother in the small St Botolph’s household. Their bond is affectionate, but it also explains why Farebrother has to think practically about money and dependents in ways the more comfortable clergy around him do not.' },
  ],
  'farebrother|winifred': [
    { from: 17, text: 'Winifred is Farebrother’s elder sister and part of the household he helps sustain. Their sibling relationship belongs to the quiet domestic responsibilities behind his public life as a clergyman and naturalist.' },
  ],
  'laure|lydgate': [
    { from: 15, text: 'Before coming to Middlemarch, Lydgate became intensely attached to Madame Laure, an actress he met in Paris after a violent accident on stage. His brief, impulsive pursuit ended when she left before he could propose, leaving it as a warning from his earlier life rather than a continuing relationship.' },
  ],
  'farebrother|trawley': [
    { from: 17, text: 'Trawley is Farebrother’s correspondent and a former Paris associate of Lydgate. Their letters bring Farebrother news of a wider world and help place Lydgate’s ambitions against the more practical choices of his old companions.' },
  ],
  'farebrother|tyke': [
    { from: 18, text: 'Farebrother and Tyke stand on opposite sides of the hospital chaplaincy contest. Their rivalry is public rather than personal: it brings different ideas of churchmanship, charity, and Bulstrode’s influence into the same local decision.' },
  ],
  'casaubon|dorothea': [
    { from: 1, to: 2, text: 'Dorothea first meets Edward Casaubon through her uncle’s Tipton circle. His grave learning and apparent dedication to a great scholarly task immediately answer her longing for a life of serious purpose.' },
    { from: 3, to: 4, text: 'Dorothea’s admiration of Casaubon is deepening. She reads his reserve and scholarship as signs of a mind devoted to important work, while the people around her see a far less romantic prospect.' },
    { from: 5, to: 9, text: 'Dorothea has accepted Edward Casaubon’s proposal. She believes that marriage will let her share in a life of learning and service, while Celia, Sir James, and the Cadwalladers worry that she is mistaking austerity for greatness.' },
    { from: 10, to: 19, text: 'Dorothea and Casaubon are engaged as the wedding approaches. Dorothea’s hopes remain fixed on the intellectual partnership she imagines, though the gap between her ideal and Casaubon’s temperament is already visible to others.' },
    { from: 20, to: 27, text: 'Dorothea and Casaubon are newly married and travelling in Italy. In Rome, Dorothea’s first hopes of sharing his intellectual work meet the more closed and solitary reality of his habits.' },
    { from: 28, to: 39, text: 'At Lowick, Dorothea tries to find a useful place in Casaubon’s life and work. Their marriage is increasingly shaped by his reserve and by her effort to understand what he needs from her.' },
    { from: 40, to: 47, text: 'Casaubon’s illness has made the atmosphere at Lowick more strained. Dorothea is devoted to caring for him, while his anxiety about his work and Will Ladislaw bears heavily on their marriage.' },
    { from: 48, text: 'Casaubon has died, and Dorothea is his widow. What he asked of her before his death still weighs on her as she tries to understand her new freedom.' },
  ],
  'celia|dorothea': [
    { from: 1, to: 4, text: 'Celia and Dorothea are sisters living under Arthur Brooke’s guardianship. Celia loves her elder sister, but sees the world more practically and notices things Dorothea tends to overlook.' },
    { from: 5, to: 27, text: 'Celia remains affectionate toward Dorothea, but worries about her marriage to Casaubon. Her practical concern gives her a different view of Dorothea’s choices without lessening her loyalty.' },
    { from: 28, to: 54, text: 'The sisters remain close, though they now inhabit very different households and circumstances. Celia’s affection is steady, and her directness offers Dorothea a counterweight to her own inwardness.' },
    { from: 55, text: 'Celia is married to Sir James Chettam, but her tie to Dorothea remains one of the book’s most intimate family bonds. She continues to care for her sister while looking at events with her usual clear-eyed practicality.' },
  ],
  'brooke|dorothea': [
    { from: 1, to: 4, text: 'Arthur is Dorothea’s uncle and guardian. He gives Dorothea and Celia a generous home at Tipton Grange, though he does not share Dorothea’s intensity of purpose.' },
    { from: 5, to: 27, text: 'Arthur remains Dorothea’s uncle and guardian, and has consented to her engagement and marriage to Casaubon despite worries from others in the family circle.' },
    { from: 28, text: 'Arthur remains an affectionate but easygoing uncle in Dorothea’s wider family world. His instinct is to avoid seriousness and conflict, which often leaves Dorothea to make her own difficult decisions.' },
  ],
  'brooke|celia': [
    { from: 1, to: 4, text: 'Arthur is Celia’s unmarried uncle and guardian. She lives with him at Tipton Grange, alongside her sister Dorothea.' },
    { from: 5, to: 54, text: 'Arthur is still Celia’s uncle and guardian. Celia remains part of his household and watches Dorothea’s marriage with more practical reserve than he does.' },
    { from: 55, text: 'Celia is now married and living at Freshitt, but Arthur remains her uncle and a continuing part of the extended Brooke and Chettam family circle.' },
  ],
  'brooke|casaubon': [
    { from: 1, to: 4, text: 'Arthur Brooke welcomes Casaubon as a learned neighbour and visiting scholar. He is pleased by the connection, though he is too easygoing to grasp how seriously Dorothea is beginning to take it.' },
    { from: 5, text: 'Casaubon becomes Arthur Brooke’s nephew by marriage. Arthur has accepted the match with his usual good nature, even when more perceptive friends raise doubts about it.' },
  ],
  'celia|chettam': [
    { from: 5, to: 22, text: 'Celia and Sir James know one another through the Brooke circle. After Dorothea chooses Casaubon, their quieter rapport begins to stand out more clearly.' },
    { from: 23, to: 54, text: 'Celia and Sir James are engaged. Their match grows out of familiarity and mutual good sense in the Brooke and Freshitt circle.' },
    { from: 55, text: 'Celia and Sir James are married, joining the Brooke and Freshitt households. Their domestic life gives Dorothea a nearby family refuge.' },
  ],
  'chettam|dorothea': [
    { from: 1, to: 4, text: 'Sir James Chettam is drawn to Dorothea and hopes to marry her. He is a close neighbour of the Brooke household, but Dorothea’s attention is directed elsewhere.' },
    { from: 5, to: 22, text: 'Sir James had hoped to marry Dorothea, but she has chosen Casaubon. He remains considerate toward her while the connection gradually becomes one of family rather than courtship.' },
    { from: 23, text: 'Sir James is Dorothea’s brother-in-law through Celia. He remains a considerate presence in her family circle rather than a suitor.' },
  ],
  'casaubon|chettam': [
    { from: 5, to: 22, text: 'Casaubon and Sir James are connected by Dorothea’s engagement. Sir James’s disappointment is restrained, but his earlier hopes for Dorothea make Casaubon’s place in the Brooke circle quietly uncomfortable.' },
    { from: 23, text: 'Sir James is now Casaubon’s brother-in-law through Celia. The old rivalry has given way to a family connection, though the contrast between the two men remains part of Dorothea’s world.' },
  ],
  'cadwallader|dorothea': [
    { from: 1, to: 4, text: 'Mrs Cadwallader is a friend of the Brooke household and an acute observer of Dorothea. She is fond of her, but quickly sees that Dorothea’s idealism may make her vulnerable to a bad choice.' },
    { from: 5, to: 27, text: 'Mrs Cadwallader is openly uneasy about Dorothea’s engagement and marriage to Casaubon. Her concern comes from affection and from a worldly understanding of what Dorothea is not seeing.' },
    { from: 28, text: 'Mrs Cadwallader remains one of the people able to speak plainly about Dorothea’s situation. Her wit can be sharp, but it is joined to real concern for Dorothea’s happiness.' },
  ],
  'cadwallader|celia': [
    { from: 1, text: 'Mrs Cadwallader knows Celia through the Brooke household. She recognises in Celia the same practical alertness that makes Celia quietly worried about Dorothea’s choices.' },
  ],
  'cadwallader|casaubon': [
    { from: 1, to: 4, text: 'Casaubon and the Cadwalladers are neighbouring figures in the Lowick and Tipton world. Mrs Cadwallader’s sharp social judgment gives her a very different view of Casaubon from Dorothea’s admiring one.' },
    { from: 5, text: 'After Casaubon’s engagement to Dorothea, the Cadwalladers remain near enough to see the consequences of the match. Their reserve comes from concern for Dorothea rather than closeness to Casaubon.' },
  ],
  'brooke|chettam': [
    { from: 1, to: 4, text: 'Arthur Brooke and Sir James Chettam are neighbouring gentlemen and easy friends. Sir James’s attentions to Dorothea make him a frequent guest at Tipton, while Arthur is pleased by his practical interest in the estate cottages.' },
    { from: 5, to: 54, text: 'Dorothea’s engagement to Casaubon ends Sir James’s hopes, but not his connection with Arthur Brooke. They remain neighbours whose friendship is sustained by local business, family visits, and Sir James’s growing place in the Brooke circle.' },
    { from: 55, text: 'Celia’s marriage to Sir James makes Arthur Brooke his father-in-law. Their old neighbourly friendship has become a close family connection.' },
  ],
  'chettam|lady-chettam': [
    { from: 6, to: 54, text: 'Lady Chettam is Sir James’s mother and the dignified mistress of Freshitt. She shares in the social concerns of her son’s household, though her gentler manner is very different from Mrs Cadwallader’s blunt judgment.' },
    { from: 55, text: 'Sir James’s marriage to Celia brings Lady Chettam a daughter-in-law and makes the Freshitt household part of the immediate Brooke family.' },
  ],
  'brooke|cadwallader': [
    { from: 1, to: 27, text: 'Arthur Brooke and Mrs Cadwallader are neighbouring friends, though she has far less patience with his vagueness than he has with her sharpness. She feels free to press him about Dorothea’s engagement because she knows how easily he avoids difficult decisions.' },
    { from: 28, to: 44, text: 'Their friendship continues through the Lowick and Freshitt circle. Mrs Cadwallader still treats Arthur’s good-natured indecision as a subject for practical interference and affectionate mockery.' },
    { from: 45, text: 'Arthur’s entry into the election gives Mrs Cadwallader fresh cause to worry about his judgment. Their old friendship remains, but she sees more clearly how readily he can be managed by people with stronger aims.' },
  ],
  'brooke|humphrey': [
    { from: 8, to: 44, text: 'Arthur Brooke knows Mr Cadwallader as the rector serving the Tipton and Freshitt neighbourhood. Their tie belongs to the ordinary local world of landlord, clergyman, visits, and parish business.' },
    { from: 45, text: 'Arthur’s political ambitions draw the neighbouring clergy and gentry more visibly into his affairs. Mr Cadwallader remains a familiar local connection rather than an adviser who shares Arthur’s political enthusiasm.' },
  ],
  'dorothea|tantripp': [
    { from: 4, to: 19, text: 'Tantripp is the maid who attends Dorothea and Celia at Tipton. Her household gossip sometimes brings Dorothea news she dislikes hearing, but it also shows how closely the servants have observed Sir James’s courtship.' },
    { from: 20, to: 47, text: 'Tantripp accompanies Dorothea into her married life and becomes a familiar, practical presence at Lowick. Dorothea can rely on her care even when she cannot easily speak of the trouble in her marriage.' },
    { from: 48, text: 'After Casaubon’s death, Tantripp remains Dorothea’s loyal attendant. Her plain, domestic concern provides a small but steady comfort while the household is altered by mourning.' },
  ],
  'celia|tantripp': [
    { from: 4, to: 54, text: 'Tantripp attends both Brooke sisters at Tipton and is especially willing to share the household’s news with practical-minded Celia. Their exchanges reveal Celia’s curiosity about the feelings and plans that Dorothea prefers not to discuss.' },
    { from: 55, text: 'Celia has her own household after marrying Sir James, but Tantripp remains associated with Dorothea and the altered Lowick household rather than with Celia’s daily life.' },
  ],
  'brooke|mrs-carter': [
    { from: 6, text: 'Mrs Carter belongs to Arthur Brooke’s Tipton household. Her appearance in Mrs Cadwallader’s errands gives a glimpse of the domestic machinery behind Arthur’s generous but loosely managed home.' },
  ],
  'casaubon|mrs-fitchett': [
    { from: 6, to: 19, text: 'Mrs Fitchett is one of Casaubon’s Lowick parishioners. His visit to her is a brief view of his clerical duties: he is formal and conscientious, while she answers him in the practical language of village life.' },
    { from: 20, to: 47, text: 'Dorothea’s marriage brings her into the parish world Casaubon has long inhabited. Mrs Fitchett remains one of the ordinary Lowick people whose needs make Dorothea wish to be useful.' },
    { from: 48, text: 'Casaubon is dead, but Mrs Fitchett remains part of the parish whose welfare Dorothea continues to take seriously as the widow at Lowick.' },
  ],
  'casaubon|tucker': [
    { from: 9, to: 19, text: 'Mr Tucker is Casaubon’s curate at Lowick. Casaubon introduces him to Dorothea as one of the working clergy who can guide her through the parish responsibilities she is about to enter.' },
    { from: 20, to: 47, text: 'Tucker continues as Casaubon’s curate while Dorothea tries to understand the practical life of Lowick. He represents the ordinary church work that proceeds alongside Casaubon’s private scholarship.' },
    { from: 48, text: 'Casaubon is dead, and Tucker’s connection with him belongs to the earlier Lowick household. The parish work itself continues beyond his former rector.' },
  ],
  'naumann|will': [
    { from: 19, to: 27, text: 'Naumann and Will are friends in Rome, moving in the same artistic and cosmopolitan circle. Naumann’s quick interest in Dorothea makes him an amused observer of the uneasy company around the Casaubons.' },
    { from: 28, text: 'Will’s friendship with Naumann belongs chiefly to the Roman episode. Naumann remains a reminder of the freer, more artistic world in which Will has made his own connections.' },
  ],
  'dorothea|naumann': [
    { from: 19, to: 27, text: 'Dorothea meets Naumann in Rome through Will. The painter is struck by her appearance and earnestness, but their acquaintance is brief and belongs to the Roman scene rather than to Dorothea’s settled life.' },
    { from: 28, text: 'Naumann’s meeting with Dorothea remains a memory of Rome: an outsider’s quick impression of her at a moment when she is beginning to feel the limits of her marriage.' },
  ],
  'casaubon|naumann': [
    { from: 19, to: 27, text: 'Casaubon meets Naumann in Rome through Will’s circle. The encounter places the reserved scholar beside a young artist and makes the contrast between Casaubon’s guarded habits and Will’s freer acquaintances more visible.' },
    { from: 28, text: 'Naumann’s contact with Casaubon is confined to Rome. It remains a brief episode in the larger strain between Casaubon and Will.' },
  ],
  'brooke|mawmsey': [
    { from: 45, to: 49, text: 'Arthur Brooke courts Mr Mawmsey’s support during the election. Their connection is political and local: Brooke needs the grocer’s influence, while Mawmsey weighs the promises and social standing of a candidate seeking the town’s votes.' },
    { from: 50, text: 'After the election, Mawmsey remains one of the Middlemarch tradesmen whose opinions helped show Arthur Brooke how little control a gentleman has once public politics is under way.' },
  ],
  'brooke|dagley': [
    { from: 39, to: 44, text: 'Mr Dagley is Arthur Brooke’s tenant, and their meeting makes the neglected condition of the Tipton estate impossible to ignore. Dagley speaks with the resentment of a man who has waited too long for repairs and fair attention.' },
    { from: 45, text: 'Dagley’s grievance remains part of the uncomfortable evidence against Arthur Brooke’s easygoing estate management. It matters especially once Arthur begins asking the public to trust his judgment.' },
  ],
  'brooke|mrs-dagley': [
    { from: 39, text: 'Mrs Dagley shares her husband’s precarious life on Arthur Brooke’s estate. Her presence gives the dispute over cottages a domestic reality: the landlord’s neglect is not an abstract question of management but a burden on the tenant family.' },
  ],
  'casaubon|pratt': [
    { from: 48, text: 'Pratt is Casaubon’s butler at Lowick, one of the servants who knew the household before Dorothea became its widow. After Casaubon’s death, his connection to his former master survives in the routines and memories of the changed house.' },
  ],
  'arthur-chettam|chettam': [
    { from: 55, text: 'Arthur Chettam is Sir James and Celia’s young son. His arrival makes Sir James not only Dorothea’s brother-in-law but the father of a new generation in the Brooke–Chettam family.' },
  ],
  'arthur-chettam|celia': [
    { from: 55, text: 'Arthur Chettam is Celia’s young son. Motherhood places Celia firmly in the Freshitt household while preserving the close family link that keeps Dorothea near her sister.' },
  ],
  'casaubon|julia': [
    { from: 28, to: 47, text: 'Julia Casaubon is Edward Casaubon’s late aunt, known in the story through the family history and the miniature that connects Lowick with Will Ladislaw’s past. Her memory matters because Casaubon treats that history as a question of family dignity and inheritance.' },
    { from: 48, text: 'Casaubon is dead, but Julia’s place in the family history remains important to the restrictions and discoveries that shape Dorothea and Will’s future.' },
  ],
  'julia|will': [
    { from: 28, to: 60, text: 'Julia Casaubon is Will Ladislaw’s paternal grandmother. She is already dead, but her family history and portrait make visible the kinship that ties Will to the Casaubons despite Edward’s hostility toward him.' },
    { from: 61, text: 'The fuller history of Will’s mother gives Julia’s connection to him a clearer place in the concealed family story. Her memory remains part of how Will’s inheritance and position are understood.' },
  ],
  'sarah-dunkirk|will': [
    { from: 61, text: 'Sarah Dunkirk Ladislaw is Will’s mother. The story of her departure from the Dunkirk household and her later life explains why Will’s family history has been hidden and why Bulstrode’s knowledge of it matters so much.' },
  ],
  'fred|mary': [
    { from: 12, to: 22, text: 'Fred and Mary have known one another since childhood. Fred is plainly attached to her, but Mary’s good sense makes her wary of his uncertainty and his expectations about money.' },
    { from: 23, to: 40, text: 'Fred’s attachment to Mary remains clear, but his money troubles and lack of settled purpose keep her from encouraging him. Mary wants him to become someone who can support himself honestly.' },
    { from: 41, to: 85, text: 'Fred is trying to prove himself worthy of Mary by changing the direction of his life. Their old affection is still present, but Mary’s consent depends on whether he can make a serious and useful future.' },
    { from: 86, text: 'Fred and Mary are engaged, with their long childhood attachment finally given a practical foundation.' },
  ],
  'lydgate|rosamond': [
    { from: 12, to: 35, text: 'Lydgate and Rosamond have begun to notice one another in Middlemarch society. Their attraction is growing, but they are not formally committed.' },
    { from: 36, to: 42, text: 'Lydgate and Rosamond are engaged. Their courtship has moved quickly from social attraction to a formal promise, despite the differences in what each expects from married life.' },
    { from: 43, to: 64, text: 'Lydgate and Rosamond are married. Their life together is beginning under financial pressure and with differences in taste, ambition, and judgment becoming harder to ignore.' },
    { from: 65, text: 'Lydgate and Rosamond remain married, but their financial difficulties and disagreements now put real strain on the household they imagined so differently.' },
  ],
  'bulstrode|harriet': [
    { from: 12, to: 52, text: 'Harriet and Nicholas Bulstrode are married. Harriet is Walter Vincy’s sister, making the Bulstrodes part of the wider Vincy family network.' },
    { from: 53, text: 'Harriet and Nicholas Bulstrode are married, but the return of a painful part of Nicholas’s past is beginning to affect the security of their household.' },
  ],
  'dorothea|will': [
    { from: 9, to: 18, text: 'Dorothea knows Will only as Casaubon’s lively young cousin, met briefly at Lowick. His presence is still peripheral to her life and her attention remains fixed on Casaubon and the coming marriage.' },
    { from: 19, to: 27, text: 'Dorothea encounters Will again in Rome. Their conversation is easy and sympathetic, but she understands him chiefly through his connection to Casaubon’s family.' },
    { from: 28, to: 47, text: 'Will’s visits to Lowick make him a more immediate part of Dorothea’s world. She values his liveliness and candour, while Casaubon’s uneasiness makes the connection increasingly difficult.' },
    { from: 48, to: 64, text: 'After Casaubon’s death, Dorothea and Will are free to speak more openly, but the conditions of Casaubon’s will and the pressure of public opinion complicate what they can mean to one another.' },
    { from: 65, to: 85, text: 'Dorothea and Will’s attachment has become clear to them, even as family expectations and the practical consequences of their choices stand in the way.' },
    { from: 86, text: 'Dorothea and Will are married. Their relationship has moved from a difficult family acquaintance to the central choice of Dorothea’s later life.' },
  ],
  'casaubon|will': [
    { from: 9, to: 19, text: 'Will is Casaubon’s younger cousin and a guest in his orbit. Casaubon treats him as an improvident young relation, while Will resists being defined by his cousin’s expectations.' },
    { from: 20, to: 27, text: 'In Rome, Casaubon is increasingly irritated by Will’s presence around Dorothea. What had been a strained family connection begins to carry a sharper personal tension.' },
    { from: 28, to: 47, text: 'Casaubon’s distrust of Will now affects both men and shadows Dorothea’s life at Lowick. Will’s independence and Casaubon’s need for control make ordinary family contact impossible.' },
    { from: 48, text: 'Casaubon is dead, but his restrictions on Dorothea’s future continue to shape Will’s position in the family story.' },
  ],
  'bulstrode|lydgate': [
    { from: 13, to: 17, text: 'Bulstrode sees promise in Lydgate’s reforming ambitions and supports his place at the New Hospital. Lydgate is willing to work with him because the hospital offers scope for serious medical work.' },
    { from: 18, to: 52, text: 'Bulstrode and Lydgate remain linked through the hospital, but their alliance is not simple. Bulstrode’s religious and civic authority has its own purposes, while Lydgate is determined to preserve professional independence.' },
    { from: 53, to: 68, text: 'Bulstrode’s private crisis makes his connection with Lydgate dangerous. Lydgate’s professional judgment is drawn into a situation whose moral and public consequences he cannot easily control.' },
    { from: 69, text: 'The scandal around Bulstrode has altered how Middlemarch sees both men. Their earlier hospital alliance is now entangled with suspicion, debt, and public judgment.' },
  ],
  'featherstone|mary': [
    { from: 12, to: 31, text: 'Mary is Peter Featherstone’s paid companion at Stone Court. She gives him practical care and frank company, while the household’s expectant relatives make her position delicate.' },
    { from: 32, to: 35, text: 'As Featherstone’s illness worsens, Mary is still the person who knows his daily habits best. His demands and the family’s watchfulness make her work increasingly uncomfortable.' },
    { from: 36, text: 'Featherstone is dead, and Mary’s long service at Stone Court has ended. The experience has left her with knowledge of the household that others can only speculate about.' },
  ],
  'featherstone|fred': [
    { from: 12, to: 34, text: 'Fred is one of the relations who expects Peter Featherstone’s money to shape his future. That expectation encourages his idleness and helps explain why Mary refuses to trust his promises too easily.' },
    { from: 35, text: 'Featherstone’s will has disappointed Fred’s expectations. The loss forces him to reckon with money, work, and Mary’s demand that he become independent.' },
  ],
  'featherstone|rosamond': [
    { from: 12, to: 34, text: 'Rosamond is connected to Featherstone through her mother’s family. Like the other relatives, she is aware that his money could affect the prospects of the Vincy household.' },
    { from: 35, text: 'Featherstone’s will has rearranged the expectations of his family. Rosamond’s connection to him remains a matter of family history rather than a source of the advantage others had imagined.' },
  ],
  'caleb|fred': [
    { from: 23, to: 40, text: 'Caleb guarantees Fred’s debt after the disastrous horse transaction. The help is generous but unwelcome to Fred, because it exposes the consequences of his idleness to Mary’s family.' },
    { from: 41, text: 'Fred’s effort to work with Caleb grows out of the earlier debt and his wish to become worthy of Mary. Caleb judges him by whether he can learn useful, steady work rather than by his old expectations.' },
  ],
  'farebrother|fred': [
    { from: 18, to: 39, text: 'Farebrother sees Fred as a likeable but unreliable young man. Their acquaintance is friendly, though Farebrother understands more clearly than Fred how much Mary’s good opinion requires a real change in him.' },
    { from: 40, text: 'Farebrother helps Fred not by flattering him, but by speaking honestly to Mary and by encouraging the more serious direction Fred is trying to take.' },
  ],
  'farebrother|mary': [
    { from: 40, to: 85, text: 'Farebrother comes to know Mary through his concern for Fred. He recognises her strength of judgment and speaks for Fred only because he believes Fred has begun to earn the trust Mary requires.' },
    { from: 86, text: 'Farebrother’s generous intervention has helped clear the way for Fred and Mary’s engagement, even though it asks him to set aside his own hopes.' },
  ],
  'lydgate|wrench': [
    { from: 11, to: 34, text: 'Wrench sees Lydgate as an ambitious newcomer competing for patients and influence in Middlemarch. Their rivalry is professional, but it also reflects the town’s unease with Lydgate’s newer medical ideas.' },
    { from: 35, text: 'The rivalry between Wrench and Lydgate continues as Lydgate’s personal troubles make his professional independence harder to sustain.' },
  ],
  'bulstrode|raffles': [
    { from: 53, to: 68, text: 'Raffles returns carrying knowledge of Bulstrode’s earlier life. Bulstrode’s fear is not simply of the man himself, but of the history Raffles can expose in Middlemarch.' },
    { from: 69, text: 'Raffles is dead, but Bulstrode’s conduct around his illness has made the old connection a source of public scandal rather than a private threat.' },
  ],
  'bulstrode|will': [
    { from: 61, text: 'Bulstrode learns that Will is tied to the family history he has long concealed. The connection is not a relationship of affection, but a revelation that changes what Will can know about his own inheritance.' },
  ],
  'mrs-vincy|vincy': [
    { from: 11, text: 'Walter and Lucy Vincy preside over a prosperous, sociable household. Walter’s commercial confidence and Lucy’s instinct for family comfort set the tone for the world Fred and Rosamond have grown up in.' },
  ],
  'fred|vincy': [
    { from: 11, to: 34, text: 'Walter Vincy treats Fred with the indulgence of a father who expects his son to settle into a respectable profession. Fred’s debts and uncertainty test that confidence, even before their full consequences are known.' },
    { from: 35, text: 'Fred’s disappointed expectations and money troubles make his relation with Walter more serious. His father’s help cannot substitute for the independent life Fred has yet to build.' },
  ],
  'rosamond|vincy': [
    { from: 11, to: 42, text: 'Rosamond is Walter Vincy’s cherished daughter, raised with the expectation of ease, taste, and a good marriage. Her father’s prosperity has shaped the standard of life she assumes is natural.' },
    { from: 43, text: 'Rosamond’s marriage to Lydgate places her father’s family resources and expectations under new pressure. Walter cares for her deeply, but cannot make the couple’s difficulties disappear.' },
  ],
  'fred|mrs-vincy': [
    { from: 11, text: 'Lucy Vincy is Fred’s affectionate, anxious mother. She is quick to excuse his shortcomings and hopes that family influence will smooth the path that Fred has made difficult for himself.' },
  ],
  'mrs-vincy|rosamond': [
    { from: 11, to: 42, text: 'Lucy Vincy takes pride in Rosamond’s accomplishments and refinement. Mother and daughter share a strong sense of what a graceful, comfortable life ought to look like.' },
    { from: 43, text: 'Rosamond’s marriage brings her mother into the practical anxieties of the Lydgate household. Lucy’s sympathy is genuine, though she cannot fully see the difference between Rosamond’s hopes and their means.' },
  ],
  'fred|rosamond': [
    { from: 11, text: 'Fred and Rosamond are siblings in the Vincy household. Rosamond’s poise and ambition contrast with Fred’s easygoing uncertainty, but both have been shaped by the family’s comfort and expectations.' },
  ],
  'harriet|vincy': [
    { from: 12, text: 'Harriet Bulstrode is Walter Vincy’s sister. Their sibling tie links the banker’s household to the Vincys and gives Bulstrode a family place in Middlemarch society.' },
  ],
  'bulstrode|vincy': [
    { from: 12, to: 52, text: 'Bulstrode and Walter Vincy are brothers-in-law through Harriet. The connection joins the banker’s religious and civic world to the more domestic, commercial Vincy circle.' },
    { from: 53, text: 'Bulstrode’s private crisis puts strain on every connection around him, including the ordinary family link he has long had with Walter Vincy.' },
  ],
  'mary|rosamond': [
    { from: 12, to: 42, text: 'Mary and Rosamond knew one another at school, but they have grown into very different young women. Rosamond values polish and social advantage; Mary’s sharper judgment is rooted in work and independence.' },
    { from: 43, text: 'Rosamond’s marriage and Mary’s ties to the Garth household make their old school friendship less central, but the contrast between their expectations of life remains clear.' },
  ],
  'caleb|susan': [
    { from: 23, text: 'Caleb and Susan Garth run their household as partners in usefulness. Caleb’s generous, energetic work is balanced by Susan’s practical intelligence and her clear sense of what the family can afford.' },
  ],
  'caleb|mary': [
    { from: 23, text: 'Caleb is Mary’s father, and their bond rests on mutual respect as much as affection. Mary shares his dislike of pretension and understands the value he places on honest, useful work.' },
  ],
  'mary|susan': [
    { from: 23, text: 'Susan is Mary’s mother and one of the people Mary trusts most. Their closeness is strengthened by Susan’s practical judgment, especially when Fred’s prospects become a question for the whole family.' },
  ],
  'farebrother|lydgate': [
    { from: 17, to: 52, text: 'Farebrother and Lydgate are friends across the church and medical worlds of Middlemarch. Farebrother appreciates Lydgate’s seriousness, while Lydgate finds in him a sympathetic observer of the town.' },
    { from: 53, text: 'As Lydgate’s difficulties deepen, Farebrother remains one of the few people able to see both his talent and the pressures closing around him.' },
  ],
  'lydgate|peacock': [
    { from: 11, text: 'Lydgate enters Middlemarch by paying for Peacock’s retiring practice. The arrangement gives him patients and a livelihood, but also places the ambitious newcomer within the older medical order he hopes to reform.' },
  ],
  'lydgate|toller': [
    { from: 15, text: 'Toller is one of the established medical men who meet Lydgate’s arrival with professional suspicion. Their rivalry is part of the resistance Lydgate faces when he tries to introduce new ideas.' },
  ],
  'lydgate|sprague': [
    { from: 15, text: 'Sprague is a senior physician of established local weight. Lydgate’s relation to him is formally collegial, but it makes clear the difference between Lydgate’s ambitions and Middlemarch’s settled professional hierarchy.' },
  ],
  'lydgate|minchin': [
    { from: 15, text: 'Minchin belongs to the medical circle against which Lydgate is measured. Their connection is less personal than professional: Middlemarch compares the new doctor’s methods and standing with those already in practice.' },
  ],
  'featherstone|lydgate': [
    { from: 12, to: 35, text: 'Lydgate attends the ailing Peter Featherstone at Stone Court. The case brings him into a household where illness, money, and family expectation are tightly bound together.' },
    { from: 36, text: 'Featherstone is dead, but Lydgate’s visits to Stone Court remain part of the experience through which he has learned how difficult medical judgment can become inside a divided family.' },
  ],
  'bulstrode|tyke': [
    { from: 13, to: 18, text: 'Bulstrode supports Walter Tyke for the hospital chaplaincy because Tyke represents the evangelical seriousness Bulstrode wants associated with the institution.' },
    { from: 19, text: 'Tyke’s candidacy has become part of the larger struggle over Bulstrode’s influence at the hospital. Their alliance remains a public sign of Bulstrode’s religious and civic aims.' },
  ],
  'bulstrode|joshua-rigg': [
    { from: 41, to: 52, text: 'Bulstrode buys Stone Court from Joshua Rigg Featherstone. The transaction gives Bulstrode a place in the aftermath of Featherstone’s estate and brings him into contact with the past Rigg’s household carries.' },
    { from: 53, text: 'Bulstrode’s connection with Rigg and Stone Court is now shadowed by Raffles and the history that Rigg’s household has helped bring back into view.' },
  ],
  'bulstrode|mrs-dunkirk': [
    { from: 61, text: 'Bulstrode’s first marriage belongs to the hidden history that is now being uncovered. The fact of Mrs Dunkirk changes the moral meaning of his later respectability and his connection to Will Ladislaw.' },
  ],
  'bulstrode|hackbutt': [
    { from: 18, to: 68, text: 'Hackbutt sits with Bulstrode on the New Hospital board, but distrusts the way Bulstrode’s religious and personal influence shapes its decisions. During the chaplaincy dispute, he argues for the board’s independence rather than simply following Bulstrode’s lead.' },
    { from: 69, text: 'After the scandal breaks, Hackbutt is among the townsmen prepared to challenge Bulstrode’s fitness for public office. Their old disagreement over influence has become a public question of character.' },
  ],
  'bulstrode|larcher': [
    { from: 18, to: 68, text: 'Larcher and Bulstrode meet through the New Hospital board. In the contest over the chaplaincy, Larcher favors Tyke’s stricter evangelical reputation, while the dispute exposes the different interests gathered around Bulstrode’s influence.' },
    { from: 69, text: 'Bulstrode’s public standing has collapsed into dispute. The ordinary business connection he had with Larcher is now overshadowed by the town’s judgment of him.' },
  ],
  'bulstrode|mrs-abel': [
    { from: 69, text: 'Bulstrode employs Mrs Abel and her husband at Stone Court while Raffles is ill. She follows the instructions given to her by Bulstrode, without understanding the private fear that makes his control of the sickroom so charged.' },
  ],
  'bulstrode|powderell': [
    { from: 18, to: 68, text: 'Powderell serves with Bulstrode on the hospital board and supports Tyke for chaplain from sincere evangelical conviction. He is part of the religiously minded support that gives Bulstrode weight in the dispute.' },
    { from: 69, text: 'The scandal around Bulstrode has made the hospital connection difficult to regard as merely charitable or religious. Powderell’s earlier support now belongs to a town reassessing Bulstrode’s authority.' },
  ],
  'bulstrode|hawley': [
    { from: 18, to: 44, text: 'Hawley and Bulstrode are opponents in Middlemarch civic life. At the hospital, Hawley resists the attempt to displace Farebrother for Tyke and speaks bluntly against the influence Bulstrode is able to exert.' },
    { from: 45, to: 68, text: 'Hawley remains one of Bulstrode’s sharpest civic antagonists. Their quarrel is political and personal as well as religious: Hawley distrusts Bulstrode’s moral authority and resents his dominance in public affairs.' },
    { from: 69, text: 'Hawley publicly confronts Bulstrode with the accusations brought into the town by Raffles’s story and calls on him to withdraw from his public positions. Their long opposition reaches its most damaging form.' },
  ],
  'captain-lydgate|lydgate': [
    { from: 58, text: 'Captain Lydgate is Tertius’s fashionable cousin and an unwelcome visitor to the Lydgate house. Tertius finds him vapid and resents the social performance of the visit, while Rosamond enjoys the connection to her husband’s titled family.' },
  ],
  'gambit|lydgate': [
    { from: 45, to: 68, text: 'Gambit is an established local practitioner whose patients hear distorted versions of Lydgate’s views on medicine. He regards the newcomer warily, as Lydgate’s refusal to dispense drugs is taken as a criticism of older practice.' },
    { from: 69, text: 'As suspicion gathers around Lydgate, the contrast with established men such as Gambit becomes harsher in public talk. Gambit’s secure local reputation forms part of the standard against which Lydgate is judged.' },
  ],
  'lydgate|laure': [
    { from: 15, text: 'Before coming to Middlemarch, Lydgate became intensely attached to Madame Laure, an actress he met in Paris after a violent accident on stage. His brief, impulsive pursuit ended when she left before he could propose, leaving it as a warning from his earlier life rather than a continuing relationship.' },
  ],
  'lydgate|sir-godwin': [
    { from: 36, to: 57, text: 'Sir Godwin is Lydgate’s titled uncle and former guardian. Lydgate treats the family connection casually, while Rosamond sees it as a promise of social standing and possible support for their new marriage.' },
    { from: 58, to: 64, text: 'As the Lydgates’ money troubles deepen, Rosamond hopes Sir Godwin will help. Lydgate resists making an appeal, because he has long wanted to stand on his own rather than live by family patronage.' },
    { from: 65, text: 'Sir Godwin refuses the financial help Rosamond has sought without Lydgate’s knowledge. His blunt letter makes clear that he considers Tertius responsible for his own professional choices and debts.' },
  ],
  'lydgate|trawley': [
    { from: 17, text: 'Trawley was Lydgate’s former roommate in Paris. Their remembered debates about reform and the medical profession help show Lydgate’s early confidence that he can improve medicine from within, even though Trawley has taken a very different path.' },
  ],
  'mrs-vincy|pritchard': [
    { from: 11, text: 'Pritchard is one of the servants who keeps the Vincy household running under Mrs Vincy’s direction. When Fred sleeps through the morning, Mrs Vincy sends Pritchard repeatedly to get him up, a small glimpse of her anxious indulgence of her son.' },
  ],
  'miss-morgan|mrs-vincy': [
    { from: 11, text: 'Miss Morgan is employed by Mrs Vincy as governess to the younger girls. The arrangement belongs to the comfortable, carefully managed domestic world that Mrs Vincy values, even though Rosamond finds the governess dull.' },
  ],
  'mrs-lemon|rosamond': [
    { from: 11, text: 'Rosamond remembers Mrs Lemon as the head of the county school where she was the exemplary pupil. The school connection helps explain Rosamond’s polished accomplishments and her confidence in the social standards she has learned.' },
  ],
  'featherstone|jane-waule': [
    { from: 12, to: 34, text: 'Jane Waule is Featherstone’s widowed sister and one of the relatives gathered around Stone Court. Their family tie is inseparable from the household’s expectation that his money may eventually be divided among them.' },
    { from: 35, text: 'Featherstone is dead, and Jane Waule must face the will with the rest of the disappointed family. The closeness claimed at Stone Court is exposed as having been shadowed by inheritance.' },
  ],
  'featherstone|solomon': [
    { from: 12, to: 34, text: 'Solomon Featherstone is Peter’s brother and part of the family circle waiting on events at Stone Court. Their brotherhood is present in the claims and resentments that gather around Peter’s wealth.' },
    { from: 35, text: 'After Peter Featherstone’s death, Solomon’s old family claim has no special force against the will. The brothers’ connection now survives chiefly in the family’s resentment at the outcome.' },
  ],
  'featherstone|john-waule': [
    { from: 14, to: 34, text: 'John Waule is Featherstone’s nephew and a regular visitor at Stone Court. Featherstone treats him as useful family material and encourages the possibility of a match with Mary, without attending much to Mary’s own wishes.' },
    { from: 35, text: 'Featherstone’s death ends the authority he exercised over John Waule’s prospects at Stone Court. John remains one of the family who have to adjust their hopes to the will.' },
  ],
  'featherstone|simmons': [
    { from: 14, to: 34, text: 'Simmons is Featherstone’s servant at Stone Court, carrying messages and practical errands through a tense household. His service places him close to the daily disorder of Featherstone’s illness without giving him any share in the family’s expectations.' },
    { from: 35, text: 'Featherstone is dead, and Simmons’s service at Stone Court passes into the unsettled aftermath of the household and estate.' },
  ],
  'featherstone|mrs-vincy': [
    { from: 11, to: 34, text: 'Peter Featherstone had married Lucy Vincy’s late sister, so Mrs Vincy’s family has a long-standing interest in Stone Court. The connection feeds the Vincy hope that Featherstone’s money may improve Fred’s and Rosamond’s prospects.' },
    { from: 35, text: 'Featherstone’s will frustrates the advantage the Vincys had associated with Lucy’s family connection. The relationship remains one of kinship, but no longer of useful expectation.' },
  ],
  'john-waule|mary': [
    { from: 14, to: 34, text: 'John Waule knows Mary through Stone Court and is treated by Featherstone as a plausible match for her. Mary receives his attention without encouragement: she sees that Featherstone’s plans and John’s solid respectability do not make him the husband she wants.' },
    { from: 35, text: 'After Featherstone’s death, the Stone Court setting that brought John Waule and Mary together has lost its hold. Mary’s refusal to shape her future around the household’s calculations remains clear.' },
  ],
  'vincy|wrench': [
    { from: 11, text: 'Mr Wrench is the Vincys’ established doctor, called into the household when Fred’s illness becomes worrying. His professional place in the family is secure, even as Lydgate’s arrival makes the medical world around the Vincys more competitive.' },
  ],
  'chichely|rosamond': [
    { from: 10, to: 35, text: 'Mr Chichely openly admires Rosamond in the Middlemarch social circle. His attentions confirm her local desirability, but they do not satisfy Rosamond’s more ambitious idea of the marriage she wants.' },
    { from: 36, text: 'Rosamond’s engagement to Lydgate closes the possibility of Chichely as a suitor. His admiration belongs to the earlier social world from which she has chosen to move on.' },
  ],
  'standish|vincy': [
    { from: 10, text: 'Mr Standish belongs to the easy, prosperous company received by the Vincys. His presence helps establish Walter Vincy’s household as a familiar centre of Middlemarch sociability rather than as an intimate personal bond.' },
  ],
  'renfrew|vincy': [
    { from: 10, text: 'Mrs Renfrew is one of the guests in the Vincy social world. Her connection with the family is the ordinary acquaintance of visits, dinners, and the town’s circulating judgments.' },
  ],
  'crowse|mary': [
    { from: 14, text: 'Mary invokes Mr Crowse while teasing Fred about the clergy. He matters to her and Fred only as a pointed example in their conversation: Mary uses the respectable curate to expose how little Fred has yet made a serious vocation of his own.' },
  ],
  'bowyer|rosamond': [
    { from: 16, text: 'Mr Bowyer is known to Rosamond through Middlemarch music and society. Their acquaintance belongs to the cultivated social setting in which Rosamond displays the accomplishments she expects to matter in her future.' },
  ],
  'ben|caleb': [
    { from: 24, text: 'Ben is Caleb Garth’s young son. Their relation is affectionate and practical: Caleb’s life of work and usefulness forms the ordinary standard against which the children are being raised.' },
  ],
  'ben|susan': [
    { from: 24, text: 'Ben is Susan Garth’s young son. Susan manages his schooling and behaviour with the same firm good sense that steadies the whole Garth household.' },
  ],
  'caleb|letty': [
    { from: 24, text: 'Letty is Caleb Garth’s young daughter. Her place in the busy Garth home shows the domestic responsibility behind Caleb’s determination to find and keep useful work.' },
  ],
  'letty|susan': [
    { from: 24, text: 'Letty is Susan Garth’s young daughter. Susan’s patient, practical care makes her the centre of the children’s daily life and education.' },
  ],
  'ben|mary': [
    { from: 24, text: 'Ben and Mary are siblings in the Garth household. Mary’s return from Stone Court puts her again among the younger children, and her clear-eyed affection fits naturally into the family’s lively, work-filled home.' },
  ],
  'letty|mary': [
    { from: 24, text: 'Letty and Mary are sisters. Mary’s practical competence and warmth make her an older-sister presence in the Garth household, where the younger children’s lessons and daily needs are never far away.' },
  ],
  'alfred|caleb': [
    { from: 40, text: 'Alfred is Caleb Garth’s son, being prepared for an engineering career. Caleb’s pride in the plan reflects his belief that a young man should have skilled, useful work to do.' },
  ],
  'alfred|susan': [
    { from: 40, text: 'Alfred is Susan Garth’s son. His education and future are part of the careful household economy that Susan helps Caleb maintain.' },
  ],
  'caleb|christy': [
    { from: 40, text: 'Christy is Caleb Garth’s scholarly son, studying economically in Scotland. Caleb supports the learning that suits Christy, while remaining attentive to the cost and practical future of each child.' },
  ],
  'christy|susan': [
    { from: 40, text: 'Christy is Susan Garth’s son. Susan shares Caleb’s concern that his education should be pursued sensibly within what the family can afford.' },
  ],
  'fred|susan': [
    { from: 24, to: 40, text: 'Susan Garth knows Fred as Mary’s old friend and sees plainly what his unsteady habits could cost Mary. Her concern is protective rather than unkind: she wants proof that Fred can support a life with Mary before trusting his declarations.' },
    { from: 41, text: 'As Fred begins working with Caleb, Susan has reason to judge him by effort rather than promise. Her approval remains cautious, but his new seriousness gives the Garth family grounds to take him more seriously.' },
  ],
  'caleb|farebrother': [
    { from: 40, text: 'Caleb Garth and Farebrother become connected through their concern for Fred and Mary. Both value useful character over display, and Farebrother’s candid intervention respects Caleb’s right to judge whether Fred has really changed.' },
  ],
  'ned-plymdale|rosamond': [
    { from: 27, to: 35, text: 'Ned Plymdale is put forward in Middlemarch as a suitable, prosperous match for Rosamond. Rosamond finds him socially acceptable but uninteresting; her imagination is already fixed on the more distinguished future she associates with Lydgate.' },
    { from: 36, text: 'Rosamond’s engagement to Lydgate ends Ned Plymdale’s position as a possible match. He remains an example of the comfortable local marriage she has chosen not to make.' },
  ],
  'mrs-plymdale|mrs-vincy': [
    { from: 16, text: 'Mrs Plymdale and Mrs Vincy meet as rival mothers in Middlemarch society, alert to one another’s daughters, sons, clothes, and prospects. Their friendliness is real enough, but it is sharpened by the town’s quiet competition over status and marriage.' },
  ],
  'bambridge|fred': [
    { from: 23, to: 34, text: 'Bambridge draws Fred into horse-dealing, billiards, and debt. The association flatters Fred’s taste for easy excitement but leaves him owing money he cannot meet, with consequences that fall heavily on the Garths.' },
    { from: 35, text: 'The debt linked with Bambridge has been paid at painful cost. Fred’s connection with him now stands as part of the careless life Fred must leave behind if he is to deserve Mary’s trust.' },
  ],
  'fred|horrock': [
    { from: 23, to: 34, text: 'Horrock, the veterinary surgeon, is involved in the horse transaction that helps expose Fred’s financial recklessness. Fred looks to the horse trade for a quick advantage, but the arrangement proves another source of trouble rather than a solution.' },
    { from: 35, text: 'The horse affair is over, but Horrock’s part in it remains a reminder of the speculative habits Fred is trying to outgrow.' },
  ],
  'featherstone|trumbull': [
    { from: 32, to: 35, text: 'Borthrop Trumbull is an auctioneer and appraiser brought into the orbit of Featherstone’s property as the end at Stone Court approaches. His practical interest in the effects and estate makes visible how many people are already looking beyond the sick man to what may be disposed of.' },
    { from: 36, text: 'After Featherstone’s death, Trumbull’s connection to him belongs to the administration and sale of the property left behind at Stone Court.' },
  ],
  'featherstone|joshua-rigg': [
    { from: 35, text: 'Joshua Rigg Featherstone is revealed at Peter Featherstone’s death as his unacknowledged son and principal heir. The disclosure overturns the expectations of the relations who had treated Stone Court as a family prize.' },
  ],
  'captain-lydgate|rosamond': [
    { from: 58, text: 'Captain Lydgate is Tertius’s fashionable cousin and a guest in the Lydgate household. Rosamond is drawn to the social distinction he represents, while the visit makes the gap between her expectations and the couple’s finances more painful.' },
  ],
};

function characterRecap(person, chapter) {
  if (person.id === 'mrs-farebrother') return 'Mrs Farebrother is Camden Farebrother’s lively, sharp-eyed mother and part of the small household he supports. Her domestic world gives context to the financial responsibilities behind her son’s work and his need for a better living.';
  if (person.id === 'winifred') return 'Winifred Farebrother is Camden’s elder sister, an unmarried member of the household he helps maintain. Her quiet presence belongs to the family obligations that make Farebrother’s choices of work, money, and marriage more complicated than they first appear.';
  if (person.id === 'miss-noble') return 'Miss Noble is Mrs Farebrother’s gentle, tiny sister and Camden’s aunt. Cared for by Winifred, she is part of the affectionate but economically constrained household that Camden Farebrother sustains.';
  if (person.id === 'dorothea') {
    if (chapter <= 2) return 'Dorothea is at Tipton Grange with Celia and their uncle Arthur Brooke. She is impatient with ordinary pleasures and looking for a life in which her intelligence and sympathy can be given to serious purpose.';
    if (chapter <= 4) return 'Dorothea’s admiration for Casaubon is growing. She imagines his scholarship as the work of a great mind and begins to see marriage to him as a path into the useful, disciplined life she wants.';
    if (chapter <= 19) return 'Dorothea is engaged to Casaubon and preparing to leave the Brooke household. She is convinced that marriage will allow her to share in his work, despite the doubts of Celia and the people who care for her.';
    if (chapter <= 27) return 'Dorothea is newly married and travelling with Casaubon in Italy. The Rome chapters begin to test the generous intellectual partnership she had imagined, as she finds his inner life more closed than she expected.';
    if (chapter <= 39) return 'Dorothea is living at Lowick and trying to make herself useful in Casaubon’s parish and work. Her longing to help remains strong, but her marriage gives her less companionship and purpose than she had hoped.';
    if (chapter <= 47) return 'Dorothea is caring for the ill Casaubon at Lowick. His anxiety about his work and his suspicion of Will Ladislaw make her household life increasingly constrained and painful.';
    if (chapter <= 64) return 'Dorothea is Casaubon’s widow. She is trying to understand the freedom and obligations left to her, while the memory of Casaubon’s final wishes complicates her feelings about Will Ladislaw.';
    if (chapter <= 85) return 'Dorothea’s attachment to Will has become central to her life, but it must contend with family pressure, public opinion, and the practical consequences of the choice she is considering.';
    return 'Dorothea is married to Will Ladislaw. Her later life has taken the direction of affection and purpose that she could not find in her marriage to Casaubon.';
  }
  if (person.id === 'celia') {
    if (chapter <= 4) return 'Celia lives at Tipton Grange with Dorothea and their uncle Arthur Brooke. She loves her sister deeply, but her good sense makes her notice the ordinary human realities that Dorothea’s ideals can miss.';
    if (chapter <= 22) return 'Celia is watching Dorothea’s engagement to Casaubon with growing unease. She cannot share Dorothea’s reverence for him, yet her loyalty keeps her concern quiet and affectionate rather than hostile.';
    if (chapter <= 54) return 'Celia’s own understanding with Sir James Chettam has grown out of long familiarity in the Brooke and Freshitt circle. She remains close to Dorothea, but sees her sister’s marriage and unhappiness more plainly than Dorothea does.';
    if (chapter <= 64) return 'Celia is married to Sir James and settled at Freshitt. Her domestic happiness gives Dorothea a nearby family refuge, while Celia remains the sister most willing to say what she sees.';
    return 'Celia is established in her life at Freshitt with Sir James and their child. Her affection for Dorothea has never depended on sharing her sister’s ideals: it is steadier, more practical, and often more perceptive.';
  }
  if (person.id === 'brooke') {
    if (chapter <= 4) return 'Arthur Brooke is the easygoing uncle and guardian of Dorothea and Celia at Tipton Grange. He is generous, sociable, and full of half-formed opinions, but rarely equipped for the firmness that his nieces’ lives sometimes require.';
    if (chapter <= 22) return 'Arthur has allowed Dorothea’s engagement and marriage to Casaubon to go forward. He is fond of his niece and pleased by the connection, but he has not seriously reckoned with the misgivings voiced by the people who know her best.';
    if (chapter <= 38) return 'With Dorothea settled at Lowick and Celia moving toward marriage with Sir James, Arthur remains at the centre of an altered Brooke family. His goodwill remains real, though he still tends to evade the difficult practical consequences of his decisions.';
    if (chapter <= 44) return 'Arthur’s neglected estate is becoming harder to treat as an abstraction. The anger of tenants such as Dagley exposes the gap between his benevolent intentions and the actual condition of the people who depend on him.';
    if (chapter <= 50) return 'Arthur has entered the Middlemarch election with more confidence than judgment. His candidacy makes his habits of vagueness and second-hand political opinion public, and the campaign brings him an uncomfortable education in local feeling.';
    return 'Arthur has withdrawn from the political ambitions that exposed his limitations. He remains an affectionate uncle and a familiar figure in the Brooke–Chettam circle, more comfortable with family sociability than with decisive responsibility.';
  }
  if (person.id === 'casaubon') {
    if (chapter <= 2) return 'Edward Casaubon is the grave Lowick clergyman whom Dorothea meets in Arthur Brooke’s Tipton circle. His scholarly seriousness and reserve immediately seem to her to promise the purposeful life she has been seeking.';
    if (chapter <= 4) return 'Casaubon is returning Dorothea’s admiration, though his manner remains formal and guarded. Their conversations let Dorothea imagine a partnership in great intellectual work, while others see the difference between her hopes and his temperament.';
    if (chapter <= 19) return 'Casaubon is engaged to Dorothea. He accepts her devotion, but the engagement already rests on very different expectations: she imagines shared work and moral purpose, while he remains absorbed in his private scholarly project.';
    if (chapter <= 27) return 'Newly married, Casaubon is travelling with Dorothea in Italy. Rome reveals how little room there is in his inner life for the companionship she expected, and his discomfort around Will Ladislaw begins to sharpen.';
    if (chapter <= 39) return 'At Lowick, Casaubon has returned to the lifelong labour of his Key to All Mythologies. His reserve, his uncertainty about his work, and his jealousy of Will leave Dorothea increasingly isolated within the marriage.';
    if (chapter <= 47) return 'Casaubon is seriously ill at Lowick. Fear that his work will remain unfinished, and suspicion about Dorothea and Will, make him anxious to control what may happen after his death.';
    return 'Casaubon has died. His will and his final demand of Dorothea continue to shape the choices of the people he leaves behind, especially in the question of Will Ladislaw.';
  }
  if (person.id === 'chettam') {
    if (chapter <= 4) return 'Sir James Chettam is the considerate neighbouring baronet at Freshitt. He is strongly drawn to Dorothea and tries to meet her through the practical reforms she cares about, especially the cottages on Arthur Brooke’s estate.';
    if (chapter <= 22) return 'Dorothea’s choice of Casaubon has ended Sir James’s hopes, but not his kindness toward the Brooke household. His disappointed affection gradually gives way to a quieter place in the family circle, particularly beside Celia.';
    if (chapter <= 54) return 'Sir James is engaged to Celia. Their match has grown from neighbourly familiarity and mutual good sense, giving him a secure place in the Brooke family without the strain and idealisation that attended his hopes for Dorothea.';
    if (chapter <= 64) return 'Sir James is married to Celia and settled at Freshitt. He remains a considerate brother-in-law to Dorothea, while his household offers a steadier, more ordinary form of family life than the one she knew at Lowick.';
    return 'Sir James is established at Freshitt with Celia and their child. His loyalty to the Brooke family remains practical and unobtrusive, even when Dorothea’s later choices test the expectations of the people around her.';
  }
  if (person.id === 'will') {
    if (chapter <= 18) return 'Will Ladislaw is Casaubon’s young cousin, briefly met by Dorothea at Lowick. He is lively, independent-minded, and already restless under the patronising terms on which Casaubon is willing to recognise him.';
    if (chapter <= 27) return 'Will is in Rome among friends from a freer, artistic world. His renewed meetings with Dorothea are easy and sympathetic, but Casaubon’s irritation makes the family connection increasingly tense.';
    if (chapter <= 39) return 'Will has returned to Middlemarch and is finding a role beyond Casaubon’s patronage, including work connected with Arthur Brooke’s political interests. He is drawn toward Dorothea, but has to reckon with the constraint her marriage places on every meeting.';
    if (chapter <= 47) return 'Will is becoming a more visible figure in Middlemarch through the Pioneer and the election, while Casaubon’s distrust makes his contact with Dorothea difficult. He is trying to build an independent life without pretending that his feelings for her are unimportant.';
    if (chapter <= 60) return 'After Casaubon’s death, Will and Dorothea can no longer be treated simply as relatives in the Lowick household. The conditions attached to Casaubon’s will and the weight of public opinion make their connection more painful and more consequential.';
    if (chapter <= 71) return 'Will is learning more about the concealed history of his family and about the forces shaping his position in Middlemarch. His attachment to Dorothea remains central, but he is unwilling to let her sacrifice herself merely to satisfy his wishes.';
    if (chapter <= 85) return 'Will and Dorothea understand what they mean to one another, but family expectation, money, and reputation stand between them. His future depends on accepting a life built by his own work rather than by Casaubon’s family connection.';
    return 'Will is married to Dorothea. Their life together follows the affection and shared purpose that had been obstructed for so much of the novel.';
  }
  if (person.id === 'vincy') {
    if (chapter <= 12) return 'Walter Vincy is the prosperous manufacturer at the centre of a sociable Middlemarch household. He is pleased by the assurance of his daughter Rosamond and expects his son Fred to make a respectable career in the Church.';
    if (chapter <= 22) return 'Walter Vincy continues to take his family’s comfort and prospects for granted. Fred’s easy habits and money troubles have begun to trouble the confidence with which he has planned his son’s future.';
    if (chapter <= 35) return 'Walter is confronting the cost of Fred’s debts and the collapse of the inheritance on which the family had quietly counted. He wants Fred to become steady, but finds it hard to combine fatherly anger with affection.';
    if (chapter <= 52) return 'Walter Vincy’s household is being pulled in two directions: Fred must find a real footing after Featherstone’s will, while Rosamond’s marriage brings Lydgate into the family. Walter’s prosperity still gives him social standing, but it cannot settle either child’s future for them.';
    if (chapter <= 70) return 'Walter is drawn into the strain surrounding Rosamond and Lydgate’s finances, while Fred is trying to make a more useful life for himself. He remains the practical, comfortable father whose assumptions the younger generation are learning to outgrow.';
    return 'Walter sees Fred establish himself in useful work and watches Rosamond’s marriage survive a difficult period. His family has not followed the easy course he expected, but the Vincy household remains an important centre of affection and support.';
  }
  if (person.id === 'mrs-vincy') {
    if (chapter <= 12) return 'Lucy Vincy presides warmly over her comfortable home and takes pride in Rosamond’s accomplishments. She dotes on Fred and is inclined to see his charm before she sees the risks in his conduct.';
    if (chapter <= 22) return 'Lucy is anxious about Fred’s immediate prospects but still hopes that family influence and Featherstone’s money will make matters easier. She is also pleased by the attention Rosamond receives in Middlemarch society.';
    if (chapter <= 35) return 'The loss of Fred’s expected inheritance makes Lucy’s maternal hope look less secure. She feels his disappointments keenly and prefers to soften the family’s judgments of him whenever she can.';
    if (chapter <= 52) return 'Lucy is delighted by Rosamond’s marriage to Lydgate, which seems to fulfill the graceful future she has imagined for her daughter. At the same time, Fred’s new need to work tests her faith that he will be looked after.';
    if (chapter <= 70) return 'Lucy worries through Fred’s illness and Rosamond’s unhappiness with an intense motherly tenderness. She cannot cure the practical troubles around her children, but her first instinct is always to comfort and defend them.';
    return 'Lucy sees Fred grow more dependable and remains devoted to Rosamond through the altered circumstances of her marriage. Her affection is constant even where her hopes for her children have had to change.';
  }
  if (person.id === 'rosamond') {
    if (chapter <= 12) return 'Rosamond is the admired, highly accomplished daughter of the Vincy household. She measures life by refinement and romance, and begins to notice in Lydgate the kind of distinguished outsider who suits her private ideal.';
    if (chapter <= 22) return 'Rosamond is carefully encouraging Lydgate’s attention while preserving the appearance of perfect composure. Her interest in him is bound up with an imagined life of elegance, distinction, and escape from ordinary Middlemarch limitations.';
    if (chapter <= 32) return 'Rosamond’s attachment to Lydgate has become a formal engagement. She is certain of the happiness and social elevation the marriage will bring, without seeing how little they have yet understood one another.';
    if (chapter <= 45) return 'Rosamond is newly married and finding that the practical realities of Lydgate’s work and income do not match the polished life she expected. She tries to preserve her own idea of comfort rather than share his anxieties.';
    if (chapter <= 58) return 'The Lydgates’ financial distress has made Rosamond increasingly isolated from her husband. She wants security and beauty, while Lydgate feels pressed by obligations she cannot bring herself to treat as their common problem.';
    if (chapter <= 70) return 'Rosamond is deeply unhappy in her marriage and susceptible to the attention that offers her a more flattering view of herself. The household’s debt and Lydgate’s damaged reputation make the gap between her hopes and her life painfully clear.';
    if (chapter <= 83) return 'Rosamond has been forced to see more of Lydgate’s struggle and of her own part in their estrangement. She begins, unevenly and reluctantly, to choose the preservation of their marriage over the romantic self-image she has defended.';
    return 'Rosamond remains with Lydgate after a hard-won reconciliation. Their future is not the grand, effortless life she imagined, but she has learned something of loyalty and compromise.';
  }
  if (person.id === 'fred') {
    if (chapter <= 12) return 'Fred Vincy is an easygoing young man, expected to enter the Church but more absorbed by pleasure, debts, and his attachment to Mary Garth. He trusts too much in the inheritance he expects from Featherstone.';
    if (chapter <= 22) return 'Fred’s debts and his careless dealings over a horse have put other people at risk, especially Caleb Garth. His feelings for Mary are sincere, but he has not yet earned the steadiness she requires from him.';
    if (chapter <= 35) return 'Featherstone’s will has disappointed Fred’s expectations and made his lack of a profession impossible to ignore. He is humiliated by the consequences of his past carelessness, but the shock begins to make real change conceivable.';
    if (chapter <= 45) return 'Fred has turned away from the Church and is trying to learn the practical work of land agency under Caleb Garth. His progress is slow and sometimes humiliating, yet it is the first direction he has chosen for himself rather than inherited.';
    if (chapter <= 57) return 'Fred is working toward the competence that might make him worthy of Mary. He remains affectionate and impulsive, but his persistence with Caleb’s work is replacing the old reliance on luck and expectation.';
    if (chapter <= 70) return 'Fred’s illness and the uncertainty of his prospects test both his patience and the people who care for him. As he recovers, his intention to make a useful livelihood becomes more solid than his earlier promises ever were.';
    if (chapter <= 83) return 'Fred has proved himself capable in the work Caleb taught him and can now offer Mary something more dependable than hope. Their understanding rests on his changed character, not on Featherstone’s money.';
    return 'Fred marries Mary and establishes himself as a capable land agent. He has grown from an indulged young man into someone whose work and constancy answer the doubts Mary and the Garths once had.';
  }
  if (person.id === 'harriet') {
    if (chapter <= 22) return 'Harriet Bulstrode is Walter Vincy’s sister and Nicholas Bulstrode’s wife. She gives the banker a domestic place in the wider Vincy family, though she is not a force in the public religious and hospital disputes that occupy him.';
    if (chapter <= 52) return 'Harriet remains the quiet family connection between the Bulstrodes and Vincys. From inside the household, she knows Bulstrode as a husband and respected man of religion, not through the private history that is beginning to threaten him.';
    if (chapter <= 64) return 'Bulstrode’s past has broken into public view, leaving Harriet shocked and wounded by what she has learned about her husband. Her suffering is private and real: the scandal reaches her through the man she trusted and through the family name she shares.';
    return 'Harriet stays with Bulstrode after the scandal, choosing a difficult fidelity rather than public abandonment. Her forgiveness does not erase the harm or restore their former place in Middlemarch.';
  }
  if (person.id === 'mary') {
    if (chapter <= 22) return 'Mary Garth is Featherstone’s paid companion at Stone Court: alert, frank, and able to keep her dignity amid the relatives watching for an inheritance. She cares for Fred but refuses to mistake his affection or his prospects for a sound basis for life.';
    if (chapter <= 35) return 'Mary is caught in the unsettling aftermath of Featherstone’s death and will. She does not profit from the old man’s money, and Fred’s disappointment confirms her belief that he must find a character and occupation of his own.';
    if (chapter <= 45) return 'Back in the Garth household, Mary helps meet its practical pressures while Fred begins his training with Caleb. She watches his effort closely, neither encouraging him cheaply nor withdrawing the affection that makes his reform matter.';
    if (chapter <= 57) return 'Mary’s affection for Fred is becoming more hopeful because his work is beginning to show real perseverance. She remains clear-eyed about money and responsibility, and will not let sentiment override the Garth family’s needs.';
    if (chapter <= 70) return 'Mary cares anxiously through Fred’s illness while resisting the idea that pity should decide their future. His recovery and continued work matter to her because they show whether his change can last.';
    if (chapter <= 83) return 'Mary can now accept Fred because he has become capable of supporting a shared life. Her good sense has never meant coldness; it has protected the possibility of a love based on mutual respect.';
    return 'Mary marries Fred after he has earned a stable place in Caleb’s profession. Her intelligence and practical independence remain the steady centre of their life together.';
  }
  if (person.id === 'caleb') {
    if (chapter <= 34) return 'Caleb Garth is a gifted land agent and surveyor whose pleasure lies in useful, exact work. He and Susan have built a warm but carefully managed household, and he is generous enough to make himself vulnerable when Fred’s debts bring loss upon him.';
    if (chapter <= 45) return 'The loss caused by Fred’s debt has damaged Caleb’s position, and he must seek work again while protecting his large family. His generosity toward Fred is now joined by the practical demand that the young man learn a trade and become accountable.';
    if (chapter <= 57) return 'Caleb is training Fred in land agency, judging him by attention, reliability, and willingness to work rather than by social expectation. His own work remains strenuous, but it gives the family a way forward after their reverses.';
    if (chapter <= 70) return 'Caleb sees Fred’s recovery and persistence as evidence that the young man may be changing. He continues to balance his own open-handedness with Susan’s sharper accounting of what the household can safely bear.';
    if (chapter <= 83) return 'Caleb has reason to trust Fred as a working partner and as a possible husband for Mary. His ideal is not wealth or display, but the dignity of competent work and a family that can stand on it.';
    return 'Caleb sees Mary and Fred settled through the useful work he taught Fred to value. His life remains rooted in service, skill, and the affectionate practical order of the Garth household.';
  }
  if (person.id === 'susan') {
    if (chapter <= 34) return 'Susan Garth is the practical intelligence of a busy household, managing children, money, and education with calm firmness. She loves Caleb’s generous nature but sees sooner than he does what Fred’s carelessness could cost their family.';
    if (chapter <= 45) return 'After the financial loss connected with Fred, Susan helps hold the Garth household together while Caleb looks for work. Her judgment is protective rather than hard: she insists that Mary cannot be asked to tie herself to an unformed young man.';
    if (chapter <= 57) return 'Susan watches Fred’s training under Caleb without giving him unearned credit. She wants evidence that he can provide a stable life for Mary, and her scepticism keeps the family’s needs in view when Caleb’s generosity might forget them.';
    if (chapter <= 70) return 'Fred’s illness brings out Susan’s care, but not a surrender of her principles. She can be kind to him while still requiring that recovery be followed by the work and dependability Mary needs.';
    if (chapter <= 83) return 'Susan sees that Fred’s conduct has at last earned the confidence she withheld from his promises. Her approval of his future with Mary rests on his practical change, not on charm or family connection.';
    return 'Susan sees Mary and Fred marry with the security she always demanded for them. She remains the clear-sighted, affectionate guardian of the Garth household’s dignity and economy.';
  }
  if (person.id === 'lydgate') {
    if (chapter <= 12) return 'Tertius Lydgate is the newly arrived young surgeon, conspicuous in Middlemarch for his training, confidence, and unusual medical ideas. He is intent on making a serious professional beginning, not yet on being absorbed into the town’s expectations.';
    if (chapter <= 16) return 'Lydgate is beginning to build a practice while Bulstrode sounds him out about reforming the hospital. He wants the freedom to follow medical evidence and research, and is already learning how quickly professional work in Middlemarch becomes entangled with local influence.';
    if (chapter <= 22) return 'Lydgate is taking a public place in Middlemarch’s medical and hospital life. His independence attracts resistance from older practitioners, while his visits to the Vincys make Rosamond’s interest in him increasingly important.';
    if (chapter <= 35) return 'Lydgate’s work and his attachment to Rosamond Vincy are both advancing. He still pictures a future in which professional ambition and domestic happiness will sit easily together, without reckoning fully with the cost of either.';
    if (chapter <= 41) return 'Lydgate is engaged to Rosamond. He is exhilarated by the match and hurries toward marriage, even as Rosamond’s family raises practical doubts about his income and prospects.';
    if (chapter <= 52) return 'Lydgate is newly married to Rosamond and trying to establish a household as well as a practice. The marriage has brought him into the Vincy circle, but the expenses and expectations of their life together are already pressing on him.';
    if (chapter <= 61) return 'Lydgate is working hard while his debts and domestic disagreements deepen. His pride makes it difficult for him to explain his position or accept ordinary help, leaving him vulnerable to the support Bulstrode offers.';
    if (chapter <= 71) return 'Lydgate is caught in the consequences of Bulstrode’s loan and the town’s suspicion after Raffles’s death. He knows his professional standing is at risk, while Rosamond and the household must bear the strain with him.';
    if (chapter <= 80) return 'Lydgate has been shaken by public suspicion and private financial trouble, but Dorothea’s intervention gives him a way out of immediate ruin. He is preparing to leave Middlemarch, with his original ambitions painfully altered by experience.';
    return 'Lydgate has left Middlemarch with Rosamond and is pursuing a more lucrative medical life. His later success does not erase the research career he once imagined, but it gives him a practical settlement after the town’s crisis.';
  }
  if (person.id === 'bulstrode') {
    if (chapter <= 12) return 'Nicholas Bulstrode is a wealthy banker whose religious seriousness and charitable influence make him a powerful, somewhat separate presence in Middlemarch. He is closely connected to the Vincys through his wife Harriet.';
    if (chapter <= 22) return 'Bulstrode is using his wealth and influence to shape the town’s religious and hospital affairs. He sees Lydgate as a useful ally in medical reform, although his strongly moral manner and political manoeuvring provoke resentment.';
    if (chapter <= 40) return 'Bulstrode remains central to the hospital and to Middlemarch’s civic life. His support of Lydgate and his pursuit of influence are presented as charitable work, but he is increasingly anxious to control the people and institutions around him.';
    if (chapter <= 52) return 'A man from Bulstrode’s earlier life has reappeared at the edge of the story. Bulstrode’s public authority still stands, but the return makes clear that the careful religious respectability on which he relies has a vulnerable private history.';
    if (chapter <= 61) return 'Bulstrode is trying to contain the danger posed by Raffles and by the knowledge attached to his past. His money and authority can still command action, but the choices he makes under pressure draw Lydgate into a position neither man can easily escape.';
    if (chapter <= 70) return 'The story of Bulstrode’s past has become public in Middlemarch. He faces the collapse of the moral authority he claimed, and his connection with Lydgate turns a private disgrace into a wider crisis for the town.';
    if (chapter <= 80) return 'Bulstrode is withdrawing from the life over which he once exercised such influence. Harriet’s loyalty and the practical arrangements made for the family offer him shelter, but he can no longer command Middlemarch’s confidence.';
    return 'Bulstrode has left the centre of Middlemarch life. His later existence is quieter and dependent on the loyalty of Harriet, after the power and reputation he built in the town have been lost.';
  }
  if (person.id === 'farebrother') {
    if (chapter <= 16) return 'Camden Farebrother is the approachable vicar of St Botolph’s: a naturalist, a card-player, and a clergyman who does not fit the town’s narrow idea of clerical propriety. His modest means help explain the compromises that others judge.';
    if (chapter <= 22) return 'Farebrother is supporting his mother and sister while trying to hold his place in the town. His frankness and generosity make him a friend to Lydgate, even as the contest over the hospital chaplaincy exposes how much a salary matters to him.';
    if (chapter <= 34) return 'Farebrother moves easily among the town’s younger people while carrying real obligations at home. He is a perceptive, sympathetic presence around Fred, Mary, and Lydgate, less ready than most to mistake social reputation for character.';
    if (chapter <= 52) return 'Farebrother has gained a more secure clerical position, but remains the same observant friend in Middlemarch. He sees Lydgate’s gifts and weaknesses with unusual fairness, and his regard for Mary Garth has become a private source of conflict.';
    if (chapter <= 61) return 'Farebrother is settling into the Lowick living and remains close to the Garths and Fred. When Fred asks him to speak to Mary, Farebrother acts generously despite his own feeling for her, allowing Fred to learn that Mary may have hope for him.';
    if (chapter <= 75) return 'Farebrother has set aside his own hopes for Mary and continues to help the people around him without claiming credit. His affection for her makes his loyalty to Fred’s effort and Mary’s freedom of choice especially generous.';
    return 'Farebrother remains a kindly, intelligent presence in the lives of the Garths and the wider town. He has accepted the course of Mary and Fred’s happiness without bitterness, retaining the practical sympathy that distinguished him from the start.';
  }
  if (person.id === 'featherstone') {
    if (chapter <= 16) return 'Peter Featherstone is the rich, ailing owner of Stone Court, surrounded by relatives who hope his money will settle their futures. He enjoys keeping those expectations uncertain, while Mary Garth gives him the practical attention his household requires.';
    if (chapter <= 24) return 'Featherstone continues to rule Stone Court through hints, grudges, small favors, and the prospect of his will. His apparent interest in Fred encourages hopes that are important to Fred and Mary, although the old man gives no one a secure claim.';
    if (chapter <= 30) return 'Featherstone is increasingly ill, but still uses his dependence on Mary and the anxiety of his relations to keep control of Stone Court. The question of what he will leave behind has become more urgent than any promise he has made.';
    if (chapter <= 32) return 'Featherstone is near death, and the household is tense with watchfulness and expectation. His final attempts to arrange his property place Mary in a painful position, because she will not do what her conscience forbids.';
    if (chapter === 33) return 'Peter Featherstone has died at Stone Court. The relatives who gathered around him now wait to discover whether the hopes he fostered will be honoured by his will.';
    if (chapter <= 35) return 'Featherstone’s funeral and will reveal how little his relatives understood their expectations. His death has made the private calculations around Stone Court public, with consequences for Fred, Mary, and the wider Featherstone family.';
    return 'Featherstone is dead, but the will he left behind continues to shape the fortunes and resentments of those who expected to inherit from him. Stone Court’s new ownership makes his old habits of control felt even after his death.';
  }
  if (person.id === 'cadwallader') {
    if (chapter <= 4) return 'Mrs Cadwallader is the sharp-tongued, warm-hearted wife of the Tipton rector and a close visitor at Tipton Grange. She likes Dorothea, but sees sooner than Dorothea does that Casaubon is not the grand companion her young friend imagines.';
    if (chapter <= 19) return 'Mrs Cadwallader is watching Dorothea’s engagement with increasing alarm. Her jokes about Casaubon and Arthur Brooke’s indecision are worldly, but they come from real affection and a wish to save Dorothea from an unhappy choice.';
    if (chapter <= 27) return 'Dorothea is married, and Mrs Cadwallader remains one of the local women least deceived by the solemn picture of the match. From the Tipton–Freshitt circle, she keeps a frank, protective interest in Dorothea’s new life.';
    if (chapter <= 44) return 'Mrs Cadwallader remains a lively, clear-sighted neighbour of the Brookes, Chettams, and Lowick household. Her wit makes her an observer of every local arrangement, but her concern for Dorothea has not become mere gossip.';
    if (chapter <= 64) return 'After Casaubon’s death, Mrs Cadwallader wants Dorothea to have a fuller, freer life than Lowick has given her. She is ready to think practically about possible futures, even when Humphrey urges more discretion.';
    return 'Mrs Cadwallader remains a blunt but affectionate friend in the Brooke–Chettam circle. She continues to see social absurdities clearly, while her loyalty to Dorothea is more generous than her teasing manner first suggests.';
  }
  if (person.id === 'humphrey') {
    if (chapter <= 19) return 'Mr Cadwallader is the mild, learned rector of Tipton and Freshitt, usually appearing beside his much more outspoken wife. He belongs to the settled local world around the Brookes and takes its domestic excitements with patient good humour.';
    if (chapter <= 44) return 'Mr Cadwallader remains the quiet rector in the Tipton–Freshitt neighbourhood. He is fond of his wife but often acts as a check on her energetic schemes and incisive remarks about their neighbours.';
    if (chapter <= 64) return 'The Cadwalladers are among the people nearest to Dorothea after her loss. Humphrey’s instinct is tact and restraint: he understands the delicacy of the Lowick situation and tries to keep gossip from becoming another burden for her.';
    return 'Mr Cadwallader remains a kindly, cautious presence in the local clergy and family circle. His quiet sense and his marriage to Elinor give the novel one of its most companionable contrasts in temperament.';
  }
  if (person.id === 'lady-chettam') {
    if (chapter <= 27) return 'Lady Chettam is Sir James’s mother and the dignified mistress of Freshitt. She belongs to the older country-house world around the Brookes, where Sir James’s concern for Dorothea is easily noticed even when not openly discussed.';
    if (chapter <= 54) return 'Lady Chettam sees Sir James’s closer understanding with Celia grow naturally out of the Brooke and Freshitt connection. Her gentle, conventional manner makes her less outspoken than Mrs Cadwallader, but she shares the family’s interest in the match.';
    return 'Celia’s marriage has made Lady Chettam her mother-in-law and joined Freshitt more closely to the Brooke family. She remains a quiet figure of domestic continuity in the household where Celia and Sir James are raising their child.';
  }
  if (person.id === 'tantripp') {
    if (chapter <= 8) return 'Tantripp is the practical maid who has attended the Brooke sisters since Lausanne. She knows the household’s undercurrent of feeling and passes on news of Sir James’s interest more freely than Dorothea would like.';
    if (chapter <= 19) return 'Tantripp remains Dorothea’s trusted attendant while the engagement changes the household. Her worldly, domestic view forms a small counterpoint to Dorothea’s grand hopes about marriage and scholarship.';
    if (chapter <= 27) return 'Tantripp has travelled with the Casaubons to Rome and continues to look after Dorothea in unfamiliar surroundings. She notices the practical discomforts and emotional strain that Dorothea is too inwardly occupied to name.';
    if (chapter <= 47) return 'At Lowick, Tantripp is Dorothea’s loyal maid and a discreet witness to the loneliness of the marriage. Her plain affection gives Dorothea a form of care that is undemanding and immediate.';
    if (chapter <= 64) return 'After Casaubon’s death, Tantripp helps Dorothea through the altered routines of mourning at Lowick. She does not understand every difficulty around her, but she recognises suffering and responds with fierce practical loyalty.';
    return 'Tantripp remains Dorothea’s devoted attendant. Her domestic intelligence and steady affection keep her close to the emotional life of Lowick without turning her into a judge of Dorothea’s choices.';
  }
  if (person.id === 'mrs-carter') {
    if (chapter <= 19) return 'Mrs Carter is one of the women who keep Tipton Grange running, briefly visible through the household errands and hospitality around Arthur Brooke’s guests. She belongs to the everyday domestic life beneath the family’s larger decisions.';
    return 'Mrs Carter’s small appearance remains a glimpse of Tipton’s domestic order rather than a continuing public role. The household she serves has changed as Dorothea and Celia make homes beyond their uncle’s house.';
  }
  if (person.id === 'mrs-fitchett') {
    if (chapter <= 19) return 'Mrs Fitchett is a Lowick parishioner whom Casaubon visits in the course of his clerical duties. Her practical village concerns offer Dorothea an early glimpse of the parish life she hopes to enter and improve.';
    if (chapter <= 47) return 'Mrs Fitchett remains part of the ordinary parish world at Lowick: one of the people whose material needs make Dorothea’s wish to be useful more concrete than Casaubon’s scholarship.';
    return 'Mrs Fitchett belongs to the continuing parish of Lowick, whose everyday welfare still matters to Dorothea after the household has been changed by Casaubon’s death.';
  }
  if (person.id === 'tucker') {
    if (chapter <= 19) return 'Mr Tucker is Casaubon’s curate at Lowick. He represents the working parish clergy whom Dorothea is about to know more closely as she enters the Lowick household.';
    if (chapter <= 47) return 'Tucker continues as the curate while Dorothea tries to find useful work in the parish. His ordinary church duties stand in contrast to the private, increasingly anxious world of Casaubon’s study.';
    return 'Casaubon is dead, but Mr Tucker remains part of Lowick’s parish structure. His connection with the former rector belongs to the established clerical work that continues beyond the household’s grief.';
  }
  if (person.id === 'naumann') {
    if (chapter <= 27) return 'Adolf Naumann is Will Ladislaw’s good-natured German painter friend in Rome. In the Vatican he is struck by Dorothea’s grave beauty and wants to make her the subject of a painting, while Will insists on treating her with more delicacy.';
    return 'Naumann belongs to the Roman episode: a reminder of the freer, artistic company in which Will moves outside Lowick and Middlemarch. His brief encounter with Dorothea remains an outsider’s vivid impression rather than an enduring acquaintance.';
  }
  if (person.id === 'pratt') {
    if (chapter <= 54) return 'Pratt is the butler at Lowick, familiar with the routines of the Casaubon household. When Will appears unexpectedly, Pratt’s easy friendliness and his conversations with Tantripp quietly reveal that the servants have noticed how lonely Dorothea’s life can be.';
    if (chapter <= 64) return 'After Casaubon’s death, Pratt is one of the servants whose work preserves the outward order of Lowick while its authority and emotional life have changed. He remains attached to the house rather than to the conflicts unfolding beyond it.';
    return 'Pratt remains part of the Lowick household’s practical continuity. His unobtrusive presence keeps the estate inhabited by people with their own memories of the life Dorothea inherited.';
  }
  if (person.id === 'arthur-chettam') {
    return 'Arthur Chettam is the young son of Celia and Sir James. His arrival gives the Freshitt household a new generation and makes Dorothea an aunt, strengthening the ordinary family life that remains close to her after Lowick.';
  }
  if (person.id === 'julia') {
    if (chapter <= 47) return 'Julia Casaubon is already dead, but she becomes important through the family history and miniature at Lowick. She is Casaubon’s aunt and Will Ladislaw’s paternal grandmother, a concealed link in the kinship that Casaubon treats with resentment and proprietary anxiety.';
    if (chapter <= 60) return 'After Casaubon’s death, Julia’s memory still matters because the family history attached to her helps explain the restrictions and tensions he has left around Will Ladislaw. She remains present only through portraits, documents, and inheritance.';
    return 'Julia Casaubon’s history is part of the fuller account of Will’s family that gradually comes to light. Though long dead, she connects the Casaubon name with the circumstances that shaped Will’s exclusion and eventual independence.';
  }
  if (person.id === 'pritchard') {
    if (chapter <= 12) return 'Pritchard is a Vincy servant, moving through the comfortable domestic routine that Mrs Vincy directs. When Fred lingers in bed, Pritchard is sent repeatedly to wake him: a small household scene that shows how much Fred is indulged.';
    if (chapter <= 27) return 'Pritchard remains part of the Vincy household staff, carrying out the everyday work beneath the family’s sociable surface. The household’s worries change, but his place in it is still that of a discreet servant.';
    return 'Pritchard belongs to the continuing domestic machinery of the Vincy home. The novel leaves him in the background while the family’s larger anxieties play out.';
  }
  if (person.id === 'miss-morgan') {
    if (chapter <= 16) return 'Miss Morgan is the governess of the younger Vincy girls. Rosamond, looking back on her own polished schooling, finds her dull; the contrast helps show Rosamond’s impatience with an ordinary, useful domestic education.';
    if (chapter <= 27) return 'Miss Morgan continues the younger girls’ lessons within the orderly Vincy household. She is treated as part of the family’s respectable domestic arrangement rather than as a member of its intimate life.';
    return 'Miss Morgan and the younger children have been sent away from the Vincy house during illness. Her quiet removal from the scene underlines the practical precautions surrounding the family.';
  }
  if (person.id === 'mrs-lemon') {
    if (chapter <= 16) return 'Mrs Lemon is the head of the county school where Rosamond was the admired model pupil. Her school represents the accomplishments—music, manners, French, and finish—that have helped form Rosamond’s idea of what life should be.';
    if (chapter <= 45) return 'Mrs Lemon remains a point of reference for Rosamond’s accomplished education. The refinement she taught is still part of Rosamond’s self-image, even as marriage makes its practical limits clearer.';
    return 'Mrs Lemon belongs to the remembered education behind Rosamond’s taste and expectations. Her influence is indirect but remains visible in the standards Rosamond brings to adult life.';
  }
  if (person.id === 'jane-waule') {
    if (chapter <= 24) return 'Jane Waule, Peter Featherstone’s widowed sister, arrives at Stone Court as a close relation with a close eye on his money. Her careful grief and pointed family feeling sit uneasily beside Featherstone’s pleasure in keeping everyone uncertain.';
    if (chapter <= 32) return 'Mrs Waule remains among the anxious relations around Featherstone’s sickbed. She speaks for family claims and resents the power Mary has in the house, while Peter continues to make every hope of inheritance insecure.';
    if (chapter <= 35) return 'Featherstone’s death brings Mrs Waule’s long expectation to a crisis. The will exposes how much the family gathering at Stone Court has been shaped by money, grievance, and disappointed entitlement.';
    return 'Mrs Waule is left among the relations whose hopes were overturned by Featherstone’s will. The old family claim survives mainly as resentment at what has passed out of their hands.';
  }
  if (person.id === 'solomon') {
    if (chapter <= 24) return 'Solomon Featherstone is Peter’s brother, one of the relations drawn to Stone Court by kinship and the prospect of an inheritance. He shares the family’s sense that Peter’s wealth ought properly to remain among them.';
    if (chapter <= 32) return 'Solomon waits with the Featherstone family as Peter’s illness makes the question of the will more urgent. The closeness claimed by the relatives is strained by the calculation beneath it.';
    if (chapter <= 35) return 'At Featherstone’s death, Solomon finds that family expectation has offered no security. The will makes public the gap between what the relations assumed and what Peter chose.';
    return 'Solomon remains one of the disappointed Featherstone relations after the will. Stone Court has ceased to be the family prize he imagined it to be.';
  }
  if (person.id === 'john-waule') {
    if (chapter <= 24) return 'John Waule is Mrs Waule’s steady son and a frequent visitor at Stone Court. Featherstone treats him as a suitable possible husband for Mary, but Mary receives the arrangement without encouragement.';
    if (chapter <= 32) return 'John continues to be present in the small calculations around Stone Court. His respectable suitability does not alter Mary’s feeling that a marriage designed by Featherstone would not be her choice.';
    if (chapter <= 35) return 'Featherstone’s death removes the household authority that had tried to shape John Waule’s prospects. The will leaves the wider family, including John, to adjust their expectations.';
    return 'John Waule recedes with the disappointed Stone Court relations after Featherstone’s death. The possible match with Mary has come to nothing.';
  }
  if (person.id === 'simmons') {
    if (chapter <= 24) return 'Simmons is Featherstone’s servant at Stone Court, carrying messages and attending to the practical demands of a house made tense by illness and expectation. He sees the household’s activity without sharing the family’s stake in the will.';
    if (chapter <= 32) return 'As Featherstone declines, Simmons moves between rooms and errands in a household where every visitor and message has become charged. His work makes the daily reality of the sickroom possible.';
    if (chapter <= 35) return 'Simmons is caught in the immediate business after Featherstone’s death: messages, summonses, and the movement of people through Stone Court. The household he served is abruptly becoming an estate to be settled.';
    return 'Simmons belongs to the old Stone Court household, which has been broken up and remade after Featherstone’s will.';
  }
  if (person.id === 'joshua-rigg') {
    if (chapter <= 40) return 'Joshua Rigg Featherstone is revealed by Peter Featherstone’s will as the old man’s previously unacknowledged son and principal heir. His sudden possession of Stone Court overturns every expectation the visible Featherstone family had cherished.';
    if (chapter <= 52) return 'Rigg is the cool, calculating new master of Stone Court, more interested in the value of his inheritance than in becoming part of the Featherstone family. His connection with John Raffles also brings an unwelcome piece of older history into view.';
    if (chapter <= 67) return 'Rigg has disposed of Stone Court to Bulstrode and leaves the old household behind. His inheritance has served chiefly to displace the family who expected it, while the past attached to him has not quite disappeared.';
    return 'Rigg has receded from Middlemarch after selling Stone Court. What remains of his presence is the chain of events and old knowledge that his household helped set in motion.';
  }
  if (person.id === 'raffles') {
    if (chapter <= 52) return 'John Raffles appears at Stone Court as Joshua Rigg Featherstone’s stepfather: coarse, boastful, and inconveniently familiar with Bulstrode’s earlier life. His arrival makes clear that a past Bulstrode would rather keep buried can still find its way to Middlemarch.';
    if (chapter <= 67) return 'Raffles has gone away again, but the knowledge he carries remains a potential danger to Bulstrode. The novel leaves him offstage while that danger gathers force.';
    if (chapter <= 68) return 'Raffles returns to Bulstrode’s house at Christmas and turns his knowledge into a threat. Bulstrode gets him away with money, but cannot feel that the danger has truly ended.';
    if (chapter <= 69) return 'Raffles is seriously ill at Stone Court, where Bulstrode tries to control the sickroom and Lydgate’s treatment. His helplessness makes Bulstrode’s fear and moral evasion more terrible, not less.';
    return 'Raffles is dead, but the circumstances of his illness and the story he carried have become the centre of Middlemarch’s judgment of Bulstrode and Lydgate.';
  }
  if (person.id === 'mrs-abel') {
    if (chapter <= 70) return 'Mrs Abel is the Stone Court housekeeper helping nurse the ill Raffles. She follows the instructions she is given without understanding the private terror and calculation behind Bulstrode’s control of the sickroom.';
    return 'Mrs Abel remains a witness to the practical details of Raffles’s last illness. Her evidence belongs to the chain of facts from which Middlemarch reconstructs what happened at Stone Court.';
  }
  if (person.id === 'ben') {
    if (chapter <= 39) return 'Ben Garth is one of the younger children in Caleb and Susan’s busy household. He resists grammar and makes the family’s lessons lively, but his ordinary place in the home also shows the practical responsibility behind his parents’ constant work.';
    return 'Ben remains part of the affectionate, crowded Garth household. The children’s daily education and behaviour continue beneath the larger adult worries about money, work, and Mary’s future.';
  }
  if (person.id === 'letty') {
    if (chapter <= 39) return 'Letty Garth is Ben’s young sister and Susan Garth’s pupil in the kitchen-schoolroom. Her eagerness to answer and her small quarrels with Ben give a warm, comic glimpse of the lively Garth home.';
    return 'Letty remains among the younger Garth children, growing up in a household where learning, housework, and affection are closely mixed. She stays largely outside the adult plots that reshape the family’s prospects.';
  }
  if (person.id === 'alfred') {
    if (chapter <= 57) return 'Alfred Garth is being prepared for engineering, a future Caleb sees as skilled and useful. The family’s savings and planning for his premium show how carefully the Garths must turn ability into an independent livelihood.';
    return 'Alfred has gone on toward his engineering career. His departure is part of the practical rhythm of the Garth family, whose older children must make their own useful way in the world.';
  }
  if (person.id === 'christy') {
    if (chapter <= 57) return 'Christy Garth is the scholarly son studying economically in Scotland, a particular pride to Susan. His education reflects the Garths’ belief in cultivating a child’s real aptitude while remaining alert to the cost.';
    if (chapter <= 61) return 'Christy is home from Scotland for a short holiday, and his progress gives the Garth household genuine pleasure. His quiet intellectual success contrasts with the more uncertain paths being made by Fred and the younger children.';
    return 'Christy has returned to his studies, carrying forward the education in which the Garth family has invested so carefully. He remains a source of quiet pride to his parents.';
  }
  if (person.id === 'peacock') {
    return chapter <= 22
      ? 'Mr Peacock is the older practitioner from whom Lydgate has bought an entrance into Middlemarch practice. His retirement makes Lydgate’s arrival possible, while leaving the younger doctor to establish himself among wary local colleagues.'
      : 'Mr Peacock belongs to the older medical order that Lydgate entered on his arrival. The practice he transferred remains the practical beginning of Lydgate’s career in Middlemarch.';
  }
  if (person.id === 'wrench') {
    if (chapter <= 22) return 'Mr Wrench is the Vincys’ established doctor and part of the secure professional world Lydgate has entered from outside. He watches the new practitioner critically, and Lydgate’s different methods make their rivalry immediately felt.';
    if (chapter <= 45) return 'Wrench remains the established local doctor against whom Lydgate is measured. Their professional difference is more than personal dislike: Wrench represents the habits and authority Lydgate hopes to reform.';
    return 'Wrench remains one of the local practitioners whose standing makes Lydgate’s isolation more acute when the town begins to judge him.';
  }
  if (person.id === 'toller') {
    return chapter <= 32
      ? 'Mr Toller is one of the established Middlemarch practitioners, named as Lydgate begins to encounter the town’s professional ranks. He belongs to the network whose good opinion the ambitious newcomer has not yet earned.'
      : 'Toller remains part of the established medical circle, defining the professional resistance surrounding Lydgate.';
  }
  if (person.id === 'sprague') {
    if (chapter <= 32) return 'Dr Sprague is the senior physician of weight in Middlemarch: socially and professionally authoritative, and therefore an important measure of the younger doctors’ standing. Lydgate enters a world in which Sprague’s judgment carries real force.';
    if (chapter <= 69) return 'Dr Sprague remains the senior medical authority in Middlemarch. As Lydgate’s position becomes more precarious, the contrast between Sprague’s established credit and Lydgate’s uncertain reputation grows sharper.';
    return 'Dr Sprague remains a figure of settled professional authority after the crisis around Lydgate.';
  }
  if (person.id === 'minchin') {
    return chapter <= 32
      ? 'Dr Minchin is introduced among the Middlemarch physicians, credited with more insight than Dr Sprague but without Sprague’s commanding social weight. He belongs to the medical hierarchy through which Lydgate must make his way.'
      : 'Dr Minchin remains one of the town’s established physicians, a quiet contrast to Lydgate’s ambitious but precarious position.';
  }
  if (person.id === 'laure') {
    return chapter <= 22
      ? 'Madame Laure belongs to the Paris episode in Lydgate’s earlier life. Her story shows the young Lydgate briefly drawn by theatrical passion, only to pull back when he sees its destructive force; it is a past experience, not a presence in Middlemarch.'
      : 'Madame Laure remains part of Lydgate’s remembered Paris past: an early attachment whose violent outcome taught him how quickly fascination can become disillusion.';
  }
  if (person.id === 'horrock') {
    return chapter <= 32
      ? 'Mr Horrock is the veterinary surgeon brought into the horse transaction that exposes Fred’s careless borrowing. His examination turns a private piece of improvidence into evidence of the loss Caleb Garth must bear.'
      : 'Horrock remains associated with the disastrous horse deal that forces Fred to confront the consequences of his carelessness.';
  }
  if (person.id === 'gambit') {
    return chapter <= 59
      ? 'Mr Gambit is a Middlemarch surgeon invoked in local comparisons of medical men. He belongs to the atmosphere of gossip and professional ranking in which Lydgate’s reputation is constantly being made and unmade.'
      : 'Gambit remains a minor name in the town’s medical gossip, a sign of how eagerly Middlemarch compares doctors and turns professional difference into public judgment.';
  }
  if (person.id === 'sir-godwin') {
    return chapter <= 57
      ? 'Sir Godwin Lydgate is Tertius’s titled uncle, more important in Rosamond’s imagination than in Tertius’s practical affairs. His name represents the aristocratic connection and possible help she assumes her marriage ought to command.'
      : 'Sir Godwin remains a distant family connection whose title feeds Rosamond’s ideas of what the Lydgates ought to be.';
  }
  if (person.id === 'captain-lydgate') {
    return chapter <= 70
      ? 'Captain Lydgate is the fashionable cousin who brings a brief touch of Tertius’s family world into the Lydgate household. His visit also gives Rosamond a flattering social mirror at a time when her marriage feels constricted.'
      : 'Captain Lydgate remains a glimpse of the polished social life Rosamond had expected to enter through marriage.';
  }
  if (person.id === 'tyke') {
    return chapter <= 18
      ? 'Walter Tyke is the evangelical clergyman whom Bulstrode wants installed as the new hospital chaplain. His candidacy becomes the occasion on which rival ideas of religion, influence, and public trust collide in Middlemarch.'
      : 'Tyke’s candidacy has exposed the political and religious divisions behind the hospital’s charitable face. He remains the candidate Bulstrode favours, and therefore a focus for resentment of Bulstrode’s influence.';
  }
  if (person.id === 'thesiger') {
    return chapter <= 25
      ? 'Edward Thesiger is a moderate evangelical clergyman who speaks for his friend Tyke in the hospital contest. He makes visible the respectable religious alliance behind Bulstrode’s preferred candidate.'
      : 'Thesiger remains an ally of Tyke and part of the evangelical party connected with Bulstrode.';
  }
  if (person.id === 'hackbutt') {
    return chapter <= 25
      ? 'Mr Hackbutt, a wealthy tanner, takes part in the hospital board debate with the ease of a man used to public speech. His intervention shows that the hospital is a civic arena, not simply Bulstrode’s private instrument.'
      : 'Hackbutt remains a voice in Middlemarch’s public life, where commercial standing, religious argument, and personal dislike meet in the town’s institutions.';
  }
  if (person.id === 'powderell') {
    return chapter <= 25
      ? 'Mr Powderell, a retired ironmonger, is one of the hospital board men whose practical local authority complicates Bulstrode’s plans. He belongs to the solid civic constituency that resists being directed from above.'
      : 'Powderell remains a minor representative of the independent civic men on the hospital board.';
  }
  if (person.id === 'hawley') {
    if (chapter <= 25) return 'Frank Hawley, lawyer and town clerk, speaks sharply in the hospital debate and becomes one of Bulstrode’s clearest civic opponents. He brings legal fluency and local scepticism to a conflict Bulstrode had hoped to manage.';
    if (chapter <= 70) return 'Hawley remains an outspoken representative of the town’s resistance to Bulstrode. His public adversarial stance makes clear that Bulstrode’s authority has never commanded unanimous respect.';
    return 'Hawley belongs to the local public world that judges Bulstrode after the scandal.';
  }
  if (person.id === 'larcher') {
    return chapter <= 25
      ? 'Mr Larcher, an eminent carrier, is another practical man at the hospital board meeting. His voice matters because Middlemarch’s institutions depend on tradesmen and townsmen as much as on clerics and bankers.'
      : 'Larcher remains part of the hospital board’s local constituency, a reminder that public projects answer to people whose authority comes from work and standing in the town.';
  }
  if (person.id === 'chichely') {
    return chapter <= 22
      ? 'Mr Chichely is a sporting bachelor in the Vincy circle who openly admires Rosamond. His attention confirms her social desirability, but she treats it as background against which Lydgate’s more distinguished attraction stands out.'
      : 'Chichely remains a minor admirer from Rosamond’s early social world, measuring the comfortable local match she looks beyond when she chooses Lydgate.';
  }
  if (person.id === 'standish') return 'Mr Standish is one of the gentlemen moving through the Vincy family’s sociable world. He helps establish the comfortable network of calls, dinners, and opinions in which Rosamond and Fred are first seen.';
  if (person.id === 'renfrew') return 'Mrs Renfrew, a colonel’s widow, is a guest in the Vincy social circle. Her presence gives the household its texture of visiting, rank-conscious provincial sociability.';
  if (person.id === 'crowse') return chapter <= 30 ? 'Mr Crowse is a curate invoked when Mary teases Fred about his proposed clerical career. He is a comic measure of the vocation Fred is expected to take up without much inward conviction.' : 'Crowse remains a passing point of reference in Fred’s abandoned clerical future.';
  if (person.id === 'bowyer') return 'Mr Bowyer is a musical acquaintance from the social world shared by Rosamond and Lydgate. He belongs to the polished accomplishments and drawing-room culture through which Rosamond expresses her taste.';
  if (person.id === 'trawley') return 'Trawley is Lydgate’s former Paris roommate and a correspondent of Farebrother. Mentioned through letters and recollection, he connects Lydgate’s Middlemarch life to the freer, more cosmopolitan world from which he has come.';
  if (person.id === 'mrs-plymdale') return chapter <= 35 ? 'Mrs Plymdale is a socially competitive Middlemarch mother, alert to the advantages of her son Ned. Her rivalry with Mrs Vincy makes Rosamond’s marriage prospects part of a wider contest in which children’s matches advertise family standing.' : 'Mrs Plymdale remains a watchful social rival to the Vincys, concerned with Ned’s prospects and the family standing they advertise.';
  if (person.id === 'ned-plymdale') return chapter <= 35 ? 'Ned Plymdale is a prosperous young manufacturer whom his mother and the Vincys can imagine as a suitable match for Rosamond. His quiet respectability is precisely what makes Lydgate seem more exciting to her.' : 'Ned Plymdale remains the sensible local alternative Rosamond has passed over.';
  if (person.id === 'bambridge') return chapter <= 32 ? 'Mr Bambridge, a horse-dealer and companion of Fred, is bound up with the risky horse transaction that leaves Fred indebted and Caleb exposed. His conviviality belongs to the easygoing world Fred must learn to distrust.' : 'Bambridge remains associated with the horse deal that cost Caleb dearly, a remnant of Fred’s careless habits.';
  if (person.id === 'trumbull') return chapter <= 35 ? 'Borthrop Trumbull, the florid auctioneer, appears around Featherstone’s last arrangements and property. His practical business presence makes the expected inheritance feel like an estate to be divided, not merely a family hope.' : 'Trumbull remains connected with the material aftermath of Featherstone’s death and the transfer of Stone Court.';
  if (person.id === 'mawmsey') return 'Mr Mawmsey, the Middlemarch grocer, is one of the voters courted in Arthur Brooke’s election. His shop makes him a small but concrete centre of local opinion, where politics is weighed through neighbourhood interest and personal respect.';
  if (person.id === 'mrs-mawmsey') return 'Mrs Mawmsey belongs to the household perspective around the election, where a vote is embedded in family feeling and neighbourhood opinion.';
  if (person.id === 'mrs-dollop') return 'Mrs Dollop, landlady of the Tankard, is a vigorous voice in Middlemarch public opinion. Her inn gives political talk a noisy, local setting, far from the abstractions Arthur Brooke tries to offer voters.';
  if (person.id === 'dagley') return 'Mr Dagley is a tenant on Arthur Brooke’s estate whose anger brings the neglected conditions at Tipton into plain view. He is not a picturesque dependent but a man with a grievance, and his confrontation punctures Arthur’s benevolent self-image.';
  if (person.id === 'mrs-dagley') return 'Mrs Dagley shares the hard circumstances of the Tipton tenancy and is caught in the confrontation with Arthur Brooke. Her presence keeps the grievance from seeming merely one man’s temper: it belongs to a household living with neglect.';
  if (person.id === 'sarah-dunkirk') return chapter <= 70 ? 'Sarah Dunkirk Ladislaw is known through the family history that explains Will’s parentage. Her decision to leave with an actor and her later life on the stage are remembered through other people’s judgments, while Will must live with the consequences of that history.' : 'Sarah remains the mother whose life explains both Will’s exclusion from Casaubon family favour and the moral compromise buried in Bulstrode’s past.';
  if (person.id === 'mrs-dunkirk') return chapter <= 70 ? 'Mrs Dunkirk is remembered as Sarah’s mother and Bulstrode’s first wife. Her will and the money attached to it are central to the concealed history Bulstrode has kept from public knowledge.' : 'Mrs Dunkirk remains a figure in the buried family history that links Bulstrode to Will.';
  if (person.id === 'mrs-hackbutt') return 'Mrs Hackbutt appears in the domestic network through which news of Bulstrode’s scandal moves across Middlemarch. Her role is small but vivid: private information becomes public opinion by passing through households like hers.';
  if (person.id === 'mrs-sprague') return 'Mrs Sprague appears in the domestic web through which Bulstrode’s story is repeated and judged. As the wife of a senior physician, she connects drawing-room knowledge to the professional world already watching Lydgate closely.';

  return profileAtChapter(person, chapter).detail;
}

function relationshipRecap(left, right, tie, chapter) {
  const key = [left.id, right.id].sort().join('|');
  const timed = relationshipTimelines[key]?.find((stage) => chapter >= stage.from && (stage.to === undefined || chapter <= stage.to));
  if (timed) return timed.text;

  if (key === 'brooke|celia') {
    return chapter < 5
      ? 'Arthur is Celia’s unmarried uncle and guardian. She lives with him at Tipton Grange, alongside her sister Dorothea.'
      : 'Arthur is Celia’s uncle and guardian, and she remains part of his Tipton Grange household. He has allowed Dorothea’s marriage to Casaubon, while Celia responds to that choice with more practical reserve.';
  }
  if (key === 'brooke|dorothea') {
    return chapter < 5
      ? 'Arthur is Dorothea’s uncle and guardian. He gives her and Celia a generous home at Tipton Grange, though he does not always share Dorothea’s intensity of purpose.'
      : 'Arthur remains Dorothea’s uncle and guardian. He has consented to her marriage with Casaubon, despite worries from people close to the family about the match.';
  }
  if (key === 'celia|dorothea') {
    return chapter < 5
      ? 'Celia and Dorothea are sisters living together under Arthur Brooke’s guardianship. Celia is affectionate but more worldly and practical than her elder sister.'
      : 'Celia and Dorothea are sisters whose closeness is tested by Dorothea’s decision to marry Casaubon. Celia cares for her sister, but she is more alert to the ordinary human costs of the match.';
  }
  if (key === 'casaubon|dorothea') {
    return tie.label === 'engaged'
      ? 'Dorothea has accepted Edward Casaubon’s proposal. She sees his scholarly life as a chance to serve a serious purpose, while several people around her have reservations about the match.'
      : 'Dorothea and Edward Casaubon are now married and living at Lowick. Their union is still being understood through Dorothea’s hopes for his work and the realities of their new household.';
  }
  if (key === 'chettam|dorothea') {
    return chapter < 5
      ? 'Sir James Chettam is drawn to Dorothea and hopes to marry her. He is a close neighbor of the Brooke household, but Dorothea’s attention is directed elsewhere.'
      : 'Sir James Chettam had hoped to marry Dorothea, but she has chosen Casaubon. He remains connected to the Brooke circle and continues to treat her with consideration.';
  }
  if (key === 'celia|chettam') {
    return tie.label === 'friends'
      ? 'Celia and Sir James know one another through the Brooke circle. As Dorothea’s earlier courtship falls away, their quieter rapport becomes more visible.'
      : tie.label === 'engaged'
        ? 'Celia and Sir James are engaged. Their match grows out of long familiarity in the Brooke and Freshitt circle.'
        : 'Celia and Sir James are married, joining the Brooke and Freshitt households.';
  }
  if (key === 'dorothea|will') {
    return 'Dorothea and Will Ladislaw have met through Casaubon’s family circle. At this point they are acquaintances, and the novel has not yet disclosed anything beyond that connection.';
  }
  if (key === 'bulstrode|harriet') {
    return 'Harriet and Nicholas Bulstrode are married. Harriet is Walter Vincy’s sister, making the Bulstrodes part of the wider Vincy family network.';
  }
  if (key === 'bulstrode|vincy') {
    return 'Nicholas Bulstrode and Walter Vincy are brothers-in-law through Harriet Bulstrode. Their family connection also places the banker close to the Vincy household’s social world.';
  }
  if (key === 'fred|mary') {
    return 'Fred and Mary have known one another since childhood. Fred’s attachment to Mary is clear, while Mary’s good sense makes her wary of his uncertainty and his expectations about money.';
  }
  if (key === 'lydgate|rosamond') {
    return tie.label === 'mutual interest'
      ? 'Lydgate and Rosamond have begun to notice one another in Middlemarch society. Their attraction is growing, but they are not yet formally committed.'
      : tie.label === 'engaged'
        ? 'Lydgate and Rosamond are engaged. Their courtship has moved quickly from social attraction to a formal promise.'
        : 'Lydgate and Rosamond are married, linking the new doctor to the Vincy family.';
  }
  if (key === 'featherstone|mary') {
    return 'Mary is Peter Featherstone’s paid companion at Stone Court. She gives him practical care and frank company, while the household’s family expectations make her position delicate.';
  }
  if (key === 'bulstrode|lydgate') {
    return 'Bulstrode and Lydgate are allied through the hospital. Bulstrode values Lydgate’s reforming energy, and Lydgate’s professional plans gain support from Bulstrode’s civic influence.';
  }
  if (key === 'dorothea|naumann') {
    return 'In the Vatican sculpture gallery, Naumann notices Dorothea standing near the Ariadne and is struck by the contrast he imagines between her grave appearance and the antique statue. He wants to paint her, but Dorothea, uneasy at the strangers’ attention, leaves before they speak.';
  }
  if (key === 'casaubon|naumann') {
    return 'Naumann sees Casaubon only briefly in Rome, when he notices Dorothea’s wedding ring and assumes the older scholar is her father. The mistaken impression tells us more about Naumann’s quick, artistic way of seeing than about any real acquaintance between the two men.';
  }
  if (key === 'naumann|will') {
    return 'Naumann and Will are friends in Rome’s artistic circle. While Naumann is eager to turn Dorothea into a subject for a painting, Will resists his friend’s excited pursuit and makes clear that she is connected to his own family.';
  }

  const leftProfile = profileAtChapter(left, chapter);
  const rightProfile = profileAtChapter(right, chapter);
  return `${relationshipStatement(left, right, tie.label)} At this point, ${left.name} is ${leftProfile.role.toLowerCase()}, while ${right.name} is ${rightProfile.role.toLowerCase()}. Their connection remains part of the immediate world the novel has established around them.`;
}

window.BOOK_DATA = { metadata, books, circles, people, ties, circlePresentation, relationshipStatement, profileAtChapter, relationshipTimelines, characterRecap, relationshipRecap };
})();

