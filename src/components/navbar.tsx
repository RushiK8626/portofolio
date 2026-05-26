"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from "next-themes";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-[1000] bg-surface/85 backdrop-blur-md border-b border-border shadow-sm transition-[background,border-color] duration-300">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto px-8 py-4 gap-6 max-md:px-4 max-md:py-[0.85rem] relative">

        {/* Logo */}
        <div>
          <Link
            href="/"
            className="text-xl max-md:text-lg font-bold font-heading text-primary transition-colors duration-200 hover:text-secondary"
          >
            Rushikesh Kadepurkar
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className={`flex items-center gap-6 max-md:flex-col max-md:gap-0 max-md:absolute max-md:top-full max-md:left-0 max-md:right-0 max-md:bg-surface/95 max-md:backdrop-blur-md max-md:border-b max-md:border-border max-md:overflow-hidden max-md:transition-[max-height,visibility,opacity,padding] max-md:duration-300 ${isMenuOpen ? 'max-md:max-h-[80vh] max-md:visible max-md:opacity-100 max-md:py-4 max-md:px-4' : 'max-md:max-h-0 max-md:invisible max-md:opacity-0 max-md:py-0 max-md:px-4'}`}>
          {['#home', '#about', '#skills', '#projects', '#resume', '#contact'].map((href, i) => {
            const labels = ['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'];
            return (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="text-base font-medium text-text relative py-2 transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-[width] after:duration-200 hover:text-primary hover:after:w-full max-md:w-full max-md:py-4 max-md:px-0 max-md:text-center max-md:rounded-md max-md:after:hidden max-md:hover:bg-surface-alt"
              >
                {labels[i]}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            title={mounted ? `Switch to ${theme === 'light' ? 'dark' : 'light'} mode` : 'Toggle theme'}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-alt text-text cursor-pointer border-none transition-[background,transform,color] duration-200 hover:bg-primary hover:text-white hover:rotate-[20deg] [&_svg]:w-5 [&_svg]:h-5"
          >
            {mounted && theme === 'light' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : mounted && theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <div className="w-5 h-5" />
            )}
          </button>

          {/* Hamburger — visible only on mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="flex md:hidden flex-col justify-center w-5 h-5 bg-transparent border-none cursor-pointer gap-[5px]"
          >
            <span className={`block w-full h-[3px] bg-text rounded-full transition-[transform,opacity] duration-200 origin-center ${isMenuOpen ? 'translate-y-[8px] rotate-45' : ''}`} />
            <span className={`block w-full h-[3px] bg-text rounded-full transition-[transform,opacity] duration-200 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-full h-[3px] bg-text rounded-full transition-[transform,opacity] duration-200 origin-center ${isMenuOpen ? '-translate-y-[8px] -rotate-45' : ''}`} />
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
