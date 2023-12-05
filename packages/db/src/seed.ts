import { default as seedData } from './seed-data';

import { db } from './lib/planetscale-connect';
import { snackSchema } from './lib/schema';

async function seed() {
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

  const seededData = await db.select().from(snackSchema);

  console.log('Seeded database', seededData);
}

seed();
