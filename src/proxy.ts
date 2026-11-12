import { createNextMiddleware } from 'gt-next/middleware';

// Next.js 16 uses proxy.ts. gt-next resolves locale-prefixed URLs and
// loads the matching translation snapshot.
export default createNextMiddleware();

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|.*\\..*).*)',
  ],
};
