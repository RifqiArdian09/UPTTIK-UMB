"use client";

import { Badge } from "@/components/ui/badge";
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
    <div id="beranda" className="relative min-h-[80vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 sm:pt-16 py-20 px-6 bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/team.jpeg"
          alt="UMB Background"
          fill
          className="object-cover object-top md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 md:mt-6 flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="rounded-full px-4 py-1.5 border-white/20 bg-white/10 text-white backdrop-blur-sm">
              {t("hero.badge1")} • {t("hero.badge2")} • {t("hero.badge3")}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-lg font-heading"
          >
            {t("hero.title1")} <br />
            <span className="italic">{t("hero.title2")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 max-w-[65ch] mx-auto text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4"
          >
            <Button
              size="xl"
              className="w-full sm:w-auto rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-lg rounded-br-lg text-base font-bold group transition-all duration-500 hover:rounded-2xl"
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
              className="w-full sm:w-auto rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-lg rounded-br-lg text-base font-bold group transition-all duration-500 hover:rounded-2xl text-foreground"
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
