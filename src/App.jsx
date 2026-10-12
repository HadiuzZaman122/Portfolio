import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import HiddenLayerTerminal from './components/HiddenLayerTerminal';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Global hotkey shortcut: pressing '`' or '~' opens terminal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === '`' || e.key === '~') && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07080a] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden font-body">
      {/* Tactile subtle grain overlay */}
      <div className="grain-overlay" />

      {/* Smooth magnetic custom cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Portfolio Sections */}
      <main id="main-content">
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>

      {/* Polished Editorial Footer */}
      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Developer Easter Egg: The Hidden Layer Terminal */}
      <HiddenLayerTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}

export default App;
