"use client";
import React from 'react';
import type { IconType } from 'react-icons';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiDocker, SiRedis, SiPrisma, SiJavascript, SiTypescript, SiC, SiCplusplus, SiHuggingface, SiTensorflow, SiOpenai, SiLangchain, SiCrewai } from 'react-icons/si';
import dynamic from 'next/dynamic';

const skillGroups = [
  {
    label: 'Programming Languages',
    items: [
      { name: 'C', icon: SiC, color: '#00599C' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#007acc' },
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
    ],
  },
  {
    label: 'Web / Backend',
    items: [
      { name: 'React.js', icon: FaReact, color: '#61DAFB' },
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, dynamic: true },
      { name: 'Next.js', icon: SiNextdotjs, dynamic: true },
    ],
  },
  {
    label: 'Artificial Intelligence',
    items: [
      { name: 'NLP', icon: SiHuggingface, color: '#FFD21E' },
      { name: 'ML', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'LLMs', icon: SiOpenai, dynamic: true },
      { name: 'RAG', icon: SiLangchain, color: '#1C3C3C' },
    ],
  },
  {
    label: 'Databases & Infra',
    items: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Redis', icon: SiRedis, color: '#FF4438' },
      { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    ],
  },
];

const SkillCard = ({ item }: { item: { name: string; icon: IconType; color?: string, dynamic?: boolean } }) => {
  const Icon = item.icon;
  return (
    <div
      className="group/skill flex min-h-[130px] flex-col items-center justify-center gap-3 rounded-2xl border border-border/50 bg-surface-alt/30 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-border hover:bg-surface-alt hover:shadow-sm"
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface shadow-sm transition-transform duration-300 group-hover/skill:scale-110 group-hover/skill:shadow-md"
      >
        <Icon
          className={`text-3xl transition-all duration-300 opacity-80 group-hover/skill:opacity-100 ${item.dynamic ? 'text-heading' : ''}`}
          style={!item.dynamic ? { color: item.color } : undefined}
        />
      </div>
      <span className="text-center text-xs font-semibold text-text-muted transition-colors duration-300 group-hover/skill:text-text">
        {item.name}
      </span>
    </div>
  );
};

function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[800px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="page-wrap relative">
        <div className="mb-16 text-center">
          <motion.p
            className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Expertise
          </motion.p>
          <motion.h2
            className="mb-4 text-4xl font-extrabold md:text-5xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            My Tech Stack
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-text-muted"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            I leverage a diverse set of modern technologies to build scalable,
            high-performance applications and intelligent AI solutions.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {skillGroups.map((group, idx) => {
            let colSpanClasses = '';
            let gridColsClasses = '';

            if (idx === 0) {
              // Programming Languages
              colSpanClasses = 'md:col-span-1 lg:col-span-3';
              gridColsClasses = 'grid-cols-2 sm:grid-cols-3';
            } else if (idx === 1) {
              // Web / Backend
              colSpanClasses = 'md:col-span-1 lg:col-span-2';
              gridColsClasses = 'grid-cols-2 lg:grid-cols-2';
            } else if (idx === 2) {
              // Artificial Intelligence
              colSpanClasses = 'md:col-span-1 lg:col-span-2';
              gridColsClasses = 'grid-cols-2 lg:grid-cols-2';
            } else if (idx === 3) {
              // Databases & Infra
              colSpanClasses = 'md:col-span-1 lg:col-span-3';
              gridColsClasses = 'grid-cols-2 sm:grid-cols-3';
            }

            return (
              <motion.div
                key={group.label}
                className={`group flex flex-col relative overflow-hidden rounded-3xl border border-border bg-surface/80 p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:shadow-glow ${colSpanClasses}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Subtle hover gradient background */}
                <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col">
                  <h3 className="mb-6 text-xl font-bold tracking-tight text-heading">
                    {group.label}
                  </h3>

                  <div className="flex flex-col">
                    <div className={`grid auto-rows-fr gap-4 ${gridColsClasses}`}>
                      {group.items.map((item) => (
                        <SkillCard key={item.name} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;