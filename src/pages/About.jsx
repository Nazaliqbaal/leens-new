import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Shield,
  Truck,
  Award,
  Users,
  Clock,
  Target,
  Leaf,
} from "lucide-react";
import Navbar from "../components/Navbar";
import CTASection from "../components/home/CTASection";
import Footer from "../components/Footer";

const values = [
  {
    icon: Shield,
    title: "Quality First",
    desc: "Rigorous quality control at every step, from sourcing to delivery.",
  },
  {
    icon: Leaf,
    title: "Ethical Sourcing",
    desc: "Sustainable and responsible partnerships with global producers.",
  },
  {
    icon: Target,
    title: "Reliability",
    desc: "Consistent supply and on-time delivery you can depend on.",
  },
  {
    icon: Users,
    title: "Partnership",
    desc: "Building long-term relationships with every client we serve.",
  },
];

const timeline = [
  {
    year: "Establishment",
    text: "Leens Trading LLC founded in Sharjah, UAE to serve the regional food trade market.",
  },
  {
    year: "Expansion",
    text: "Expanded product portfolio to include premium spices, rice, oils, and dry fruits.",
  },
  {
    year: "Growth",
    text: "Established partnerships with over 100+ retailers and wholesalers across the UAE.",
  },
  {
    year: "Today",
    text: "Recognized as a trusted supplier serving businesses with global sourcing capabilities.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-20 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-primary" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Our Story
            </span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight">
            About <span className="text-primary">Leens</span>
          </h1>
          <p className="text-white/50 text-lg mt-4 max-w-xl">
            A decade of excellence in food commodity trading from the heart of
            the UAE.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src="https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/001c5970c_generated_a2e1f47c.png"
                  alt="Warehouse logistics"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-primary" />
                <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
                  Our Mission
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Delivering <span className="text-primary">Excellence</span> in
                Every Shipment
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Leens Trading LLC is a Sharjah-based food commodity supplier
                dedicated to providing retailers, wholesalers, and businesses
                with premium quality products. Our mission is to be the bridge
                between global food producers and the UAE market.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a strong focus on freshness, ethical sourcing, and timely
                delivery, we ensure every product meets international standards
                and exceeds customer expectations. Our global sourcing network
                spans India, Turkey, Libya, and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
                Core Values
              </span>
              <div className="w-12 h-[1px] bg-primary" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              What <span className="text-primary">Drives</span> Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 border border-border flex items-center justify-center mx-auto mb-6 hover:border-primary hover:bg-primary/5 transition-all">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-base font-bold tracking-wider uppercase mb-3">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
                Our Journey
              </span>
              <div className="w-12 h-[1px] bg-primary" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              The <span className="text-primary">Path</span> We've Taken
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-border" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-8 pl-2"
                >
                  <div className="w-9 h-9 flex-shrink-0 border-2 border-primary bg-background flex items-center justify-center rounded-full">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>
                  <div>
                    <span className="font-heading text-xl font-bold text-primary">
                      {item.year}
                    </span>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
