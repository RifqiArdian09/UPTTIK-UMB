"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";

const Tentangkami = () => {
  const { t } = useLanguage();

  return (
    <section
      id="tentang"
      className="relative py-24 xs:py-32 px-6 md:px-12 lg:px-16 overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            <div className="relative z-10 rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl overflow-hidden border-2 border-primary/10 shadow-2xl group">
              <Image
                src="/tentanghome.webp"
                alt="Tentang Kami UPTTIK"
                width={800}
                height={800}
                className="w-full h-auto object-cover aspect-[4/5] lg:aspect-square"
              />

              {/* Technical Corner Accents */}
              <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-3xl pointer-events-none z-20"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-white/20 rounded-bl-3xl pointer-events-none z-20"></div>
            </div>


          </motion.div>

          {/* Right Side: Content */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-8 ">
                {t("about.title1")} <span className="text-primary">&</span> {t("about.title2")}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                {t("about.description")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12"
            >
              <Button asChild size="xl" className="rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-lg rounded-br-lg group shadow-lg shadow-primary/25 px-10 transition-all duration-500 hover:rounded-2xl font-semibold">
                <Link href="/profil" className="flex items-center">
                  {t("about.readMore")}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="ml-2"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentangkami;