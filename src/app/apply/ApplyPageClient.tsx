"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Briefcase } from "lucide-react";

export default function ApplyPageClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="pt-28 pb-20 section-padding">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-4"
        >
          <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-4">
            <Briefcase size={28} className="text-brand-blue" />
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl gradient-text">
            Join Our Team
          </h1>
          <p className="text-white/50 text-lg max-w-xl">
            We&apos;re always looking for hardworking, dedicated team members.
            Fill out the form below and our HR team will be in touch.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass rounded-3xl p-8 md:p-10"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
              <CheckCircle2 size={48} className="text-green-400" />
              <h3 className="font-display font-bold text-2xl">
                Application Received!
              </h3>
              <p className="text-white/50">
                Thank you for your interest. We&apos;ll review your application
                and get back to you shortly.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/30 transition-all text-sm"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5 font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/30 transition-all text-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5 font-medium">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/30 transition-all text-sm"
                    placeholder="416-555-0123"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5 font-medium">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/30 transition-all text-sm"
                    placeholder="City, Province"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5 font-medium">
                  Position Interested In *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/30 transition-all text-sm appearance-none cursor-pointer"
                >
                  <option value="" className="bg-surface-dark">
                    Select a position...
                  </option>
                  <option value="day-porter" className="bg-surface-dark">
                    Day Porter / Matron
                  </option>
                  <option value="night-cleaner" className="bg-surface-dark">
                    Night Cleaner
                  </option>
                  <option value="superintendent" className="bg-surface-dark">
                    Superintendent
                  </option>
                  <option value="supervisor" className="bg-surface-dark">
                    Supervisor
                  </option>
                  <option value="other" className="bg-surface-dark">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5 font-medium">
                  Experience
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/30 transition-all text-sm appearance-none cursor-pointer">
                  <option value="" className="bg-surface-dark">
                    Years of experience...
                  </option>
                  <option value="0-1" className="bg-surface-dark">
                    0 – 1 years
                  </option>
                  <option value="1-3" className="bg-surface-dark">
                    1 – 3 years
                  </option>
                  <option value="3-5" className="bg-surface-dark">
                    3 – 5 years
                  </option>
                  <option value="5+" className="bg-surface-dark">
                    5+ years
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5 font-medium">
                  Tell Us About Yourself
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/30 transition-all text-sm resize-none"
                  placeholder="Brief description of your experience and availability..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue-light hover:shadow-glow transition-all duration-300"
              >
                <Send size={18} />
                Submit Application
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
