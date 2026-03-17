"use client";

import { useState, useEffect, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Navbar from "@/components/Navbar";
import IntroOverlay from "@/components/IntroOverlay";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const COOKIE_NAME = "ts_intro_seen";
const COOKIE_DAYS = 3;

function setCookie(name: string, value: string, days: number) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/;SameSite=Lax`;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [introActive, setIntroActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const spacerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    if (!getCookie(COOKIE_NAME)) {
      setShowIntro(true);
      setIntroActive(true);
    }
  }, []);

  // Track scroll on the spacer to know when intro is done
  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.95 && introActive) {
      // Kill the intro — release the page from fixed position
      setIntroActive(false);
      setCookie(COOKIE_NAME, "1", COOKIE_DAYS);
      // Wait one frame for fixed→static transition, then scroll
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      });
    }
  });

  // No intro — just render normally
  if (!mounted) {
    return (
      <>
        <Navbar />
        <main className="relative">
          <Hero />
          <Stats />
          <About />
          <Services />
          <Testimonials />
          <CTABanner />
          <FAQ />
        </main>
        <Footer />
      </>
    );
  }

  if (!showIntro) {
    return (
      <>
        <Navbar />
        <main className="relative">
          <Hero />
          <Stats />
          <About />
          <Services />
          <Testimonials />
          <CTABanner />
          <FAQ />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      {/* 
        SCROLL SPACER — provides 200vh of scroll room.
        While active, the page content below is position:fixed 
        so it stays visible behind the overlay.
      */}
      <div
        ref={spacerRef}
        style={{ height: introActive ? "300vh" : "0px", overflow: "hidden" }}
      />

      {/* OVERLAY — fixed, z-60, reads scroll from spacer */}
      {introActive && <IntroOverlay scrollProgress={scrollYProgress} />}

      {/* 
        PAGE CONTENT — fixed during intro (hero visible behind overlay),
        then released to normal flow after intro completes.
      */}
      <div style={introActive ? { position: "fixed", top: 0, left: 0, right: 0, zIndex: 10 } : undefined}>
        <Navbar />
        <main className="relative">
          <Hero />
          <Stats />
          <About />
          <Services />
          <Testimonials />
          <CTABanner />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}