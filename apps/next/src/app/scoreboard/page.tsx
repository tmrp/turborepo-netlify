import { api } from 'api';
import Link from 'next/link';
import { routes } from 'routes';
import { AppBar, Container, Flex, Navigation } from 'ui';

export default async function ScoreBoardPage() {
  const scoreBoardData = await api.snack.getSnackLeaderBoard.query();
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
      <Flex>
        <ul className="flex flex-col pt-4 gap-2">
          {scoreBoardData.map((snack) => (
            <li key={snack.id}>
              <div className="bg-white rounded-md p-2">
                <p>
                  {snack.name} votes {snack.snackScore}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Flex>
    </Container>
  );
}
