import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Tentangkami from "@/components/tentangkami";
import Layanan from "@/components/layanan";
import { Navbar } from "@/components/navbar";

import FAQ from "@/components/faq";

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
