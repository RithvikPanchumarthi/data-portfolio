import React from 'react';
import { Linkedin } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience, { hasExperience } from './components/Experience';
import Projects from './components/Projects';
import GitHubActivity from './components/GitHubActivity';
import LearningJourney from './components/LearningJourney';
import BuilderStats from './components/BuilderStats';
import Contact from './components/Contact';

// Nav order matches render order. Experience appears once LinkedIn data is filled in.
const sections = [
  { id: 'about', label: 'About' },
  ...(hasExperience ? [{ id: 'experience', label: 'Experience' }] : []),
  { id: 'projects', label: 'Projects' },
  { id: 'github', label: 'GitHub' },
  { id: 'learning', label: 'Learning' },
  { id: 'builder', label: 'AI Builder' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  return (
    <div className="App bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header sections={sections} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <GitHubActivity />
        <LearningJourney />
        <BuilderStats />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 dark:text-gray-500 py-8 border-t border-gray-800 dark:border-gray-700">
        <div className="container-max text-center">
          <a
            href="https://www.linkedin.com/in/rithvikpanchumarthi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-[#0A66C2] text-white text-sm font-medium hover:bg-[#004182] transition-colors"
          >
            <Linkedin size={16} />
            Follow me on LinkedIn for data engineering updates
          </a>
          <p className="mb-4">
            © {new Date().getFullYear()} Rithvik Panchumarthi. Built with React & Tailwind CSS.
          </p>
          <p className="text-sm">
            "Data is the new oil, but unlike oil, data is reusable and grows more valuable with use."
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
