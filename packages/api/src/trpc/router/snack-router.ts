import { desc, eq, sql } from 'drizzle-orm';
import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../server/trpc-config';
import { snackSchema } from '../../db/schema';

export const snackRouter = createTRPCRouter({
  getTwoRandomSnackSlugs: publicProcedure.query(async ({ ctx }) => {
    const snacks = await ctx.db
      .select({
        id: snackSchema.id,
        slug: snackSchema.slug,
      })
      .from(snackSchema);

    const amount = snacks.length;

    let random1 = Math.floor(Math.random() * amount) + 1;

    let random2 = Math.floor(Math.random() * amount) + 1;

    while (random2 === random1) {
      random2 = Math.floor(Math.random() * amount) + 1;
    }

    const snack1 = snacks.filter((snack) => snack.id === random1);

    const snack2 = snacks.filter((snack) => snack.id === random2);

    const data = [snack1[0], snack2[0]];

    return data;
  }),

  getSnacksBySlug: publicProcedure
    .input(z.string().array().length(2))
    .query(async ({ input, ctx }) => {
      const snacks = input.map((slug) => {
        return ctx.db
          .select()
          .from(snackSchema)
          .where(eq(snackSchema.slug, slug));
      });

      const snacksData = await Promise.allSettled(snacks);

      const resolvedSnacks = snacksData
        .filter((result) => result.status === 'fulfilled')
        .map((result) => result);

      return resolvedSnacks.map((snack: any) => snack.value[0]);
    }),

  vote: publicProcedure.input(z.string()).mutation(async ({ input, ctx }) => {
    const snackIdToInt = parseInt(input);

    const snack = await ctx.db
      .select()
      .from(snackSchema)
      .where(eq(snackSchema.id, snackIdToInt));

    if (!snack[0]?.snackScore) {
      return await ctx.db
        .update(snackSchema)
        .set({
          snackScore: 1,
        })
        .where(eq(snackSchema.id, snackIdToInt));
    }

    return await ctx.db
      .update(snackSchema)
      .set({
        snackScore: sql`${snackSchema.snackScore} + 1`,
      })
      .where(eq(snackSchema.id, snackIdToInt));
  }),

  getSnackLeaderBoard: publicProcedure.query(async ({ ctx }) => {
    const snacks = await ctx.db
      .select()
      .from(snackSchema)
      .orderBy(desc(snackSchema.snackScore));

    return snacks;
  }),
});
