import './styles.scss';
import React from 'react';
import Header from '../../../components/Header';

type MainLayoutProps = {
  goBack?: boolean;
};

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  goBack = false,
}) => {
  return (
    <div className="main-layout__container">
      <Header goBack={goBack} />

      <main className="main-layout__content">{children}</main>
    </div>
  );
};
