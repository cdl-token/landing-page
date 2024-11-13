import { NextRequest, NextResponse } from "next/server";
import { getLocation } from "./utils/location";

const locales = ["fr", "en", "es", "ru"];

async function getLocale(request: NextRequest): Promise<string> {
  const location = await getLocation();
  const country = location.country;

  switch (country) {
    case "Russia":
      return "ru";
    case "France":
      return "fr";
    case "Spain":
      return "es";
    default:
      return "en";
  }
}

export async function middleware(request: NextRequest): Promise<NextResponse | void> {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathname.includes("/static") || pathname.includes("/favicon")) return;
  if (pathnameHasLocale) return;

  const locale = await getLocale(request);
  if (locales.includes(locale)) {
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  request.nextUrl.pathname = `/en${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    "/((?!_next/static|_next/image|static/|favicon.ico|robots.txt|sitemap.xml|manifest.json).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
