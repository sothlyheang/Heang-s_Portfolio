import React from 'react';
import { Globe, Terminal, Code2, Layers, Cpu, Server } from 'lucide-react';
import { skills as defaultSkills } from '../data/data';

const iconMap = {
  'React / Next.js': <Globe className="w-5 h-5" />,
  'Node.js / Express': <Terminal className="w-5 h-5" />,
  'TypeScript': <Code2 className="w-5 h-5" />,
  'Tailwind CSS': <Layers className="w-5 h-5" />,
  'PostgreSQL / MongoDB': <Cpu className="w-5 h-5" />,
  'Docker / AWS': <Server className="w-5 h-5" />,
};

const Skills = ({ skills = defaultSkills }) => {
  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Mastering the Craft</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">I leverage modern tools and best practices to ensure your applications perform at the highest level.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="p-6 bg-slate-950 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-slate-900 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">
                  {iconMap[skill.name]}
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Skill Level</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-cyan-600 to-blue-500 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
