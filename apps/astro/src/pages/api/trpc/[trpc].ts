import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

import { createTRPCContext, trpcRouter } from 'api';
import type { APIRoute } from 'astro';

export const all: APIRoute = ({ request }) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req: request,
    router: trpcRouter,
    createContext: () => createTRPCContext({ req: request }),
  });
};
