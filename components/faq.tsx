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
        <section id="faq" className="relative py-24 md:py-32 overflow-hidden bg-background">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 font-heading uppercase"
                    >
                        {t("faq.title")} <span className="text-primary">{t("faq.title_italic")}</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-normal"
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
                        const isOdd = index % 2 !== 0;

                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={cn(
                                    "group relative overflow-hidden transition-all duration-300",
                                    isOpen ? "md:col-span-2" : "md:col-span-1"
                                )}
                            >
                                <div
                                    onClick={() => toggleFAQ(index)}
                                    className={cn(
                                        "cursor-pointer h-full relative border transition-all duration-300 bg-card/60 backdrop-blur-sm overflow-hidden",
                                        isOpen
                                            ? "border-primary/40 bg-card shadow-xl ring-1 ring-primary/20"
                                            : "border-primary/10 hover:border-primary/30 hover:shadow-md",
                                        isOdd
                                            ? "rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-md rounded-bl-md"
                                            : "rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-md rounded-br-md"
                                    )}
                                >
                                    <div className="p-6 md:p-8 relative z-10 flex flex-col">
                                        <div className="flex items-start gap-4 md:gap-6">
                                            {/* Icon Box */}
                                            <div className={cn(
                                                "flex-shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-all duration-300 border-2",
                                                isOpen
                                                    ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                                                    : "bg-primary/5 text-primary border-primary/10 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary",
                                                isOdd ? "rounded-tl-2xl rounded-br-2xl" : "rounded-tr-2xl rounded-bl-2xl"
                                            )}>
                                                <Icon className="w-6 h-6 md:w-7 md:h-7" />
                                            </div>

                                            <div className="flex-1 pr-10 md:pr-12">
                                                <h3 className={cn(
                                                    "text-base sm:text-lg md:text-xl font-extrabold uppercase tracking-tight transition-colors duration-200 font-heading leading-snug",
                                                    isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
                                                )}>
                                                    {item.question}
                                                </h3>
                                            </div>
                                        </div>

                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0, y: -10 }}
                                                    animate={{ height: "auto", opacity: 1, y: 0 }}
                                                    exit={{ height: 0, opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                                >
                                                    <div className="mt-6 pt-6 border-t border-primary/10">
                                                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed font-normal">
                                                             {item.answer}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Simple Indicator */}
                                        <div className={cn(
                                            "absolute top-6 right-6 md:top-8 md:right-8 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300",
                                            isOpen ? "bg-primary border-primary text-primary-foreground rotate-180" : "border-primary/20 text-primary rotate-0 group-hover:border-primary"
                                        )}>
                                            {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
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
