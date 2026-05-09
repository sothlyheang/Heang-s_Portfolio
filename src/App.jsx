import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const LaunchOverlay = ({ onLaunch }) => (
  <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-6">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <span className="absolute -left-10 top-24 h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
      <span className="absolute right-10 top-32 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl animate-pulse delay-150" />
      <span className="absolute inset-x-8 top-10 h-1 rounded-full bg-cyan-400/20 animate-glow-line" />
      <span className="absolute inset-x-8 bottom-10 h-1 rounded-full bg-purple-400/20 animate-glow-line delay-200" />
    </div>

    <div className="relative w-full max-w-3xl rounded-4xl border border-slate-800 bg-slate-900/95 shadow-2xl shadow-cyan-500/20 overflow-hidden animate-launch-enter">
      <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-r from-cyan-500/20 via-slate-950 to-purple-500/20 blur-3xl opacity-70" />
      <div className="relative px-10 py-14 text-center">
        <div className="mb-5 inline-flex items-center gap-3 rounded-full bg-slate-800/70 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-300 shadow-lg shadow-cyan-500/10">
          <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          Portfolio Ready
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">Launch your professional experience</h1>
        <p className="text-slate-400 max-w-2xl mx-auto mb-8">Experience the site with a polished reveal sequence and premium interactions.</p>

        <div className="mb-10 grid gap-3 sm:grid-cols-3 text-left text-[13px] text-slate-400">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-lg shadow-slate-950/20">
            <span className="block text-xs uppercase tracking-[0.24em] text-cyan-300 mb-2">sections</span>
            <strong className="text-white">6 curated views</strong>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-lg shadow-slate-950/20">
            <span className="block text-xs uppercase tracking-[0.24em] text-cyan-300 mb-2">highlight</span>
            <strong className="text-white">Certificate gallery</strong>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-lg shadow-slate-950/20">
            <span className="block text-xs uppercase tracking-[0.24em] text-cyan-300 mb-2">style</span>
            <strong className="text-white">Modern motion</strong>
          </div>
        </div>

        <button
          onClick={onLaunch}
          className="group inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-cyan-400 shadow-lg shadow-cyan-500/20"
        >
          Launch Portfolio
          <span className="inline-flex h-3 w-3 rounded-full bg-slate-950 animate-ping" />
        </button>
      </div>
    </div>
  </div>
);

const App = () => {
  const [showLaunch, setShowLaunch] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
      {showLaunch && <LaunchOverlay onLaunch={() => setShowLaunch(false)} />}

      <div className={`${showLaunch ? 'pointer-events-none opacity-0' : 'opacity-100'} transition-all duration-700`}>
        <Navbar />

        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;