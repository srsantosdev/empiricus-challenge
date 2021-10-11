import './styles.scss';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { IoArrowBackOutline } from 'react-icons/io5';
import logosvg from '../../assets/images/logo.svg';

import { SearchUser } from '../SearchUser';

type HeaderProps = {
  goBack?: boolean;
};

const Header: React.FC<HeaderProps> = ({ goBack = false }) => {
  const history = useHistory();

  return (
    <header>
      <div className="header__container">
        <img src={logosvg} alt="Github Explorer" />

        {goBack ? (
          <button
            type="button"
            className="header__container--goback-button"
            onClick={history.goBack}
          >
            <IoArrowBackOutline size={20} />
            Voltar
          </button>
        ) : (
          <SearchUser />
        )}
      </div>
    </header>
  );
};

export default Header;
