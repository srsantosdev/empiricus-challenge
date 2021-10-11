import './styles.scss';

import React from 'react';

export const LoadingPage: React.FC = () => {
  return (
    <div className="loading__container">
      <i className="spinner-border spinner-border-lg" />
    </div>
  );
};
