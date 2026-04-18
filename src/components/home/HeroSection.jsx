import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/ff9505bfc_generated_70241ee5.png"
          alt="Premium spices and food commodities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>

      {/* Technical Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-[1px] bg-primary" />
              <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
                Est. UAE — Food Commodities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight mb-8"
            >
              TRADING
              <br />
              <span className="text-primary">WITHOUT</span>
              <br />
              BORDERS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-white/60 max-w-md mb-10 leading-relaxed"
            >
              Trusted suppliers of premium food commodities — spices, rice,
              oils, dry fruits, and more — serving businesses across the UAE and
              beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/products"
                className="group bg-primary text-primary-foreground px-8 py-4 font-heading font-semibold text-sm tracking-wider uppercase flex items-center gap-3 hover:bg-primary/90 transition-all"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border border-white/20 text-white px-8 py-4 font-heading font-semibold text-sm tracking-wider uppercase hover:border-primary hover:text-primary transition-all"
              >
                Request Quote
              </Link>
            </motion.div>
          </div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  value: "10+",
                  label: "Years Experience",
                  sub: "Since establishment",
                },
                {
                  value: "100+",
                  label: "Trusted Partners",
                  sub: "Global network",
                },
                { value: "7+", label: "Product Lines", sub: "Category range" },
                { value: "24/7", label: "Support", sub: "Always available" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                  className="border border-white/10 p-6 backdrop-blur-sm bg-white/5"
                >
                  <span className="font-heading text-4xl font-bold text-primary">
                    {stat.value}
                  </span>
                  <p className="font-heading text-sm font-semibold text-white mt-2 tracking-wider uppercase">
                    {stat.label}
                  </p>
                  <p className="font-mono text-[10px] text-white/40 tracking-wider mt-1">
                    {stat.sub}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-white/40">
              <MapPin className="w-4 h-4" />
              <span className="font-mono text-xs tracking-wider">
                Sharjah, UAE — Global Distribution
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
