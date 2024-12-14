import axios from "axios";

const apiUrl = import.meta.env.VITE_GITHUB_API_URL || "https://api.github.com";

/**
 * Fetch users from GitHub based on search criteria.
 * @param {Object} query - The search query containing username, location, and minRepos.
 * @returns {Promise<Array>} - A list of GitHub users matching the query.
 */
export const fetchUserData = async (query) => {
    const { username, location, minRepos } = query;

    // Build the query string for advanced search
    let searchQuery = "";
    if (username) searchQuery += `${username}`;
    if (location) searchQuery += `+location:${location}`;
    if (minRepos) searchQuery += `+repos:>=${minRepos}`;

    try {
        const response = await axios.get(`${apiUrl}https://api.github.com/search/users?q=${searchQuery}`);
        return response.data.items || [];
    } catch (error) {
        console.error("Error fetching user data from GitHub:", error);
        throw new Error("Failed to fetch users. Please try again later.");
    }
};
