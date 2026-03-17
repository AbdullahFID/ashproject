"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Check } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data";

export default function Services() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  return (
    <section id="services" className="section-y section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-blue w-[600px] h-[600px] top-1/4 -right-60 opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-button text-xs font-semibold uppercase tracking-widest text-brand-blue mb-4">
            What We Do
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl gradient-text">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
            Fully integrated solutions — scaled to fit any building, any size,
            anywhere across Canada.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div
                  className="glass-card rounded-2xl p-6 h-full flex flex-col group cursor-pointer"
                  onClick={() => setActiveModal(i)}
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-5 group-hover:bg-brand-blue/20 group-hover:shadow-glow transition-all duration-300">
                    <Icon size={24} className="text-brand-blue" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-3 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed flex-1">
                    {service.shortDescription}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm text-brand-blue font-medium">
                    Learn More
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ═══════ Centered Modal ═══════ */}
      <AnimatePresence>
        {activeModal !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
            />

            {/* Modal wrapper — inset-0 flex centering avoids transform/backdrop-filter bugs */}
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setActiveModal(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-2xl max-h-[85vh] overflow-y-auto glass rounded-3xl shadow-glow modal-no-scrollbar"
                style={{ scrollbarWidth: "none" }}
                onClick={(e) => e.stopPropagation()}
              >
              {(() => {
                const service = services[activeModal];
                const Icon = service.icon;
                return (
                  <div className="p-8 md:p-10">
                    {/* Close */}
                    <button
                      onClick={() => setActiveModal(null)}
                      className="absolute top-5 right-5 p-2 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <X size={18} className="text-white/40" />
                    </button>

                    {/* Icon + Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={28} className="text-brand-blue" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-2xl">
                          {service.title}
                        </h3>
                        <p className="text-xs text-white/30 mt-0.5 uppercase tracking-wider">
                          Top Spot Janitorial Services
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-white/5 mb-6" />

                    {/* Description */}
                    <p className="text-white/70 leading-relaxed mb-4">
                      {service.heroDescription}
                    </p>

                    {service.details.map((d, i) => (
                      <p key={i} className="text-white/50 text-sm leading-relaxed mb-3">
                        {d}
                      </p>
                    ))}

                    {/* Bullet points */}
                    {service.bulletPoints.length > 0 && (
                      <div className="mt-6 rounded-2xl bg-white/[0.03] border border-white/5 p-5">
                        <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-white/40 mb-3">
                          What We Provide
                        </h4>
                        <ul className="space-y-2">
                          {service.bulletPoints.map((bp, j) => (
                            <li key={j} className="flex items-start gap-3 text-sm text-white/60">
                              <Check size={15} className="text-brand-blue mt-0.5 flex-shrink-0" />
                              {bp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTAs */}
                    <div className="flex gap-3 mt-8">
                      <Link
                        href="/contact"
                        onClick={() => setActiveModal(null)}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blue-light hover:shadow-glow transition-all"
                      >
                        Get a Quote
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}