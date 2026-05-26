"use client";

import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
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

const visualVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -30 },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const cardItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
    },
};

function About() {
    const highlights = [
        {
            label: 'Interests',
            value: 'Web development, algorithms, systems programming, and problem solving.',
        },
        {
            label: 'Current Focus',
            value: 'Building responsive full-stack apps and AI systems and strengthening core engineering skills.',
        },
        {
            label: 'Education',
            value: 'B.Tech Computer Science Engineering — COEP Technological University, Pune (Expected 2027).',
        },
        {
            label: 'Career Goals',
            value: 'Grow into a software engineer who builds scalable, useful products.',
        },
    ];

    return (
        <section id="about" className="pt-0">
            <div className="page-wrap">
                {/* Card */}
                <div className="mt-8 rounded-xl bg-gradient-to-b from-surface to-surface-alt p-6 shadow-md">

                    {/* Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-[minmax(280px,420px)_minmax(0,1fr)] gap-8 items-center">

                        {/* Visual */}
                        <motion.div
                            className="flex justify-center items-center order-first"
                            aria-hidden="true"
                            variants={visualVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <svg
                                className="w-[min(100%,380px)] md:w-[min(100%,380px)] sm:w-[min(100%,320px)] h-auto block transition-transform duration-500 hover:scale-[1.03] drop-shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
                                viewBox="0 0 479 467"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <defs>
                                    <clipPath id="about-blob-clip">
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
                                    clipPath="url(#about-blob-clip)"
                                />
                            </svg>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            className="min-w-0"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <motion.p
                                className="text-primary font-semibold tracking-[0.12em] uppercase text-sm mb-2"
                                variants={itemVariants}
                            >
                                About Me
                            </motion.p>

                            <motion.h2 className="mb-3 font-heading text-heading" variants={itemVariants}>
                                A brief introduction
                            </motion.h2>

                            <motion.p className="max-w-[760px] text-lg text-text-muted" variants={itemVariants}>
                                I&apos;m a Computer Science Engineering student at COEP Technological University, Pune — interested in web development, artificial intelligence,
                                algorithms, systems programming, and solving real-world problems.
                            </motion.p>

                            {/* Highlights grid */}
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6"
                                variants={containerVariants}
                            >
                                {highlights.map((item) => (
                                    <motion.div
                                        key={item.label}
                                        className="p-5 border border-border rounded-lg bg-surface/85 transition-[border-color,transform,box-shadow] duration-200 hover:border-primary hover:-translate-y-[3px] hover:shadow-md"
                                        variants={cardItemVariants}
                                    >
                                        <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                                        <p className="text-base text-text-muted">{item.value}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;