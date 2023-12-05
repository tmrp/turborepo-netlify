import { initTRPC } from '@trpc/server';

import superjson from 'superjson';
import { ZodError } from 'zod';

import { db } from '../../db/planetscale-connect';

const trpc = initTRPC.create({
  isServer: true,
  // allowOutsideOfServer: true,
});

export const router = trpc.router;

interface CreateContextOptions {
  headers: Headers;
}

export const createInnerTRPCContext = async (opts: CreateContextOptions) => {
  return {
    headers: opts.headers,
    db,
  };
};

export const createTRPCContext = async (opts: { req: Request }) => {
  return await createInnerTRPCContext({
    headers: opts.req.headers,
  });
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  isServer: true,
  // allowOutsideOfServer: true,
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;
