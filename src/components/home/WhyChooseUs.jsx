import React from "react";
import { motion } from "framer-motion";
import { Globe, Trophy, Sparkles, Heart, ChevronRight } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    number: "01",
    title: "Global Sourcing Network",
    description:
      "We source premium products from India, Turkey, Libya, and other key origins to bring you the best quality at competitive prices.",
  },
  {
    icon: Trophy,
    number: "02",
    title: "Decade of Trust",
    description:
      "Over 10 years of experience in delivering quality food products across the UAE market with a proven track record.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Premium Quality",
    description:
      "Every product meets international food safety standards. Our brands ensure consistent premium quality with every order.",
  },
  {
    icon: Heart,
    number: "04",
    title: "Customer First",
    description:
      "Dedicated support, flexible ordering, and customized solutions for retailers, wholesalers, and large-scale businesses.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-muted/50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-primary" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Why Choose Us
            </span>
            <div className="w-12 h-[1px] bg-primary" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Built on <span className="text-primary">Trust</span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Number */}
              <span className="font-heading text-7xl font-bold text-foreground/[0.04] absolute -top-4 -left-2">
                {reason.number}
              </span>

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 border border-border flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="font-heading text-lg font-bold tracking-wider text-foreground mb-3">
                  {reason.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                  {reason.description}
                </p>

                <div className="flex items-center gap-1 text-primary font-mono text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <ChevronRight className="w-3 h-3" />
                </div>
              </div>

              {/* Bottom border that fills on hover */}
              <div className="h-[2px] bg-border mt-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
