import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const productLinks = [
  "Spices & Herbs",
  "Rice & Grains",
  "Oils",
  "Dry Fruits & Nuts",
  "Meat & Poultry",
  "Cheese & Dairy",
  "Tahini",
  "Sugar",
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Top border accent */}
      <div className="h-1 bg-primary" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">
                  L
                </span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg tracking-wider text-white">
                  LEENS
                </span>
                <span className="block text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase">
                  Trading LLC
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Trusted supplier of premium food commodities serving businesses
              and households across the UAE and beyond.
            </p>
            <a
              href="https://wa.me/971569507115"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 font-mono text-xs tracking-wider uppercase hover:bg-primary/90 transition-colors"
            >
              WhatsApp Us
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-sm tracking-wider uppercase text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 text-sm hover:text-primary transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-bold text-sm tracking-wider uppercase text-white mb-6">
              Products
            </h3>
            <ul className="space-y-3">
              {productLinks.map((name) => (
                <li key={name}>
                  <Link
                    to="/products"
                    className="text-white/50 text-sm hover:text-primary transition-colors font-body"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-sm tracking-wider uppercase text-white mb-6">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-white/50 text-sm leading-relaxed">
                  Business Centre, Sharjah Publishing City Free Zone, P.O.Box:
                  73111, Sharjah, U.A.E
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+971569507115"
                  className="text-white/50 text-sm hover:text-primary transition-colors font-mono"
                >
                  +971 56 950 7115
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@leenstrading.com"
                  className="text-white/50 text-sm hover:text-primary transition-colors"
                >
                  info@leenstrading.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/30 tracking-wider">
            © {new Date().getFullYear()} LEENS TRADING LLC. ALL RIGHTS RESERVED.
          </p>
          <p className="font-mono text-xs text-white/30 tracking-wider">
            SHARJAH, UAE — GLOBAL DISTRIBUTION
          </p>
        </div>
      </div>
    </footer>
  );
}
