import createMiddleware from 'next-intl/middleware';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { localePrefix } from '@/navigation';

/* Middleware to handle both i18n , admin and public  authentication */
export async function middleware(request: NextRequest, event: NextFetchEvent) {
  /* First, handle the i18n routing */
  const handleI18nRouting = createMiddleware({
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    localePrefix,
  });

  const i18nResponse = handleI18nRouting(request);

  /* If no redirection is needed, proceed with the i18n response */
  return i18nResponse || NextResponse.next();
}

/* run this middleware for all paths after admin */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/',
    '/(en|fr)/:path*',
    '/((?!api|_next/static|_next/image|icon.ico).*)',
  ],
};
