"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Users,
  Wrench,
  Phone,
  FileText,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, companyInfo } from "@/lib/data";

const navIcons: Record<string, React.ElementType> = {
  Home: Home,
  "About Us": Users,
  Services: Wrench,
  "Contact Us": Phone,
  "Apply Now": FileText,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrolled(currentScrollY > 50);
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const [activeSection, setActiveSection] = useState("");

  // Observe sections on homepage for active nav highlighting
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) {
      setActiveSection("home");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    sections.forEach((s) => observer.observe(s));

    // Default to home when at top
    const checkTop = () => {
      if (window.scrollY < 400) setActiveSection("home");
    };
    window.addEventListener("scroll", checkTop, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkTop);
    };
  }, [pathname]);

  const isActive = (href: string) => {
    // On non-home pages, use pathname
    if (pathname !== "/") {
      if (href === "/") return false;
      return pathname.startsWith(href.replace("/#", "/"));
    }
    // On homepage, use scroll-based section detection
    if (href === "/") return activeSection === "home" || activeSection === "";
    if (href.includes("#")) {
      const sectionId = href.split("#")[1];
      return activeSection === sectionId;
    }
    return false;
  };

  return (
    <>
      {/* ═══════ DESKTOP NAVBAR ═══════ */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -120 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[70] hidden md:block transition-all duration-500",
          scrolled
            ? "glass shadow-glass"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center font-display font-black text-white text-lg group-hover:shadow-glow transition-shadow duration-300">
                TS
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm tracking-wider leading-tight">
                  TOPSPOT
                </span>
                <span className="text-[10px] tracking-[0.2em] text-white/50 dark:text-white/50 uppercase">
                  Janitorial Services
                </span>
              </div>
            </Link>

            {/* Nav Links */}
            <div className="flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = navIcons[link.label];
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-500 ease-out",
                      active
                        ? "text-brand-blue"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {Icon && <Icon size={16} />}
                    {link.label}
                    <span
                      className={cn(
                        "absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-brand-blue transition-all duration-500 ease-out",
                        active
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0"
                      )}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Link
                href="tel:4164773714"
                className="ml-2 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blue-light hover:shadow-glow transition-all duration-300"
              >
                <Phone size={16} />
                Call Now
              </Link>
            </div>
          </nav>
        </div>

      </motion.header>

      {/* ═══════ MOBILE TOP BAR ═══════ */}
      <div className="fixed top-0 left-0 right-0 z-[70] md:hidden">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: visible ? 0 : -80 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "flex items-center justify-between px-4 h-16 transition-all duration-500",
            scrolled ? "glass shadow-glass" : "bg-surface-dark/80 backdrop-blur-sm"
          )}
        >
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center font-display font-black text-white text-xs">
              TS
            </div>
            <span className="font-display font-bold text-sm tracking-wider">
              TOPSPOT
            </span>
          </Link>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/5"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>

        {/* Mobile slide-down menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden glass"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const Icon = navIcons[link.label];
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                        isActive(link.href)
                          ? "bg-brand-blue/10 text-brand-blue"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {Icon && <Icon size={18} />}
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  href={`tel:${companyInfo.phone.replace(/-/g, "")}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-blue text-white text-sm font-semibold"
                >
                  <Phone size={16} />
                  {companyInfo.phone}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ═══════ MOBILE BOTTOM NAV ═══════ */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : 100 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-4 left-4 right-4 z-[70] md:hidden glass rounded-2xl shadow-glass"
      >
        <div className="flex items-center justify-around py-2">
          {navLinks.map((link) => {
            const Icon = navIcons[link.label];
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-all min-w-[52px]",
                  active ? "text-brand-blue" : "text-white/50"
                )}
              >
                {Icon && <Icon size={20} strokeWidth={active ? 2.5 : 1.5} />}
                <span className="text-[9px] font-medium leading-tight">
                  {link.label.split(" ")[0]}
                </span>
              </Link>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}