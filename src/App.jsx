import React from 'react';
import Header from './components/Header';
import GrainOverlay from './components/GrainOverlay';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import { hasExperience } from './data/profile.js';
import Projects from './components/Projects';
import GitHubActivity from './components/GitHubActivity';
import LearningJourney from './components/LearningJourney';
import Contact from './components/Contact';

// Nav order matches render order. Experience appears once LinkedIn data is filled in.
const sections = [
  { id: 'about', label: 'About' },
  ...(hasExperience ? [{ id: 'experience', label: 'Experience' }] : []),
  { id: 'projects', label: 'Projects' },
  { id: 'github', label: 'GitHub' },
  { id: 'learning', label: 'Learning' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground isolate">
      <GrainOverlay />
      <Header sections={sections} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <GitHubActivity />
        <LearningJourney />
        <Contact />
      </main>
    </div>
  );
}

export default App;
