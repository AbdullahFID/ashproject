"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

const TOTAL = testimonials.length;
// 4-face prism = 90° per face, tight enough to avoid overlap
const ANGLE = 90;
// Radius: half the container height works well for 90° faces
const RADIUS = 190;

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div className="w-full max-w-3xl mx-auto glass rounded-3xl p-8 md:p-12">
      <div className="flex flex-col items-center text-center space-y-5">
        <Quote size={36} className="text-brand-blue/30" />
        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl italic">
          &ldquo;{testimonial.text}&rdquo;
        </p>
        <div>
          <div className="font-display font-bold text-white">{testimonial.name}</div>
          <div className="text-xs text-white/40 mt-1 flex items-center justify-center gap-1">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Google Review
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const paginate = useCallback((dir: number) => {
    setCurrent((prev) => (prev + dir + TOTAL) % TOTAL);
    setRotation((prev) => prev + dir * ANGLE);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [autoPlay, paginate]);

  // Only render 3 faces: prev, current, next
  const visibleIndices = useMemo(() => {
    const prev = (current - 1 + TOTAL) % TOTAL;
    const next = (current + 1) % TOTAL;
    return [
      { idx: prev, offset: -1 },
      { idx: current, offset: 0 },
      { idx: next, offset: 1 },
    ];
  }, [current]);

  return (
    <section className="section-y section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-blue w-[500px] h-[500px] top-0 right-1/4 opacity-5" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-button text-xs font-semibold uppercase tracking-widest text-brand-blue mb-4">
            Client Reviews
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl gradient-text">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* 3D Drum */}
        <div
          className="relative"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <div
            className="relative mx-auto overflow-hidden"
            style={{
              perspective: "1200px",
              height: "380px",
            }}
          >
            {/* Rotating drum — uses cumulative rotation so it always goes the right direction */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateX(${-rotation}deg)`,
                transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {visibleIndices.map(({ idx, offset }) => (
                <div
                  key={`${idx}-${offset}`}
                  className="absolute inset-0 flex items-center justify-center px-2 md:px-4"
                  style={{
                    transform: `rotateX(${(rotation + offset * ANGLE)}deg) translateZ(${RADIUS}px)`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  <TestimonialCard testimonial={testimonials[idx]} />
                </div>
              ))}
            </div>

            {/* Top/bottom shadow overlays for depth illusion */}
            <div
              className="absolute top-0 left-0 right-0 h-20 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, rgba(10,10,15,0.8) 0%, transparent 100%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-20 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(10,10,15,0.8) 0%, transparent 100%)",
              }}
            />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="p-3 rounded-xl glass hover:bg-white/10 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} className="text-white/60" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const diff = i - current;
                    setRotation((prev) => prev + diff * ANGLE);
                    setCurrent(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-brand-blue w-8"
                      : "bg-white/20 w-2 hover:bg-white/40"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="p-3 rounded-xl glass hover:bg-white/10 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={20} className="text-white/60" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}