"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import { companyInfo } from "@/lib/data";

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us Anytime",
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone.replace(/-/g, "")}`,
    description: "Speak to our team directly",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: `${companyInfo.address}\n${companyInfo.city}`,
    href: `https://maps.google.com/?q=${encodeURIComponent(
      `${companyInfo.address} ${companyInfo.city}`
    )}`,
    description: "Our head office location",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri: 9 AM – 4:30 PM",
    href: undefined,
    description: "Emergency services 24/7",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    postalCode: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, wire up to an API route / email service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-y section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-blue w-[600px] h-[600px] -bottom-60 -left-40 opacity-10" />
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
            Get In Touch
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl gradient-text">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
            Reach out through our form or give us a call. We&apos;ll be in touch
            within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left — Contact methods + Map */}
          <div className="lg:col-span-2 space-y-5">
            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              const Wrapper = method.href ? "a" : "div";
              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Wrapper
                    {...(method.href
                      ? {
                          href: method.href,
                          target: method.href.startsWith("http")
                            ? "_blank"
                            : undefined,
                          rel: method.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined,
                        }
                      : {})}
                    className="glass-card rounded-2xl p-5 flex items-start gap-4 block"
                  >
                    <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-brand-blue" />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-sm">
                        {method.label}
                      </div>
                      <div className="text-sm text-white/70 whitespace-pre-line mt-0.5">
                        {method.value}
                      </div>
                      <div className="text-xs text-white/30 mt-1">
                        {method.description}
                      </div>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="rounded-2xl overflow-hidden border border-white/5 h-48"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.983!2d-79.2642!3d43.8005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d1e60fa2e!2s210+Silverstar+Blvd!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Top Spot Janitorial Services Location"
              />
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-3xl p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                  <CheckCircle2 size={48} className="text-green-400" />
                  <h3 className="font-display font-bold text-2xl">
                    Message Sent!
                  </h3>
                  <p className="text-white/50">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="font-display font-bold text-xl mb-6">
                    Request a Quote
                  </h3>
                  <div className="space-y-4" role="form">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5 font-medium">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/30 transition-all text-sm"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5 font-medium">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/30 transition-all text-sm"
                          placeholder="416-555-0123"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5 font-medium">
                          Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/30 transition-all text-sm"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5 font-medium">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          value={formData.postalCode}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              postalCode: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/30 transition-all text-sm"
                          placeholder="M1V 5J9"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5 font-medium">
                        Service Required *
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/30 transition-all text-sm appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-surface-dark">
                          Choose a service...
                        </option>
                        <option
                          value="multi-residential"
                          className="bg-surface-dark"
                        >
                          Multi-Residential Janitorial
                        </option>
                        <option
                          value="office-commercial"
                          className="bg-surface-dark"
                        >
                          Office & Commercial
                        </option>
                        <option
                          value="superintendent"
                          className="bg-surface-dark"
                        >
                          Superintendent Services
                        </option>
                        <option value="emergency" className="bg-surface-dark">
                          Emergency Services
                        </option>
                        <option value="full-service" className="bg-surface-dark">
                          Full Service
                        </option>
                        <option value="retail" className="bg-surface-dark">
                          Retail
                        </option>
                        <option value="industrial" className="bg-surface-dark">
                          Industrial
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5 font-medium">
                        Message
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/30 transition-all text-sm resize-none"
                        placeholder="Tell us about your cleaning needs..."
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue-light hover:shadow-glow transition-all duration-300"
                    >
                      <Send size={18} />
                      Submit Details
                    </button>

                    <p className="text-xs text-white/30 text-center">
                      One of our representatives will contact you within 24 hours.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
