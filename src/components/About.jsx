import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { about } from '../data/data';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives me as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-slate-200">{about.name}</h3>
            <p className="text-cyan-400 font-medium">{about.title}</p>
            <p className="text-slate-400 leading-relaxed">{about.bio}</p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors duration-300 transform hover:translate-x-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>{about.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors duration-300 transform hover:translate-x-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href={`mailto:${about.email}`} className="hover:text-cyan-400 transition-colors">
                  {about.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors duration-300 transform hover:translate-x-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{about.phone}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={about.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={about.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 animate-fade-in-up hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-xl font-bold mb-6 text-slate-200">Quick Facts</h4>
            <div className="space-y-4">
              <div className="flex justify-between hover:bg-slate-700/50 p-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                <span className="text-slate-400">Experience</span>
                <span className="text-slate-200 font-medium">5+ Years</span>
              </div>
              <div className="flex justify-between hover:bg-slate-700/50 p-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                <span className="text-slate-400">Projects Completed</span>
                <span className="text-slate-200 font-medium">5+</span>
              </div>
              <div className="flex justify-between hover:bg-slate-700/50 p-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                <span className="text-slate-400">Technologies</span>
                <span className="text-slate-200 font-medium">5+</span>
              </div>
              <div className="flex justify-between hover:bg-slate-700/50 p-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                <span className="text-slate-400">Location</span>
                <span className="text-slate-200 font-medium">Phnom Penh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;