import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Brain, 
  LineChart, 
  Globe, 
  Terminal, 
  Check, 
  Sparkles,
  Layers,
  Cpu
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categoryIcons = {
  programming: Code,
  'ai-ml': Brain,
  'data-science': LineChart,
  'web-dev': Globe,
  tools: Terminal
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories = activeCategory === 'all'
    ? skillsData.categories
    : skillsData.categories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="section-spacing relative bg-slate-950/60">
      <div className="site-container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag">Capabilities // Technical Stack</span>
              <h2 className="section-title">
                Verified Technical{' '}
                <span className="gradient-text-cyan-violet">Competencies</span>
              </h2>
            </motion.div>
          </div>
          <div className="text-slate-400 font-mono text-xs max-w-sm">
            Curated through hands-on model training, code implementations, and active undergraduate coursework.
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12 pb-2 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full font-mono text-xs transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                : 'bg-white/[0.03] text-slate-400 hover:text-slate-200 border border-white/5'
            }`}
          >
            All Stack ({skillsData.categories.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          
          {skillsData.categories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Sparkles;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs transition-all duration-200 ${
                  isSelected
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                    : 'bg-white/[0.03] text-slate-400 hover:text-slate-200 border border-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => {
              const Icon = categoryIcons[category.id] || Cpu;
              return (
                <motion.div
                  layout
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="glass-panel p-6 flex flex-col justify-between group hover:border-cyan-500/30"
                >
                  <div>
                    {/* Category Title */}
                    <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/5">
                      <div className="w-9 h-9 rounded-lg bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-base text-slate-100">
                          {category.name}
                        </h3>
                        <span className="font-mono text-[10px] text-cyan-400/70 uppercase">
                          {category.skills.length} competencies
                        </span>
                      </div>
                    </div>

                    {/* Skill Items List */}
                    <div className="space-y-3">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 hover:bg-white/[0.04] transition-all"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-sm text-slate-100 font-heading">
                              {skill.name}
                            </span>
                            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-400/20 text-cyan-300">
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 font-light leading-relaxed">
                            {skill.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-slate-500">
                    <span>STATUS: VERIFIED</span>
                    <span className="text-cyan-400/60">PYTHON // ML</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
