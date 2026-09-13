"use client";

import { Separator } from "@/components/ui/separator";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Github,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

import { useLanguage } from "@/context/language-context";

type FooterLink = {
  name: string;
  href?: string;
};

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks: { title: string; links: FooterLink[] }[] = [
    {
      title: t("footer.sections.services"),
      links: (t("layanan.items") as any[]).map(item => ({ name: item.title })),
    },
    {
      title: t("footer.sections.academic"),
      links: [
        { name: "SIAKAD", href: "https://siakad.umb.ac.id/umb/" },
        { name: "SIMARU", href: "https://simaru.umb.ac.id/" },
        { name: "SIKAMU", href: "https://sikamu.umb.ac.id/" },
        { name: "SISENJA", href: "https://presensi.umb.ac.id/login" },
        { name: "SIKAWAN", href: "https://sikawan.umb.ac.id/" },
      ],
    },
  ];

  return (
    <footer id="footer" className="w-full bg-background text-muted-foreground pt-16 pb-8 border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        {/* WhatsApp Urgent Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-primary/10 rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl p-8 lg:p-12 mb-16 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-xl"
        >
          {/* Internal Tech Pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[linear-gradient(var(--primary)_1px,transparent_1px),linear-gradient(90deg,var(--primary)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 z-10 relative w-full lg:w-auto">
            {/* WhatsApp Icon with Pulse Effect */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 20px 2px rgba(37,211,102,0.15)",
                    "0 0 35px 8px rgba(37,211,102,0.35)",
                    "0 0 20px 2px rgba(37,211,102,0.15)"
                  ]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-16 h-16 md:w-20 md:h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center border border-[#25D366]/20 z-10"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                </svg>
              </motion.div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-xl lg:text-3xl font-extrabold tracking-tight mb-2 text-card-foreground font-heading">{t("footer.help_title")}</h2>
              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg font-normal max-w-md leading-relaxed">
                {t("footer.help_description")}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="z-10 w-full lg:w-auto">
            <Link
              href="https://wa.me/6285199416317"
              target="_blank"
              className="inline-flex items-center justify-center w-full lg:w-auto px-6 py-3.5 lg:px-10 lg:py-4 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white dark:hover:bg-[#25D366] dark:hover:border-[#25D366] dark:hover:text-black font-bold rounded-tr-[1.5rem] rounded-bl-[1.5rem] rounded-tl-md rounded-br-md transition-all duration-300 group whitespace-nowrap hover:rounded-2xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="mr-2 text-sm sm:text-base">{t("footer.whatsapp_btn")}</span>
              <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Secondary Links and Info */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 mb-16">
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <Link href="/#beranda" className="flex items-center gap-2 hover:opacity-80 transition-opacity w-fit">
              <div className="h-10 w-10 flex items-center justify-center">
                <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base tracking-tight block bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/80 leading-tight font-heading">
                  UPTTIK
                </span>
                <span className="text-[10px] sm:text-xs tracking-widest block text-primary uppercase leading-tight font-heading">
                  Universitas Muhammadiyah Bengkulu
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed font-normal">
              {t("footer.description")}
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="text-foreground font-semibold mb-6 uppercase tracking-widest text-xs font-heading">{section.title}</h4>
              <ul className="space-y-3 text-muted-foreground text-sm">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.href ? (
                      <Link href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} className="hover:text-primary transition-colors">
                        {link.name}
                      </Link>
                    ) : (
                      <span className="text-muted-foreground cursor-default">
                        {link.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-foreground font-semibold mb-6 uppercase tracking-widest text-xs font-heading">{t("footer.sections.contact")}</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex gap-4">
                <MapPin className="text-primary w-5 h-5 flex-shrink-0" />
                <span className="leading-relaxed">Jl. Bali, Komplek Universitas Muhammadiyah Gedung D, Kampung Bali, Bengkulu</span>
              </div>
              <div className="flex gap-4">
                <Mail className="text-primary w-5 h-5 flex-shrink-0" />
                <span>upttik.umb@gmail.com</span>
              </div>
              <div className="flex gap-4">
                <Phone className="text-primary w-5 h-5 flex-shrink-0" />
                <span>+62 851-9941-6317</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-[10px] sm:text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold text-center">
          <p>© {new Date().getFullYear()} UPTTIK Universitas Muhammadiyah Bengkulu. {t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
