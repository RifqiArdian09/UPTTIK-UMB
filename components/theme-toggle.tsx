"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

import { useLanguage } from "@/context/language-context";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();

  const label = t("navbar.toggleTheme") || "Toggle theme";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" aria-label={label}>
        <span className="sr-only">{label}</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={label}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
      <span className="sr-only">{label}</span>
    </Button>
  );
};

export default ThemeToggle;
