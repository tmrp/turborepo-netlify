import type { Config, Context } from '@netlify/edge-functions';

export const config: Config = {
  path: '/*',
  excludedPath: ['/scoreboard'],
};

export default async function EdgeCacheControl(
  request: Request,
  context: Context
) {
  request.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
  request.headers.set(
    'Netlify-CDN-Cache-Control',
    'public, s-maxage=31536000, must-revalidate'
  );
}
