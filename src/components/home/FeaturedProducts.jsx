import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const featured = [
  {
    name: "Premium Saffron",
    category: "Spices & Herbs",
    tag: "Best Seller",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/8b0fab94f_generated_aadd799d.png",
    origin: "Iran / India",
  },
  {
    name: "Basmati Rice",
    category: "Rice & Grains",
    tag: "Premium",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/96981519c_generated_e6ea211b.png",
    origin: "India / Pakistan",
  },
  {
    name: "Extra Virgin Olive Oil",
    category: "Oils",
    tag: "Best Seller",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/7ae4946b7_generated_dee9a261.png",
    origin: "Turkey / Spain",
  },
  {
    name: "Mixed Dry Fruits",
    category: "Dry Fruits & Nuts",
    tag: "Premium",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/baea0824a_generated_2562c596.png",
    origin: "Multiple Origins",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
                Featured Selection
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Best <span className="text-primary">Sellers</span>
            </h2>
          </div>
          <Link
            to="/products"
            className="group flex items-center gap-2 font-heading text-sm font-semibold tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden relative mb-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 font-mono text-[10px] tracking-widest uppercase flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Info */}
              <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase block mb-1">
                {product.category}
              </span>
              <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors tracking-wide">
                {product.name}
              </h3>
              <p className="font-mono text-xs text-muted-foreground mt-1">
                Origin: {product.origin}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
