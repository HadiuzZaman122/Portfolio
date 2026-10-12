import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, ExternalLink, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' }
];

const Navbar = ({ onOpenTerminal }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Detect active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-navbar py-3 shadow-2xl shadow-cyan-950/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="site-container flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group text-decoration-none"
            aria-label="Hadiuz Zaman Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/20 via-violet-500/20 to-blue-500/10 border border-cyan-400/30 flex items-center justify-center font-display font-bold text-sm tracking-wider text-cyan-300 group-hover:border-cyan-300 group-hover:scale-105 transition-all duration-300 shadow-sm shadow-cyan-500/20">
              {personalInfo.monogram}
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm md:text-base tracking-wide text-slate-100 group-hover:text-cyan-300 transition-colors">
                {personalInfo.name}
              </span>
              <span className="font-mono text-[10px] text-cyan-400/80 tracking-widest uppercase">
                AI / ML • {personalInfo.graduationYear}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-colors duration-200 ${
                    isActive
                      ? 'text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/10 rounded-full border border-cyan-400/30 shadow-[0_0_12px_rgba(0,240,255,0.2)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTAs (Terminal Trigger + GitHub Link) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 hover:text-cyan-200 font-mono text-xs transition-all duration-200 hover:shadow-[0_0_15px_rgba(0,240,255,0.25)]"
              title="Launch Terminal (The Hidden Layer) [Ctrl + ~]"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>SYS_SHELL</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-400/10 border border-cyan-400/20 text-cyan-400/80">
                ~
              </span>
            </button>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300"
              aria-label="Launch Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[60px] bg-slate-950/95 backdrop-blur-2xl z-40 md:hidden flex flex-col p-6 border-b border-white/10"
          >
            <div className="flex flex-col gap-3 my-auto">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-2xl font-display font-semibold text-slate-200 hover:text-cyan-400 py-2 border-b border-white/5"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <div className="pt-6 flex flex-col gap-3 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="w-full py-3 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 flex items-center justify-center gap-2 font-mono text-sm"
              >
                <Terminal className="w-4 h-4" />
                Launch Hidden Layer Terminal
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
