import React, { useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Intro = ({ onEnter }) => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute inset-x-0 top-32 flex justify-center gap-6 opacity-30">
          <span className="h-0.5 w-28 bg-cyan-400/40 animate-pulse" />
          <span className="h-0.5 w-20 bg-purple-400/40 animate-pulse delay-150" />
          <span className="h-0.5 w-24 bg-slate-300/30 animate-pulse delay-300" />
        </div>
      </div>

      <div className="text-center z-10">
        <div className="relative mx-auto mb-10 max-w-3xl rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-2xl shadow-cyan-500/10 animate-code-panel" style={{ animationDelay: '0.2s' }}>
          <div className="mb-6 text-left text-sm font-mono text-slate-400">
            <div className="mb-3 opacity-90">const welcome = &#123;</div>
            <div className="ml-6 mb-2">name: <span className="text-cyan-300">'Soth Lyheang'</span>,</div>
            <div className="ml-6 mb-2">role: <span className="text-cyan-300">'Senior Software Engineer'</span>,</div>
            <div className="ml-6 mb-2">status: <span className="text-emerald-300">'Ready to build'</span></div>
            <div className="opacity-90">&#125;;</div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/95 p-4">
            <div className="mb-3 h-2 w-24 rounded-full bg-slate-700 animate-pulse" />
            <div className="space-y-2 text-slate-400 text-sm font-mono">
              <div className="w-full rounded-full bg-slate-800 h-2 animate-line-glow" />
              <div className="w-5/6 rounded-full bg-slate-800 h-2 animate-line-glow delay-100" />
              <div className="w-3/5 rounded-full bg-slate-800 h-2 animate-line-glow delay-200" />
            </div>
            <div className="mt-4 text-cyan-300 text-sm font-semibold">// Click below to reveal the portfolio</div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 mb-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Welcome
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          to my portfolio
        </p>
        <button
          onClick={onEnter}
          className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-3xl transition-all hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 animate-fade-in-up animate-bounce"
          style={{ animationDelay: '0.8s' }}
        >
          <p> &gt;&gt; Click here to see my portfolio &lt;&lt; </p>
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return (
      <>
        <Intro onEnter={() => setShowIntro(false)} />
        <SpeedInsights />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
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
      <SpeedInsights />
    </div>
  );
};

export default App;