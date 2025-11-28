"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/competitions", label: "Competitions" },
  { href: "/events", label: "Events" },
  { href: "/join", label: "Join" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <Link
              href="/"
              className="flex items-center space-x-3 md:space-x-4 group"
              aria-label="SMSU DECA Home"
            >
              {/* SMSU Logo Placeholder */}
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-brown rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-base transition-transform group-hover:scale-105">
                SMSU
              </div>

              {/* DECA Logo Placeholder */}
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-gold rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-base transition-transform group-hover:scale-105">
                DECA
              </div>

              {/* Text */}
              <span className="hidden sm:block text-lg md:text-xl font-semibold text-primary-brown">
                SMSU DECA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary-brown hover:bg-accent rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="ml-4 bg-primary-gold hover:bg-primary-gold/90 text-white"
            >
              <Link href="/join">Join DECA</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 lg:hidden"
              style={{ top: "64px" }}
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-16 bottom-0 w-full sm:w-80 bg-background border-l border-border shadow-xl lg:hidden overflow-y-auto"
            >
              <nav className="px-4 py-6" aria-label="Mobile navigation">
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="px-4 py-3 text-base font-medium text-foreground hover:bg-accent rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="pt-4">
                    <Button
                      asChild
                      className="w-full bg-primary-gold hover:bg-primary-gold/90 text-white"
                    >
                      <Link href="/join" onClick={closeMenu}>
                        Join DECA
                      </Link>
                    </Button>
                  </div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}


