'use client';

import React, { useRef } from 'react';
import { httpBatchLink } from '@trpc/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTRPCReact } from '@trpc/react-query';

import { getUrl, transformer } from '../shared';
import { trpcRouter } from '../router/router';

export const apiReact = createTRPCReact<trpcRouter>({});

interface TrpcClientProviderProps {
  children: React.ReactNode;
  headers: Headers;
}
export const TrpcClientProvider: React.FC<TrpcClientProviderProps> = ({
  children,
  headers,
}) => {
  const queryClientRef = useRef(new QueryClient());
  const trpcClientRef = useRef(
    apiReact.createClient({
      transformer,
      links: [
        httpBatchLink({
          url: getUrl(),
          headers() {
            const heads = new Map(headers);
            heads.set('x-trpc-source', 'react');
            return Object.fromEntries(heads);
          },
        }),
      ],
    })
  );

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <apiReact.Provider
        client={trpcClientRef.current}
        queryClient={queryClientRef.current}
      >
        {children}
      </apiReact.Provider>
    </QueryClientProvider>
  );
};
