import axios from 'axios';

export const githubApi = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_API,
  headers: {
    // Authorization: `Basic ${process.env.REACT_APP_GITHUB_AUTH_TOKEN}`,
  },
});
