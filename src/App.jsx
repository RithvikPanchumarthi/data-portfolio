import React from 'react';
import GrainOverlay from './components/GrainOverlay';
import EliasHero from './components/EliasHero';
import BuilderStats from './components/BuilderStats';
import About from './components/About';
import Experience from './components/Experience';
import PipelineArchitecture from './components/PipelineArchitecture';
import Projects from './components/Projects';
import GitHubActivity from './components/GitHubActivity';
import LearningJourney from './components/LearningJourney';
import Contact from './components/Contact';

// The Elias hero carries the only navigation (its own navbar); there is no sticky Header.
function App() {
  return (
    <div className="min-h-screen bg-background text-foreground isolate">
      <GrainOverlay />
      <main>
        <EliasHero />
        <section aria-label="Building with AI" className="pt-24 md:pt-32">
          <BuilderStats />
        </section>
        <About />
        <Experience />
        <PipelineArchitecture />
        <Projects />
        <GitHubActivity />
        <LearningJourney />
        <Contact />
      </main>
    </div>
  );
}

export default App;
