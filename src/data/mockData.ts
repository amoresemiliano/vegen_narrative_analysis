import { TopicResearch, Publication, Narrative, CommentReaction, Connection, LibraryCollection } from '../types';

export const FLAT_EARTH_TOPIC: TopicResearch = {
  id: 'flat-earth-demo',
  name: 'Flat Earth / Terraplanismo',
  subtitle: 'Digital discourse analysis on empirical skepticism & institutional distrust',
  description: 'Investigation into digital communities and content questioning mainstream astronomical and geophysical models. Focuses on linguistic patterns, personal observation arguments, and distrust towards NASA, scientific institutions, and global authorities.',
  period: 'Jan 15, 2026 - Aug 05, 2026',
  publicationCount: 1420,
  commentCount: 18350,
  sourceCount: 84,
  countries: ['Argentina', 'United States', 'Spain', 'Mexico', 'Brazil', 'Colombia', 'United Kingdom', 'Chile', 'France', 'Peru', 'Ecuador', 'Germany'],
  temperature: {
    intensityScore: 82,
    intensityLabel: 'High',
    predominantReaction: 'Institutional Distrust & Epistemic Rejection',
    polarizationLevel: 'High',
    emotionalActivation: 'High',
    distrustLevel: 88,
  },
  keywords: [
    { word: 'NASA', count: 8420, sentiment: 'negative' },
    { word: 'Antarctica Wall', count: 6210, sentiment: 'negative' },
    { word: 'CGI images', count: 5890, sentiment: 'negative' },
    { word: 'Water level', count: 4720, sentiment: 'neutral' },
    { word: 'Curvature', count: 4310, sentiment: 'neutral' },
    { word: 'Firmament', count: 3950, sentiment: 'positive' },
    { word: 'Indoctrination', count: 3620, sentiment: 'negative' },
    { word: 'Wake up', count: 3100, sentiment: 'positive' },
    { word: 'Perspective', count: 2840, sentiment: 'neutral' },
    { word: 'Lies', count: 2650, sentiment: 'negative' },
  ],
  entities: [
    { name: 'NASA', type: 'Organization', mentions: 8420 },
    { name: 'Antarctic Treaty System', type: 'Concept', mentions: 4120 },
    { name: 'Eric Dubay', type: 'Person', mentions: 3290 },
    { name: 'Neil deGrasse Tyson', type: 'Person', mentions: 2840 },
    { name: 'SpaceX / Elon Musk', type: 'Organization', mentions: 2150 },
    { name: 'International Space Station (ISS)', type: 'Location', mentions: 1980 },
  ],
  emotions: [
    { emotion: 'Distrust / Suspicion', percentage: 41, color: '#f59e0b' },
    { emotion: 'Moral Indignation', percentage: 24, color: '#ef4444' },
    { emotion: 'Group Superiority / Revelation', percentage: 18, color: '#8b5cf6' },
    { emotion: 'Ridicule / Mockery (Opponents)', percentage: 12, color: '#ec4899' },
    { emotion: 'Skeptical Uncertainty', percentage: 5, color: '#06b6d4' },
  ],
  sentimentBreakdown: {
    positive: 14,
    neutral: 22,
    negative: 64,
  },
  temporalData: [
    { date: 'Feb 2026', volume: 180, sentimentIndex: -0.42, polarizationIndex: 68 },
    { date: 'Mar 2026', volume: 240, sentimentIndex: -0.48, polarizationIndex: 72 },
    { date: 'Apr 2026', volume: 310, sentimentIndex: -0.55, polarizationIndex: 81 },
    { date: 'May 2026', volume: 490, sentimentIndex: -0.62, polarizationIndex: 89 },
    { date: 'Jun 2026', volume: 380, sentimentIndex: -0.58, polarizationIndex: 84 },
    { date: 'Jul 2026', volume: 560, sentimentIndex: -0.66, polarizationIndex: 91 },
    { date: 'Aug 2026', volume: 620, sentimentIndex: -0.61, polarizationIndex: 88 },
  ],
};

