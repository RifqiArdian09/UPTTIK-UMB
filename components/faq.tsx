"use client";

import { motion, AnimatePresence, Variants } from "motion/react";
import { Plus, Minus, HelpCircle, MessageCircleQuestion, Lightbulb, ShieldCheck, Zap, Globe } from "lucide-react";
import React, { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    },
};

const FAQ = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const questions = t("faq.questions") as { question: string; answer: string }[];

    // Mapping icons to FAQ items
    const icons = [MessageCircleQuestion, Zap, Globe, ShieldCheck, Lightbulb];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="relative py-24 md:py-32 overflow-hidden bg-muted/50">
            {/* Top Divider */}
            <div className="absolute top-0 left-0 w-full h-8 md:h-12">
                <svg className="w-full h-full preserve-3d" viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <g transform="scale(1, -1) translate(0, -48)">
                        <path d="M0 48H1440V24L1400 0H1200L1176 24H264L240 0H40L0 24V48Z" fill="currentColor" className="text-background" />
                        <path d="M240 0L264 24H1176L1200 0" stroke="currentColor" strokeWidth="1" className="text-primary/10" />
                    </g>
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary"
                    >
                        <HelpCircle className="h-4 w-4" />
                        {t("faq.badge")}
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 font-heading uppercase"
                    >
                        {t("faq.title")} {t("faq.title_italic")}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl text-lg text-muted-foreground leading-relaxed"
                    >
                        {t("faq.description")}
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
                >
                    {questions.map((item, index) => {
                        const Icon = icons[index % icons.length];
                        const isOpen = openIndex === index;
                        const isFirst = index === 0;
                        const isOdd = index % 2 !== 0;

                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={cn(
                                    "group relative overflow-hidden transition-all duration-500",
                                    isOpen ? "md:col-span-2" : "md:col-span-1"
                                )}
                            >
                                <div
                                    onClick={() => toggleFAQ(index)}
                                    className={cn(
                                        "cursor-pointer h-full relative border-2 transition-all duration-500 bg-card/40 backdrop-blur-md overflow-hidden",
                                        isOpen
                                            ? "border-primary shadow-[0_0_40px_-10px_rgba(var(--primary),0.3)] ring-1 ring-primary/20"
                                            : "border-primary/5 hover:border-primary/30",
                                        isOdd
                                            ? "rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-md rounded-bl-md"
                                            : "rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-md rounded-br-md"
                                    )}
                                >

                                    <div className="p-6 md:p-8 flex items-start gap-4 md:gap-6 relative z-10">
                                        {/* Icon Box */}
                                        <div className={cn(
                                            "flex-shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-all duration-500 border-2",
                                            isOpen
                                                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-110"
                                                : "bg-primary/5 text-primary border-primary/10 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary",
                                            isOdd ? "rounded-tl-2xl rounded-br-2xl" : "rounded-tr-2xl rounded-bl-2xl"
                                        )}>
                                            <Icon className="w-6 h-6 md:w-7 md:h-7" />
                                        </div>

                                        <div className="flex-1 pr-8">
                                            <h3 className={cn(
                                                "text-lg md:text-xl font-black uppercase tracking-tight transition-colors duration-300 font-heading",
                                                isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
                                            )}>
                                                {item.question}
                                            </h3>

                                            <AnimatePresence initial={false}>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0, y: -10 }}
                                                        animate={{ height: "auto", opacity: 1, y: 0 }}
                                                        exit={{ height: 0, opacity: 0, y: -10 }}
                                                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                                    >
                                                        <div className="mt-6 pt-6 border-t border-primary/10">
                                                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
                                                                {item.answer}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Simple Indicator */}
                                        <div className={cn(
                                            "absolute top-8 right-8 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500",
                                            isOpen ? "bg-primary border-primary text-primary-foreground rotate-180" : "border-primary/20 text-primary rotate-0"
                                        )}>
                                            {isOpen ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
