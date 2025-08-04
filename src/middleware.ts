import { clerkMiddleware } from '@clerk/nextjs/server';
import createIntlMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createIntlMiddleware(routing);

const protectedRoutes: Array<{
  pattern: RegExp;
  requireAuth?: boolean;
  redirectTo?: string;
}> = [
  {
    pattern: /^\/dashboard(\/.*)?$/,
    requireAuth: true,
    redirectTo: '/sign-in',
  },
];

export default clerkMiddleware(async (auth, req) => {
  const intlResponse = intlMiddleware(req);
  if (intlResponse) return intlResponse;

  const { userId } = await auth();
  const path = req.nextUrl.pathname;

  for (const route of protectedRoutes) {
    if (route.pattern.test(path)) {
      if (route.requireAuth && !userId) {
        const signInUrl = new URL(route.redirectTo ?? '/sign-in', req.url);
        signInUrl.searchParams.set('redirect_url', req.url);
        return Response.redirect(signInUrl);
      }
    }
  }

  return;
});

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
