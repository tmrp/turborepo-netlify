import { type NextRequest, NextResponse } from 'next/server';
import { api } from 'api';

export async function middleware(request: NextRequest) {
  const { pathname } = new URL(request.url);

  // Check if it's the home route and redirect
  if (pathname === '/' || pathname === '/next') {
    const url = request.nextUrl.clone();
    const slugs = await api.snack.getTwoRandomSnackSlugs.query();

    url.pathname = slugs.map(({ slug }) => slug).join('/');

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
