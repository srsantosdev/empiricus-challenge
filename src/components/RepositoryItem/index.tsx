import './styles.scss';
import React, { useCallback } from 'react';
import { IoStarOutline, IoGitNetworkOutline } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import type { Repository } from '../../types';

type RepositoryItemProps = {
  repository: Repository;
};

export const RepositoryItem: React.FC<RepositoryItemProps> = ({
  repository,
}) => {
  const history = useHistory();

  const handleNavigateToRepository = useCallback(
    repository_fullname => {
      history.push(`/repository/${repository_fullname}`);
    },
    [history],
  );

  return (
    <article className="card card-alternative article__card--repository-item">
      <div className="card-body card__repository-item--info">
        <div>
          <span className="h6">{repository.name}</span>
          <p>{repository.description}</p>

          <button
            type="button"
            className="button button-sm button-primary card__repository-item--button-icon"
            onClick={() => {
              handleNavigateToRepository(repository.full_name);
            }}
          >
            <span>Ver repositório</span>
          </button>
        </div>

        <div className="card__repository-item--numbers">
          <div>
            <IoStarOutline size={20} />
            <span>{repository.stargazers_count}</span>
          </div>

          <div>
            <IoGitNetworkOutline size={20} />
            <span>{repository.forks}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