export const MOCK_PUBLICATIONS: Publication[] = [
  {
    id: 'pub-01',
    topicId: 'flat-earth-demo',
    sourcePlatform: 'YouTube',
    author: 'HorizonteLibre_Oficial',
    authorHandle: '@HorizonteLibre',
    country: 'Argentina',
    countryCode: 'AR',
    date: '2026-07-28',
    title: '20 Empirical Observations the Educational System Refuses to Explain',
    summary: 'Video essay analyzing laser tests over long water surfaces, claiming the lack of visible curvature contradicts globe geometry calculations.',
    fullText: 'In this video we review 20 physical demonstrations made with infrared lasers across lakes exceeding 25km. In every case, target points were fully visible despite textbook math predicting a drop of over 30 meters. Why do school books omit these empirical field tests?',
    url: 'https://youtube.com/watch?v=demo_flat_01',
    commentCount: 2410,
    engagementScore: 184000,
    mainNarrativeId: 'narrative-02',
    mainNarrativeTitle: 'Personal observation as primary evidence',
    predominantTone: 'Inquisitive & Assertive',
    claims: [
      'Infrared laser visible across 25km without predicted drop',
      'School curricula ignore non-institutional optics experiments',
      'Direct observation supersedes official mathematical models'
    ],
    sampleComments: [
      'Finally someone uses real instruments instead of CGI composites!',
      'I tried a similar test at Lake Nahuel Huapi and got identical visibility.',
      'This ignores light refraction in lower atmospheric density layers.'
    ]
  },
  {
    id: 'pub-02',
    topicId: 'flat-earth-demo',
    sourcePlatform: 'X (Twitter)',
    author: 'DiscursoCritico_MX',
    authorHandle: '@DiscursoCriticoMX',
    country: 'Mexico',
    countryCode: 'MX',
    date: '2026-08-01',
    title: 'Analysis of NASA budget growth vs transparency in raw satellite imagery',
    summary: 'Viral thread arguing that space agency budgets increase while public satellite imagery relies on artist renders and composite rendering.',
    fullText: 'Thread: NASA receives $25B annually. Yet when you examine high-res earth images from 2002 vs 2022, cloud patterns repeat and continent scales vary dramatically. Why are we paying billions for Photoshop composites? [1/12]',
    url: 'https://x.com/DiscursoCriticoMX/status/18293021',
    commentCount: 1850,
    engagementScore: 92300,
    mainNarrativeId: 'narrative-01',
    mainNarrativeTitle: 'Institutional distrust',
    predominantTone: 'Accusatory & Skeptical',
    claims: [
      'Public earth images from space are digital composites rather than single-shot photos',
      'Financial allocations to space agencies lack verifiable visual proof',
      'Discrepancies in continent sizes across different official releases'
    ],
    sampleComments: [
      'They literally admitted the 2002 Blue Marble was built from data bands, not a photo.',
      'It is a data composite because satellites orbit low, not a secret fraud.',
      'Follow the money. Public institutions should provide unedited streams.'
    ]
  },
  {
    id: 'pub-03',
    topicId: 'flat-earth-demo',
    sourcePlatform: 'TikTok',
    author: 'CienciaSinFiltros_ES',
    authorHandle: '@CienciaSinFiltros',
    country: 'Spain',
    countryCode: 'ES',
    date: '2026-08-03',
    title: 'Why the Antarctic Treaty restricts independent exploration beyond 60S',
    summary: 'Short clip focusing on geopolitical conspiracy claims around the Antarctic Treaty, portraying it as a militarized boundary line.',
    fullText: 'Did you know 54 nations signed a treaty banning any private individual from exploring Antarctica without military escort? What are they protecting behind the ice wall? #Antarctica #Secret #History',
    url: 'https://tiktok.com/@CienciaSinFiltros/video/7291039123',
    commentCount: 3910,
    engagementScore: 310000,
    mainNarrativeId: 'narrative-03',
    mainNarrativeTitle: 'Coordinated conspiracy',
    predominantTone: 'Alarmist & Mysterious',
    claims: [
      'The Antarctic Treaty prevents independent civilian traversal',
      'Global powers maintain unified enforcement despite geopolitical rivalries',
      'Geographical boundaries are hidden behind military protocols'
    ],
    sampleComments: [
      'Countries that hate each other politically all agree on Antarctica? Suspicious.',
      'Anyone can book an Antarctic expedition, you just need permits for environmental safety.',
      'This is the real key to understanding the firmament boundary.'
    ]
  },
  {
    id: 'pub-04',
    topicId: 'flat-earth-demo',
    sourcePlatform: 'Reddit',
    author: 'u/ObservadorIndependiente',
    authorHandle: 'r/GeometriaAlternativa',
    country: 'Chile',
    countryCode: 'CL',
    date: '2026-07-20',
    title: 'The psychology of being labeled "insane" for questioning global astronomy',
    summary: 'Community reflection on social rejection, school bullying, and mainstream ridicule faced by individuals adopting non-globe worldviews.',
    fullText: 'When I questioned curvature in my university physics elective, the professor did not offer mathematical proofs; he offered sarcasm. Our community is attacked because waking up breaks the illusion of control.',
    url: 'https://reddit.com/r/GeometriaAlternativa/comments/xy91a',
    commentCount: 840,
    engagementScore: 14200,
    mainNarrativeId: 'narrative-04',
    mainNarrativeTitle: 'Group identity & outsiders hostility',
    predominantTone: 'Victimizing & Solidary',
    claims: [
      'Mainstream academic environments respond with stigma rather than empirical dialogue',
      'Adherents of non-standard cosmologies share a strong mutual support network',
      'Social ostracization acts as a enforcement mechanism for dogma'
    ]
  },
  {
    id: 'pub-05',
    topicId: 'flat-earth-demo',
    sourcePlatform: 'News Blog',
    author: 'PrensaDigital_Analisis',
    authorHandle: 'Prensa Digital',
    country: 'United States',
    countryCode: 'US',
    date: '2026-07-15',
    title: 'Deconstructing the algorithmic amplification of flat-earth debate in recommendation feeds',
    summary: 'Journalistic investigation analyzing how short-form video algorithms boost polarizing cosmological debates for high retention metrics.',
    fullText: 'Recommendation engines optimize for time spent. Content questioning foundational science triggers intense debate loops in comment sections, boosting reach 4x higher than standard educational content.',
    url: 'https://prensadigital.org/articles/algorithmic-polarization-2026',
    commentCount: 620,
    engagementScore: 48000,
    mainNarrativeId: 'narrative-01',
    mainNarrativeTitle: 'Institutional distrust',
    predominantTone: 'Analytical & Critical',
    claims: [
      'Recommendation algorithms prioritize controversial topics for watch-time optimization',
      'Polarizing comment section debates increase retention metrics by 400%'
    ]
  },
  {
    id: 'pub-06',
    topicId: 'flat-earth-demo',
    sourcePlatform: 'Telegram',
    author: 'Canal_Investigacion_Plana',
    authorHandle: '@InvestigacionPlana',
    country: 'Brazil',
    countryCode: 'BR',
    date: '2026-08-04',
    title: 'Flight routes in the Southern Hemisphere: Direct vs Polar stopovers',
    summary: 'Diagram analysis questioning why non-stop flights between Sydney and Buenos Aires often follow specific great circle routes over the Pacific.',
    url: 'https://t.me/InvestigacionPlana/882',
    commentCount: 1120,
    engagementScore: 28900,
    mainNarrativeId: 'narrative-02',
    mainNarrativeTitle: 'Personal observation as primary evidence',
    predominantTone: 'Deductive & Skeptical',
    claims: [
      'Southern hemisphere flight paths reflect non-standard map projections',
      'Direct polar routes are less frequent than Pacific great circle paths'
    ]
  }
];

