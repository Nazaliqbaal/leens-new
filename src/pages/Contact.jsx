import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Send,
  CheckCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+971 56 950 7115",
    href: "tel:+971569507115",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@leenstrading.com",
    href: "mailto:info@leenstrading.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value:
      "Business Centre, Sharjah Publishing City Free Zone, P.O.Box: 73111, Sharjah, U.A.E",
    href: null,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Sun - Thu: 9:00 AM - 6:00 PM",
    href: null,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              Get In Touch
            </span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-white/50 text-lg mt-4 max-w-xl">
            Reach out for quotes, inquiries, or partnership opportunities.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Info Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-primary" />
                <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
                  Contact Info
                </span>
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                Let's Start a <span className="text-primary">Conversation</span>
              </h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/5 transition-all">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase block mb-1">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground font-medium text-sm hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium text-sm">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/971569507115"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-heading font-semibold text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors"
              >
                Chat on WhatsApp
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-3">
              <div className="border border-border p-8 md:p-10">
                <h3 className="font-heading text-xl font-bold tracking-wider uppercase mb-2">
                  Send Us a Message
                </h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Fill in the form below and our team will respond within 24
                  hours.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-6 rounded-full">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="font-mono text-xs tracking-wider text-primary hover:underline uppercase"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase block mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="h-12 rounded-none border-border focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase block mb-2">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="h-12 rounded-none border-border focus:border-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase block mb-2">
                        Subject *
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Bulk spice inquiry"
                        className="h-12 rounded-none border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase block mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your requirements..."
                        className="min-h-[160px] rounded-none border-border focus:border-primary resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-primary text-primary-foreground h-12 px-10 rounded-none font-heading font-semibold text-sm tracking-wider uppercase hover:bg-primary/90"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
