import { defineMiddleware } from "astro/middleware";

const supportedLangs = ["en", "fr", "es"];

export const onRequest = defineMiddleware((context, next) => {
  const { request, url } = context;
  const pathname = url.pathname;

  // Si déjà /en, /fr ou /es => continuer
  if (supportedLangs.some((lang) => pathname.startsWith(`/${lang}`))) {
    return next();
  }

  const acceptLang = request.headers.get("accept-language") || "";
  const browserLang = acceptLang.split(",")[0].split("-")[0];

  const targetLang = supportedLangs.includes(browserLang) ? browserLang : "en";

  return Response.redirect(`${url.origin}/${targetLang}/`, 302);
});
