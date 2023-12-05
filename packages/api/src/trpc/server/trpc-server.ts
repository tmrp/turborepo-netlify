import { createTRPCProxyClient, httpBatchLink, loggerLink } from '@trpc/client';

import { getUrl, transformer } from '../shared';
import { type trpcRouter } from '../router/router';

const headers = new Headers();

export const api = createTRPCProxyClient<trpcRouter>({
  transformer,
  links: [
    loggerLink({
      enabled: (op) =>
        process.env.NODE_ENV === 'development' ||
        (op.direction === 'down' && op.result instanceof Error),
    }),
    httpBatchLink({
      url: getUrl(),
      headers() {
        const heads = new Map(headers);
        heads.set('x-trpc-source', 'react');
        return Object.fromEntries(heads);
      },
    }),
  ],
});
