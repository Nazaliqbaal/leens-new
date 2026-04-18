import React from "react";
import { motion } from "framer-motion";
import { Shield, Globe, Truck, Award } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Sourcing",
    description:
      "We source premium food commodities from India, Turkey, Libya, and beyond.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description:
      "Every product meets international food safety and quality standards.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description:
      "Timely logistics network ensuring consistent supply across the UAE.",
  },
  {
    icon: Award,
    title: "Trusted Partner",
    description:
      "Serving retailers, wholesalers, and businesses with unwavering reliability.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-32 relative">
      {/* Technical line */}
      <div className="absolute left-1/2 top-0 w-[1px] h-20 bg-gradient-to-b from-transparent to-primary" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/001c5970c_generated_a2e1f47c.png"
                alt="Modern warehouse with organized food commodity storage"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8">
              <span className="font-heading text-4xl font-bold block">10+</span>
              <span className="font-mono text-xs tracking-wider">
                YEARS OF
                <br />
                EXCELLENCE
              </span>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
                About Leens Trading
              </span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Premium Food
              <br />
              <span className="text-primary">Commodities</span>
              <br />
              You Can Trust
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Leens Trading is a trusted supplier of essential food commodities
              based in Sharjah, UAE. We serve retailers, wholesalers, and
              businesses with consistent quality and reliable sourcing, focusing
              on freshness, ethical practices, and timely delivery.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="group">
                  <div className="w-12 h-12 border border-border flex items-center justify-center mb-3 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-sm font-semibold tracking-wider uppercase mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
