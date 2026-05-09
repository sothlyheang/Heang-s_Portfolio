import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-black tracking-tighter text-cyan-400">
          HEANGX<span className="text-white">ZXENTO</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#contact" className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-all">Hire Me</a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex h-11 w-11 flex-col justify-center items-center gap-1 rounded-full border border-slate-800 bg-slate-950 text-slate-200 transition-all hover:border-cyan-500 hover:text-cyan-400"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="block h-0.5 w-6 bg-current rounded-full" />
          <span className="block h-0.5 w-6 bg-current rounded-full" />
          <span className="block h-0.5 w-6 bg-current rounded-full" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-md px-6 py-4">
          <div className="flex flex-col gap-3 text-sm font-medium uppercase tracking-widest">
            <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="inline-flex justify-center px-4 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-all">Hire Me</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
