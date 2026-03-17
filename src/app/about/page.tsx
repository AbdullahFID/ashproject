import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | Top Spot Janitorial Services Inc.",
  description:
    "Over 30 years of delivering quality janitorial services across the GTA. Learn about our story, values, and commitment to service excellence.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutPageClient />
      <CTABanner />
      <Footer />
    </>
  );
}
