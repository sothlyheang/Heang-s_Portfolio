import React, { useState } from 'react';
import { Award, Code2, ExternalLink } from 'lucide-react';
import { projects as defaultProjects } from '../data/data';

const Projects = ({ projects = defaultProjects }) => {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Works</h2>
            <p className="text-slate-400 max-w-xl">A curated portfolio of projects that reflect my technical expertise and product-led focus.</p>
          </div>
          <div className="flex flex-wrap gap-2 p-2 bg-slate-900 rounded-2xl border border-slate-800">
            {['all', 'frontend', 'backend', 'fullstack', 'certificate'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase transition-all ${activeTab === tab ? 'bg-cyan-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
              >
                {tab === 'certificate' ? 'certificates' : tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <div
              key={i}
              className="group flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 ease-out animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-48 bg-slate-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-cyan-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110"></div>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : project.category === 'certificate' ? (
                  <Award className="w-16 h-16 text-cyan-400 transition-transform duration-500 group-hover:scale-110" />
                ) : (
                  <Code2 className="w-12 h-12 text-slate-700 group-hover:text-cyan-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                )}
                <div className="absolute inset-0 border-2 border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-500 rounded-2xl"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="text-[10px] font-bold px-2 py-1 bg-slate-800 rounded border border-slate-700 text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                      style={{ animationDelay: `${(i * 0.1) + (j * 0.05)}s` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300 transform group-hover:translate-x-1">{project.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1 group-hover:text-slate-300 transition-colors duration-300">{project.desc}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-cyan-500 hover:text-cyan-400 transition-all duration-300 group-hover:translate-x-1">
                  {project.category === 'certificate' ? 'View Certificate' : 'Case Study'} <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
