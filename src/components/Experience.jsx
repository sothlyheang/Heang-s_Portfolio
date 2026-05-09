import React from 'react';
import { Calendar, Building } from 'lucide-react';
import { experience, education } from '../data/data';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-cyan-400">Experience</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A journey through my professional career and educational background.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-slate-200 animate-fade-in-up">Work Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 animate-fade-in-up hover:-translate-y-1" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 transition-colors duration-300">
                      <Building className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-200 mb-1 hover:text-cyan-400 transition-colors duration-300">{exp.position}</h4>
                      <p className="text-cyan-400 font-medium mb-2">{exp.company}</p>
                      <div className="flex items-center gap-2 text-slate-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <p className="text-slate-400 mb-4 hover:text-slate-300 transition-colors duration-300">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105"
                            style={{ animationDelay: `${0.3 + index * 0.1 + techIndex * 0.05}s` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-slate-200 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 animate-fade-in-up hover:-translate-y-1" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 transition-colors duration-300">
                      <Calendar className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-200 mb-1 hover:text-cyan-400 transition-colors duration-300">{edu.degree}</h4>
                      <p className="text-cyan-400 font-medium mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-slate-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{edu.duration}</span>
                      </div>
                      <p className="text-slate-400 hover:text-slate-300 transition-colors duration-300">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;