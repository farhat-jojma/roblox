/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    locale: string;
  }
}

// Fix missing types for astro-i18next beta
declare module "astro-i18next" {
  export function useTranslation(Astro: any): Promise<{ t: (key: string) => string }>;
  export function getLocales(): string[];
}

// ✅ Fix: tell TS that window.adsbygoogle exists
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export {};
