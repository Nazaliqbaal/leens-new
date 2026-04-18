import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Filter } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const allProducts = [
  {
    name: "Saffron Threads",
    category: "Spices & Herbs",
    origin: "Iran / India",
    sku: "SPH-001",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/8b0fab94f_generated_aadd799d.png",
  },
  {
    name: "Cardamom Pods",
    category: "Spices & Herbs",
    origin: "India / Guatemala",
    sku: "SPH-002",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/8b0fab94f_generated_aadd799d.png",
  },
  {
    name: "Turmeric Powder",
    category: "Spices & Herbs",
    origin: "India",
    sku: "SPH-003",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/8b0fab94f_generated_aadd799d.png",
  },
  {
    name: "Basmati Rice",
    category: "Rice & Grains",
    origin: "India / Pakistan",
    sku: "RCG-001",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/96981519c_generated_e6ea211b.png",
  },
  {
    name: "Sella Rice",
    category: "Rice & Grains",
    origin: "India",
    sku: "RCG-002",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/96981519c_generated_e6ea211b.png",
  },
  {
    name: "Extra Virgin Olive Oil",
    category: "Oils",
    origin: "Turkey / Spain",
    sku: "OIL-001",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/7ae4946b7_generated_dee9a261.png",
  },
  {
    name: "Sunflower Oil",
    category: "Oils",
    origin: "Ukraine / Turkey",
    sku: "OIL-002",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/7ae4946b7_generated_dee9a261.png",
  },
  {
    name: "Premium Almonds",
    category: "Dry Fruits & Nuts",
    origin: "USA / India",
    sku: "DFN-001",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/baea0824a_generated_2562c596.png",
  },
  {
    name: "Cashew Nuts",
    category: "Dry Fruits & Nuts",
    origin: "India / Vietnam",
    sku: "DFN-002",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/baea0824a_generated_2562c596.png",
  },
  {
    name: "Pistachios",
    category: "Dry Fruits & Nuts",
    origin: "Iran / USA",
    sku: "DFN-003",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/baea0824a_generated_2562c596.png",
  },
  {
    name: "Lamb Cuts",
    category: "Meat & Poultry",
    origin: "Australia / NZ",
    sku: "MTP-001",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/c6ca7c5f6_generated_47c1ef98.png",
  },
  {
    name: "Chicken Whole",
    category: "Meat & Poultry",
    origin: "Brazil / UAE",
    sku: "MTP-002",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/c6ca7c5f6_generated_47c1ef98.png",
  },
  {
    name: "Feta Cheese",
    category: "Cheese & Dairy",
    origin: "Egypt / Denmark",
    sku: "CHD-001",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/705ca1275_generated_b772fe9e.png",
  },
  {
    name: "Mozzarella",
    category: "Cheese & Dairy",
    origin: "Italy / Egypt",
    sku: "CHD-002",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/705ca1275_generated_b772fe9e.png",
  },
  {
    name: "Premium Tahini",
    category: "Tahini",
    origin: "Syria / Turkey",
    sku: "TAH-001",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/7fc62f507_generated_30a1345e.png",
  },
  {
    name: "Refined Sugar",
    category: "Sugar",
    origin: "Brazil / India",
    sku: "SUG-001",
    image:
      "https://media.base44.com/images/public/69d76c2de822b32d25ed30f4/ad66c6a55_generated_700b240b.png",
  },
];

const categories = ["All", ...new Set(allProducts.map((p) => p.category))];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-primary" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Full Catalog
            </span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight">
            Our <span className="text-primary">Products</span>
          </h1>
          <p className="text-white/50 text-lg mt-4 max-w-xl">
            Premium food commodities sourced globally, delivered with trust
            across the UAE.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 py-4 overflow-x-auto">
            <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 font-mono text-xs tracking-wider uppercase transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="wait">
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.sku}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group cursor-pointer border border-border hover:border-primary/30 transition-colors"
                >
                  {/* Image */}
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-primary flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase block mb-2">
                      {product.sku} — {product.category}
                    </span>
                    <h3 className="font-heading text-base font-bold text-foreground group-hover:text-primary transition-colors tracking-wide mb-1">
                      {product.name}
                    </h3>
                    <p className="font-mono text-xs text-muted-foreground">
                      Origin: {product.origin}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
