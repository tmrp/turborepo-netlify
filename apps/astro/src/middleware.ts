import { api } from 'api';
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = new URL(context.request.url);

  if (pathname === '/' || pathname === '/astro') {
    const slugs = await api.snack.getTwoRandomSnackSlugs.query();

    const newPath = slugs.map(({ slug }) => slug).join('/');

    return context.redirect(new URL(newPath, context.request.url).toString());
  }

  return await next();
});
