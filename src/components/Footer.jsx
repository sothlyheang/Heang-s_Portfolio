import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="py-12 border-t border-slate-900">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-xl font-black text-cyan-400">
        Heangz<span className="text-white font-thin">Zxento</span>
      </div>
      <p className="text-slate-500 text-sm font-bold">
        © {new Date().getFullYear()} Soth Lyheang. Built with React & Tailwind.
      </p>
      <div className="flex gap-6">
        <a href="https://github.com/sothlyheang" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
        <a href="https://www.linkedin.com/in/soth-l-674090284/" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
        <a href="mailto:sothlyheang9@example.com" className="text-slate-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
