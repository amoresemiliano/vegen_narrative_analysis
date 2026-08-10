export type ViewMode = 'home' | 'explore' | 'analyze' | 'narratives' | 'connections' | 'library';

export type ExploreTab = 'overview' | 'sources' | 'narratives' | 'reactions' | 'connections';

export type MethodologyType = 'observation' | 'correlation' | 'interpretation' | 'causality_warning';

export interface TopicResearch {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  period: string;
  publicationCount: number;
  commentCount: number;
  sourceCount: number;
  countries: string[];
  temperature: {
    intensityScore: number; // 0 - 100
    intensityLabel: 'Low' | 'Moderate' | 'High' | 'Critical';
    predominantReaction: string;
    polarizationLevel: 'Low' | 'Moderate' | 'High' | 'Extreme';
    emotionalActivation: 'Low' | 'Moderate' | 'High' | 'Extreme';
    distrustLevel: number; // 0 - 100
  };
  keywords: { word: string; count: number; sentiment: 'neutral' | 'negative' | 'positive' }[];
  entities: { name: string; type: 'Organization' | 'Person' | 'Concept' | 'Location'; mentions: number }[];
  emotions: { emotion: string; percentage: number; color: string }[];
  sentimentBreakdown: { positive: number; neutral: number; negative: number };
  temporalData: { date: string; volume: number; sentimentIndex: number; polarizationIndex: number }[];
}

export interface Publication {
  id: string;
  topicId: string;
  sourcePlatform: 'X (Twitter)' | 'YouTube' | 'TikTok' | 'Reddit' | 'News Blog' | 'Telegram' | 'Podcast';
  author: string;
  authorHandle: string;
  country: string;
  countryCode: string;
  date: string;
  title: string;
  summary: string;
  fullText?: string;
  url: string;
  commentCount: number;
  engagementScore: number; // e.g., 45200
  mainNarrativeId: string;
  mainNarrativeTitle: string;
  predominantTone: string;
  claims: string[];
  sampleComments?: string[];
}

export interface NarrativeDnaDimensions {
  institutionalDistrust: number; // 0-100
  usVsThemLanguage: number;
  groupVictimization: number;
  perceivedThreat: number;
  linguisticCertainty: number;
  emotionalActivation: number;
  anecdotalEvidence: number;
  conspiracyFraming: number;
  hostility: number;
  collectiveIdentity: number;
}

export interface Narrative {
  id: string;
  code: string; // e.g. "NARRATIVE 01"
  title: string;
  description: string;
  prevalencePercentage: number;
  emotionalProfile: string;
  representativeKeywords: string[];
  associatedClaims: string[];
  typicalLinguisticPatterns: string[];
  relatedSourceCount: number;
  timeEvolution: { date: string; score: number }[];
  audienceReactionSummary: string;
  dna: NarrativeDnaDimensions;
}

export interface CommentReaction {
  id: string;
  text: string;
  platform: string;
  author: string;
  category: 'Support' | 'Agreement' | 'Disagreement' | 'Rejection' | 'Ridicule' | 'Hostility' | 'Indignation' | 'Distrust' | 'Fear' | 'Anger' | 'Uncertainty' | 'Questions';
  emotionalIntensity: number; // 1-10
  linguisticMarkers: string[];
  date: string;
}

export interface Connection {
  id: string;
  targetTopic: string;
  connectionStrength: number; // 0 - 100
  relationCategory: string; // e.g., "Epistemic Shared Pattern"
  description: string;
  whyConnected: {
    sharedKeywords: string[];
    sharedNarratives: string[];
    sharedLinguisticPatterns: string[];
    sourceOverlapPercentage: number;
    audienceOverlapPercentage: number;
    emotionalSimilarity: string;
  };
}

export interface ManualAnalysisResult {
  url: string;
  source: string;
  author: string;
  country: string;
  date: string;
  text: string;
  commentsAnalyzedCount: number;
  contentAnalysis: {
    summary: string;
    mainTopic: string;
    keywords: string[];
    entities: string[];
    apparentIntent: string;
    targetAudience: string;
    tone: string;
    emotionalLanguage: string;
    framing: string;
    keyClaims: string[];
    relevantLinguisticPatterns: string[];
  };
  audienceReaction: {
    agreement: number;
    disagreement: number;
    validation: number;
    rejection: number;
    support: number;
    ridicule: number;
    hostility: number;
    indignation: number;
    distrust: number;
    uncertainty: number;
    questions: number;
    polarizationScore: number;
    emotionalIntensityScore: number;
  };
}

export interface LibraryCollection {
  id: string;
  title: string;
  category: 'Topics' | 'Sources' | 'Creators' | 'Saved analyses' | 'Collections';
  itemCount: number;
  lastUpdated: string;
  description: string;
  tags: string[];
  sampleTopicId?: string;
}
