import type { Context } from '@netlify/functions';

export default async function EdgeMiddleware(
  request: Request,
  context: Context
) {
  if (!request.url.includes('/next')) {
    return context.next();
  }

  const referer = request.headers.get('referer') ?? '';

  const url = new URL(referer);

  if (!referer) {
    return context.next();
  }

  const path = url.pathname;

  return Response.redirect(`https://next.snacksfrom.nl${path}`);
}
