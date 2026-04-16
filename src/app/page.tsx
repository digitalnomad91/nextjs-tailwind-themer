import { ThemeGallery } from "@/components/theme-gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-5 py-8 md:px-10">
      <div className="mx-auto max-w-[1600px] space-y-6">
        <ThemeGallery />

        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-border bg-surface p-5 shadow-card">
            <h2 className="mb-2 text-lg font-semibold">Live preview</h2>
            <p className="text-sm text-muted">
              The active theme maps to CSS variables and powers Tailwind utility classes in real-time.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-md bg-elevated px-3 py-1 text-xs">background</span>
              <span className="rounded-md bg-elevated px-3 py-1 text-xs">foreground</span>
              <span className="rounded-md bg-accent px-3 py-1 text-xs text-black">accent</span>
            </div>
          </article>

          <article className="rounded-xl border border-border bg-surface p-5 shadow-card">
            <h2 className="mb-2 text-lg font-semibold">Install strategy</h2>
            <p className="text-sm text-muted">
              Start as an app for rapid iteration, then extract <code>themes.ts</code>, the provider, and the gallery into a reusable package.
            </p>
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-muted">
              <li>Publish a small npm package with the provider + theme tokens.</li>
              <li>Ship a demo app in this same repo as a reference implementation.</li>
              <li>Optionally add a CLI to generate starter theme cards.</li>
            </ol>
          </article>
        </section>
      </div>
    </main>
  );
}
