"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { companyInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Skyline SVG silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-40 opacity-5 pointer-events-none">
        <svg
          viewBox="0 0 1440 200"
          fill="currentColor"
          className="absolute bottom-0 w-full text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,200 L0,140 L40,140 L40,100 L60,100 L60,80 L80,80 L80,60 L100,60 L100,80 L120,80 L120,40 L140,40 L140,20 L160,20 L160,40 L180,40 L180,80 L200,80 L200,100 L240,100 L240,60 L260,60 L260,80 L280,80 L280,120 L320,120 L320,80 L340,80 L340,40 L360,40 L360,20 L380,20 L380,30 L400,30 L400,60 L420,60 L420,100 L460,100 L460,80 L480,80 L480,60 L500,60 L500,30 L520,30 L520,10 L540,10 L540,30 L560,30 L560,60 L580,60 L580,80 L600,80 L600,100 L640,100 L640,120 L680,120 L680,80 L700,80 L700,60 L720,60 L720,40 L740,40 L740,60 L760,60 L760,100 L800,100 L800,80 L820,80 L820,50 L840,50 L840,30 L860,30 L860,50 L880,50 L880,80 L920,80 L920,100 L960,100 L960,60 L980,60 L980,40 L1000,40 L1000,20 L1020,20 L1020,40 L1040,40 L1040,60 L1060,60 L1060,80 L1100,80 L1100,100 L1140,100 L1140,80 L1160,80 L1160,60 L1180,60 L1180,40 L1200,40 L1200,60 L1220,60 L1220,80 L1260,80 L1260,100 L1300,100 L1300,120 L1340,120 L1340,80 L1360,80 L1360,100 L1400,100 L1400,140 L1440,140 L1440,200 Z" />
        </svg>
      </div>

      <div className="relative z-10 bg-surface-dark-elevated/80 border-t border-white/5">
        <div className="max-w-7xl mx-auto section-padding py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Col 1 — Brand */}
            <div className="space-y-5">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center font-display font-black text-white text-lg">
                  TS
                </div>
                <div>
                  <div className="font-display font-bold text-sm tracking-wider">
                    TOPSPOT
                  </div>
                  <div className="text-[10px] tracking-[0.2em] text-white/40 uppercase">
                    Janitorial Services
                  </div>
                </div>
              </Link>
              <p className="text-sm text-white/40 leading-relaxed">
                Toronto&apos;s premier janitorial service leader for high-rise
                residential condominiums and commercial facilities since{" "}
                {companyInfo.founded}.
              </p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-xl glass flex items-center justify-center hover:bg-brand-blue/20 hover:border-brand-blue/30 transition-all"
                  >
                    <Icon size={16} className="text-white/50" />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 — Useful Links */}
            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-5">
                Useful Links
              </h4>
              <ul className="space-y-2.5">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Services", href: "/#services" },
                  { label: "Contact Us", href: "/contact" },
                  { label: "Apply Now", href: "/apply" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-brand-blue transition-colors animated-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Contact */}
            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-5">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-brand-blue mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white/40">
                    {companyInfo.address}
                    <br />
                    {companyInfo.city}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-brand-blue flex-shrink-0" />
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-sm text-white/40 hover:text-brand-blue transition-colors"
                  >
                    {companyInfo.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-brand-blue flex-shrink-0" />
                  <a
                    href={`tel:${companyInfo.phone.replace(/-/g, "")}`}
                    className="text-sm text-white/40 hover:text-brand-blue transition-colors"
                  >
                    {companyInfo.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={16} className="text-brand-blue mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-white/40">
                    <div>Mon – Fri: 9 AM – 4:30 PM</div>
                    <div className="mt-0.5">
                      Sat & Sun:{" "}
                      <span className="px-2 py-0.5 rounded text-xs bg-white/5 text-white/30">
                        Closed
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto section-padding py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
              reserved.
            </p>
            <p className="text-xs text-white/20">
              Proudly serving the Greater Toronto Area
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}