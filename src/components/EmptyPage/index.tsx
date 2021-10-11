import './styles.scss';
import React from 'react';

import octocatImage from '../../assets/images/octocat.png';

export const EmptyPage: React.FC = () => {
  return (
    <div className="emptypage__container">
      <img src={octocatImage} alt="Github Explorer Octocat" />

      <span>Explore os repositórios dos usuários do Github</span>
    </div>
  );
};
