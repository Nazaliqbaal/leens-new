import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">
                L
              </span>
            </div>
            <div>
              <span
                className={`font-heading font-bold text-lg tracking-wider transition-colors duration-500 ${scrolled ? "text-foreground" : "text-white"}`}
              >
                LEENS
              </span>
              <span
                className={`block text-[10px] font-mono tracking-[0.3em] uppercase transition-colors duration-500 ${scrolled ? "text-muted-foreground" : "text-white/60"}`}
              >
                Trading LLC
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-heading text-sm font-medium tracking-wider uppercase hover:text-primary transition-colors duration-300 ${scrolled ? "text-muted-foreground" : "text-white/80"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+971569507115"
              className={`flex items-center gap-2 text-sm font-mono hover:text-primary transition-colors duration-300 ${scrolled ? "text-muted-foreground" : "text-white/70"}`}
            >
              <Phone className="w-4 h-4" />
              +971 56 950 7115
            </a>
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-6 py-2.5 text-sm font-heading font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block font-heading text-lg font-medium tracking-wider text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <a
                  href="tel:+971569507115"
                  className="flex items-center gap-2 text-sm font-mono text-muted-foreground"
                >
                  <Phone className="w-4 h-4" />
                  +971 56 950 7115
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
