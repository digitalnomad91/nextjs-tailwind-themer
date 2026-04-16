"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_THEME_ID, getThemeById, THEMES, type ThemeDefinition } from "@/lib/themes";

type ThemeContextValue = {
  theme: ThemeDefinition;
  setThemeById: (id: string) => void;
  themes: ThemeDefinition[];
};

const STORAGE_KEY = "nextjs-tailwind-themer:theme";
const COOKIE_KEY = "nextjs-tailwind-themer-theme";

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(theme: ThemeDefinition) {
  const root = document.documentElement;
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
  root.dataset.theme = theme.id;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeDefinition>(() => getThemeById(DEFAULT_THEME_ID));

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const cookieTheme = document.cookie
      .split(";")
      .map((entry) => entry.trim())
      .find((entry) => entry.startsWith(`${COOKIE_KEY}=`))
      ?.split("=")[1];

    const selected = decodeURIComponent(saved ?? cookieTheme ?? DEFAULT_THEME_ID);
    const next = getThemeById(selected);
    setTheme(next);
    applyTheme(next);
  }, []);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme.id);
    document.cookie = `${COOKIE_KEY}=${encodeURIComponent(theme.id)};path=/;max-age=31536000;samesite=lax`;
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setThemeById: (id: string) => setTheme(getThemeById(id)),
      themes: THEMES,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}
