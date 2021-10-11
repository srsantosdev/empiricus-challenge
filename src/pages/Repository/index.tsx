import './styles.scss';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Commit, Repository as RepositoryType } from '../../types';
import { MainLayout } from '../../global/layout/MainLayout';
import { GithubService } from '../../services/GithubService';

import { CommitItem } from '../../components/CommitItem';
import { RepositoryInfo } from '../../components/RepositoryInfo';
import { LoadingPage } from '../../components/LoadingPage';

type RouteParams = {
  repository_name: string;
  username: string;
};

export const Repository: React.FC = () => {
  const { repository_name, username }: RouteParams = useParams();
  const [currentPage, setCurrentPage] = useState(0);

  const [loading, setLoading] = useState(true);

  const [repository, setRepository] = useState({} as RepositoryType);
  const [commits, setCommits] = useState<Commit[]>([]);

  const loadCommits = useCallback(async () => {
    const page = currentPage + 1;

    const commitsData = await GithubService.getCommits(
      `${username}/${repository_name}`,
      {
        page,
      },
    );

    setCurrentPage(page);
    setCommits(state => [...state, ...commitsData]);
  }, [username, repository_name, currentPage]);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);

        const repositoryData = await GithubService.getRepository(
          `${username}/${repository_name}`,
        );

        await loadCommits();

        setRepository(repositoryData);
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [username, repository_name]);

  if (loading) {
    return (
      <MainLayout goBack>
        <LoadingPage />
      </MainLayout>
    );
  }

  return (
    <MainLayout goBack>
      <section>
        <RepositoryInfo repository={repository} />

        <span className="h5">Commits</span>

        <div className="repository-page__list">
          {commits.map(commit => (
            <CommitItem key={commit.id} commit={commit} />
          ))}
        </div>

        <footer className="footer__loading-more">
          <button
            className="button button-sm button-light"
            type="button"
            onClick={loadCommits}
          >
            Carregar mais...
          </button>
        </footer>
      </section>
    </MainLayout>
  );
};
