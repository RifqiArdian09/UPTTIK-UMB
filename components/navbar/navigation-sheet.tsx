"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { LayoutDashboard, Menu, Info, Cpu, MessageSquareQuote, Send, Home, ChevronRight, Mail, Phone, MapPin, X, HelpCircle } from "lucide-react";
import { Logo } from "./logo";
import Link from "next/link";
import { motion } from "motion/react";
import { useActiveSection } from "@/hooks/use-active-section";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { useLanguage } from "@/context/language-context";

import { useState } from "react";

export const NavigationSheet = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { id: "beranda", name: t("navbar.home"), icon: Home, href: "/#beranda" },
    { id: "tentang", name: t("navbar.about"), icon: Info, href: "/#tentang" },
    { id: "layanan", name: t("navbar.services"), icon: Cpu, href: "/#layanan" },
    { id: "testimonials", name: t("navbar.testimonials"), icon: MessageSquareQuote, href: "/#testimonials" },
    { id: "faq", name: t("navbar.faq"), icon: HelpCircle, href: "/#faq" },
    { id: "footer", name: t("navbar.contact"), icon: Send, href: "/#footer" },
  ];

  const activeSection = useActiveSection(navItems.map((item) => item.id));

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element && pathname === "/") {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="group rounded-xl border-primary/20 hover:border-primary/50 transition-colors bg-background/50 backdrop-blur-sm">
          <Menu className="h-5 w-5 transition-transform group-hover:scale-110" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 w-full sm:w-[400px] border-l border-primary/10 overflow-hidden bg-background">
        {/* Technical Pattern Layer */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(var(--primary)_1px,transparent_1px),linear-gradient(90deg,var(--primary)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--primary)_0%,transparent_50%)] opacity-[0.05]"></div>

        <div className="flex flex-col h-full bg-background/80 backdrop-blur-xl relative z-10">
          <SheetHeader className="p-6 text-left border-b border-primary/5 relative">
            <SheetTitle>
              <SheetClose asChild>
                <Link href="/#beranda" onClick={(e) => handleScroll(e, "/#beranda")} className="flex items-center gap-3">
                  <Logo />
                  <div className="flex flex-col text-left">
                    <span className="font-extrabold text-lg tracking-tight block bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60 leading-tight font-heading">
                      UPTTIK
                    </span>
                    <span className="text-[10px] tracking-[0.2em] block text-muted-foreground uppercase leading-tight font-heading font-bold">
                      Universitas Muhammadiyah Bengkulu
                    </span>
                  </div>
                </Link>
              </SheetClose>
            </SheetTitle>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                <X className="h-5 w-5" />
                <span className="sr-only">{t("navbar.close")}</span>
              </Button>
            </SheetClose>
            <SheetDescription className="sr-only">
              Navigasi Mobile UPTTIK UMB
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="mt-4 mb-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/50 mb-6 px-2">{t("navbar.mainMenu")}</h4>
              <nav className="flex flex-col gap-3">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === "footer" && item.id === "footer"
                    ? true
                    : (pathname === "/profil"
                      ? item.id === "tentang" && activeSection !== "footer"
                      : activeSection === item.id || (item.id === "tentang" && pathname === "/profil"));
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08, ease: "easeOut" }}
                    >
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          onClick={(e) => handleScroll(e, item.href)}
                          className={cn(
                            "group flex items-center justify-between p-3.5 rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md border transition-all duration-500",
                            isActive
                              ? "bg-primary/5 border-primary/20"
                              : "bg-primary/[0.01] border-primary/5 hover:bg-primary/[0.04] hover:border-primary/20"
                          )}
                        >
                          <div className="flex items-center gap-4 text-left">
                            <div className={cn(
                              "w-11 h-11 flex items-center justify-center bg-background border rounded-xl transition-all duration-500 shadow-sm relative overflow-hidden",
                              isActive ? "border-primary/40" : "border-primary/10 group-hover:border-primary/40"
                            )}>
                              <div className={cn(
                                "absolute top-0 left-0 w-full h-[1px] bg-primary/20 transition-opacity",
                                isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                              )}></div>
                              <item.icon className={cn(
                                "h-5 w-5 transition-colors",
                                isActive ? "text-primary" : "text-primary/70 group-hover:text-primary"
                              )} />
                            </div>
                            <span className={cn(
                              "font-heading font-black uppercase tracking-wider text-[13px] transition-colors",
                              isActive ? "text-primary font-bold" : "text-foreground/80 group-hover:text-foreground"
                            )}>
                              {item.name}
                            </span>
                          </div>
                          <ChevronRight className={cn(
                            "h-4 w-4 transition-all duration-500",
                            isActive ? "translate-x-1 text-primary" : "text-muted-foreground/30 group-hover:translate-x-1 group-hover:text-primary"
                          )} />
                        </Link>
                      </SheetClose>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          </div>

          <div className="p-8 border-t border-primary/5 bg-primary/[0.01] relative">
            {/* Background Decor for Footer */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-tl-full blur-3xl opacity-50 -z-10"></div>

            <div className="flex flex-col gap-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60">{t("navbar.contactUs")}</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground hover:text-primary transition-colors group cursor-default">
                  <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-background border border-primary/10 group-hover:border-primary/30 transition-colors shadow-sm">
                    <Mail className="h-4 w-4 text-primary/60" />
                  </div>
                  <span className="font-medium">upttik.umb@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground hover:text-primary transition-colors group cursor-default">
                  <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-background border border-primary/10 group-hover:border-primary/30 transition-colors shadow-sm">
                    <Phone className="h-4 w-4 text-primary/60" />
                  </div>
                  <span className="font-medium">+62 851 9941 6317</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground text-left leading-relaxed group cursor-default">
                  <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-xl bg-background border border-primary/10 transition-colors shadow-sm">
                    <MapPin className="h-4 w-4 text-primary/60" />
                  </div>
                  <span className="font-medium px-1">Jl. Bali, Komplek Universitas Muhammadiyah Gedung D, Kampung Bali, Bengkulu</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HUD Elements for Extra Polish */}
        <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-primary/10 rounded-bl-full pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 border-b border-l border-primary/10 rounded-tr-full pointer-events-none z-0"></div>
        <div className="absolute top-20 left-0 w-1 h-20 bg-linear-to-b from-transparent via-primary/20 to-transparent pointer-events-none"></div>
      </SheetContent>
    </Sheet>
  );
};
