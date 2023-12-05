import type { Context } from '@netlify/functions';

export default async function EdgeMiddleware(
  request: Request,
  context: Context
) {
  if (!request.url.includes('/astro')) {
    return context.next();
  }

  const referer = request.headers.get('referer') ?? '';

  const url = new URL(referer);

  if (!referer) {
    return context.next();
  }

  const path = url.pathname;

  return Response.redirect(`https://astro.snacksfrom.nl${path}`);
}
