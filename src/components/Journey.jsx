import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { educationJourney, personalInfo } from '../data/portfolioData';

const Journey = () => {
  return (
    <section id="journey" className="section-spacing relative cyber-grid">
      <div className="site-container relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Academic Timeline // Progression</span>
            <h2 className="section-title">
              Education &amp;{' '}
              <span className="gradient-text-cyan-violet">Academic Path</span>
            </h2>
            <p className="text-slate-400 font-light text-base md:text-lg">
              Structured coursework and foundations guiding my exploration into artificial intelligence,
              mathematical algorithms, and software development.
            </p>
          </motion.div>
        </div>

        {/* Timeline Component */}
        <div className="relative pl-6 sm:pl-8 md:pl-10 border-l border-cyan-500/20 max-w-4xl mx-auto space-y-12">
          {educationJourney.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Glowing Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(0,240,255,0.6)] group-hover:scale-125 transition-transform duration-300">
                <div className="w-2 h-2 rounded-full bg-cyan-300" />
              </div>

              {/* Card Container */}
              <div className="glass-panel p-6 sm:p-8 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                    {item.status}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-4">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <GraduationCap className="w-4 h-4 text-violet-400" />
                    <span>{item.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {item.highlight}
                </p>

                {/* Additional context note if current degree */}
                {idx === 0 && (
                  <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
                    <span className="text-cyan-400/80">Specialization: AI &amp; Machine Learning</span>
                    <span className="text-slate-400">Bangalore Campus</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
