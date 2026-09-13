import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import Hero from "@/components/hero";

const Tentangkami = dynamic(() => import("@/components/tentangkami"));
const Layanan = dynamic(() => import("@/components/layanan"));
const FAQ = dynamic(() => import("@/components/faq"));
const Footer = dynamic(() => import("@/components/footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tentangkami />
        <Layanan />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
