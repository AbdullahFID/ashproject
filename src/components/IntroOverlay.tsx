"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";
import gsap from "gsap";

interface Props {
  scrollProgress: MotionValue<number>;
}

export default function IntroOverlay({ scrollProgress }: Props) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const topHalfRef = useRef<HTMLDivElement>(null);
  const bottomHalfRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const subRef = useRef<(HTMLSpanElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);
  const [preloaderDone, setPreloaderDone] = useState(false);

  const TITLE = "TOPSPOT";
  const SUBTITLE = ["JANITORIAL", "SERVICES"];

  useEffect(() => {
    const el = preloaderRef.current;
    const topHalf = topHalfRef.current;
    const bottomHalf = bottomHalfRef.current;
    const chars = charsRef.current.filter(Boolean) as HTMLSpanElement[];
    const subs = subRef.current.filter(Boolean) as HTMLSpanElement[];
    const line = lineRef.current;
    if (!el || !topHalf || !bottomHalf || !chars.length || !line) return;

    // Initial states
    gsap.set(chars, { y: "120%", rotateX: 40, opacity: 0 });
    gsap.set(subs, { y: "100%", opacity: 0 });
    gsap.set(line, { scaleX: 0, opacity: 0 });
    // Halves start visible but behind the full preloader (z-79 vs z-80)
    gsap.set([topHalf, bottomHalf], { yPercent: 0 });

    const tl = gsap.timeline({
      onComplete: () => setPreloaderDone(true),
    });

    tl
      // 1. Chars fly in
      .to(chars, {
        y: "0%",
        rotateX: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.055,
        ease: "power3.out",
      }, 0.3)
      // 2. Subtitle slides in
      .to(subs, {
        y: "0%",
        opacity: 1,
        duration: 0.65,
        stagger: 0.04,
        ease: "power3.out",
      }, 0.85)
      // 3. Brief hold
      .to({}, { duration: 0.4 })
      // 4. Line sweeps left to right — the "cut"
      .to(line, {
        scaleX: 1,
        opacity: 1,
        duration: 0.45,
        ease: "power2.out",
      })
      // 5. Hide full preloader — halves already visible behind it
      .set(el, { display: "none" })
      // 6. Split open — top UP, bottom DOWN
      .to(topHalf, {
        yPercent: -100,
        duration: 0.85,
        ease: "power3.inOut",
      })
      .to(bottomHalf, {
        yPercent: 100,
        duration: 0.85,
        ease: "power3.inOut",
      }, "<");

    return () => { tl.kill(); };
  }, []);

  // ─── PHASE 2: Scroll-driven skyline cutout ───
  const textScale = useTransform(scrollProgress, [0, 0.4], [1, 14]);
  const imgScale = useTransform(scrollProgress, [0, 0.5], [1, 1.15]);
  const textLayerOpacity = useTransform(scrollProgress, [0.2, 0.4], [1, 0]);
  const darkOverlay = useTransform(scrollProgress, [0.4, 0.65], [0, 1]);
  const overlayOpacity = useTransform(scrollProgress, [0.7, 0.93], [1, 0]);
  const scrollHintOpacity = useTransform(scrollProgress, [0, 0.08], [1, 0]);

  return (
    <>
      {/* ═══════════════════════════════════════════
          PHASE 1A: Full preloader — shows text, then line cuts it
          ═══════════════════════════════════════════ */}
      {!preloaderDone && (
        <>
          <div
            ref={preloaderRef}
            className="fixed inset-0 bg-[#050508] flex flex-col items-center justify-center"
            style={{ zIndex: 80, perspective: "600px" }}
          >
            <div className="flex overflow-hidden" style={{ perspective: "600px" }}>
              {TITLE.split("").map((char, i) => (
                <span
                  key={i}
                  ref={(el) => { charsRef.current[i] = el; }}
                  className="inline-block font-display font-black text-[16vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] tracking-[-0.03em] text-white"
                  style={{ transformStyle: "preserve-3d", willChange: "transform" }}
                >
                  {char}
                </span>
              ))}
            </div>
            <div className="flex gap-[0.6em] overflow-hidden mt-3 md:mt-4">
              {SUBTITLE.map((word, i) => (
                <span
                  key={i}
                  ref={(el) => { subRef.current[i] = el; }}
                  className="inline-block font-display font-medium text-[2.5vw] md:text-[1.8vw] lg:text-[1.3vw] tracking-[0.35em] text-brand-blue uppercase"
                  style={{ willChange: "transform" }}
                >
                  {word}
                </span>
              ))}
            </div>
            {/* The cutting line */}
            <div
              ref={lineRef}
              className="absolute top-1/2 left-0 right-0 h-[5px] -translate-y-1/2 origin-left"
              style={{
                background: "linear-gradient(90deg, #a0c4ff, #bcd4ff, #8ab4ff)",
                boxShadow: "0 0 15px rgba(160, 196, 255, 0.5), 0 0 40px rgba(160, 196, 255, 0.2)",
              }}
            />
          </div>

          {/* ═══════════════════════════════════════════
              PHASE 1B: Two halves — after the cut, they slide apart
              Each is a clipped copy of the dark background.
              ═══════════════════════════════════════════ */}
          <div
            ref={topHalfRef}
            className="fixed top-0 left-0 right-0 h-[50vh] bg-[#050508]"
            style={{ zIndex: 79 }}
          />
          <div
            ref={bottomHalfRef}
            className="fixed bottom-0 left-0 right-0 h-[50vh] bg-[#050508]"
            style={{ zIndex: 79 }}
          />
        </>
      )}

      {/* ═══════════════════════════════════════════
          PHASE 2: Scroll-driven skyline cutout
          ═══════════════════════════════════════════ */}
      <motion.div
        style={{ opacity: overlayOpacity, zIndex: 60 }}
        className="fixed top-0 left-0 w-full h-screen overflow-hidden pointer-events-none"
      >
        <motion.div style={{ scale: imgScale }} className="absolute inset-0 z-0 will-change-transform">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/d/d1/Toronto_Skyline_at_night_-b.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center 60%",
            }}
          />
        </motion.div>

        <motion.div
          style={{ scale: textScale, opacity: textLayerOpacity, mixBlendMode: "screen" }}
          className="absolute inset-0 z-10 will-change-transform"
        >
          <div className="absolute inset-[-200%]" style={{ background: "linear-gradient(135deg, #a0c4ff 0%, #bcd4ff 30%, #8ab4ff 60%, #b0cfff 100%)" }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 select-none">
            <span className="font-display font-black text-[18vw] md:text-[14vw] lg:text-[12vw] leading-[0.85] tracking-[-0.04em] text-black">TOPSPOT</span>
            <span className="font-display font-medium text-[3vw] md:text-[2vw] lg:text-[1.4vw] tracking-[0.4em] uppercase text-black">JANITORIAL SERVICES</span>
          </div>
        </motion.div>

        <motion.div style={{ opacity: darkOverlay }} className="absolute inset-0 z-20 bg-gradient-to-b from-[#0A0A0F]/70 via-[#0A0A0F]/90 to-[#0A0A0F]" />

        {preloaderDone && (
          <motion.div style={{ opacity: scrollHintOpacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
            {/* Mouse scroll wheel indicator */}
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
              <div className="w-1 h-2.5 rounded-full bg-white/50 animate-bounce" />
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}