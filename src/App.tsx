import './global/styles/global.scss';

import { GithubProvider } from './providers/GithubProvider';
import Routes from './routes';

export function App(): JSX.Element {
  return (
    <GithubProvider>
      <Routes />
    </GithubProvider>
  );
}
