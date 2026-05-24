"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const CONTACT_EMAIL = 'rushikeshk2005@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/rushikesh-kadepurkar-9a9006292/';
const GITHUB = 'https://www.github.com/RushiK8626';
const FORM_ENDPOINT = '';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
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

// Shared classes extracted as constants to avoid repetition
const contactItemClass = "inline-flex items-center gap-3 px-[1.4rem] py-[0.9rem] rounded-md bg-surface-alt border border-border text-text no-underline font-medium text-base cursor-pointer font-sans transition-[background,color,transform,box-shadow] duration-200 hover:bg-primary hover:text-white hover:-translate-y-[3px] hover:shadow-glow [&:hover_.contact-icon]:text-white";

function Contact() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function openModal() { setOpen(true); setStatus(''); setCopied(false); }
  function closeModal() { setOpen(false); }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      setStatus('Unable to copy: ' + e.message);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    if (FORM_ENDPOINT) {
      try {
        const data = new FormData();
        data.append('name', form.name);
        data.append('email', form.email);
        data.append('message', form.message);
        const res = await fetch(FORM_ENDPOINT, { method: 'POST', body: data });
        if (res.ok) { setStatus('sent'); setForm({ name: '', email: '', message: '' }); }
        else setStatus('error');
      } catch { setStatus('error'); }
    } else {
      const subject = encodeURIComponent('Contact from portfolio');
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus('sent');
    }
  }

  const inputClass = "w-full px-4 py-[0.8rem] border border-border rounded-md mb-3 bg-surface-alt text-text font-sans text-base transition-[border-color,box-shadow] duration-200 focus:border-primary focus:shadow-[0_0_0_3px_rgba(99,102,241,0.15)] focus:outline-none";

  return (
    <section id="contact" className="pt-0 flex items-center justify-center min-h-screen">
      <div className="page-wrap">
        <motion.div
          className="mt-8 rounded-xl bg-gradient-to-b from-surface to-surface-alt px-[3rem] py-[6rem] md:px-[1.5rem] md:py-[3rem] text-center flex flex-col items-center shadow-md"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Header Icon */}
          <motion.div
            className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary text-white mb-6"
            variants={itemVariants}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            className="text-primary font-semibold tracking-[0.12em] uppercase text-sm mb-2"
            variants={itemVariants}
          >
            Contact
          </motion.p>

          {/* Title */}
          <motion.h2 className="mb-3 font-heading" variants={itemVariants}>
            Get in touch
          </motion.h2>

          {/* Summary */}
          <motion.p className="max-w-3xl text-lg text-text-muted" variants={itemVariants}>
            I&apos;m open to opportunities and collaborations — feel free to reach out.
          </motion.p>

          {/* Contact Items */}
          <motion.div
            className="mt-6 flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center"
            variants={itemVariants}
          >
            {/* Email button */}
            <button className={contactItemClass} onClick={openModal} aria-haspopup="dialog">
              <span className="contact-icon flex items-center justify-center w-6 h-6 flex-shrink-0 text-primary transition-colors duration-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </span>
              {CONTACT_EMAIL}
            </button>

            {/* LinkedIn */}
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className={contactItemClass}>
              <span className="contact-icon flex items-center justify-center w-6 h-6 flex-shrink-0 text-primary transition-colors duration-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.836 0-9.759h3.554v1.381c.43-.664 1.202-1.61 2.923-1.61 2.16 0 3.778 1.41 3.778 4.435v5.553zM5.337 8.855c-1.144 0-1.915-.761-1.915-1.713 0-.951.771-1.713 1.921-1.713 1.148 0 1.919.762 1.919 1.713 0 .952-.771 1.713-1.925 1.713zm1.581 11.597H3.756V9.693h3.162v10.759zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z" />
                </svg>
              </span>
              LinkedIn
            </a>

            {/* GitHub */}
            <a href={GITHUB} target="_blank" rel="noreferrer" className={contactItemClass}>
              <span className="contact-icon flex items-center justify-center w-6 h-6 flex-shrink-0 text-primary transition-colors duration-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </span>
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Modal ── */}
      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[2000] animate-[modalFadeIn_0.25s_ease_both]"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[rgba(2,6,23,0.65)] backdrop-blur-[4px]"
            onClick={closeModal}
          />

          {/* Panel */}
          <div className="relative bg-surface border border-border rounded-lg p-[3rem] md:p-[1.5rem] w-[min(900px,calc(100%-2rem))] md:w-[calc(100%-1rem)] max-h-[90vh] overflow-auto shadow-lg z-[2] animate-[modalSlideUp_0.3s_ease_both]">

            {/* Close button */}
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full bg-surface-alt text-text text-xl border-none cursor-pointer transition-[background,color] duration-200 hover:bg-danger hover:text-white"
            >
              ×
            </button>

            {/* Modal Grid */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-[3rem] text-left">

              {/* Left column */}
              <div>
                <h3 className="mt-0 mb-4">Contact</h3>

                <p className="text-text-muted mb-0">Email</p>
                <div className="flex gap-3 items-center mb-4 flex-wrap mt-2">
                  <code className="px-[0.8rem] py-[0.6rem] rounded-md bg-surface-alt border border-border font-mono text-sm text-text">
                    {CONTACT_EMAIL}
                  </code>
                  <button
                    onClick={copyEmail}
                    className="bg-transparent text-primary border border-border px-[0.8rem] py-[0.45rem] rounded-md text-sm font-medium cursor-pointer transition-[background,color,border-color] duration-200 hover:bg-primary hover:text-white hover:border-primary"
                  >
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>

                <p className="text-text-muted mb-0">Profiles</p>
                <div className="flex gap-3 items-center flex-wrap mt-2">
                  <Link
                    href={LINKEDIN}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-[0.9rem] py-[0.6rem] rounded-md bg-surface-alt border border-border no-underline text-text text-sm font-medium transition-[background,color] duration-200 hover:bg-primary hover:text-white"
                  >
                    Open LinkedIn
                  </Link>
                  <Link
                    href={GITHUB}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-[0.9rem] py-[0.6rem] rounded-md bg-surface-alt border border-border no-underline text-text text-sm font-medium transition-[background,color] duration-200 hover:bg-primary hover:text-white"
                  >
                    Open GitHub
                  </Link>
                </div>
              </div>

              {/* Right column — form */}
              <div>
                <h3 className="mt-0 mb-4">Send a message</h3>
                <form onSubmit={handleSubmit}>
                  <label>
                    <span className="sr-only">Name</span>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className={inputClass} />
                  </label>
                  <label>
                    <span className="sr-only">Email</span>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your email" required className={inputClass} />
                  </label>
                  <label>
                    <span className="sr-only">Message</span>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required className={`${inputClass} min-h-[120px] resize-y`} />
                  </label>

                  <div className="flex gap-3 items-center mt-1">
                    <button
                      type="submit"
                      className="bg-primary text-white font-semibold px-6 py-[0.75rem] rounded-md inline-flex items-center justify-center transition-[background,transform,box-shadow] duration-200 hover:bg-primary-dark hover:-translate-y-[2px] hover:shadow-glow"
                    >
                      {status === 'sending' ? 'Sending…' : 'Send'}
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="bg-transparent text-primary border border-border px-[0.8rem] py-[0.45rem] rounded-md text-sm font-medium transition-[background,color,border-color] duration-200 hover:bg-primary hover:text-white hover:border-primary"
                    >
                      Cancel
                    </button>
                  </div>

                  {status === 'sent' && <p className="mt-3 text-success font-medium">Message sent.</p>}
                  {status === 'error' && <p className="mt-3 text-danger font-medium">Error sending message.</p>}
                </form>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;