export const MOCK_NARRATIVES: Narrative[] = [
  {
    id: 'narrative-01',
    code: 'NARRATIVE 01',
    title: 'Institutional Distrust & Systemic Deception',
    description: 'Framing that asserts governments, space agencies (NASA, ESA), and academic institutions systematically hide fundamental truths from the public to maintain financial and psychological control.',
    prevalencePercentage: 38,
    emotionalProfile: 'High suspicion, moral indignation, institutional cynicism',
    representativeKeywords: ['NASA', 'Lies', 'Corrupt System', 'Indoctrination', 'Taxpayer Billions', 'CGI', 'Fake News'],
    associatedClaims: [
      'Space agency budgets are squandered on synthetic imagery',
      'Academic curricula train obedience rather than critical inquiry',
      'Global organizations maintain secret pacts like the Antarctic Treaty'
    ],
    typicalLinguisticPatterns: [
      '"They don’t want you to know..."',
      '"Follow the money behind..."',
      '"Taught in schools without proof"'
    ],
    relatedSourceCount: 42,
    timeEvolution: [
      { date: 'Feb', score: 28 },
      { date: 'Apr', score: 32 },
      { date: 'Jun', score: 36 },
      { date: 'Aug', score: 38 }
    ],
    audienceReactionSummary: 'Mainly validation and shared suspicion among adherents; severe ridicule and counter-debunking from opposing users.',
    dna: {
      institutionalDistrust: 94,
      usVsThemLanguage: 86,
      groupVictimization: 72,
      perceivedThreat: 68,
      linguisticCertainty: 82,
      emotionalActivation: 78,
      anecdotalEvidence: 64,
      conspiracyFraming: 90,
      hostility: 58,
      collectiveIdentity: 75
    }
  },
  {
    id: 'narrative-02',
    code: 'NARRATIVE 02',
    title: 'Personal Observation & Empirical Intuition',
    description: 'Premise that individual sensory experience (seeing flat horizons, water finding its level, laser visibility) is vastly more trustworthy than abstract mathematical or astronomical models.',
    prevalencePercentage: 29,
    emotionalProfile: 'Epistemic self-reliance, curiosity, intellectual empowerment',
    representativeKeywords: ['Water Level', 'Laser Test', 'Curvature Math', 'Perspective', 'My Own Eyes', 'Horizon Line'],
    associatedClaims: [
      'Water bodies always rest in a flat, uncurved plane at scale',
      'High-altitude balloons show a flat horizon at eye level',
      'Atmospheric visibility exceeds theoretical curvature drop calculations'
    ],
    typicalLinguisticPatterns: [
      '"Test it yourself with a camera..."',
      '"Trust your eyes, not their math..."',
      '"Where is the calculated curve?"'
    ],
    relatedSourceCount: 31,
    timeEvolution: [
      { date: 'Feb', score: 22 },
      { date: 'Apr', score: 25 },
      { date: 'Jun', score: 28 },
      { date: 'Aug', score: 29 }
    ],
    audienceReactionSummary: 'Sparks technical debates, methodology counter-arguments (refraction, scale), and calls for reproducible experiments.',
    dna: {
      institutionalDistrust: 68,
      usVsThemLanguage: 54,
      groupVictimization: 42,
      perceivedThreat: 38,
      linguisticCertainty: 88,
      emotionalActivation: 52,
      anecdotalEvidence: 96,
      conspiracyFraming: 45,
      hostility: 32,
      collectiveIdentity: 60
    }
  },
  {
    id: 'narrative-03',
    code: 'NARRATIVE 03',
    title: 'Coordinated Global Cartel & Enclosed Realm',
    description: 'Deep conspiracy framework depicting Earth as a contained system or plane bounded by ice walls, governed by an elite cartel hiding infinite resources or spiritual truth.',
    prevalencePercentage: 21,
    emotionalProfile: 'Existential awe, acute paranoia, apocalyptic urgency',
    representativeKeywords: ['Ice Wall', 'Firmament', 'Beyond Antarctica', 'Globalist Elite', 'Enclosed System', 'Hidden Continents'],
    associatedClaims: [
      'Antarctica is an outer rim holding oceans in place',
      'Governments hide lands beyond the known map',
      'The dome or firmament isolates humanity spiritually'
    ],
    typicalLinguisticPatterns: [
      '"What is beyond the rim..."',
      '"54 nations signed the treaty..."',
      '"The ultimate secret of human origin"'
    ],
    relatedSourceCount: 22,
    timeEvolution: [
      { date: 'Feb', score: 18 },
      { date: 'Apr', score: 20 },
      { date: 'Jun', score: 21 },
      { date: 'Aug', score: 21 }
    ],
    audienceReactionSummary: 'Elicits intense fascination within esoteric niches and strong hostility/mockery from main scientific commentators.',
    dna: {
      institutionalDistrust: 92,
      usVsThemLanguage: 90,
      groupVictimization: 81,
      perceivedThreat: 85,
      linguisticCertainty: 76,
      emotionalActivation: 89,
      anecdotalEvidence: 70,
      conspiracyFraming: 98,
      hostility: 65,
      collectiveIdentity: 82
    }
  },
  {
    id: 'narrative-04',
    code: 'NARRATIVE 04',
    title: 'Awakened Minority vs. Ridiculing Mainstream',
    description: 'Group identity dynamic framed around feeling enlightened while being mocked, persecuted, or censored by mainstream society and peer networks.',
    prevalencePercentage: 12,
    emotionalProfile: 'Resilience, group solidarity, moral superiority, persecution complex',
    representativeKeywords: ['Woken Up', 'Sheeple', 'Ridiculed', 'Censorship', 'Independent Mind', 'Truth Seekers'],
    associatedClaims: [
      'Questioning global science leads to social cancellation',
      'Adherents possess moral courage to face peer pressure',
      'Mainstream insults prove the threat to official narratives'
    ],
    typicalLinguisticPatterns: [
      '"They laugh because they are blind..."',
      '"Censored for asking simple questions"',
      '"Stay strong, truth seekers"'
    ],
    relatedSourceCount: 15,
    timeEvolution: [
      { date: 'Feb', score: 10 },
      { date: 'Apr', score: 11 },
      { date: 'Jun', score: 12 },
      { date: 'Aug', score: 12 }
    ],
    audienceReactionSummary: 'High internal bonding and peer validation; external hostility and social distancing.',
    dna: {
      institutionalDistrust: 78,
      usVsThemLanguage: 95,
      groupVictimization: 94,
      perceivedThreat: 76,
      linguisticCertainty: 80,
      emotionalActivation: 84,
      anecdotalEvidence: 55,
      conspiracyFraming: 68,
      hostility: 48,
      collectiveIdentity: 92
    }
  }
];

