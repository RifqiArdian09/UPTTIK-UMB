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
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl overflow-hidden border-2 border-primary/10 shadow-2xl group">
              <Image
                src="/tentanghome.webp"
                alt="Tentang Kami UPTTIK"
                width={800}
                height={800}
                className="w-full h-auto object-cover aspect-[4/5] lg:aspect-square transition-transform duration-700 group-hover:scale-105"
              />

              {/* Technical Corner Accents */}
              <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-3xl pointer-events-none z-20"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-white/30 rounded-bl-3xl pointer-events-none z-20"></div>
            </div>

            {/* Subtle background glow element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          {/* Right Side: Content */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6 font-heading">
                {t("about.title1")} <span className="text-primary">&</span> {t("about.title2")}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6 text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed font-normal"
            >
              <p>
                {t("about.description")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10"
            >
              <Button asChild size="xl" className="rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-lg rounded-br-lg group shadow-lg shadow-primary/20 px-8 sm:px-10 transition-all duration-300 hover:rounded-2xl hover:scale-[1.02] active:scale-[0.98] font-semibold text-base">
                <Link href="/profil" className="flex items-center">
                  {t("about.readMore")}
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
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