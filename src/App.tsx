import React, { useState } from 'react';
import { ViewMode, ExploreTab, Narrative } from './types';
import {
  FLAT_EARTH_TOPIC,
  MOCK_PUBLICATIONS,
  MOCK_NARRATIVES,
  MOCK_COMMENTS,
  MOCK_CONNECTIONS,
  MOCK_LIBRARY,
} from './data/mockData';

import { Navigation } from './components/Navigation';
import { DisclaimerModal } from './components/DisclaimerModal';
import { HomeView } from './components/views/HomeView';
import { ExploreTopicView } from './components/views/ExploreTopicView';
import { OverviewView } from './components/views/OverviewView';
import { SourcesView } from './components/views/SourcesView';
import { NarrativesView } from './components/views/NarrativesView';
import { NarrativeDnaView } from './components/views/NarrativeDnaView';
import { ReactionsView } from './components/views/ReactionsView';
import { ConnectionsView } from './components/views/ConnectionsView';
import { AnalyzePublicationView } from './components/views/AnalyzePublicationView';
import { LibraryView } from './components/views/LibraryView';

export default function App() {
  const [activeView, setActiveView] = useState<ViewMode>('home');
  const [exploreTab, setExploreTab] = useState<ExploreTab>('overview');
  const [selectedNarrative, setSelectedNarrative] = useState<Narrative | null>(null);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  // Handle topic search / launch
  const handleSearchTopic = (query: string) => {
    setActiveView('explore');
    setExploreTab('overview');
    setSelectedNarrative(null);
  };

  // Direct navigation handler from top/bottom bar
  const handleSelectView = (view: ViewMode) => {
    setActiveView(view);
    if (view === 'narratives') {
      // Direct jump to narratives
      setExploreTab('narratives');
      setSelectedNarrative(null);
    } else if (view === 'connections') {
      setExploreTab('connections');
    }
  };

  // Sub-tab selection inside Explore view
  const handleSelectExploreTab = (tab: ExploreTab) => {
    setExploreTab(tab);
    if (tab !== 'narratives') {
      setSelectedNarrative(null);
    }
  };

  // Open narrative detail (DNA View)
  const handleSelectNarrative = (narrative: Narrative) => {
    setSelectedNarrative(narrative);
  };

  return (
    <div className="min-h-screen bg-[#E7E8EB] text-[#292C32] font-sans selection:bg-blue-600 selection:text-white antialiased flex flex-col">
      {/* Navigation Header / Bar */}
      <Navigation
        activeView={activeView}
        onSelectView={handleSelectView}
        activeTopicName={FLAT_EARTH_TOPIC.name}
      />

      {/* Main Content Area */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
        {/* VIEW 1: HOME */}
        {activeView === 'home' && (
          <HomeView
            onSearchTopic={handleSearchTopic}
            onSelectView={handleSelectView}
            onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
          />
        )}

        {/* VIEW 2: EXPLORE WORKSPACE (Overview, Sources, Narratives, Reactions, Connections) */}
        {activeView === 'explore' && (
          <ExploreTopicView
            topic={FLAT_EARTH_TOPIC}
            activeTab={exploreTab}
            onSelectTab={handleSelectExploreTab}
          >
            {exploreTab === 'overview' && (
              <OverviewView
                topic={FLAT_EARTH_TOPIC}
                onNavigateTab={handleSelectExploreTab}
              />
            )}

            {exploreTab === 'sources' && (
              <SourcesView publications={MOCK_PUBLICATIONS} />
            )}

            {exploreTab === 'narratives' && (
              <>
                {selectedNarrative ? (
                  <NarrativeDnaView
                    narrative={selectedNarrative}
                    allNarratives={MOCK_NARRATIVES}
                    onBack={() => setSelectedNarrative(null)}
                  />
                ) : (
                  <NarrativesView
                    narratives={MOCK_NARRATIVES}
                    onSelectNarrative={handleSelectNarrative}
                  />
                )}
              </>
            )}

            {exploreTab === 'reactions' && (
              <ReactionsView comments={MOCK_COMMENTS} />
            )}

            {exploreTab === 'connections' && (
              <ConnectionsView connections={MOCK_CONNECTIONS} />
            )}
          </ExploreTopicView>
        )}

        {/* VIEW 3: MANUAL ANALYZE PUBLICATION */}
        {activeView === 'analyze' && <AnalyzePublicationView />}

        {/* VIEW 4: DIRECT NARRATIVES TAB */}
        {activeView === 'narratives' && (
          <div className="space-y-6">
            {selectedNarrative ? (
              <NarrativeDnaView
                narrative={selectedNarrative}
                allNarratives={MOCK_NARRATIVES}
                onBack={() => setSelectedNarrative(null)}
              />
            ) : (
              <NarrativesView
                narratives={MOCK_NARRATIVES}
                onSelectNarrative={handleSelectNarrative}
              />
            )}
          </div>
        )}

        {/* VIEW 5: DIRECT CONNECTIONS TAB */}
        {activeView === 'connections' && (
          <ConnectionsView connections={MOCK_CONNECTIONS} />
        )}

        {/* VIEW 6: LIBRARY */}
        {activeView === 'library' && (
          <LibraryView
            collections={MOCK_LIBRARY}
            onOpenTopic={(id) => {
              setActiveView('explore');
              setExploreTab('overview');
            }}
          />
        )}
      </div>

      {/* Methodological Principles Modal */}
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
      />
    </div>
  );
}