export const MOCK_COMMENTS: CommentReaction[] = [
  {
    id: 'c-01',
    text: 'Nobody has ever shown a single continuous unedited video of a satellite spinning around a curved globe. It is all digital art.',
    platform: 'YouTube',
    author: 'Usuario_Inquisidor88',
    category: 'Distrust',
    emotionalIntensity: 8,
    linguisticMarkers: ['institutional distrust', 'negation', 'demand for unedited proof'],
    date: '2026-08-04'
  },
  {
    id: 'c-02',
    text: 'You literally just have to look through a telescope at Jupiter to see spherical rotation and moons orbiting in real time.',
    platform: 'YouTube',
    author: 'AstroPro_Manuel',
    category: 'Disagreement',
    emotionalIntensity: 6,
    linguisticMarkers: ['direct observation rebuttal', 'empirical astronomical reference'],
    date: '2026-08-04'
  },
  {
    id: 'c-03',
    text: 'It is terrifying how people in 2026 willingly reject 2,500 years of physics and Eratosthenes calculations.',
    platform: 'X (Twitter)',
    author: 'Elena_PhysicsCL',
    category: 'Indignation',
    emotionalIntensity: 9,
    linguisticMarkers: ['historical reference', 'concern for scientific literacy'],
    date: '2026-08-03'
  },
  {
    id: 'c-04',
    text: 'I used to laugh at flat earthers until I researched the laser experiments over Lake Balaton. Now I have serious doubts about what we were taught.',
    platform: 'TikTok',
    author: 'Carlos_M_BsAs',
    category: 'Uncertainty',
    emotionalIntensity: 7,
    linguisticMarkers: ['belief shift', 'anecdotal shift', 'doubt in schooling'],
    date: '2026-08-02'
  },
  {
    id: 'c-05',
    text: 'This video is 100% facts! NASA is a money siphon pretending to explore space while holding back real physics.',
    platform: 'YouTube',
    author: 'Resistencia_Digital',
    category: 'Support',
    emotionalIntensity: 9,
    linguisticMarkers: ['unconditional support', 'agency attack'],
    date: '2026-08-03'
  },
  {
    id: 'c-06',
    text: 'Imagine thinking millions of pilots, navigators, scientists and engineers across 200 countries are keeping a secret for no reason. Total nonsense.',
    platform: 'Reddit',
    author: 'u/LogicaPrimerPaso',
    category: 'Ridicule',
    emotionalIntensity: 8,
    linguisticMarkers: ['absurdity argument', 'scale of conspiracy rebuttal'],
    date: '2026-08-01'
  },
  {
    id: 'c-07',
    text: 'Why does the Antarctic Treaty exist then? Why can I not buy a plane ticket and fly straight south over the pole?',
    platform: 'TikTok',
    author: 'RutaSur_Investiga',
    category: 'Questions',
    emotionalIntensity: 7,
    linguisticMarkers: ['geopolitical inquiry', 'challenge to travel norms'],
    date: '2026-08-02'
  },
  {
    id: 'c-08',
    text: 'You can actually fly over Antarctica! Qantas and Antarctic Airways do polar scenic flights every single year. Search for flight QF28.',
    platform: 'TikTok',
    author: 'Piloto_Real',
    category: 'Agreement',
    emotionalIntensity: 5,
    linguisticMarkers: ['fact correction', 'commercial flight reference'],
    date: '2026-08-02'
  },
  {
    id: 'c-09',
    text: 'Another brainwashed bot defending the government. You probably believe money grows on trees too.',
    platform: 'X (Twitter)',
    author: 'MundoSinVelo',
    category: 'Hostility',
    emotionalIntensity: 9,
    linguisticMarkers: ['ad hominem attack', 'accusation of brainwashing'],
    date: '2026-08-01'
  },
  {
    id: 'c-10',
    text: 'I respect your freedom to ask questions, but light refraction in warm air layers near water surface completely explains the laser visibility.',
    platform: 'YouTube',
    author: 'OpticaYFisica',
    category: 'Disagreement',
    emotionalIntensity: 4,
    linguisticMarkers: ['polite technical rebuttal', 'atmospheric optics explanation'],
    date: '2026-07-31'
  },
  {
    id: 'c-11',
    text: 'If the earth were flat, where are the pictures of the edge? Show me one single photo of the edge and I will convert.',
    platform: 'Reddit',
    author: 'u/GeometriaSimple',
    category: 'Rejection',
    emotionalIntensity: 7,
    linguisticMarkers: ['request for visual evidence', 'sharp challenge'],
    date: '2026-07-30'
  },
  {
    id: 'c-12',
    text: 'The edge is the Antarctic ice wall surrounding us. It holds the oceans. You do not fall off, you reach the ice continent.',
    platform: 'Reddit',
    author: 'u/BordePlano2026',
    category: 'Support',
    emotionalIntensity: 8,
    linguisticMarkers: ['cosmological assertion', 'ice wall definition'],
    date: '2026-07-30'
  }
];

