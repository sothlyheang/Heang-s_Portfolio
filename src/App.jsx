import React, { useState } from 'react';
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
      </div>

      <div className="text-center z-10 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 mb-4">
          Welcome
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          to my portfolio
        </p>
        <button
          onClick={onEnter}
          className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '1s' }}
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
    return <Intro onEnter={() => setShowIntro(false)} />;
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
    </div>
  );
};

export default App;