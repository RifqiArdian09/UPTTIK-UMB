"use client";


import { Button } from "@/components/ui/button";
import { ArrowUpRight, Phone } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div id="beranda" className="relative min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 sm:pt-20 py-20 px-6 md:px-12 lg:px-16 bg-background">
      {/* Background Image with Enhanced Scrim */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/team.webp"
          alt="UMB Background"
          fill
          className="object-cover object-top md:object-center"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1400px"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 md:mt-4 flex items-center justify-center w-full max-w-5xl">
        <div className="text-center w-full">
          <motion.h1
            initial={{ y: -10, opacity: 1 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-white drop-shadow-lg font-heading"
          >
            {t("hero.title1")} <br />
            <span className="text-white/95">{t("hero.title2")}</span>
          </motion.h1>

          <motion.p
            initial={{ y: -10, opacity: 1 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 md:mt-8 max-w-[65ch] mx-auto text-base sm:text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-sm font-medium"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4"
          >
            <Button
              size="xl"
              className="w-full sm:w-auto rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-lg rounded-br-lg text-base font-bold group shadow-xl shadow-black/25 transition-all duration-300 hover:rounded-2xl hover:scale-[1.02] active:scale-[0.98]"
              asChild
            >
              <Link href="#tentang">
                {t("hero.getStarted")}
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="w-full sm:w-auto rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-lg rounded-br-lg text-base font-bold group transition-all duration-300 hover:rounded-2xl hover:scale-[1.02] active:scale-[0.98] text-foreground bg-background/90 backdrop-blur-sm border-white/20 hover:bg-background"
              asChild
            >
              <Link href="#footer">
                {t("hero.contactUs")}
                <Phone className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
