"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function Resume() {
  return (
    <section id="resume" className="pt-0 flex items-center justify-center min-h-screen">
      <div className="page-wrap">
        <motion.div
          className="mt-8 rounded-xl bg-gradient-to-b from-surface to-surface-alt px-[3rem] py-[6rem] md:px-[1.5rem] md:py-[3rem] text-center flex flex-col items-center shadow-md"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Icon */}
          <motion.div
            className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary text-white mb-6"
            variants={itemVariants}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            className="text-primary font-semibold tracking-[0.12em] uppercase text-sm mb-2"
            variants={itemVariants}
          >
            Resume
          </motion.p>

          {/* Title */}
          <motion.h2 className="mb-4 font-heading" variants={itemVariants}>
            Download my resume
          </motion.h2>

          {/* Summary */}
          <motion.p className="max-w-3xl text-lg text-text-muted mb-2" variants={itemVariants}>
            Get a PDF copy of my resume with experience, projects, and contact details.
          </motion.p>

          {/* Actions */}
          <motion.div
            className="mt-6 flex gap-4 md:flex-col md:items-stretch"
            variants={itemVariants}
          >
            <Link
              href="/resume.html"
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-white font-semibold px-8 py-4 rounded-md inline-flex items-center justify-center transition-[background,transform,box-shadow] duration-200 hover:bg-primary-dark hover:-translate-y-[3px] hover:shadow-glow"
            >
              View Resume
            </Link>
            <Link
              href="/resume.pdf"
              download="Resume.pdf"
              className="bg-transparent text-primary border-2 border-primary font-semibold px-8 py-[0.9rem] rounded-md inline-flex items-center justify-center transition-[background,color,transform] duration-200 hover:bg-primary hover:text-white hover:-translate-y-[3px]"
            >
              Download PDF
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;