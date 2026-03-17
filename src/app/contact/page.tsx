import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Top Spot Janitorial Services Inc.",
  description:
    "Get in touch with Top Spot Janitorial Services. Call 416-477-3714 or fill out our form. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
