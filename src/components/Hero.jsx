import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Send, BrainCircuit, Terminal, ArrowUpRight } from 'lucide-react';
import NeuralCanvas from './NeuralCanvas';
import { personalInfo } from '../data/portfolioData';

const Hero = ({ onOpenTerminal }) => {
  // Stagger variants for name reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden cyber-grid"
    >
      {/* Background Interactive Neural Canvas */}
      <NeuralCanvas />

      {/* Atmospheric Ambient Glowing Orbs */}
      <div className="glow-orb glow-cyan w-[550px] h-[550px] -top-32 -left-32" />
      <div className="glow-orb glow-violet w-[600px] h-[600px] -bottom-48 -right-48" />

      {/* Foreground Content */}
      <div className="site-container relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Animated Status Pill */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="status-badge shadow-lg shadow-emerald-950/30 backdrop-blur-md">
              <span className="pulse-dot" />
              <span>{personalInfo.currentStatus}</span>
              <span className="text-emerald-500/40">•</span>
              <span className="text-emerald-300/80 font-mono text-[11px] hidden sm:inline">
                DSU '28
              </span>
            </div>
          </motion.div>

          {/* Staggered Cinematic Monolith Name */}
          <motion.div variants={itemVariants} className="mb-4">
            <h1 className="font-display font-black tracking-tight leading-[0.92] uppercase select-none text-slate-100">
              <span className="block text-[13vw] sm:text-[10vw] md:text-[7.5rem] lg:text-[8.5rem] gradient-text-subtle hover:tracking-normal transition-all duration-500">
                HADIUZ
              </span>
              <span className="block text-[13vw] sm:text-[10vw] md:text-[7.5rem] lg:text-[8.5rem] gradient-text-cyan-violet">
                ZAMAN
              </span>
            </h1>
          </motion.div>

          {/* Tagline Subtitle */}
          <motion.div variants={itemVariants} className="mb-6 max-w-2xl">
            <h2 className="font-heading text-lg sm:text-2xl md:text-3xl font-medium text-slate-300">
              <span className="text-cyan-400 font-semibold">{personalInfo.title}.</span>{' '}
              <span className="text-slate-400">{personalInfo.tagline}</span>
            </h2>
          </motion.div>

          {/* Editorial Introduction */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl font-light leading-relaxed mb-10"
          >
            Computer Science and Artificial Intelligence student at{' '}
            <span className="text-slate-200 font-medium">Dayananda Sagar University</span>,
            passionate about mathematical learning foundations, predictive analytics, intelligent
            software systems, and building practical technology projects.
          </motion.p>

          {/* Calls to Action */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16"
          >
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="btn-primary"
            >
              <span>Explore My Work</span>
              <ArrowUpRight className="w-4 h-4 text-slate-900 font-bold" />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="btn-secondary"
            >
              <Send className="w-4 h-4 text-cyan-400" />
              <span>Let's Connect</span>
            </a>

            <button
              onClick={onOpenTerminal}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-3 rounded-full bg-slate-900/80 border border-cyan-500/20 text-cyan-300/80 hover:text-cyan-300 hover:border-cyan-400/40 font-mono text-xs transition-all backdrop-blur-md"
              title="Open The Hidden Layer Terminal"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>[~] Open Terminal</span>
            </button>
          </motion.div>

          {/* Key Spec Badges */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 pt-4 border-t border-white/5 w-full max-w-2xl text-left"
          >
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="font-mono text-[10px] text-cyan-400 tracking-wider uppercase mb-1">
                Specialization
              </div>
              <div className="text-xs sm:text-sm font-heading font-medium text-slate-200">
                AI &amp; Machine Learning
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="font-mono text-[10px] text-violet-400 tracking-wider uppercase mb-1">
                University
              </div>
              <div className="text-xs sm:text-sm font-heading font-medium text-slate-200">
                Dayananda Sagar Univ.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 col-span-2 sm:col-span-1">
              <div className="font-mono text-[10px] text-emerald-400 tracking-wider uppercase mb-1">
                Graduation
              </div>
              <div className="text-xs sm:text-sm font-heading font-medium text-slate-200">
                Class of 2028
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
          onClick={(e) => scrollToSection(e, 'about')}
        >
          <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
