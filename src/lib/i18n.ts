// src/lib/i18n.ts
export const supportedLangs = ["en", "fr", "es"] as const;
export type Lang = typeof supportedLangs[number];

// helper to generate getStaticPaths
export function getLangStaticPaths() {
  return supportedLangs.map((lang) => ({
    params: { lang },
  }));
}

// validate or fallback to "en"
export function resolveLang(langParam: string | undefined): Lang {
  return supportedLangs.includes(langParam as Lang) ? (langParam as Lang) : "en";
}
