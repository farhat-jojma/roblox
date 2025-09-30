// src/lib/i18n.ts
export const supportedLangs = ["en", "fr", "es"] as const;
export type Lang = (typeof supportedLangs)[number];

// Type guard to validate a dynamic string as Lang
function isLang(value: string): value is Lang {
  return (supportedLangs as readonly string[]).includes(value);
}

// helper to generate getStaticPaths
export function getLangStaticPaths() {
  return supportedLangs.map((lang) => ({ params: { lang } })) satisfies Array<{
    params: { lang: Lang };
  }>;
}

// validate or fallback to "en"
export function resolveLang(langParam: string | undefined): Lang {
  return langParam && isLang(langParam) ? langParam : "en";
}
