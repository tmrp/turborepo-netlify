import { mysqlTable, serial, text, int } from 'drizzle-orm/mysql-core';

export const snackSchema = mysqlTable('dutch_snack', {
  id: serial('dutch_snack_id').primaryKey(),
  slug: text('dutch_snack_slug'),
  name: text('dutch_snack_name'),
  img: text('dutch_snack_img'),
  description: text('dutch_snack_description'),
  snackScore: int('dutch_snack_score'),
});
