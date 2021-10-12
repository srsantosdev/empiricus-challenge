import './styles.scss';
import React, { FormEvent, useCallback, useState } from 'react';
import { useGithub } from '../../hooks/useGithub';

export const SearchUser: React.FC = () => {
  const {
    searchUser,
    searchRepositories,
    enableLoading,
    disableLoading,
    isValidUser,
  } = useGithub();

  const [username, setUsername] = useState<string>('');
  const [haveSearch, setHaveSearch] = useState(false);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      setHaveSearch(false);
      enableLoading();

      await searchUser(username);
      await searchRepositories(username);

      setHaveSearch(true);
      disableLoading();
    },
    [username],
  );

  return (
    <form onSubmit={handleSubmit} className="form__search-user">
      <div className="form-group input-lg">
        <input
          type="text"
          className={[
            'input',
            isValidUser ? 'is-valid' : haveSearch && 'is-invalid',
          ].join(' ')}
          placeholder="Nome do usuário"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </div>
      <button type="submit" className="button button-lg button-primary">
        Buscar
      </button>
    </form>
  );
};
