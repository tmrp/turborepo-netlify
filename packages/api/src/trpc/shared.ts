import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server';
import superjson from 'superjson';
import { trpcRouter } from './router/router';

export const transformer = superjson;

function getBaseUrl() {
  if (typeof window !== 'undefined') return '';
  if (process.env.PUBLIC_BASE_URL) return process.env.PUBLIC_BASE_URL;
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export function getUrl() {
  return getBaseUrl() + '/api/trpc';
}

export type RouterInputs = inferRouterInputs<trpcRouter>;

export type RouterOutputs = inferRouterOutputs<trpcRouter>;
