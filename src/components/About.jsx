import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Code2, Layout, Sparkles, BookOpen, Layers } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

const iconMap = {
  Brain: Brain,
  TrendingUp: TrendingUp,
  Code2: Code2,
  Layout: Layout
};

const About = () => {
  return (
    <section id="about" className="section-spacing relative bg-slate-950/40">
      <div className="site-container">
        {/* Section Tag & Heading */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">About // Narrative</span>
            <h2 className="section-title">
              Curious by Nature.{' '}
              <span className="gradient-text-cyan-violet">Building for the Future.</span>
            </h2>
          </motion.div>
        </div>

        {/* Editorial Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative paragraphs & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="glass-panel p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Academic Foundation &amp; Philosophy</span>
              </div>

              <div className="space-y-5 text-slate-300 font-light text-base md:text-lg leading-relaxed">
                {aboutData.paragraphs.map((p, idx) => (
                  <p key={idx} className={idx === 0 ? 'text-slate-100 font-normal text-lg md:text-xl' : ''}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Verified Student Badge */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-slate-400">Current Affiliation</div>
                  <div className="text-sm font-heading font-semibold text-white">
                    {personalInfo.institution}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Expected Graduation</div>
                  <div className="text-sm font-heading font-semibold text-cyan-300">
                    {personalInfo.graduationYear} Cohort
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Core Technical Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.pillars.map((pillar, idx) => {
              const IconComponent = iconMap[pillar.icon] || Sparkles;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="glass-panel p-6 flex flex-col justify-between group hover:border-cyan-400/30"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 group-hover:border-cyan-400/40 transition-all duration-300 mb-5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-slate-500 group-hover:text-cyan-400/80 transition-colors">
                    <span>AREA // 0{idx + 1}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">Active Focus</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
