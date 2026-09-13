"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

import { Target, Landmark, Compass, Users2, Building2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { useLanguage } from "@/context/language-context";

const ProfilePage = () => {
    const { t, language } = useLanguage();

    // Force scroll to top on mount to prevent navigation jumping
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    const missionImages = ["/tentanghome.webp", "/misi2.webp", "/misi3.webp"];

    return (
        <div className="min-h-screen bg-background text-foreground grid-bg overflow-x-hidden">
            <Navbar />
            <main id="tentang" className="pt-16 pb-20">
                {/* Hero Section */}
                <section className="relative w-full h-[320px] md:h-[400px] lg:h-[460px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/visi.webp"
                            alt="UMB Background"
                            fill
                            className="object-cover"
                            priority
                            fetchPriority="high"
                            quality={80}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
                        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-background to-transparent" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto text-center px-6 md:px-12 lg:px-16">
                        <motion.div
                            key={`hero-${language}`}
                            initial={{ y: -10, opacity: 1 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 md:mb-6 text-white drop-shadow-lg leading-tight font-heading">
                                {t("profile.hero.title1")} <span className="text-white/90">{t("profile.hero.title2")}</span>
                            </h1>
                            <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-normal drop-shadow-sm">
                                {t("profile.hero.description")}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Tentang Kami Section */}
                <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-background">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <motion.div
                                key={`about-content-${language}`}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="space-y-8"
                            >
                                <div className="flex w-full justify-center lg:justify-start">
                                    <div className="relative inline-flex items-center justify-center">
                                        <div className="relative w-20 h-20 bg-background border-2 border-primary/30 rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-lg rounded-br-lg flex items-center justify-center shadow-xl">
                                            <Landmark className="h-10 w-10 text-primary" />
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center lg:text-left">
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground font-heading uppercase leading-tight">{t("profile.about.title")}</h2>
                                </div>

                                {/* Mobile Image */}
                                <div className="lg:hidden relative group">
                                    <div className="relative z-10 rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl overflow-hidden border-2 border-primary/10 shadow-2xl">
                                        <Image
                                            src="/team.webp"
                                            alt="Tentang UPTTIK"
                                            width={800}
                                            height={450}
                                            quality={80}
                                            sizes="(max-width: 640px) 100vw, 400px"
                                            className="w-full h-full object-cover aspect-video"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-6 text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed text-justify font-normal">
                                    <p>
                                        {t("profile.about.p1")}
                                    </p>
                                    <p>
                                        {t("profile.about.p2")}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Desktop Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="relative group hidden lg:block max-w-md lg:max-w-lg mx-auto w-full"
                            >
                                <div className="relative z-10 rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-xl rounded-br-xl overflow-hidden border-2 border-primary/10 shadow-2xl">
                                    <Image
                                        src="/team.webp"
                                        alt="Tentang UPTTIK"
                                        width={700}
                                        height={400}
                                        quality={80}
                                        sizes="(max-width: 1024px) 100vw, 550px"
                                        className="w-full h-auto max-h-[340px] object-cover aspect-video transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-full border border-primary/20 animate-pulse z-0 pointer-events-none" />
                                <div className="absolute -bottom-8 -right-8 w-60 h-60 bg-primary/5 rounded-full blur-3xl z-0 pointer-events-none" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Unified Identity & Vision Section */}
                <section id="visi" className="relative w-full py-28 md:py-36 overflow-hidden bg-gradient-to-br from-muted/50 to-primary/5 dark:from-background dark:to-primary/10">
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

                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                        {/* Header Part */}
                        <div className="text-center mb-20 md:mb-28">
                            <motion.h2
                                key={`vision-title-${language}`}
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight font-heading"
                            >
                                {t("profile.vision.title")}
                            </motion.h2>
                        </div>

                        {/* Visi Part */}
                        <div className="max-w-4xl mx-auto text-center pb-8">
                            <div className="relative mb-10 inline-flex items-center justify-center">
                                <div className="relative w-20 h-20 bg-background border-2 border-primary/30 rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-lg rounded-bl-lg flex items-center justify-center shadow-xl">
                                    <Target className="text-primary h-10 w-10" />
                                </div>
                            </div>
                            <h3 className="text-primary font-bold tracking-widest uppercase text-sm mb-6 font-heading">{t("profile.vision.label")}</h3>
                            <motion.blockquote
                                key={`vision-content-${language}`}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground leading-relaxed italic"
                            >
                                &ldquo;{t("profile.vision.content")}&rdquo;
                            </motion.blockquote>
                        </div>
                    </div>
                </section>

                {/* Misi Section */}
                <section id="misi" className="py-24 md:py-32 overflow-visible bg-background relative">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                        <motion.div
                            key={`mission-header-${language}`}
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-20 md:mb-24"
                        >
                            <div className="relative mb-10 inline-flex items-center justify-center">
                                <div className="relative w-20 h-20 bg-background border-2 border-primary/30 rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-lg rounded-br-lg flex items-center justify-center shadow-xl">
                                    <Compass className="text-primary h-10 w-10" />
                                </div>
                            </div>
                            <h3 className="text-primary font-bold tracking-widest uppercase text-sm mb-6 font-heading">{t("profile.mission.label")}</h3>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground font-heading">{t("profile.mission.title")}</h2>
                        </motion.div>

                        <div className="space-y-20 md:space-y-28">
                            {(t("profile.mission.items") as any[]).map((item, idx) => (
                                <motion.div
                                    key={`${language}-${idx}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className={cn(
                                        "flex flex-col items-center gap-8 lg:gap-16",
                                        idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                                    )}
                                >
                                    <div className="w-full md:w-1/2 relative group max-w-md lg:max-w-lg mx-auto">
                                        <div className={cn(
                                            "absolute -inset-3 bg-primary/5 rounded-tl-xl rounded-br-xl",
                                            idx % 2 === 0 ? "rounded-tr-[2.5rem] rounded-bl-[2.5rem]" : "rounded-tl-[2.5rem] rounded-br-[2.5rem]"
                                        )}></div>
                                        <div className="relative overflow-hidden rounded-xl">
                                            <Image
                                                alt={item.title}
                                                className={cn(
                                                    "relative shadow-2xl w-full aspect-video max-h-[260px] md:h-[260px] object-cover border-2 border-primary/10 transition-transform duration-700 ease-out group-hover:scale-105",
                                                    idx % 2 === 0 ? "rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-xl rounded-br-xl" : "rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-xl rounded-bl-xl"
                                                )}
                                                src={missionImages[idx]}
                                                width={700}
                                                height={380}
                                                quality={80}
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
                                            />
                                        </div>
                                    </div>
                                    <div className={cn("w-full md:w-1/2", idx % 2 === 1 && "md:text-left")}>
                                        <span className="text-primary font-bold text-3xl opacity-20 block mb-2 font-heading">0{idx + 1}</span>
                                        <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-4 font-heading">{item.title}</h3>
                                        <p className="text-base text-muted-foreground leading-relaxed font-normal">
                                            {item.description}
                                        </p>
                                        <div className={cn("mt-5 flex items-center gap-3 text-primary font-bold", idx % 2 === 1 && "justify-start")}>
                                            <span className="w-8 h-px bg-primary"></span>
                                            <span className="text-xs uppercase tracking-widest font-heading">{item.badge}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Struktur Organisasi Section */}
                <section id="struktur-organisasi" className="py-20 md:py-28 px-6 md:px-12 lg:px-16 relative overflow-hidden">
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
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        {/* Header */}
                        <motion.div
                            key={`org-header-${language}`}
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <div className="relative mb-10 inline-flex items-center justify-center">
                                <div className="relative w-20 h-20 bg-background border-2 border-primary/30 rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-lg rounded-bl-lg flex items-center justify-center shadow-xl">
                                    <Users2 className="text-primary h-10 w-10" />
                                </div>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight uppercase font-heading mb-4">
                                {t("profile.org.title")}
                            </h2>
                            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
                                {t("profile.org.description")}
                            </p>
                        </motion.div>

                        {/* Organizational Chart */}
                        <div className="flex flex-col items-center gap-0">
                            {/* Level 1: Kepala UPTTIK */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="mb-0 w-full max-w-[260px] md:max-w-[420px] mx-auto"
                            >
                                <OrgCard
                                    name="Dedy Abdullah, M. Eng"
                                    role="Ka. UPT TIK"
                                />
                            </motion.div>

                            {/* Connector */}
                            <svg className="w-full max-w-5xl h-20 md:h-32" viewBox="0 0 800 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <line x1="400" y1="0" x2="400" y2="50" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" className="text-primary/30" />
                                <path d="M 400 50 L 200 50 L 200 100" stroke="currentColor" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" className="text-primary/30" />
                                <path d="M 400 50 L 600 50 L 600 100" stroke="currentColor" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" className="text-primary/30" />
                            </svg>

                            <div className="relative w-full max-w-6xl px-2 md:px-0">
                                <div className="grid grid-cols-2 gap-3 md:gap-32">
                                    {/* Bidang Software */}
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="flex flex-col items-center w-full max-w-[360px] md:max-w-[550px] ml-auto"
                                    >
                                        <OrgCard
                                            name="M. Imanullah, S.Kom., M.T."
                                            role="Kabid. Software"
                                        />

                                        {/* Connector Software */}
                                        <svg className="w-full max-w-xl h-16 md:h-24" viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                            <line x1="200" y1="0" x2="200" y2="35" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" className="text-primary/30" />
                                            <path d="M 200 35 L 100 35 L 100 80" stroke="currentColor" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" className="text-primary/30" />
                                            <path d="M 200 35 L 300 35 L 300 80" stroke="currentColor" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" className="text-primary/30" />
                                        </svg>

                                        <div className="relative w-full max-w-xl">
                                            <div className="grid grid-cols-2 gap-3 md:gap-8">
                                                <OrgCard
                                                    name="Indra Novemri"
                                                    role="Teknisi Software"
                                                    isStaff
                                                />
                                                <OrgCard
                                                    name="M. Aldy Alfarish"
                                                    role="Teknisi Software"
                                                    isStaff
                                                />
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Bidang Jaringan */}
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="flex flex-col items-center w-full max-w-[360px] md:max-w-[550px] mr-auto"
                                    >
                                        <OrgCard
                                            name="N. Ario Seno, S. Kom"
                                            role="Kabid. Jaringan"
                                        />

                                        {/* Connector Jaringan */}
                                        <svg className="w-full h-16 md:h-24" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                            <line x1="50" y1="0" x2="50" y2="40" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" className="text-primary/30" />
                                        </svg>

                                        <div className="w-full pt-0 max-w-[200px] md:max-w-[260px]">
                                            <OrgCard
                                                name="Abi Julian"
                                                role="Teknisi Jaringan"
                                                isStaff
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

const OrgCard = ({ name, role, isStaff }: { name: string, role: string, isStaff?: boolean }) => (
    <div className={cn(
        "bg-card border border-primary/10 rounded-xl shadow-md md:shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:scale-[1.02] w-full md:min-w-[220px] relative overflow-hidden",
        isStaff ? "px-2 py-2 md:px-5 md:py-3.5" : "px-3 py-3 md:px-8 md:py-5"
    )}>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(var(--primary)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-primary/30"></div>
        <div className="flex items-center gap-2">
            <div className="text-center flex-1 min-w-0">
                <h3 className={cn(
                    "font-bold text-foreground leading-snug mb-0.5 md:mb-1 font-heading",
                    isStaff ? "text-[9px] sm:text-xs md:text-sm" : "text-[11px] sm:text-sm md:text-base lg:text-lg font-extrabold"
                )}>
                    {name}
                </h3>
                <p className={cn(
                    "text-muted-foreground font-medium",
                    isStaff ? "text-[7px] sm:text-[10px] md:text-xs" : "text-[9px] sm:text-xs md:text-sm text-primary/80 font-semibold"
                )}>
                    {role}
                </p>
            </div>
        </div>
    </div>
);

export default ProfilePage;