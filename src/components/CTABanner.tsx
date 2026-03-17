"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { companyInfo } from "@/lib/data";

export default function CTABanner() {
  return (
    <section className="section-padding py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-blue" />
          <div className="absolute inset-0 opacity-10">
            <div
              style={{
                backgroundImage: `repeating-linear-gradient(
                  135deg,
                  transparent,
                  transparent 60px,
                  rgba(255, 255, 255, 0.1) 60px,
                  rgba(255, 255, 255, 0.1) 61px
                )`,
              }}
              className="absolute inset-0"
            />
          </div>

          <div className="relative px-8 md:px-16 py-16 text-center space-y-6">
            <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white">
              Ready to Experience the
              <br />
              Top Spot Difference?
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Join 70+ satisfied residential and commercial clients across the
              GTA. Contact us today for a free consultation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-brand-blue font-bold hover:bg-white/90 hover:shadow-lg transition-all duration-300"
              >
                Get a Free Quote
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href={`tel:${companyInfo.phone.replace(/-/g, "")}`}
                className="group flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-all duration-300"
              >
                <Phone size={18} />
                {companyInfo.phone}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
