"use client";

import Marquee from "@/components/ui/marquee";
import { motion } from "motion/react";
import { Quote, User } from "lucide-react";

import { useLanguage } from "@/context/language-context";

const Testimonials = () => {
  const { t } = useLanguage();

  const translatedTestimonials = t("testimonials.list") as any[];

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden bg-background">


      <div className="container mx-auto px-6 mb-16 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 font-heading">
            {t("testimonials.title")} {t("testimonials.title_italic")}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            {t("testimonials.description")}
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

        <Marquee pauseOnHover className="[--duration:40s] py-4">
          {translatedTestimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </Marquee>

        <Marquee pauseOnHover reverse className="[--duration:45s] py-4">
          {translatedTestimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))} 
        </Marquee>
      </div>
    </section>
  );
};

interface TestimonialProps {
  name: string;
  designation: string;
  testimonial: string;
}

const TestimonialCard = ({ name, designation, testimonial }: TestimonialProps) => (
  <div className="mx-6 w-[400px] group h-full py-4">
    <div className="relative h-full bg-card border-2 border-primary/5 p-8 rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
      {/* Internal Tech Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[linear-gradient(var(--primary)_1px,transparent_1px),linear-gradient(90deg,var(--primary)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full translate-x-12 -translate-y-12 transition-transform duration-700 group-hover:scale-150"></div>

      <div className="absolute top-8 right-10 text-primary/10 group-hover:text-primary/20 transition-colors duration-500 z-0">
        <Quote size={56} className="fill-current" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-5 mb-8">
          <div className="relative">
            <div className="absolute -inset-1 bg-primary/20 rounded-tr-xl rounded-bl-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative h-14 w-14 rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/5">
              <User size={28} />
            </div>
          </div>
          <div>
            <p className="font-bold text-xl leading-none mb-2 group-hover:text-primary transition-colors duration-300 font-heading">
              {name}
            </p>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em]">
              {designation}
            </p>
          </div>
        </div>

        <p className="text-muted-foreground text-lg leading-relaxed relative z-10 mb-8">
          &quot;{testimonial}&quot;
        </p>

        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} className="w-4 h-4 text-yellow-500 fill-current drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <div className="h-px flex-1 bg-border/40 mx-4"></div>

          <div className="w-2 h-2 rounded-full bg-primary/20"></div>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;