"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Heart, Leaf, Users, X } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Customer Support",
    short: "Right-sized care",
    text: "We maintain positive communication with our customers — not too big, not too small, just the right size to care. Our management team conducts continuous follow ups and on-site inspections to ensure we maintain our service levels and go over and beyond for our clients.",
    color: "#3B82F6",
  },
  {
    icon: Heart,
    title: "Client Satisfaction",
    short: "Value-added service",
    text: "We always try to add value-added services or techniques that help our service quality and provide cost savings. We focus to help provide opportunities to avoid any issues by being proactive and working directly with property managers, regional representatives, and directly with the customers.",
    color: "#EF4444",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    short: "Eco-friendly solutions",
    text: "With the use of environmentally friendly Eco-label products, it allows us to be confident in ensuring a safe and green work environment supporting our environmental sustainability initiative. We are committed to reducing our ecological footprint while maintaining the highest cleaning standards.",
    color: "#22C55E",
  },
  {
    icon: Users,
    title: "Our People",
    short: "Trained & trusted",
    text: "From our initial cleanup, we put a lot of focus on training our staff extensively regarding WHMIS & Health and Safety procedures. We make sure to do our due-diligence before placing them at your site. Our experienced management team focuses on creating and sustaining the best practices and business processes.",
    color: "#A855F7",
  },
];

const positions: React.CSSProperties[] = [
  { top: "-12%", left: "50%", transform: "translate(-50%, -50%)" },
  { top: "50%", right: "-10%", transform: "translate(0%, -50%)" },
  { bottom: "-12%", left: "50%", transform: "translate(-50%, 50%)" },
  { top: "50%", left: "-10%", transform: "translate(-100%, -50%)" },
];

export default function AboutPageClient() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <main className="pt-28 pb-10">
      {/* Hero — text left, image+orbiting icons right */}
      <section className="section-padding relative overflow-hidden">
        <div className="orb orb-blue w-[500px] h-[500px] -top-40 -right-40 opacity-15" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full glass-button text-xs font-semibold uppercase tracking-widest text-brand-blue mb-4">
                  Our Story
                </span>
                <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl gradient-text leading-tight">
                  Caring About Your
                  <br />
                  Cleaning Needs
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="space-y-5 text-white/60 leading-relaxed"
              >
                <p>
                  Top Spot Janitorial Services Inc. has been providing complete
                  janitorial and building maintenance services for more than 30+
                  years. Since our inception, we have been servicing locations
                  throughout the GTA to many different clients and industries with
                  the promise of being there for you 24 hours, 365 days a year.
                </p>
                <p>
                  We are a trusted service provider in the industry, where we focus
                  on &ldquo;Quality Services at Affordable Prices&rdquo;. This is
                  our competitive advantage — we are not too big, or not too small,
                  which allows us to maintain positive communication with our
                  customers.
                </p>
                <p>
                  As proven leaders, we always try to add value-added services or
                  techniques that will help our service quality. We focus to help
                  provide cost savings, provide opportunities to avoid any issues by
                  being proactive and working directly with property managers,
                  regional representatives, and directly with the customers.
                </p>
                <p className="text-white/40">
                  For 30 years, till today, we are built on the same principles that
                  have made us successful from commencement.{" "}
                  <span className="text-brand-blue/60 italic">
                    Click on any icon to learn more about what drives us.
                  </span>
                </p>
              </motion.div>
            </div>

            {/* Right: image with orbiting icons — desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Placeholder image */}
                <div className="relative aspect-square rounded-3xl overflow-hidden glass">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-3xl font-display font-black text-white">30+</div>
                    <div className="text-sm text-white/50">Years of Excellence</div>
                  </div>
                </div>

                {/* Orbiting value icons */}
                {values.map((value, i) => {
                  const Icon = value.icon;
                  const pos = positions[i];
                  const isExpanded = expanded === i;

                  return (
                    <div
                      key={value.title}
                      className="absolute"
                      style={{
                        ...pos,
                        zIndex: isExpanded ? 30 : 10,
                      }}
                    >
                      <motion.button
                        onClick={() => setExpanded(isExpanded ? null : i)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                          isExpanded
                            ? "bg-brand-blue shadow-glow-lg"
                            : "glass-card hover:border-brand-blue/30"
                        } ${expanded !== null && !isExpanded ? "opacity-30" : "opacity-100"}`}
                      >
                        <Icon
                          size={24}
                          className={isExpanded ? "text-white" : "text-brand-blue"}
                        />
                        {!isExpanded && expanded === null && (
                          <span
                            className="absolute inset-0 rounded-2xl animate-ping opacity-20"
                            style={{ border: `2px solid ${value.color}` }}
                          />
                        )}
                      </motion.button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 10 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute glass rounded-2xl p-5 w-56 shadow-glow"
                            style={{
                              // Each card expands INWARD onto the image
                              // Shield (top) → drops down-left onto image
                              ...(i === 0
                                ? { top: "calc(100% + 8px)", right: "0" }
                                : // Heart (right) → expands left-down onto image  
                                i === 1
                                ? { top: "0", right: "calc(100% + 8px)" }
                                : // Leaf (bottom) → expands up-right onto image
                                i === 2
                                ? { bottom: "calc(100% + 8px)", left: "0" }
                                : // Users (left) → expands right-up onto image
                                { bottom: "0", left: "calc(100% + 8px)" }),
                            }}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="font-display font-bold text-base text-white">
                                {value.title}
                              </h3>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setExpanded(null);
                                }}
                                className="p-1 rounded-lg hover:bg-white/10 transition-colors"
                              >
                                <X size={14} className="text-white/40" />
                              </button>
                            </div>
                            <p className="text-sm text-white/50 leading-relaxed">
                              {value.text}
                            </p>
                            <div
                              className="mt-4 h-0.5 rounded-full w-12"
                              style={{ background: value.color }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                <div className="absolute inset-[-16%] rounded-full border border-dashed border-white/5 pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile layout — stacked cards */}
      <section className="section-padding lg:hidden">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="relative aspect-video rounded-2xl overflow-hidden glass mb-8">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/30 to-transparent" />
          </div>

          {values.map((value, i) => {
            const Icon = value.icon;
            const isExpanded = expanded === i;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <button
                  onClick={() => setExpanded(isExpanded ? null : i)}
                  className={`w-full text-left glass-card rounded-2xl p-5 transition-all duration-500 ${
                    isExpanded ? "border-brand-blue/30 bg-white/[0.06]" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isExpanded ? "bg-brand-blue" : "bg-brand-blue/10"
                      }`}
                    >
                      <Icon
                        size={20}
                        className={isExpanded ? "text-white" : "text-brand-blue"}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-sm">{value.title}</h3>
                      <p className="text-xs text-white/40 mt-0.5">{value.short}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white/30"
                    >
                      <span className="text-lg">+</span>
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-white/5">
                          <p className="text-sm text-white/50 leading-relaxed">
                            {value.text}
                          </p>
                          <div
                            className="mt-3 h-0.5 rounded-full w-10"
                            style={{ background: value.color }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}