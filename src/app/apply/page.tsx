import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplyPageClient from "./ApplyPageClient";

export const metadata: Metadata = {
  title: "Apply Now | Top Spot Janitorial Services Inc.",
  description:
    "Join the Top Spot team! Apply for janitorial, superintendent, and cleaning positions across the GTA.",
};

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <ApplyPageClient />
      <Footer />
    </>
  );
}
