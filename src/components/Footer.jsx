import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Terminal, Sparkles, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Footer = ({ onOpenTerminal }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 relative overflow-hidden">
      <div className="site-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Left Monogram Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400/20 via-violet-500/20 to-blue-500/10 border border-cyan-400/30 flex items-center justify-center font-display font-bold text-xs text-cyan-300">
                {personalInfo.monogram}
              </div>
              <span className="font-display font-bold text-base text-white tracking-wide">
                {personalInfo.name}
              </span>
            </div>
            <p className="font-mono text-xs text-slate-400">
              AI/ML Developer in Progress • Dayananda Sagar University '28
            </p>
          </div>

          {/* Center: Live Time in Bengaluru */}
          <div className="flex flex-col items-center gap-1.5 p-3 px-5 rounded-2xl bg-white/[0.02] border border-white/5 font-mono text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-slate-400">BENGALURU, IN</span>
              <span className="text-cyan-300 font-semibold">{currentTime || 'IST'}</span>
            </div>
            <span className="text-[10px] text-slate-500">UTC+5:30 (India Standard Time)</span>
          </div>

          {/* Right: Quick Links & Back to Top */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenTerminal}
              className="p-2.5 rounded-full bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 transition-colors"
              title="Launch Hidden Terminal"
              aria-label="Open Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-300 transition-colors flex items-center gap-1 text-xs font-mono ml-2"
              title="Back to Top"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. Designed &amp; Engineered with React &amp; Modern Web Standards.
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Built for intelligent computing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
