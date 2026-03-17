"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import type { ServiceData } from "@/lib/data";
import { companyInfo } from "@/lib/data";

export default function ServicePageClient({
  service,
}: {
  service: ServiceData;
}) {
  const Icon = service.icon;

  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="orb orb-blue w-[500px] h-[500px] -top-40 -right-40 opacity-15" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              background:
                "linear-gradient(135deg, transparent 40%, rgba(16, 82, 248, 0.5) 40%, rgba(16, 82, 248, 0.3) 60%, transparent 60%)",
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-brand-blue transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Services
            </Link>
          </motion.div>

          <div className="flex items-start gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0"
            >
              <Icon size={32} className="text-brand-blue" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl gradient-text">
                {service.title}
              </h1>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-white/60 leading-relaxed max-w-3xl"
          >
            {service.heroDescription}
          </motion.p>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Main content */}
            <div className="lg:col-span-3 space-y-6">
              {service.details.map((d, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="text-white/50 leading-relaxed"
                >
                  {d}
                </motion.p>
              ))}

              {service.bulletPoints.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="glass rounded-2xl p-8 mt-8"
                >
                  <h3 className="font-display font-bold text-lg mb-5">
                    What We Provide
                  </h3>
                  <ul className="space-y-3">
                    {service.bulletPoints.map((bp, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-white/60"
                      >
                        <Check
                          size={18}
                          className="text-brand-blue mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm">{bp}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Sidebar CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="glass rounded-2xl p-8 sticky top-28 space-y-6">
                <h3 className="font-display font-bold text-xl">
                  Interested in this service?
                </h3>
                <p className="text-sm text-white/50">
                  Contact us today for a customised quote. We respond within 24
                  hours.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blue-light hover:shadow-glow transition-all"
                  >
                    Get a Free Quote
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href={`tel:${companyInfo.phone.replace(/-/g, "")}`}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-button text-white text-sm font-semibold"
                  >
                    <Phone size={16} />
                    {companyInfo.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
