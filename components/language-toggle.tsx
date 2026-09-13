"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const LanguageToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { language, setLanguage } = useLanguage();

    useEffect(() => {
        setMounted(true);
    }, []);

    const label = language === "id" ? "Ganti ke Bahasa Inggris" : "Switch to Indonesian";

    if (!mounted) {
        return (
            <Button variant="outline" size="icon" aria-label="Ganti Bahasa">
                <span className="sr-only">Ganti Bahasa</span>
            </Button>
        );
    }

    const toggleLanguage = () => {
        setLanguage(language === "id" ? "en" : "id");
    };

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            aria-label={label}
            className="flex items-center gap-2 px-3 font-medium transition-colors"
        >
            <Languages className="h-4 w-4" />
            <span className="text-xs uppercase">{language}</span>
            <span className="sr-only">{label}</span>
        </Button>
    );
};

export default LanguageToggle;
