import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  ArrowUpRight, 
  MessageSquare,
  Sparkles,
  MapPin
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build direct mailto link with encoded user query
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Hadiuz,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section-spacing relative bg-slate-950/80 cyber-grid">
      {/* Background ambient orbs */}
      <div className="glow-orb glow-cyan w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="site-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Communication // Inquiries</span>
            <h2 className="section-title">
              Have an Interesting Idea?{' '}
              <span className="gradient-text-cyan-violet">Let's Build It.</span>
            </h2>
            <p className="text-slate-400 font-light text-base md:text-lg max-w-xl mx-auto">
              I am open to discussions on machine learning research, software projects, open-source
              collaborations, and student opportunities.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          {/* Contact Direct Channels & Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Quick Email Card */}
            <div className="glass-panel p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block mb-2">
                  Direct Inquiries
                </span>
                <h3 className="font-heading font-semibold text-xl text-white mb-3">
                  Let's Connect Directly
                </h3>
                <p className="text-slate-400 text-sm font-light mb-6">
                  Feel free to send an email or copy my address to your clipboard for quick access.
                </p>

                {/* Email Chip with Copy Button */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/10 mb-4">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-mono text-xs text-slate-200 truncate">
                      {personalInfo.email}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-cyan-950/60 hover:bg-cyan-900 border border-cyan-500/30 text-cyan-300 transition-colors shrink-0"
                    title="Copy Email"
                    aria-label="Copy Email to Clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[11px] font-mono text-emerald-400 mb-4"
                  >
                    ✓ Email address copied to clipboard!
                  </motion.div>
                )}
              </div>

              {/* Profiles */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn-primary w-full py-3 text-xs font-mono justify-center"
                >
                  <Send className="w-4 h-4 text-slate-900 font-bold" />
                  <span>Send Direct Email</span>
                </a>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary py-2.5 text-xs font-mono justify-center"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary py-2.5 text-xs font-mono justify-center"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-violet-400" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Location pill */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <span className="text-slate-500">IST (UTC+5:30)</span>
            </div>
          </motion.div>

          {/* Quick Dispatch Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 glass-panel p-6 sm:p-8"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span className="font-heading font-semibold text-lg text-white">
                  Message Dispatch
                </span>
              </div>
              <span className="font-mono text-[11px] text-cyan-400/80">Opens Mail Client</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-slate-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ada Lovelace"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 text-slate-100 text-sm font-body outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-400 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ada@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 text-slate-100 text-sm font-body outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-400 mb-1">
                  Topic / Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="AI Collaboration / Project Discussion"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 text-slate-100 text-sm font-body outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-400 mb-1">
                  Message *
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Hadiuz, let's talk about..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 text-slate-100 text-sm font-body outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3.5 font-mono text-xs"
              >
                <Send className="w-4 h-4 text-slate-950 font-bold" />
                <span>Dispatch Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
