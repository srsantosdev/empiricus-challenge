import './styles.scss';
import React from 'react';
import { IoStarOutline, IoGitNetworkOutline } from 'react-icons/io5';

import { Repository } from '../../types';

type RepositoryInfoProps = {
  repository: Repository;
};

export const RepositoryInfo: React.FC<RepositoryInfoProps> = ({
  repository,
}) => {
  return (
    <div className="repository-info__container">
      <div className="repository-info__main-content">
        <h3>{repository.name}</h3>
        <span>{repository.description}</span>
      </div>

      <div className="repository-info__details">
        <span className="label label-pill label-primary">
          {repository?.language}
        </span>

        <div>
          <IoStarOutline size={20} />
          <span className="body-3">{repository.stargazers_count}</span>
        </div>

        <div>
          <IoGitNetworkOutline size={20} />
          <span className="body-3">{repository.forks}</span>
        </div>
      </div>
    </div>
  );
};
