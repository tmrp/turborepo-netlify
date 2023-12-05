import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const resp = await fetch('https://reqres.in/api/news');
  const body = await resp.json();

  console.log('SOME_EVENT', event, context);

  return {
    statusCode: 200,
    body: JSON.stringify({
      time: new Date(),
      news: body,
    }),
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'Netlify-CDN-Cache-Control':
        'public, max-age=0, stale-while-revalidate=31536000',
    },
  };
};

export { handler };
