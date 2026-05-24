"use client";

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const projects = [
    {
        title: 'SwiftTalk — Real-Time Chat Messaging Platform',
        repo: 'https://github.com/RushiK8626/SwiftTalk-Chat-Messaging-App',
        tech: ['React', 'Node.js', 'WebSockets', 'MySQL', 'Redis', 'Langchain'],
        description:
            'A full-stack real-time messaging platform featuring instant chat, AI-powered smart replies, task management, file sharing, push notifications, JWT authentication, and group conversations.',
        demo: 'https://swiftalk.vercel.app/',
        image: "/projects/swifttalk.png",
    },
    {
        title: 'NAT Traversal — UDP Hole Punching over QUIC',
        repo: 'https://github.com/RushiK8626/nat-traversal-udp-hole-punching-over-quic',
        tech: ['Python', 'QUIC', 'UDP', 'Networking'],
        description:
            'An experimental peer-to-peer networking project implementing NAT traversal using UDP hole punching over QUIC to establish low-latency direct communication between clients behind NATs.',
        demo: null,
        image: "/projects/nat-traversal.png",
    },
    {
        title: 'Raylib Chess Game',
        repo: 'https://github.com/RushiK8626/Raylib-Chess-Game',
        tech: ['C++', 'Raylib', 'Game Development'],
        description:
            'A desktop chess game built using Raylib with custom-rendered graphics, move validation, piece logic, and an interactive graphical interface.',
        demo: null,
        image: "/projects/raylib-chess.png",
    },
    {
        title: 'File Compression using Huffman Coding',
        repo: 'https://github.com/RushiK8626/File-Compression-using-Huffman-Coding',
        tech: ['C++', 'React', 'Web Assembly', 'Data Structures', 'Algorithms'],
        description:
            'A lossless file compression utility implementing Huffman coding to encode and decode files efficiently using binary tree-based compression techniques.',
        demo: 'https://compressify-wasm.vercel.app/',
        image: "/projects/huffman.png",
    },
    {
        title: 'Unix Shell',
        repo: 'https://github.com/RushiK8626/Unix-Shell',
        tech: ['C', 'POSIX', 'Linux'],
        description:
            'A custom Unix-like shell built in C supporting command execution, piping, redirection, process management, and interactive terminal behavior.',
        demo: null,
        image: "/projects/unix-shell.png",
    },
    {
        title: 'Search Simulator',
        repo: 'https://github.com/RushiK8626/Search-Simulator',
        tech: ['HTML', 'CSS', 'JavaScript', 'Algorithms', 'Visualization'],
        description:
            'An interactive web-based simulator for visualizing search algorithms and comparing their traversal behavior, efficiency, and execution flow.',
        demo: null,
        image: "/projects/search-simulator.png",
    },
];

const headerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
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

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const gridVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const ProjectCard = ({ projectsList, isFirst }: { projectsList: { title: string, repo: string, tech: string[], description: string, demo: string, image: string }[], isFirst: boolean }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.1 });

    return (
        <div
            ref={ref}
            className="mt-8 rounded-xl bg-gradient-to-b from-surface to-surface-alt p-6 shadow-md"
        >
            {isFirst && (
                <motion.div
                    variants={headerVariants}
                    initial={false}
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <motion.p
                        className="text-primary font-semibold tracking-[0.12em] uppercase text-sm mb-2"
                        variants={itemVariants}
                    >
                        Projects
                    </motion.p>
                    <motion.h2 className="mb-5 font-heading text-heading" variants={itemVariants}>
                        Selected Work
                    </motion.h2>
                </motion.div>
            )}

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={gridVariants}
                initial={false}
                animate={isInView ? 'visible' : 'hidden'}
            >
                {projectsList.map((p) => (
                    <motion.article
                        key={p.title}
                        className="group flex flex-col gap-4 bg-transparent"
                        variants={cardVariants}
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden rounded-md border border-border h-[180px] md:h-[220px]">
                            <Image
                                src={p.image}
                                fill
                                alt={`${p.title} screenshot`}
                                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                            />
                        </div>

                        {/* Body */}
                        <div className="flex flex-col flex-1">
                            <h3 className="m-0 text-lg font-semibold text-heading">{p.title}</h3>
                            <p className="mt-2 mb-0 text-sm text-text-muted flex-1">{p.description}</p>

                            {/* Meta */}
                            <div className="flex flex-col gap-3 mt-4">
                                {/* Tech chips */}
                                <div className="flex gap-2 flex-wrap">
                                    {p.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-[0.6rem] py-[0.3rem] rounded-full bg-surface-alt border border-border text-xs font-medium whitespace-nowrap"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3 flex-wrap">
                                    <Link

                                        href={p.repo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-transparent text-primary border border-border px-[0.8rem] py-[0.45rem] rounded-md no-underline text-sm font-medium whitespace-nowrap transition-[background,color,border-color] duration-200 hover:bg-primary hover:text-white hover:border-primary"
                                    >
                                        View on GitHub
                                    </Link>
                                    {p.demo && (
                                        <Link
                                            href={p.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="bg-primary text-white border border-primary px-[0.8rem] py-[0.45rem] rounded-md no-underline text-sm font-medium whitespace-nowrap transition-[background,color,border-color] duration-200 hover:bg-primary-dark hover:border-primary-dark"
                                        >
                                            Live Demo
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </div>
    );
};

function Projects() {
    const firstHalf = projects.slice(0, 3);
    const secondHalf = projects.slice(3, 6);

    return (
        <section id="projects" className="pt-0">
            <div className="page-wrap">
                <ProjectCard projectsList={firstHalf} isFirst={true} />
                <ProjectCard projectsList={secondHalf} isFirst={false} />
            </div>
        </section>
    );
}

export default Projects;