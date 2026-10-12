import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Layers, 
  Cpu, 
  LineChart, 
  BarChart3, 
  Zap, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock,
  Sparkles,
  Info
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  const featured = projectsData.find((p) => p.featured) || projectsData[0];
  const otherProjects = projectsData.filter((p) => !p.featured);

  // Interactive Model Comparator State for Featured Project
  const [selectedModel, setSelectedModel] = useState('Random Forest');

  const modelSpecs = {
    'Linear Regression': {
      architecture: 'Parametric Continuous Estimator',
      characteristics: 'Assumes direct collinear relationships between input predictors and electrical megawatt load.',
      strengths: 'Instant training speed, highly interpretable linear coefficients, transparent parameter weights.',
      tradeoff: 'Struggles with non-linear peak hours and seasonal spikes without extensive polynomial feature expansion.',
      color: '#38bdf8'
    },
    'Decision Tree': {
      architecture: 'Orthogonal Partitioning Regressor',
      characteristics: 'Recursively splits feature space into rectangular subsets based on Mean Squared Error reduction.',
      strengths: 'Naturally captures abrupt weekend drops, holiday anomalies, and conditional heat thresholds.',
      tradeoff: 'Prone to overfitting training noise if tree depth is unconstrained, resulting in variance volatility.',
      color: '#a855f7'
    },
    'Random Forest': {
      architecture: 'Bagged Ensemble Decision Forest',
      characteristics: 'Constructs an ensemble of decorrelated decision trees, aggregating their predictions to smooth variance.',
      strengths: 'Superior generalization, robust against individual feature outliers, captures complex seasonal rhythms.',
      tradeoff: 'Larger memory footprint and higher inference latency than simple linear formulation.',
      color: '#00f0ff'
    }
  };

  return (
    <section id="projects" className="section-spacing relative cyber-grid">
      {/* Ambient background glows */}
      <div className="glow-orb glow-cyan w-[500px] h-[500px] top-1/4 -right-32" />
      <div className="glow-orb glow-violet w-[500px] h-[500px] bottom-10 -left-32" />

      <div className="site-container relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag">Featured Works // Code In Action</span>
              <h2 className="section-title">
                Machine Learning &amp;{' '}
                <span className="gradient-text-cyan-violet">Intelligent Systems</span>
              </h2>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 font-mono text-xs max-w-xs"
          >
            Verified implementations backed by public source repositories and reproducible pipelines.
          </motion.div>
        </div>

        {/* ==============================================================
            MAIN FEATURED PROJECT: AI-Based Energy Consumption Forecasting
            ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-6 sm:p-8 lg:p-12 mb-16 border-cyan-500/20 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle accent badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
              <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>FLAGSHIP ML PROJECT</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={featured.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-2 px-4 text-xs font-mono"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Source Code</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Project Details */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <span className="font-mono text-xs text-slate-400 tracking-wider uppercase block mb-1">
                  {featured.category}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                  {featured.title}
                </h3>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                  {featured.description}
                </p>
              </div>

              {/* Architecture Pillars / Verified Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div className="text-xs text-slate-300">
                    <strong className="text-white block font-medium">Historical Preprocessing</strong>
                    Data cleaning, feature extraction, and time-series normalization in Python.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div className="text-xs text-slate-300">
                    <strong className="text-white block font-medium">Model Comparison</strong>
                    Evaluation across Linear Regression, Decision Tree &amp; Random Forest.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div className="text-xs text-slate-300">
                    <strong className="text-white block font-medium">Metric Evaluation</strong>
                    Quantifying errors via MAE, MSE, RMSE, and regression R² scores.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div className="text-xs text-slate-300">
                    <strong className="text-white block font-medium">Streamlit UI</strong>
                    Interactive web deployment allowing real-time forecasting inference.
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Model Comparator Dashboard Visual */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-inner">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <span className="font-mono text-xs text-cyan-300 font-semibold tracking-wide uppercase">
                      Model Benchmark Explorer
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400">Interactive</span>
                </div>

                {/* Model Selector Tabs */}
                <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-white/5 mb-5">
                  {['Linear Regression', 'Decision Tree', 'Random Forest'].map((modelName) => (
                    <button
                      key={modelName}
                      onClick={() => setSelectedModel(modelName)}
                      className={`py-2 px-1 text-center font-mono text-[11px] rounded-lg transition-all ${
                        selectedModel === modelName
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {modelName === 'Linear Regression' ? 'Linear Reg' : modelName}
                    </button>
                  ))}
                </div>

                {/* Interactive Dynamic Specs for Selected Model */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedModel}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="font-mono text-[10px] text-slate-400 uppercase mb-0.5">
                        Selected Architecture
                      </div>
                      <div className="font-heading font-medium text-sm text-cyan-300">
                        {modelSpecs[selectedModel].architecture}
                      </div>
                    </div>

                    <div className="text-xs text-slate-300 leading-relaxed font-light">
                      <strong className="text-white block font-medium mb-1 font-mono text-[11px]">
                        Mechanism:
                      </strong>
                      {modelSpecs[selectedModel].characteristics}
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-200 leading-relaxed">
                      <strong className="block text-emerald-300 font-mono text-[11px] mb-0.5">
                        Key Advantage:
                      </strong>
                      {modelSpecs[selectedModel].strengths}
                    </div>

                    <div className="p-3 rounded-xl bg-violet-950/20 border border-violet-500/20 text-xs text-violet-200 leading-relaxed">
                      <strong className="block text-violet-300 font-mono text-[11px] mb-0.5">
                        Analytical Consideration:
                      </strong>
                      {modelSpecs[selectedModel].tradeoff}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Link to repository footer note */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Repo: HadiuzZaman122</span>
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>Inspect code</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ==============================================================
            MODULAR PIPELINE & UPCOMING PROJECTS
            ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-panel p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top tag & status */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-violet-400 tracking-wider uppercase">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-slate-400">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>In Pipeline</span>
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
                  {project.description}
                </p>
              </div>

              {/* Bottom Tags & Indicator */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/5 text-[11px] font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-slate-400">
                  <span className="text-[11px]">Developer Blueprint</span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>GitHub Hub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
