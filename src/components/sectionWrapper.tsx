"use client";

import { motion } from 'framer-motion';

const animationPresets = {
  hero: {
    initial: { opacity: 0, scale: 0.96 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
  about: {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  skills: {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  projects: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  resume: {
    initial: { opacity: 0, y: 40, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  contact: {
    initial: { opacity: 0, y: 40, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function SectionWrapper({ children, variant = 'hero' }) {
  const preset = animationPresets[variant] || animationPresets.hero;

  return (
    <motion.div
      initial={preset.initial}
      whileInView={preset.whileInView}
      transition={preset.transition}
      viewport={{ once: true, amount: 0.05 }}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </motion.div>
  );
}

export default SectionWrapper;