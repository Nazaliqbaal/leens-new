import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/36e44fcf5_generated_4c180ed3.png"
          alt="UAE port logistics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/90" />
      </div>

      {/* Blueprint overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-6 block">
              Start Trading Today
            </span>

            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Ready to <span className="text-primary">Partner</span> with Us?
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Whether you need bulk spices, premium rice, or any food commodity
              — get in touch for competitive quotes and reliable supply.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group bg-primary text-primary-foreground px-10 py-4 font-heading font-semibold text-sm tracking-wider uppercase flex items-center gap-3 hover:bg-primary/90 transition-all"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+971569507115"
                className="border border-white/20 text-white px-10 py-4 font-heading font-semibold text-sm tracking-wider uppercase flex items-center gap-3 hover:border-primary hover:text-primary transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
