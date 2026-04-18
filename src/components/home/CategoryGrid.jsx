import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Spices & Herbs",
    sku: "CAT-001",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/8b0fab94f_generated_aadd799d.png",
    size: "large",
  },
  {
    name: "Rice & Grains",
    sku: "CAT-002",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/96981519c_generated_e6ea211b.png",
    size: "small",
  },
  {
    name: "Oils",
    sku: "CAT-003",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/7ae4946b7_generated_dee9a261.png",
    size: "small",
  },
  {
    name: "Dry Fruits & Nuts",
    sku: "CAT-004",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/baea0824a_generated_2562c596.png",
    size: "large",
  },
  {
    name: "Meat & Poultry",
    sku: "CAT-005",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/c6ca7c5f6_generated_47c1ef98.png",
    size: "small",
  },
  {
    name: "Cheese & Dairy",
    sku: "CAT-006",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/705ca1275_generated_b772fe9e.png",
    size: "small",
  },
  {
    name: "Tahini",
    sku: "CAT-007",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/7fc62f507_generated_30a1345e.png",
    size: "small",
  },
  {
    name: "Sugar",
    sku: "CAT-008",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/ad66c6a55_generated_700b240b.png",
    size: "small",
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Blueprint grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
                Product Categories
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
              Our <span className="text-primary">Inventory</span>
            </h2>
          </div>
          <Link
            to="/products"
            className="font-mono text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase flex items-center gap-2"
          >
            View All Products
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.sku}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden cursor-pointer ${
                cat.size === "large"
                  ? "md:col-span-2 aspect-[2/1]"
                  : "aspect-square"
              }`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-white/40 tracking-widest block mb-1">
                      {cat.sku}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-white tracking-wider">
                      {cat.name}
                    </h3>
                  </div>
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
