import React, { createContext, useCallback, useState } from 'react';

import { GithubService } from '../services/GithubService';
import { User, Repository } from '../types';

export type GithubContextData = {
  loading: boolean;
  user: User | null;
  repositories: Repository[];
  enableLoading: () => void;
  disableLoading: () => void;
  searchUser: (username: string) => Promise<User | null>;
  searchRepositories: (username: string) => Promise<Repository[]>;
};

export const GithubContext = createContext({} as GithubContextData);

export const GithubProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const [user, setUser] = useState<User | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);

  function enableLoading() {
    setLoading(true);
  }

  function disableLoading() {
    setLoading(false);
  }

  const searchUser = useCallback(async (username: string) => {
    const userData = await GithubService.getUser(username);
    setCurrentPage(0);

    setUser(userData);

    return userData;
  }, []);

  const searchRepositories = useCallback(
    async (username: string) => {
      const page = currentPage + 1;

      const repositoriesData = await GithubService.getRepositories(username, {
        page,
      });

      if (username === user?.login) {
        setRepositories(state => [...state, ...repositoriesData]);
        setCurrentPage(page);
      } else {
        setRepositories(repositoriesData);
      }

      return repositoriesData;
    },
    [currentPage, user],
  );

  return (
    <GithubContext.Provider
      value={{
        user,
        loading,
        searchUser,
        repositories,
        enableLoading,
        disableLoading,
        searchRepositories,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