export const MOCK_CONNECTIONS: Connection[] = [
  {
    id: 'conn-01',
    targetTopic: 'Institutional Distrust & Anti-System Discourses',
    connectionStrength: 92,
    relationCategory: 'Shared Epistemic Framing',
    description: 'High co-occurrence of distrust toward public health bodies, scientific peer-review processes, and multilateral authorities.',
    whyConnected: {
      sharedKeywords: ['System deception', 'Follow the money', 'Unverified consensus', 'Indoctrination', 'Corrupt authorities'],
      sharedNarratives: ['Institutional Distrust', 'Awakened Minority'],
      sharedLinguisticPatterns: ['"They don’t want you to know..."', '"Question everything you were taught"'],
      sourceOverlapPercentage: 78,
      audienceOverlapPercentage: 84,
      emotionalSimilarity: 'High coincidence in moral indignation & institutional cynicism.'
    }
  },
  {
    id: 'conn-02',
    targetTopic: 'NASA & Deep Space Exploration Skepticism',
    connectionStrength: 96,
    relationCategory: 'Direct Theme Overlap',
    description: 'Immediate thematic intersection questioning moon landings, Mars rover photos, and space budget allocations.',
    whyConnected: {
      sharedKeywords: ['Moon landing fake', 'CGI renders', 'Space budget', 'Green screen', 'Studio lighting'],
      sharedNarratives: ['Institutional Distrust', 'Coordinated Global Cartel'],
      sharedLinguisticPatterns: ['"Photoshop compositing"', '"Hollywood production"'],
      sourceOverlapPercentage: 89,
      audienceOverlapPercentage: 91,
      emotionalSimilarity: 'Identical distrust profile focused on official space imaging.'
    }
  },
  {
    id: 'conn-03',
    targetTopic: 'Vaccine & Medical Consensus Skepticism',
    connectionStrength: 64,
    relationCategory: 'Cross-Domain Epistemic Pattern',
    description: 'Substantial audience and vocabulary overlap between questioning astronomical consensus and questioning epidemiological consensus.',
    whyConnected: {
      sharedKeywords: ['Big Pharma / Big Science', 'Peer review censorship', 'Wake up', 'Control mechanism'],
      sharedNarratives: ['Awakened Minority', 'Personal Observation'],
      sharedLinguisticPatterns: ['"Do your own research"', '"Censored scientists"'],
      sourceOverlapPercentage: 54,
      audienceOverlapPercentage: 68,
      emotionalSimilarity: 'Shared feeling of moral courage facing institutional pressure.'
    }
  },
  {
    id: 'conn-04',
    targetTopic: 'Mainstream Media (MSM) Distrust & Alternative Outlets',
    connectionStrength: 82,
    relationCategory: 'Channel & Media Rejection',
    description: 'Rejection of legacy journalism as propaganda organs for global elites, driving users to closed Telegram or Rumble channels.',
    whyConnected: {
      sharedKeywords: ['Mass media lies', 'Narrative push', 'Censored truth', 'Independent creators'],
      sharedNarratives: ['Institutional Distrust', 'Awakened Minority'],
      sharedLinguisticPatterns: ['"Paid journalists"', '"Turn off the TV"'],
      sourceOverlapPercentage: 82,
      audienceOverlapPercentage: 79,
      emotionalSimilarity: 'Skeptical detachment and hostility towards mainstream anchors.'
    }
  },
  {
    id: 'conn-05',
    targetTopic: 'Climate Change Counter-Narratives',
    connectionStrength: 58,
    relationCategory: 'Regulatory Distrust Pattern',
    description: 'Moderate overlap in arguments framing global environmental policies as international taxation mechanisms or elite control.',
    whyConnected: {
      sharedKeywords: ['Global agenda', 'Taxation ploy', 'Model manipulation', 'Controlled data'],
      sharedNarratives: ['Coordinated Global Cartel'],
      sharedLinguisticPatterns: ['"Agenda 2030"', '"Data manipulation"'],
      sourceOverlapPercentage: 42,
      audienceOverlapPercentage: 56,
      emotionalSimilarity: 'Resistance to top-down global policy regulations.'
    }
  }
];

