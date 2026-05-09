import React, { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin } from "lucide-react";
import profileImg from "../assets/profile.jpg";

const useTypewriter = (
  text,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseTime = 1500
) => {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayed.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, typingSpeed);
    }else if (!isDeleting && displayed.length === text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }
    return () => clearTimeout(timeout);

  }, [displayed, isDeleting, text, typingSpeed, deletingSpeed, pauseTime]);

  return displayed;
};

const Hero = () => {
  const typedTitle = useTypewriter("Soth Lyheang");

  return (
    <section id="home"className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div className="space-y-8 max-w-xl">

            {/* Avatar */}
            <div className="flex justify-center md:justify-start mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative inline-block">
                <div className="absolute inset-0 rounded-2xl blur-xl bg-cyan-500/30 animate-pulse" />
                <img
                  src={profileImg}
                  alt="Profile"
                  className="
                    relative w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-72
                    rounded-2xl border-4 border-cyan-400
                    object-cover object-top
                    shadow-2xl shadow-cyan-500/40
                    hover:shadow-cyan-500/60 transition-transform duration-500
                    transform hover:scale-105
                  "/>
              </div>
            </div>
            {/* Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium animate-fade-in-up hover:bg-cyan-500/20 transition-colors duration-300" style={{ animationDelay: '0.5s' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              Available for New Projects
            </div>

            {/* title*/}
            <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <span className="absolute invisible whitespace-nowrap">
                Soth Lyheang
              </span>

              {/* Visible typing */}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                  {typedTitle}
                </span>

                {/* Cursor */}
                <span className="ml-1 animate-pulse text-cyan-400">|</span>

              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              HI, I’m{" "}
              <span className="text-slate-200 font-medium">Soth Lyheang</span>, a Senior
              Software Engineering specializing in building exceptional digital
              experiences that are fast, accessible, and visually stunning.
            </p>

            {/* Actions */}
            <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>

              <a
                href="#projects"
                className="px-4 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all flex items-center gap-2 group hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105"
              >
                View Projects
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="/Heang_CV.pdf"
                download="Heang_CV.pdf"
                className="px-4 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all border border-slate-700 hover:border-cyan-500 flex items-center gap-2 group hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105"
              >
                Download CV
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>

              <div className="flex items-center gap-4 px-4">
                <a href="https://github.com/sothlyheang" className="p-2 hover:text-cyan-400 transition-transform hover:scale-110 transform duration-300">
                  <Github className="w-6 h-6" />
                </a>

                <a href="https://www.linkedin.com/in/soth-l-674090284/" className="p-2 hover:text-cyan-400 transition-transform hover:scale-110 transform duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>

            </div>
          </div>
<div className="hidden md:block -mt-12">
  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-1 shadow-2xl">
    <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800">

      {/* Title Bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />

        <div className="ml-4 text-xs font-mono text-slate-500">
          sothlyheang.profile.js
        </div>
      </div>

      <div className="px-6 py-4 space-y-2">
        {/* Line 1 */}
        <div className="flex gap-4">
          <span className="text-slate-600">1</span>
          <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {"{"}
        </div>

        {/* Line 2 */}
        <div className="flex gap-4">
          <span className="text-slate-600">2</span>
          <p className="ml-6">name:</p> <span className="text-green-400">'Soth Lyheang'</span>,
        </div>

                    {/* Line 3 */}
                    <div className="flex gap-4">
                      <span className="text-slate-600">3</span>
                      <p className="ml-6">title:</p> <span className="text-green-400">'Senior Software Engineer'</span>,
                    </div>

                    {/* Line 4 */}
                    <div className="flex gap-4">
                      <span className="text-slate-600">4</span>
                      <p className="ml-6">experience:</p> <span className="text-yellow-400">'5+ Years'</span>,
                    </div>

                    {/* Line 5 */}
                    <div className="flex gap-4">
                      <span className="text-slate-600">5</span>
                      <p className="ml-6">location:</p> <span className="text-green-400">'Phnom Penh, Cambodia'</span>,
                    </div>

                    {/* Line 6 */}
                    <div className="flex gap-4">
                      <span className="text-slate-600">6</span>
                      <p className="ml-6">email:</p> <span className="text-green-400">'heang@example.com'</span>,
                    </div>

                    {/* Line 7 */}
                    <div className="flex gap-4">
                      <span className="text-slate-600">7</span>
                      stack: [
                      <span className="text-yellow-400">'React'</span>,{" "}
                      <span className="text-yellow-400">'Next.js'</span>,{" "}
                      <span className="text-yellow-400">'Node'</span>,{" "}
                      <span className="text-yellow-400">'AWS'</span>
                      ],
                    </div>

                    {/* Line 8 */}
                    <div className="flex gap-4">
                      <span className="text-slate-600">8</span>
                      specialties: [
                      <span className="text-cyan-400">'UI/UX'</span>,{" "}
                      <span className="text-cyan-400">'Performance'</span>,{" "}
                      <span className="text-cyan-400">'Scalability'</span>
                      ],
                    </div>
                    
                    {/* Line 9 */}
                    <div className="flex gap-4">
                      <span className="text-slate-600">9</span>
                      achievements: [
                    </div>

                    {/* Line 10 */}
                    <div className="flex gap-4 ">
                      <span className="text-slate-600">10</span>
                      <span className="text-green-400 ml-6">'50k+ Users'</span>,
                    </div>

                    {/* Line 11 */}
                    <div className="flex gap-4 ">
                      <span className="text-slate-600">11</span>
                      <span className="text-green-400 ml-6">'99.9% Uptime'</span>,
                    </div>

                    {/* Line 12 */}
                    <div className="flex gap-4 ">
                      <span className="text-slate-600">12</span>
                      <span className="text-green-400 ml-6">'Top Rated Freelancer'</span>
                    </div>

                    {/* Line 13 */}
                    <div className="flex gap-4">
                      <span className="text-slate-600">13</span>
                      ],
                    </div>

                    {/* Line 14 */}
                    <div className="flex gap-4">
                      <span className="text-slate-600">14</span>
                      available: <span className="text-cyan-400">true</span>
                    </div>

                    {/* Line 15 */}
                    <div className="flex gap-4">
                      <span className="text-slate-600">15</span>
                      {"};"}
                    </div>

                    {/* Line 16 */}
                    <div className="flex gap-4">
                      <span className="text-slate-600">16</span>
                    </div>

                    {/* Line 17 */}
                    <div className="flex gap-4">
                      <span className="text-slate-600">17</span>
                      <span className="text-purple-400">export default</span>{" "}
                      developer;
                    </div>

                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
