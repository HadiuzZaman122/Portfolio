import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Sparkles, CornerDownLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { terminalCommands, personalInfo } from '../data/portfolioData';

const HiddenLayerTerminal = ({ isOpen, onClose }) => {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: "AI / ML KERNEL v2.8 initialized for HADIUZ ZAMAN.\nType 'help' to inspect available instructions or 'secret' for an easter egg."
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMatrixMode, setIsMatrixMode] = useState(false);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Scroll to bottom on new output
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Keyboard shortcut listener (Ctrl+` or ` to toggle)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    // Add to command history
    setCommandHistory((prev) => [...prev, inputVal]);
    setHistoryIndex(-1);

    const userEntry = { type: 'user', text: `hz@ai-kernel:~$ ${inputVal}` };

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let responseText = '';
    if (cmd === 'help') {
      responseText = terminalCommands.help;
    } else if (cmd === 'about') {
      responseText = terminalCommands.about;
    } else if (cmd === 'status') {
      responseText = terminalCommands.status;
    } else if (cmd === 'skills') {
      responseText = terminalCommands.skills;
    } else if (cmd === 'projects') {
      responseText = terminalCommands.projects;
    } else if (cmd === 'contact') {
      responseText = terminalCommands.contact;
    } else if (cmd === 'matrix') {
      setIsMatrixMode(!isMatrixMode);
      responseText = isMatrixMode ? '[MATRIX STREAM DEACTIVATED]' : '[MATRIX STREAM ACTIVATED // THE NEURAL STREAM]';
    } else if (cmd === 'easteregg' || cmd === 'secret') {
      // Trigger canvas confetti celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#a855f7', '#3b82f6', '#10b981']
      });
      responseText = "🎉 UNLOCKED HIDDEN LAYER!\n\"The best way to predict the future is to train the model to build it.\"\nKeep exploring Hadiuz Zaman's AI/ML Portfolio.";
    } else {
      responseText = `Command not recognized: '${inputVal}'. Type 'help' for available system instructions.`;
    }

    setHistory((prev) => [...prev, userEntry, { type: 'response', text: responseText }]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx < commandHistory.length) {
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`w-full max-w-2xl rounded-2xl border ${
              isMatrixMode ? 'border-emerald-500/50 bg-black/95 text-emerald-400' : 'border-cyan-500/30 bg-slate-950/95 text-slate-200'
            } shadow-2xl shadow-cyan-950/50 overflow-hidden flex flex-col font-mono text-xs max-h-[80vh]`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal Top Window Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10 select-none">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
                  <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>hz@neural-subsystem: ~ (bash)</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-500 hidden sm:inline">[ESC to close]</span>
                <button
                  onClick={onClose}
                  className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-3 font-mono leading-relaxed min-h-[280px]">
              {history.map((item, idx) => (
                <div key={idx} className="whitespace-pre-wrap">
                  {item.type === 'user' ? (
                    <span className="text-cyan-400 font-semibold">{item.text}</span>
                  ) : item.type === 'system' ? (
                    <span className="text-slate-400">{item.text}</span>
                  ) : (
                    <span className={isMatrixMode ? 'text-emerald-300' : 'text-slate-300'}>{item.text}</span>
                  )}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Command Prompt Input */}
            <form
              onSubmit={handleCommandSubmit}
              className="flex items-center gap-2 px-4 py-3 bg-slate-900/60 border-t border-white/10"
            >
              <span className="text-cyan-400 font-bold select-none">hz@ai-kernel:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help', 'about', 'skills', or 'secret'..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs placeholder:text-slate-600"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                type="submit"
                className="p-1 rounded text-cyan-400 hover:text-cyan-200 transition-colors"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HiddenLayerTerminal;
