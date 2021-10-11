import { useContext } from 'react';
import { GithubContextData, GithubContext } from '../providers/GithubProvider';

export function useGithub(): GithubContextData {
  const context = useContext(GithubContext);

  return context;
}
