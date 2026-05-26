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
            'A modern, full-stack messaging application with real-time communication, AI-powered chat assistance, task management, and smart notifications. Designed for performance and secure group collaboration.',
        features: [
            'Real-Time Messaging with live read receipts and typing indicators',
            'AI-Powered Chat for writing suggestions and smart replies',
            'Task Management for personal and shared tasks',
            'Smart Web Push Notifications with email alerts',
            'File & Media Sharing with instant previews',
            'Secure JWT-based authentication with OTP verification',
            'Privacy Controls with blocked-user management and private chats'
        ],
        demo: 'https://swiftalk.vercel.app/',
        image: "/projects/swifttalk.png",
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
        title: 'Search Simulator',
        repo: 'https://github.com/RushiK8626/Search-Simulator',
        tech: ['HTML', 'CSS', 'JavaScript', 'Algorithms', 'Visualization'],
        description:
            'An interactive web-based simulator for visualizing search algorithms and comparing their traversal behavior, efficiency, and execution flow.',
        demo: 'https://search-simulator.vercel.app/',
        image: "/projects/search-simulator.png",
    },
    {
        title: 'NAT Traversal — UDP Hole Punching over QUIC',
        repo: 'https://github.com/RushiK8626/nat-traversal-udp-hole-punching-over-quic',
        tech: ['Python', 'QUIC', 'UDP', 'Networking'],
        description:
            'A comprehensive NAT traversal implementation utilizing UDP hole punching and QUIC transport to establish direct, low-latency peer-to-peer connections.',
        features: [
            'NAT Classification (Full Cone, Restricted, Symmetric)',
            'Simultaneous UDP Hole Punching with QUIC transport',
            '0-RTT Session Resumption for faster handshakes',
            'WebSocket-based Relay Fallback when hole punching fails',
            'TLS 1.3 Certificate-based Authentication',
            'Real-time metrics via HTTP dashboard'
        ],
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
        title: 'Unix Shell',
        repo: 'https://github.com/RushiK8626/Unix-Shell',
        tech: ['C', 'POSIX', 'Linux'],
        description:
            'A custom Unix-like shell built in C supporting command execution, piping, redirection, process management, and interactive terminal behavior.',
        demo: null,
        image: "/projects/unix-shell.png",
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

const ProjectCard = ({ projectsList, isFirst }: { projectsList: { title: string, repo: string, tech: string[], description: string, demo: string | null, image: string, features?: string[] }[], isFirst: boolean }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.01 });

    return (
        <div
            ref={ref}
            className="mt-8 rounded-xl bg-gradient-to-b from-surface to-surface-alt p-4 sm:p-6 shadow-md"
        >
            {isFirst && (
                <motion.div
                    variants={headerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <motion.p
                        className="text-primary font-semibold tracking-[0.12em] uppercase text-sm mb-2"
                        variants={itemVariants}
                    >
                        Projects
                    </motion.p>
                    <motion.h2 className="mb-5 font-heading text-heading !text-2xl sm:!text-3xl lg:!text-4xl" variants={itemVariants}>
                        Selected Work
                    </motion.h2>
                </motion.div>
            )}

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                variants={gridVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {projectsList.map((p, index) => {
                    const isFeatured = index === 0;

                    return (
                        <motion.article
                            key={p.title}
                            className={`group flex flex-col gap-5 bg-transparent ${isFeatured
                                ? 'lg:col-span-2 lg:row-span-2'
                                : ''
                                }`}
                            variants={cardVariants}
                        >
                            {/* Image */}
                            <div className={`relative w-full overflow-hidden rounded-xl border border-border/60 bg-surface-alt/50 shrink-0 ${isFeatured
                                ? 'h-[220px] sm:h-[260px] lg:h-[340px]'
                                : 'h-[180px] sm:h-[200px] lg:h-[180px]'
                                }`}>
                                <Image
                                    src={p.image}
                                    fill
                                    alt={`${p.title} screenshot`}
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                />
                            </div>

                            {/* Body */}
                            <div className={`flex flex-col flex-1`}>
                                <h3 className={`${isFeatured ? 'text-xl sm:text-2xl lg:text-3xl tracking-tight' : 'text-base sm:text-lg'} !m-0 font-bold text-heading transition-colors group-hover:text-primary`}>
                                    {p.title}
                                </h3>
                                <p className={`mt-3 mb-0 ${isFeatured ? 'text-base lg:text-lg leading-relaxed' : 'text-sm leading-normal'} text-text-muted`}>
                                    {p.description}
                                </p>

                                {isFeatured && p.features && (
                                    <div className="mt-6">
                                        <h4 className="text-base font-semibold text-heading mb-4">Key Features</h4>
                                        <ul className="m-0 flex flex-col gap-3.5 pl-0 text-base text-text-muted list-none">
                                            {p.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                    </div>
                                                    <span className="leading-snug">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Meta */}
                                <div className={`flex flex-col justify-end flex-1 gap-4 ${isFeatured ? 'mt-6' : 'mt-4'}`}>
                                    {/* Tech chips */}
                                    <div className="flex gap-2 flex-wrap">
                                        {p.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-[0.6rem] py-[0.3rem] rounded-md bg-primary/10 text-primary text-xs font-semibold whitespace-nowrap"
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
                                            className={`bg-transparent text-primary border border-primary/30 rounded-lg no-underline font-medium whitespace-nowrap transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary ${isFeatured ? 'px-4 py-2 text-sm' : 'px-3 py-1.5 text-xs'}`}
                                        >
                                            View Code
                                        </Link>
                                        {p.demo && (
                                            <Link
                                                href={p.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={`bg-primary text-white border border-primary rounded-lg no-underline font-medium whitespace-nowrap shadow-sm shadow-primary/20 transition-all duration-300 hover:bg-primary-dark hover:border-primary-dark hover:shadow-md ${isFeatured ? 'px-4 py-2 text-sm' : 'px-3 py-1.5 text-xs'}`}
                                            >
                                                Live Demo
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    );
                })}
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