import { Home } from '../pages/Home';
import { Repository } from '../pages/Repository';

export const routes = [
  {
    id: '1',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    id: '2',
    path: '/repository/:username/:repository_name',
    component: Repository,
    exact: false,
  },
];
