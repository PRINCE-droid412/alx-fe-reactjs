
const API_BASE_URL = "https://api.github.com";
const apiKey = import.meta.env.REACT_APP_GITHUB_API_KEY;

export const fetchGitHubData = async (endpoint) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    headers: {
      Authorization: `token ${apiKey}`,
    },
  });
  return response.json();
};
