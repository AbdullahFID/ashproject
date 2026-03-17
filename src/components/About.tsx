"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Award, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Experience",
    description:
      "Over 30 years delivering quality janitorial services across the GTA.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "Our trustworthy team is dedicated to meeting all client needs — available 24/7.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We hold ourselves to the highest industry standards, utilising industry best practices.",
  },
  {
    icon: Sparkles,
    title: "Full Service",
    description:
      "Comprehensive janitorial, housekeeping, superintendent, and supply solutions.",
  },
];

export default function About() {
  return (
    <section className="section-y section-padding relative overflow-hidden">
      {/* Diagonal background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            background:
              "linear-gradient(135deg, transparent 40%, rgba(16, 82, 248, 0.5) 40%, rgba(16, 82, 248, 0.3) 60%, transparent 60%)",
          }}
        />
        <div className="orb orb-blue w-[400px] h-[400px] -bottom-40 left-1/4 opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full glass-button text-xs font-semibold uppercase tracking-widest text-brand-blue mb-4">
                Why Choose Us
              </span>
              <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-tight">
                <span className="gradient-text">We&apos;re the Best</span>
                <br />
                <span className="text-white">in the Business</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-white/60 leading-relaxed text-lg"
            >
              We focus on delivering high-quality, sustainable, and eco-friendly
              cleaning services, paying close attention to every detail.
              Leveraging over three decades of experience, our team provides
              dependable and innovative cleaning solutions that surpass your
              expectations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-white/40 leading-relaxed"
            >
              Rely on us to maintain a clean and healthy environment for you,
              while also contributing positively to the local community. Built on
              the same principles since commencement — Customer Support, Client
              Satisfaction, and Commitment to Service Excellence.
            </motion.p>
          </div>

          {/* Right — Pillar Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card rounded-2xl p-6"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-brand-blue" />
                  </div>
                  <h3 className="font-display font-bold text-base mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
