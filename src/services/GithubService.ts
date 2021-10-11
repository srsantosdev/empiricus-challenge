import { githubApi } from '../apis/github.api';
import type { Repository, User, Commit } from '../types';
import { formatDate } from '../utils/formatDate';

type FilterParams = {
  page?: number;
};

export class GithubService {
  public static async getUser(username: string): Promise<User> {
    const response = await githubApi.get<any>(`/users/${username}`);

    return {
      avatar_url: response.data.avatar_url,
      id: response.data.id,
      login: response.data.login,
      name: response.data.name,
    };
  }

  public static async getRepository(
    repository_fullname: string,
  ): Promise<Repository> {
    const response = await githubApi.get<any>(`/repos/${repository_fullname}`);

    const {
      description,
      forks,
      full_name,
      id,
      name,
      open_issues,
      stargazers_count,
      language,
    } = response.data;

    return {
      description,
      forks,
      full_name,
      id,
      name,
      open_issues,
      stargazers_count,
      language,
    };
  }

  public static async getRepositories(
    username: string,
    { page = 1 }: FilterParams,
  ): Promise<Repository[]> {
    const response = await githubApi.get<any>(`/users/${username}/repos`, {
      params: {
        page,
      },
    });

    const formattedRepositories = response.data.map(
      ({
        description,
        forks,
        full_name,
        id,
        name,
        open_issues,
        stargazers_count,
        language,
      }: any) => {
        return {
          description,
          forks,
          full_name,
          id,
          name,
          open_issues,
          stargazers_count,
          language,
        };
      },
    );

    return formattedRepositories;
  }

  public static async getCommits(
    repository_fullname: string,
    { page = 1 }: FilterParams,
  ): Promise<Commit[]> {
    const response = await githubApi.get<any>(
      `/repos/${repository_fullname}/commits`,
      {
        params: {
          page,
          per_page: 10,
        },
      },
    );

    const formattedCommits = response.data.map((data: any) => {
      return {
        id: data.sha,
        message: data.commit.message,
        date: formatDate(new Date(data.commit.committer.date)),
      };
    });

    return formattedCommits;
  }
}
