import { default as seedData } from './seed-data';

import { db } from './planetscale-connect';
import { snackSchema } from './schema';

export default async function seed() {
  seedData.forEach(async (snack) => {
    await db
      .insert(snackSchema)
      .values({
        slug: snack.slug,
        name: snack.name,
        img: snack.img,
        description: snack.description,
        snackScore: snack.snackScore,
      })
      .execute();
  });
}
