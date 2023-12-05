import { AppBar, Box, Card, Container, Grid, Navigation, Typography } from 'ui';

import { api } from 'api';
import { routes } from 'routes';
import Link from 'next/link';
import { RedirectType, redirect } from 'next/navigation';

export default async function Home({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  const snacks = await api.snack.getSnacksBySlug.query(slug);
  const randomSlugs = await api.snack.getTwoRandomSnackSlugs.query();

  const handleSnackVote = async (formData: FormData) => {
    'use server';

    const snackId = formData.get('snack');

    if (!snackId) {
      return;
    }

    await api.snack.vote.mutate(snackId as string);

    redirect(`/${randomSlugs[0].slug}/${randomSlugs[1].slug}`);
  };

  return (
    <Container>
      <AppBar>
        <Navigation>
          {routes.appRoutes.map((route) => (
            <li key={route.name}>
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </Navigation>
      </AppBar>
      <Box spaceTop="4" spaceBottom="4">
        <Typography invert>
          <h1>Fovourite Dutch Snack?</h1>
        </Typography>
      </Box>
      <Grid>
        {snacks.map((snack) => (
          <form key={snack.id} action={handleSnackVote}>
            <button
              className="focus:outline-none focus:ring focus:ring-blue-300"
              key={snack.id}
              name="snack"
              value={snack.id}
            >
              <Card
                title={snack.name}
                image={snack.img}
                text={snack.description}
              />
            </button>
          </form>
        ))}
      </Grid>
    </Container>
  );
}
