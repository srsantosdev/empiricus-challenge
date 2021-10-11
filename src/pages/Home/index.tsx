import './styles.scss';
import React from 'react';

import { useGithub } from '../../hooks/useGithub';
import { MainLayout } from '../../global/layout/MainLayout';

import { UserInfo } from '../../components/UserInfo';
import { EmptyPage } from '../../components/EmptyPage';
import { LoadingPage } from '../../components/LoadingPage';
import { RepositoryItem } from '../../components/RepositoryItem';

export const Home: React.FC = () => {
  const { loading, repositories, user, searchRepositories } = useGithub();

  if (!user) {
    return (
      <MainLayout>
        <EmptyPage />
      </MainLayout>
    );
  }

  if (loading) {
    return (
      <MainLayout>
        <LoadingPage />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <UserInfo user={user} />

      <section className="section__repositories--container">
        {repositories.map(repository => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </section>

      <footer className="footer__loading-more">
        {repositories.length > 0 ? (
          <button
            className="button button-sm button-light"
            type="button"
            onClick={() => searchRepositories(user.login)}
          >
            Carregar mais...
          </button>
        ) : (
          <p className="body-3">Não existem repositórios para esse usuário.</p>
        )}
      </footer>
    </MainLayout>
  );
};
