export type ThemeMode = "dark" | "light";

export type ThemeDefinition = {
  id: string;
  name: string;
  mode: ThemeMode;
  colors: {
    background: string;
    foreground: string;
    surface: string;
    elevated: string;
    muted: string;
    accent: string;
    border: string;
  };
};

const t = (
  id: string,
  name: string,
  mode: ThemeMode,
  background: string,
  foreground: string,
  surface: string,
  elevated: string,
  muted: string,
  accent: string,
  border: string,
): ThemeDefinition => ({
  id,
  name,
  mode,
  colors: { background, foreground, surface, elevated, muted, accent, border },
});

export const THEMES: ThemeDefinition[] = [
  t("dark", "Dark", "dark", "#121316", "#e7e9ee", "#1b1d23", "#22252d", "#9ca3b6", "#3b82f6", "#2f3440"),
  t("light", "Light", "light", "#f4f5f8", "#17181c", "#ffffff", "#eef0f4", "#5b6273", "#2f77d0", "#d8dce6"),
  t("high-contrast-dark", "High Contrast Dark", "dark", "#000000", "#ffffff", "#080808", "#111111", "#c8c8c8", "#ffd400", "#2e2e2e"),
  t("high-contrast-light", "High Contrast Light", "light", "#ffffff", "#111111", "#fafafa", "#f2f2f2", "#3f3f3f", "#2f3bdf", "#d7d7d7"),
  t("cream", "Cream", "light", "#f3efe2", "#2a2418", "#f8f4ea", "#ece4d2", "#7a6c51", "#b18b18", "#d9cfb8"),
  t("parchment", "Parchment", "light", "#efe6d2", "#2d2218", "#f7f1e4", "#e9dfc7", "#7c6a4d", "#9c5a2b", "#d3c5a4"),
  t("solarized-dark", "Solarized Dark", "dark", "#002b36", "#93a1a1", "#073642", "#0b3f4e", "#5f8a95", "#268bd2", "#1a4d5c"),
  t("solarized-light", "Solarized Light", "light", "#fdf6e3", "#586e75", "#fffdf3", "#f5ebcf", "#7a8c90", "#2d93d3", "#ded4b6"),
  t("nord", "Nord", "dark", "#2e3440", "#e5e9f0", "#3b4252", "#434c5e", "#aeb7c5", "#88c0d0", "#4b5569"),
  t("dracula", "Dracula", "dark", "#282a36", "#f8f8f2", "#343746", "#3b3f51", "#b9b6d3", "#bd93f9", "#4e5267"),
  t("monokai", "Monokai", "dark", "#272822", "#f8f8f2", "#303229", "#3b3d33", "#aeb196", "#a6e22e", "#474a3b"),
  t("terminal", "Terminal", "dark", "#0b0f0d", "#b5ffb5", "#121a14", "#17231a", "#85ba85", "#00e436", "#1f3226"),
  t("github-dark", "GitHub Dark", "dark", "#0d1117", "#c9d1d9", "#161b22", "#1f2630", "#8b949e", "#58a6ff", "#30363d"),

  t("80s-neon", "80s Neon", "dark", "#1c1f33", "#f7f2ff", "#232741", "#2b3152", "#b9a9d5", "#ff00ff", "#3a3f5e"),
  t("graphite", "Graphite", "dark", "#2b2b2b", "#e6e6e6", "#323232", "#3a3a3a", "#a2a2a2", "#9ca3af", "#4a4a4a"),
  t("discord", "Discord", "dark", "#313338", "#f2f3f5", "#383a40", "#444853", "#b5bac1", "#5865f2", "#4e5561"),
  t("wikipedia", "Wikipedia", "light", "#ffffff", "#202122", "#f8f9fa", "#eaecf0", "#54595d", "#447ff5", "#d0d5dd"),
  t("cobalt", "Cobalt", "dark", "#002240", "#ffffff", "#00305a", "#0a3c69", "#8bb4d4", "#ff9d00", "#1f4d75"),
  t("gruvbox-dark", "Gruvbox Dark", "dark", "#282828", "#ebdbb2", "#32302f", "#3c3836", "#bdae93", "#fe8019", "#504945"),
  t("one-dark", "One Dark", "dark", "#282c34", "#abb2bf", "#2f3540", "#3a404b", "#8f97a3", "#61afef", "#4b5263"),
  t("tokyo-night", "Tokyo Night", "dark", "#1a1b26", "#c0caf5", "#23243a", "#2a2f4a", "#a9b1d6", "#7aa2f7", "#414868"),
  t("rose-pine", "Rosé Pine", "dark", "#191724", "#e0def4", "#232136", "#2b2940", "#908caa", "#ebbcba", "#403d52"),
  t("catppuccin", "Catppuccin", "dark", "#1e1e2e", "#cdd6f4", "#25273a", "#313244", "#a6adc8", "#cba6f7", "#45475a"),
  t("os2-20", "OS/2 2.0", "light", "#e5e5d7", "#202020", "#f1f1e7", "#d8d8ca", "#586153", "#365b3f", "#b2b2a0"),
  t("os2-warp", "OS/2 Warp", "light", "#d5dbe1", "#1f2933", "#ebeff3", "#c6ced6", "#5c7383", "#1f8fa2", "#aab5bf"),
  t("windows-31", "Windows 3.1", "light", "#efefef", "#111111", "#ffffff", "#dbdbdb", "#4d4d4d", "#2f33bf", "#b8b8b8"),

  t("amiga", "Amiga", "dark", "#005cb9", "#dceeff", "#0b6cd0", "#1879dc", "#9fc7ef", "#ff9d00", "#2d87e0"),
  t("solaris", "Solaris", "light", "#d2b0a8", "#1f1715", "#e4c2b7", "#be8e86", "#5d4641", "#b7376e", "#9b746d"),
  t("mac-classic", "Mac Classic", "light", "#eeeeee", "#1a1a1a", "#ffffff", "#dedede", "#444444", "#111111", "#bdbdbd"),
  t("everforest-dark", "Everforest Dark", "dark", "#2d353b", "#d3c6aa", "#343f44", "#3f4b50", "#9da9a0", "#a7c080", "#4a565b"),
  t("everforest-light", "Everforest Light", "light", "#fdf6e3", "#5c6a72", "#f7f0dd", "#efe7cf", "#8a988c", "#8da101", "#d9d0ba"),
  t("ayu-dark", "Ayu Dark", "dark", "#0a0e14", "#b3b1ad", "#111723", "#1b2230", "#8a9199", "#e6b450", "#273040"),
  t("ayu-mirage", "Ayu Mirage", "dark", "#1f2430", "#cccac2", "#242936", "#303749", "#9da6b5", "#e6b450", "#3f4a61"),
  t("ayu-light", "Ayu Light", "light", "#fafafa", "#5c6773", "#ffffff", "#f2f2f2", "#7f8a99", "#f29718", "#dddfe4"),
  t("night-owl", "Night Owl", "dark", "#011627", "#d6deeb", "#082038", "#0d2b49", "#93a4b7", "#82aaff", "#12395d"),
  t("material-palenight", "Material Palenight", "dark", "#292d3e", "#a6accd", "#303447", "#3a3f58", "#959dcb", "#82aaff", "#4c5273"),
  t("minimal-dark", "Minimal Dark", "dark", "#1f1f1f", "#dddddd", "#262626", "#2f2f2f", "#a7a7a7", "#a0a0a0", "#3d3d3d"),
  t("minimal-light", "Minimal Light", "light", "#f8f8f8", "#1f1f1f", "#ffffff", "#efefef", "#717171", "#8a97a7", "#dadada"),
  t("one-light", "One Light", "light", "#fafafa", "#383a42", "#ffffff", "#f0f0f0", "#696c77", "#4078f2", "#dddddd"),

  t("github-light", "GitHub Light", "light", "#ffffff", "#1f2328", "#f6f8fa", "#eaedf1", "#656d76", "#2f81f7", "#d0d7de"),
  t("things", "Things", "dark", "#202020", "#f0f0f0", "#2a2a2a", "#343434", "#a0a0a0", "#4a90e2", "#3e3e3e"),
  t("blue-topaz", "Blue Topaz", "dark", "#1a2038", "#dce3ff", "#232b49", "#2f3960", "#9cb0d8", "#7dc4e4", "#3d4c74"),
  t("primary", "Primary", "light", "#f9f8f7", "#2c2725", "#ffffff", "#f0ece8", "#7b7069", "#d45d5d", "#ddd3cc"),
  t("shimmering-focus", "Shimmering Focus", "dark", "#2b2d42", "#edf2f4", "#343653", "#40436a", "#adb5cf", "#4cc9f0", "#51577e"),
  t("anuppuccin", "AnuPpuccin", "dark", "#20203b", "#dddaf6", "#272747", "#30305a", "#a3a0c7", "#c8a7ff", "#3f3f70"),
  t("atom", "Atom", "dark", "#282c34", "#abb2bf", "#323844", "#3b4351", "#9aa3b2", "#61afef", "#4a5263"),
  t("clairvoyance", "Clairvoyance", "dark", "#102a43", "#f0f4f8", "#173a59", "#204b73", "#9fb3c8", "#f0b429", "#2a5c89"),
  t("sanctum", "Sanctum", "dark", "#181818", "#e8e8e8", "#222222", "#2c2c2c", "#a7a7a7", "#b8b8b8", "#383838"),
  t("prism", "Prism", "dark", "#222233", "#ececff", "#2c2c42", "#373753", "#afafd1", "#b084f5", "#49496b"),
  t("notation", "Notation", "light", "#f5f5f5", "#2b2b2b", "#ffffff", "#e9e9e9", "#6d6d6d", "#3b76e1", "#d8d8d8"),
  t("wasp", "Wasp", "dark", "#2a2a2a", "#f1e9cd", "#343434", "#3f3f3f", "#c8ba8d", "#e7c14e", "#4c4c4c"),
  t("cybertron", "Cybertron", "dark", "#0a1220", "#d2e7ff", "#121c2e", "#1b2740", "#88a6c9", "#00d1ff", "#253353"),

  t("typewriter", "Typewriter", "light", "#f2efe6", "#2a241f", "#faf8f2", "#e8e2d4", "#7b6d5f", "#a56b3b", "#d2c7b3"),
  t("big-sur", "Big Sur", "light", "#f2f4f7", "#1f2937", "#ffffff", "#e9edf2", "#728099", "#2889ff", "#d5dce5"),
  t("clair-de-lune", "Clair de Lune", "dark", "#1d2240", "#d9def8", "#252b4d", "#2f3660", "#9ca7d9", "#8ea0ff", "#3e4774"),
  t("ono-sendai", "Ono Sendai", "dark", "#020708", "#bbffd3", "#081416", "#0d1e22", "#6fa58a", "#00d47e", "#173036"),
  t("red-graphite", "Red Graphite", "dark", "#2f2f31", "#f0eaea", "#39393b", "#454549", "#b0a6a6", "#ef5a5a", "#54545a"),
  t("typomagical", "Typomagical", "light", "#f7f7f8", "#2a2a31", "#ffffff", "#ebebef", "#767686", "#7a69b8", "#dbdbe2"),
  t("spectrum", "Spectrum", "dark", "#1d1f2b", "#eceef9", "#262938", "#313548", "#a6acc7", "#ff6b7d", "#434a61"),
  t("bubble-space", "Bubble Space", "dark", "#27283e", "#f4e9ff", "#31334f", "#3e4162", "#bbb0d4", "#e49ab0", "#4f5375"),
  t("kanagawa", "Kanagawa", "dark", "#1f1f28", "#dcd7ba", "#2a2a37", "#363646", "#a6a68d", "#c8c093", "#494956"),
  t("horizon", "Horizon", "dark", "#1c1e26", "#e0e0e0", "#242633", "#303346", "#a2a6b8", "#e95678", "#43475a"),
  t("zenburn", "Zenburn", "dark", "#3f3f3f", "#dcdccc", "#494949", "#545454", "#b5b59f", "#d7d7af", "#626262"),
  t("rose-pine-dawn", "Rosé Pine Dawn", "light", "#faf4ed", "#575279", "#fffaf3", "#f1e9de", "#9893a5", "#b4637a", "#ddd2c4"),
  t("catppuccin-latte", "Catppuccin Latte", "light", "#eff1f5", "#4c4f69", "#ffffff", "#e6e9ef", "#7c7f93", "#8839ef", "#ccd0da"),
];

export const DEFAULT_THEME_ID = "minimal-dark";

export function getThemeById(id?: string | null): ThemeDefinition {
  return THEMES.find((theme) => theme.id === id) ?? THEMES.find((theme) => theme.id === DEFAULT_THEME_ID) ?? THEMES[0];
}
