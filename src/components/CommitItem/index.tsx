import './styles.scss';
import React from 'react';
import { Commit } from '../../types';

type CommitItemProps = {
  commit: Commit;
};

export const CommitItem: React.FC<CommitItemProps> = ({ commit }) => {
  return (
    <article className="card card-alternative article__commit-item">
      <div className="card-body">
        <p className="body-3">{commit.message}</p>
        <span className="label label-pill label-dark">{commit.date}</span>
      </div>
    </article>
  );
};
