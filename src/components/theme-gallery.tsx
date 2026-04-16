"use client";

import { useTheme } from "@/components/theme-provider";

export function ThemeGallery() {
  const { theme, themes, setThemeById } = useTheme();

  return (
    <section className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold text-foreground">Theme</h1>
        <p className="text-sm text-muted">Choose from the full gallery and preview each palette before applying it.</p>
      </header>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        {themes.map((item) => {
          const active = item.id === theme.id;
          return (
            <button
              type="button"
              key={item.id}
              onClick={() => setThemeById(item.id)}
              className={`group rounded-xl border bg-surface p-3 text-left shadow-card transition ${
                active ? "border-accent ring-2 ring-accent/60" : "border-border hover:border-accent/70"
              }`}
            >
              <div
                className="mb-2 rounded-md border p-2"
                style={{
                  background: item.colors.surface,
                  borderColor: item.colors.border,
                }}
              >
                <div className="mb-2 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-1.5 rounded" style={{ background: item.colors.foreground }} />
                  <div className="h-1.5 rounded" style={{ background: item.colors.muted }} />
                  <div className="h-1.5 rounded" style={{ background: item.colors.accent }} />
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-sm font-semibold text-foreground">{item.name}</span>
                <span className="text-xs uppercase tracking-wide text-muted">{item.mode}</span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
