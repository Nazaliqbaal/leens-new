import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What products does Leens Trading supply?",
    answer:
      "We supply a comprehensive range of food commodities including spices & herbs, rice & grains, cooking oils, dry fruits & nuts, meat & poultry, cheese & dairy products, tahini, and sugar. All products are sourced from premium origins worldwide.",
  },
  {
    question: "Do you offer bulk or wholesale pricing?",
    answer:
      "Yes, we specialize in bulk supply for retailers, wholesalers, and businesses. Contact us for customized pricing based on your volume requirements. We offer competitive rates for large orders.",
  },
  {
    question: "What regions do you deliver to?",
    answer:
      "We primarily serve the UAE market with deliveries across all emirates. We also support international trade partnerships. Contact us to discuss logistics for your specific location.",
  },
  {
    question: "How can I request a quote?",
    answer:
      "You can request a quote through our contact form, email us at info@leenstrading.com, call us at +971 56 950 7115, or reach us directly via WhatsApp. Our team typically responds within 24 hours.",
  },
  {
    question: "Do your products meet international quality standards?",
    answer:
      "Absolutely. All our products meet international food safety and quality standards. We focus on freshness, ethical sourcing, and rigorous quality control to ensure every delivery meets customer expectations.",
  },
  {
    question: "What is your minimum order quantity?",
    answer:
      "Minimum order quantities vary by product category. Please contact our sales team for specific MOQ details and we'll be happy to accommodate your needs.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-primary" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              FAQ
            </span>
            <div className="w-12 h-[1px] bg-primary" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Common <span className="text-primary">Questions</span>
          </h2>
        </div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="font-heading text-sm font-semibold tracking-wide text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
