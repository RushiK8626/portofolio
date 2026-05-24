"use client";
import React from 'react';
import type { IconType } from 'react-icons';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiDocker, SiRedis, SiPrisma, SiJavascript, SiC, SiCplusplus, SiHuggingface, SiTensorflow, SiOpenai, SiLangchain, SiLanggraph, SiCrewai } from 'react-icons/si';

const skillGroups = [
  {
    label: 'Programming Languages',
    items: [
      { name: 'C', icon: SiC, color: '#00599C' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
    ],
  },
  {
    label: 'Web / Backend',
    items: [
      { name: 'React.js', icon: FaReact, color: '#61DAFB' },
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
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
  {
    label: 'Artificial Intelligence',
    items: [
      { name: 'NLP', icon: SiHuggingface, color: '#FFD21E' },
      { name: 'ML', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'LLMs', icon: SiOpenai, color: '#ffffff' },
      { name: 'RAG', icon: SiLangchain, color: '#1C3C3C' },
      { name: 'Agentic AI', icon: SiCrewai, color: '#FF5A50' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const groupVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const SkillBadge = ({ item }: { item: { name: string; icon: IconType; color: string } }) => {
  const [hovered, setHovered] = React.useState(false);
  const Icon = item.icon;

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-alt px-[0.9rem] py-[0.55rem] text-sm font-medium text-text transition-all duration-200 hover:border-primary"
    >
      <Icon
        className="text-base transition-colors duration-200"
        style={{ color: hovered ? item.color : 'currentColor' }}
      />
      <span>{item.name}</span>
    </span>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="pt-0"
    >
      <div className="page-wrap">
        <div className="mt-8 rounded-lg bg-gradient-to-b from-surface to-surface-alt p-6 shadow-md">
          <div className="grid items-start gap-8 md:grid-cols-[minmax(260px,360px)_minmax(0,1fr)]">
            {/* LEFT SIDE */}
            <motion.div
              className="min-w-0"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.p
                className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-primary"
                variants={itemVariants}
              >
                Skills
              </motion.p>

              <motion.h2
                className="mb-3 text-4xl font-bold"
                variants={itemVariants}
              >
                What I work with
              </motion.h2>

              <motion.p
                className="max-w-[32rem] text-lg text-text-muted"
                variants={itemVariants}
              >
                I build with a focused stack across software fundamentals,
                full-stack web development, infrastructure, and AI.
              </motion.p>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              className="grid gap-5 md:grid-cols-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {skillGroups.map((group) => (
                <motion.div
                  key={group.label}
                  variants={groupVariants}
                  className="rounded-lg border border-border bg-surface/90 p-5 transition-all duration-200 hover:-translate-y-[3px] hover:border-primary hover:shadow-md"
                >
                  <h3 className="mb-3 text-lg font-semibold">
                    {group.label}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => {
                      return <SkillBadge key={item.name} item={item} />
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;