import './styles.scss';
import React from 'react';

import type { User } from '../../types';

type UserInfoProps = {
  user: User;
};

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <section className="user-info-component__container">
      <img src={user.avatar_url} alt={user.name} />

      <div>
        <span className="h4">{user.name}</span>
        <p className="body-3">{user.login}</p>
      </div>
    </section>
  );
};
