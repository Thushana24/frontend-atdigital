"use client";
import { navLinks } from "@/data/navLinks";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { HiX } from "react-icons/hi";

const TopNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="top-0 right-0 z-50 flex w-full items-center justify-between bg-[var(--color-primary)] p-5 text-[var(--color-accent2)] md:px-10 xl:px-20">
        {/* Logo & Title */}
        <div className="flex items-center gap-[14px]">
          <img
            src="/logo/logo.svg"
            alt="Company Logo"
            className="h-[43.75px] w-[44.02px] rounded-[1.41px]"
          />
          <img
            src="/logo/logo_text.svg"
            alt="Company Logo"
            className="h-[49.62px] w-[167.98px]"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-[28px] text-[14px] md:flex">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="uppercase transition-opacity hover:opacity-80"
            >
              {label.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="transition-opacity hover:opacity-80 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <FiMenu className="h-[24px] w-[31px]" />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Navigation */}
          <nav className="fixed top-0 right-0 z-50 h-full w-[375px] max-w-full transform bg-[var(--color-accent2)] px-5 py-[16px] transition-transform duration-300 ease-in-out md:hidden">
            <div className="flex h-full flex-col gap-[32px]">
              {/* Header with close button */}
              <div className="flex items-center justify-between">
                <span className="text-[14px] text-[var(--color-text)] transition-colors">
                  Home
                </span>
                <button
                  className="rounded transition-colors hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <HiX className="h-[24px] w-[31px] text-[#100C08]" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-[32px] text-[14px] text-[var(--color-text)]">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="transition-colors hover:text-[var(--color-primary)] hover:opacity-80"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default TopNavigation;
