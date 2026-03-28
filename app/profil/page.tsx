"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
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

    const missionImages = ["/tentanghome.jpeg", "/misi2.jpeg", "/misi3.png"];

    return (
        <div className="min-h-screen bg-background text-foreground grid-bg">
            <Navbar />
            <main id="tentang" className="pt-16 pb-20">
                {/* Hero Section */}
                <section className="relative w-full h-[350px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/visi.png"
                            alt="UMB Background"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1400px"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                        <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-gradient-to-t from-background to-transparent" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
                        <motion.div
                            key={`hero-${language}`}
                            initial={{ y: -10, opacity: 1 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Badge variant="outline" className="rounded-full px-4 py-1.5 md:px-6 md:py-2 border-white/20 bg-white/10 text-white mb-4 md:mb-6 backdrop-blur-sm gap-2 text-[10px] md:text-xs">
                                <Building2 className="h-3 w-3 md:h-4 md:w-4" />
                                {t("profile.hero.badge")}
                            </Badge>
                            <h1 className="text-3xl md:text-6xl font-black tracking-tight mb-3 md:mb-8 text-white drop-shadow-md leading-tight">
                                {t("profile.hero.title1")} <span className="text-white">{t("profile.hero.title2")}</span>
                            </h1>
                            <p className="max-w-2xl mx-auto text-sm md:text-xl text-white/90 leading-relaxed font-medium drop-shadow-sm">
                                {t("profile.hero.description")}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Tentang Kami Section */}
                <section id="about" className="py-24 px-6 bg-background">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                key={`about-content-${language}`}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
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
                                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-heading uppercase">{t("profile.about.title")}</h2>
                                </div>

                                {/* Mobile Image */}
                                <div className="lg:hidden relative group">
                                    <div className="relative z-10 rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl overflow-hidden border-2 border-primary/10 shadow-2xl">
                                        <Image
                                            src="/team.jpeg"
                                            alt="Tentang UPTTIK"
                                            width={800}
                                            height={450}
                                            className="w-full h-full object-cover aspect-video"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-justify font-medium">
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
                                className="relative group hidden lg:block"
                            >
                                <div className="relative z-10 rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl overflow-hidden border-2 border-primary/10 shadow-2xl">
                                    <Image
                                        src="/team.jpeg"
                                        alt="Tentang UPTTIK"
                                        width={800}
                                        height={450}
                                        className="w-full h-full object-cover aspect-video"
                                    />
                                </div>
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full border border-primary/20 animate-pulse z-0" />
                                <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl z-0" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Unified Identity & Vision Section */}
                <section id="visi" className="relative w-full py-32 overflow-hidden bg-gradient-to-br from-muted/50 to-primary/5 dark:from-background dark:to-primary/10">
                    {/* Technical Frame Decorations - Unified for both sections */}
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

                        {/* Side Accents - Spanning full height */}
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

                    {/* Shared Background Effects */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        {/* Header Part */}
                        <div className="text-center mb-32">
                            <motion.span
                                key={`vision-subtitle-${language}`}
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6 block"
                            >
                                {t("profile.vision.subtitle")}
                            </motion.span>
                            <motion.h1
                                key={`vision-title-${language}`}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 1 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.04,
                                            delayChildren: 0.2
                                        }
                                    }
                                }}
                                className="text-4xl md:text-6xl font-black text-foreground leading-[1.1] tracking-tight"
                            >
                                {t("profile.vision.title").split(" ").map((word: string, i: number) => (
                                    <span key={i} className="inline-block whitespace-nowrap">
                                        {word.split("").map((char: string, j: number) => (
                                            <motion.span
                                                key={j}
                                                variants={{
                                                    hidden: { opacity: 0, y: -20, filter: "blur(10px)" },
                                                    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                                }}
                                                transition={{ duration: 0.5, ease: "easeOut" }}
                                                className="inline-block"
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                        <span className="inline-block">&nbsp;</span>
                                    </span>
                                ))}
                            </motion.h1>
                        </div>

                        {/* Visi Part */}
                        <div className="max-w-5xl mx-auto text-center pb-12">
                            <div className="relative mb-12 inline-flex items-center justify-center">
                                <div className="relative w-20 h-20 bg-background border-2 border-primary/30 rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-lg rounded-bl-lg flex items-center justify-center shadow-xl">
                                    <Target className="text-primary h-10 w-10" />
                                </div>
                            </div>
                            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-8">{t("profile.vision.label")}</h2>
                            <motion.blockquote
                                key={`vision-content-${language}`}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 1 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.03,
                                        },
                                    },
                                }}
                                className="text-3xl md:text-4xl font-medium text-foreground leading-snug"
                            >
                                &quot;{t("profile.vision.content").split("").map((char: string, index: number) => (
                                    <motion.span
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0 },
                                            visible: { opacity: 1 }
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}&quot;
                            </motion.blockquote>
                        </div>
                    </div>
                </section>

                {/* Misi Section */}
                <section id="misi" className="py-32 overflow-visible bg-background relative">
                    <div className="max-w-7xl mx-auto px-8">
                        <motion.div
                            key={`mission-header-${language}`}
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-24"
                        >
                            <div className="relative mb-12 inline-flex items-center justify-center">
                                <div className="relative w-20 h-20 bg-background border-2 border-primary/30 rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-lg rounded-br-lg flex items-center justify-center shadow-xl">
                                    <Compass className="text-primary h-10 w-10" />
                                </div>
                            </div>
                            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4 font-heading">{t("profile.mission.label")}</h2>
                            <h3 className="text-3xl md:text-4xl font-extrabold text-foreground font-heading">{t("profile.mission.title")}</h3>
                        </motion.div>

                        <div className="space-y-32">
                            {(t("profile.mission.items") as any[]).map((item, idx) => (
                                <motion.div
                                    key={`${language}-${idx}`}
                                    initial={{ opacity: 0, y: -30, filter: "blur(5px)" }}
                                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className={cn(
                                        "flex flex-col items-center gap-12 lg:gap-24",
                                        idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                                    )}
                                >
                                    <div className="w-full md:w-1/2 relative group">
                                        <div className={cn(
                                            "absolute -inset-4 bg-primary/5 rounded-tl-xl rounded-br-xl",
                                            idx % 2 === 0 ? "rounded-tr-[3rem] rounded-bl-[3rem]" : "rounded-tl-[3rem] rounded-br-[3rem]"
                                        )}></div>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        >
                                            <Image
                                                alt={item.title}
                                                className={cn(
                                                    "relative shadow-2xl w-full aspect-video md:h-[400px] object-cover border-2 border-primary/10",
                                                    idx % 2 === 0 ? "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl" : "rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl"
                                                )}
                                                src={missionImages[idx]}
                                                width={800}
                                                height={400}
                                            />
                                        </motion.div>
                                    </div>
                                    <div className={cn("w-full md:w-1/2", idx % 2 === 1 && "md:text-left")}>
                                        <span className="text-primary font-black text-6xl opacity-20 block mb-4">0{idx + 1}</span>
                                        <h4 className="text-2xl font-bold text-foreground mb-6 font-heading">{item.title}</h4>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                        <div className={cn("mt-8 flex items-center gap-3 text-primary font-bold", idx % 2 === 1 && "justify-end md:justify-start")}>
                                            <span className="w-8 h-px bg-primary"></span>
                                            <span className="text-sm uppercase tracking-widest">{item.badge}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Struktur Organisasi Section */}
                <section id="struktur-organisasi" className="py-20 px-4 relative overflow-hidden">
                    {/* Technical Frame Decorations - Visible on all devices */}
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
                            className="text-center mb-16"
                        >
                            <div className="relative mb-12 inline-flex items-center justify-center">
                                <div className="relative w-20 h-20 bg-background border-2 border-primary/30 rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-lg rounded-bl-lg flex items-center justify-center shadow-xl">
                                    <Users2 className="text-primary h-10 w-10" />
                                </div>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight uppercase font-heading mb-4">
                                {t("profile.org.title")}
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                {t("profile.org.description")}
                            </p>
                        </motion.div>

                        {/* Organizational Chart */}
                        <div className="flex flex-col items-center gap-0">
                            {/* Level 1: Kepala UPTTIK */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="mb-0 w-full max-w-[240px] md:max-w-[400px] mx-auto"
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

                            <div className="relative w-full max-w-6xl px-2">
                                <div className="grid grid-cols-2 gap-3 md:gap-32">
                                    {/* Bidang Software */}
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="flex flex-col items-center w-full max-w-[350px] md:max-w-[550px] ml-auto"
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
                                            <div className="grid grid-cols-2 gap-4 md:gap-10">
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
                                        className="flex flex-col items-center w-full max-w-[350px] md:max-w-[550px] mr-auto"
                                    >
                                        <OrgCard
                                            name="N. Ario Seno, S. Kom"
                                            role="Kabid. Jaringan"
                                        />

                                        {/* Connector Jaringan */}
                                        <svg className="w-full h-12 md:h-12" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                            <line x1="50" y1="0" x2="50" y2="40" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" className="text-primary/30" />
                                        </svg>

                                        <div className="w-full pt-0">
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
        "bg-card border border-primary/10 rounded-xl shadow-lg md:shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-primary/30 w-full md:min-w-[240px] relative overflow-hidden",
        isStaff ? "px-1 py-1.5 md:px-6 md:py-4" : "px-2 py-2 md:px-8 md:py-6"
    )}>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(var(--primary)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-primary/20"></div>
        <div className="flex items-center gap-4">
            <div className="text-center flex-1 min-w-0">
                <h4 className={cn(
                    "font-black text-gray-900 dark:text-white leading-tight mb-0 md:mb-1",
                    isStaff ? "text-[8px] md:text-sm" : "text-[10px] md:text-lg"
                )}>
                    {name}
                </h4>
                <p className={cn(
                    "text-gray-600 dark:text-gray-300 font-medium",
                    isStaff ? "text-[6px] md:text-xs" : "text-[8px] md:text-sm"
                )}>
                    {role}
                </p>
            </div>
        </div>
    </div>
);

export default ProfilePage;