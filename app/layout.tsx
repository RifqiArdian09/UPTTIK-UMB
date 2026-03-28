import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/scroll-to-top";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { GeistSans } from "geist/font/sans";
import { Anonymous_Pro } from "next/font/google";
import { LanguageProvider } from "@/context/language-context";
import "./globals.css";

const geist = GeistSans;

const anonymousPro = Anonymous_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "UPTTIK - UM Bengkulu",
  description: "Unit Pelaksana Teknis Teknologi Informasi dan Komunikasi (UPTTIK) merupakan unit kerja strategis di Universitas Muhammadiyah Bengkulu yang bertanggung jawab penuh atas tata kelola digital kampus.",
  openGraph: {
    type: "website",
    siteName: "UPTTIK",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${geist.variable} ${anonymousPro.variable} ${anonymousPro.className} antialiased bg-background text-foreground grid-bg`} suppressHydrationWarning={true}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <TooltipProvider>
              {children}
              <ScrollToTop />
            </TooltipProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
