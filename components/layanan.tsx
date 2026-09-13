"use client";

import {
  Cable,
  HardDrive,
  Server,
  Globe,
  Headset,
} from "lucide-react";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { useLanguage } from "@/context/language-context";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

const Layanan = () => {
  const { t, language } = useLanguage();

  const icons = [Cable, HardDrive, Headset, Server, Globe];
  const images = ["/layanan1.webp", "/layanan2.webp", "/layanan3.webp", "/layanan4.webp", "/layanan5.webp"];

  const translatedLayanan = (t("layanan.items") as any[]).map((item, idx) => ({
    ...item,
    icon: icons[idx],
    image: images[idx],
  }));

  return (
    <section
      id="layanan"
      className="relative flex flex-col items-center justify-center py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden bg-muted/40"
    >
      {/* Technical Frame Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Divider */}
        <div className="absolute top-0 left-0 w-full h-8 md:h-12">
          <svg className="w-full h-full preserve-3d" viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="scale(1, -1) translate(0, -48)">
              <path d="M0 48H1440V24L1400 0H1200L1176 24H264L240 0H40L0 24V48Z" fill="currentColor" className="text-background" />
              <path d="M240 0L264 24H1176L1200 0" stroke="currentColor" strokeWidth="1" className="text-primary/10" />
            </g>
          </svg>
        </div>

        {/* Side Accents */}
        <div className="hidden sm:block absolute top-8 md:top-12 bottom-8 md:bottom-12 left-0 w-[50px] border-l border-primary/10 h-full" />
        <div className="hidden sm:block absolute top-8 md:top-12 bottom-8 md:bottom-12 right-0 w-[50px] border-r border-primary/10 h-full" />

        {/* Bottom Divider */}
        <div className="absolute bottom-0 left-0 w-full h-8 md:h-12">
          <svg className="w-full h-full preserve-3d" viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1440V24L1400 0H1200L1176 24H264L240 0H40L0 24V48Z" fill="currentColor" className="text-background" />
            <path d="M240 0L264 24H1176L1200 0" stroke="currentColor" strokeWidth="1" className="text-primary/10" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
          <motion.h2
            key={`title-${language}`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading"
          >
            {t("layanan.title")}
          </motion.h2>
          <motion.p
            key={`desc-${language}`}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-2xl text-muted-foreground text-base sm:text-lg md:text-xl font-normal leading-relaxed"
          >
            {t("layanan.description")}
          </motion.p>
        </div>

        {/* First Row - 3 Cards */}
        <motion.div
          key={`grid1-${language}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
        >
          {translatedLayanan.slice(0, 3).map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={cn(
                  "group relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-card border border-primary/10 hover:border-primary/40 transition-[border-color,box-shadow] duration-500 shadow-xl hover:shadow-2xl cursor-pointer",
                  isEven
                    ? "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl"
                    : "rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl"
                )}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    quality={60}
                    className={cn(
                      "object-cover transition-transform duration-700 ease-out group-hover:scale-105",
                      idx === 2 ? "object-top" : "object-center"
                    )}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 420px"
                  />
                ) : (
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <span className="text-primary/20 font-bold text-4xl font-heading">UMB</span>
                  </div>
                )}

                {/* Text Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/50 to-transparent z-20">
                  {item.icon && (
                    <div className="mb-4">
                      <div className={cn(
                        "w-11 h-11 md:w-12 md:h-12 flex items-center justify-center bg-background/95 backdrop-blur-sm border-2 border-primary/30 shadow-xl transition-transform duration-300 group-hover:scale-110",
                        isEven ? "rounded-tr-xl rounded-bl-xl" : "rounded-tl-xl rounded-br-xl"
                      )}>
                        <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                    </div>
                  )}
                  <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold text-white leading-tight mb-2 font-heading uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-200/95 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Second Row - 2 Cards Centered (Landscape) */}
        <motion.div
          key={`grid2-${language}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto w-full"
        >
          {translatedLayanan.slice(3).map((item, idx) => {
            const isEven = (idx + 1) % 2 === 0;
            return (
              <motion.div
                key={idx + 3}
                variants={itemVariants}
                className={cn(
                  "group relative aspect-[4/3] sm:aspect-video xl:aspect-video w-full overflow-hidden bg-card border border-primary/10 hover:border-primary/40 transition-[border-color,box-shadow] duration-500 shadow-xl hover:shadow-2xl cursor-pointer",
                  isEven
                    ? "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl"
                    : "rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl"
                )}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    quality={60}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 550px"
                  />
                ) : (
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <span className="text-primary/20 font-bold text-4xl font-heading">UMB</span>
                  </div>
                )}

                {/* Text Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/50 to-transparent z-20">
                  {item.icon && (
                    <div className="mb-4">
                      <div className={cn(
                        "w-11 h-11 md:w-12 md:h-12 flex items-center justify-center bg-background/95 backdrop-blur-sm border-2 border-primary/30 shadow-xl transition-transform duration-300 group-hover:scale-110",
                        isEven ? "rounded-tr-xl rounded-bl-xl" : "rounded-tl-xl rounded-br-xl"
                      )}>
                        <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                    </div>
                  )}
                  <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold text-white leading-tight mb-2 font-heading uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-200/95 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Layanan;
