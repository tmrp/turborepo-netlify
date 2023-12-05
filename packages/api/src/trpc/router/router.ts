import { createTRPCRouter } from '../server/trpc-config';
import { snackRouter } from './snack-router';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const trpcRouter = createTRPCRouter({
  snack: snackRouter,
});

// export type definition of API
export type trpcRouter = typeof trpcRouter;
