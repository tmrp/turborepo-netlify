import { createTRPCRouter } from '../server/trpc-config';
import { snackRouter } from './snack-router';

export const trpcRouter = createTRPCRouter({
  snack: snackRouter,
});

export type trpcRouter = typeof trpcRouter;