export const MOCK_LIBRARY: LibraryCollection[] = [
  {
    id: 'lib-01',
    title: 'Flat Earth / Terraplanismo',
    category: 'Topics',
    itemCount: 1420,
    lastUpdated: 'Aug 05, 2026',
    description: 'Active research on empirical skepticism, laser curvature tests, and anti-NASA discourse.',
    tags: ['Active', 'Cosmology', 'Skepticism'],
    sampleTopicId: 'flat-earth-demo'
  },
  {
    id: 'lib-02',
    title: 'AI Misinformation & Synthetic Media',
    category: 'Topics',
    itemCount: 890,
    lastUpdated: 'Jul 29, 2026',
    description: 'Investigation into deepfake audio and AI-generated social media personas in political campaigns.',
    tags: ['AI', 'Deepfakes', 'Elections']
  },
  {
    id: 'lib-03',
    title: 'Argentina World Cup Narratives & National Pride',
    category: 'Collections',
    itemCount: 3100,
    lastUpdated: 'Jul 12, 2026',
    description: 'Discourse dynamics surrounding sports triumph, emotional euphoria, and national identity.',
    tags: ['Sports', 'Culture', 'Identity']
  },
  {
    id: 'lib-04',
    title: 'Cancel Culture & Online Stigmatization',
    category: 'Collections',
    itemCount: 1250,
    lastUpdated: 'Jun 18, 2026',
    description: 'Linguistic escalation, pile-ons, and moral outrage dynamics on social platforms.',
    tags: ['Sociology', 'Polarization', 'Outrage']
  },
  {
    id: 'lib-05',
    title: 'Climate Policy Debates 2026',
    category: 'Saved analyses',
    itemCount: 640,
    lastUpdated: 'May 30, 2026',
    description: 'Comparative analysis of environmental activism vs industrial counter-framing.',
    tags: ['Climate', 'Policy', 'Media']
  }
];

export const SAMPLE_SEARCH_TOPICS = [
  { name: 'Flat Earth / Terraplanismo', tag: 'Primary Demo Dataset', id: 'flat-earth-demo' },
  { name: 'AI Misinformation', tag: 'Synthetic Media', id: 'ai-misinfo' },
  { name: 'Argentina World Cup', tag: 'Sports & Identity', id: 'world-cup' },
  { name: 'Cancel Culture', tag: 'Social Outrage', id: 'cancel-culture' },
  { name: 'Climate Change Discourses', tag: 'Environmental Debate', id: 'climate-change' }
];
