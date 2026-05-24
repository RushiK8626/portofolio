"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const visualVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 },
  },
};

function Hero() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/RushiK8626',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rushikesh-kadepurkar-9a9006292',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.836 0-9.759h3.554v1.381c.43-.664 1.202-1.61 2.923-1.61 2.16 0 3.778 1.41 3.778 4.435v5.553zM5.337 8.855c-1.144 0-1.915-.761-1.915-1.713 0-.951.771-1.713 1.921-1.713 1.148 0 1.919.762 1.919 1.713 0 .952-.771 1.713-1.925 1.713zm1.581 11.597H3.756V9.693h3.162v10.759zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:rushikeshk2005@gmail.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <section id="home" className="relative overflow-visible min-h-screen flex flex-col justify-center items-center bg-bg pt-[calc(80px+3rem)] pb-8 md:min-h-auto md:pt-[calc(80px+2rem)]">
      <div className="page-wrap">

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[6rem] items-center px-4 md:px-8 text-center md:text-left">

          {/* ── Text ── */}
          <motion.div
            className="flex flex-col gap-5 z-[2] items-center md:items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Greeting */}
            <motion.p
              className="text-xl text-primary font-semibold uppercase tracking-[0.15em] sm:text-base"
              variants={itemVariants}
            >
              Welcome to my portfolio
            </motion.p>

            {/* Name */}
            <motion.h1
              className="text-[clamp(2.25rem,6vw,4.5rem)] sm:text-[clamp(2.25rem,5vw,3.5rem)] font-bold text-heading leading-tight"
              variants={itemVariants}
            >
              Rushikesh
            </motion.h1>

            {/* Role */}
            <motion.p
              className="text-3xl sm:text-2xl text-primary font-semibold"
              variants={itemVariants}
            >
              Software Builder & Creative Technologist
            </motion.p>

            {/* Intro */}
            <motion.p
              className="text-xl sm:text-lg text-text-muted leading-relaxed max-w-[500px] sm:max-w-full"
              variants={itemVariants}
            >
              Crafting everything from real-time web applications to low-level networking protocols.
              I transform complex technical challenges into elegant, high-performance systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-row gap-4 mt-2 items-center justify-center md:justify-start"
              variants={itemVariants}
            >
              <Link
                href="#projects"
                className="bg-primary text-white font-semibold px-4 py-4 rounded-md inline-flex items-center justify-center transition-[background,transform,box-shadow] duration-200 hover:bg-primary-dark hover:-translate-y-[3px] hover:shadow-glow sm:px-6 sm:text-sm"
              >
                View My Work
              </Link>
              <Link
                href="/resume.pdf"
                download
                className="bg-transparent text-primary border-2 border-primary font-semibold px-4 py-[0.9rem] rounded-md inline-flex items-center justify-center transition-[background,color,transform] duration-200 hover:bg-primary hover:text-white hover:-translate-y-[3px] sm:px-6 sm:text-sm"
              >
                Download Resume
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-5 mt-2 sm:justify-center sm:gap-4"
              variants={itemVariants}
            >
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  aria-label={link.name}
                  className="flex items-center justify-center w-[50px] h-[50px] sm:w-[45px] sm:h-[45px] rounded-full bg-surface-alt text-text transition-[background,color,transform,box-shadow] duration-200 hover:bg-primary hover:text-white hover:-translate-y-1 hover:scale-[1.08] hover:shadow-glow [&_svg]:w-6 [&_svg]:h-6 sm:[&_svg]:w-5 sm:[&_svg]:h-5"
                >
                  {link.icon}
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Visual ── */}
          <motion.div
            className="flex items-center justify-center relative h-[500px] sm:h-[350px] xs:h-[280px] order-first md:order-last"
            variants={visualVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Blob SVG */}
            <svg
              className="w-[400px] h-[400px] sm:w-[320px] sm:h-[320px] xs:w-[260px] xs:h-[260px] relative z-[2] drop-shadow-[0_10px_30px_rgba(0,0,0,0.12)] animate-[blobFloat_8s_ease-in-out_infinite]"
              viewBox="0 0 479 467"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <clipPath id="blob-clip">
                  <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                </clipPath>
              </defs>
              <path
                className="fill-primary"
                d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
              />
              <image
                x="0"
                y="-15"
                href="/hero-blob.png"
                width="500"
                height="500"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#blob-clip)"
              />
            </svg>

            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[320px] sm:h-[320px] xs:w-[260px] xs:h-[260px] rounded-full bg-[radial-gradient(circle,#6366f1_0%,transparent_70%)] opacity-[0.15] z-[1] animate-[glowPulse_6s_ease-in-out_infinite]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;