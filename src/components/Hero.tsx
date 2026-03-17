"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, ChevronDown } from "lucide-react";
import Link from "next/link";
import { companyInfo } from "@/lib/data";

const PHRASES = [
  "Quality Services at Affordable Prices",
  "30+ Years of Trusted Excellence",
  "Available 24/7, 365 Days a Year",
  "70+ Residential Clients Across the GTA",
  "Eco-Friendly & Sustainable Solutions",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  /* ─── Cycling Typewriter ─── */
  const [typed, setTyped] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = PHRASES[phraseIdx];
    const speed = isDeleting ? 25 : 40;

    if (!isDeleting && typed === current) {
      const timeout = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(timeout);
    }
    if (isDeleting && typed === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIdx((prev) => (prev + 1) % PHRASES.length);
      }, 300);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setTyped(
        isDeleting
          ? current.slice(0, typed.length - 1)
          : current.slice(0, typed.length + 1)
      );
    }, speed);
    return () => clearTimeout(timeout);
  }, [typed, isDeleting, phraseIdx]);

  /* ─── Card cursor-follow tilt ─── */
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -15, y: x * 15 }); // rotateX from y, rotateY from x
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* ─── Background ─── */}
      <motion.div
        style={{ scale: bgScale, y: bgY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-surface-dark-elevated to-surface-dark" />
      </motion.div>

      {/* Floating Orbs */}
      <div className="orb orb-blue w-[500px] h-[500px] -top-40 -right-40 animate-float" />
      <div className="orb orb-blue w-[300px] h-[300px] bottom-20 -left-20 animate-float-delayed opacity-20" />
      <div className="orb orb-white w-[400px] h-[400px] top-1/3 left-1/3 animate-pulse-glow" />

      {/* Noise */}
      <div className="absolute inset-0 noise-overlay z-[1]" />

      {/* ─── Content (no fade on scroll) ─── */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 w-full section-padding pt-32 md:pt-40 pb-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text */}
            <div className="space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button text-sm"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Serving the GTA Since {companyInfo.founded}
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight"
              >
                <span className="block gradient-text">Toronto&apos;s</span>
                <span className="block text-white mt-1">Premier</span>
                <span className="block text-brand-blue mt-1">Cleaning</span>
                <span className="block text-white/80 mt-1">Leader</span>
              </motion.h1>

              {/* Tagline - cycling typewriter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-lg sm:text-xl text-white/60 font-body max-w-lg"
              >
                <span className="text-brand-blue font-semibold">
                  &ldquo;{typed}
                </span>
                <span
                  className="inline-block w-[2px] h-[1.1em] bg-brand-blue ml-0.5 align-middle"
                  style={{ animation: "blink 1s step-end infinite" }}
                />
                <span className="text-brand-blue font-semibold">&rdquo;</span>
                <p className="mt-3 text-base text-white/40">
                  High-rise residential condominiums & commercial facilities —
                  30+ years of trusted excellence.
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 px-7 py-4 rounded-2xl bg-brand-blue text-white font-semibold text-base hover:bg-brand-blue-light hover:shadow-glow-lg transition-all duration-300"
                >
                  Get a Free Quote
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href={`tel:${companyInfo.phone.replace(/-/g, "")}`}
                  className="group flex items-center gap-2 px-7 py-4 rounded-2xl glass-button text-white font-semibold text-base"
                >
                  <Phone size={18} />
                  {companyInfo.phone}
                </Link>
              </motion.div>
            </div>

            {/* Right: Glass card with cursor-follow tilt */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              {/* Hover detection area — does NOT transform */}
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative w-full aspect-square max-w-lg"
                style={{ perspective: 800 }}
              >
                {/* Visual card — this transforms */}
                <div
                  className="relative w-full h-full"
                  style={{
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                    transition: "transform 0.15s ease-out",
                    transformStyle: "preserve-3d",
                  }}
                >
                {/* Background glow */}
                <div className="absolute inset-0 rounded-3xl bg-brand-blue/10 blur-3xl" />

                {/* Glass card */}
                <div className="relative w-full h-full rounded-3xl glass overflow-hidden flex items-center justify-center p-8">
                  {/* Diagonal lines pattern */}
                  <div className="absolute inset-0">
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `repeating-linear-gradient(
                          135deg,
                          transparent,
                          transparent 40px,
                          rgba(16, 82, 248, 0.2) 40px,
                          rgba(16, 82, 248, 0.2) 41px
                        )`,
                      }}
                    />
                  </div>

                  {/* Shine effect that follows cursor */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none transition-all duration-300"
                    style={{
                      background: `radial-gradient(circle at ${50 + tilt.y * 3}% ${50 + tilt.x * 3}%, rgba(16, 82, 248, 0.3) 0%, transparent 60%)`,
                    }}
                  />

                  {/* Big "TS" */}
                  <div
                    className="font-display font-black text-[200px] leading-none tracking-tighter select-none"
                    style={{
                      background:
                        "linear-gradient(135deg, #1052F8 0%, #3A75FF 40%, #ffffff 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter: "drop-shadow(0 0 40px rgba(16, 82, 248, 0.3))",
                    }}
                  >
                    TS
                  </div>

                  {/* Floating stats badges */}
                  <div className="absolute top-6 right-6 glass px-4 py-2 rounded-xl text-center">
                    <div className="text-2xl font-display font-bold text-brand-blue">30+</div>
                    <div className="text-[10px] text-white/50 uppercase tracking-wider">Years</div>
                  </div>

                  <div className="absolute bottom-6 left-6 glass px-4 py-2 rounded-xl text-center">
                    <div className="text-2xl font-display font-bold text-brand-blue">70+</div>
                    <div className="text-[10px] text-white/50 uppercase tracking-wider">Clients</div>
                  </div>
                </div>
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} className="text-white/30 animate-bounce" />
      </motion.div>
    </section>
  );
}