import axios from "axios";

const apiUrl = import.meta.env.VITE_GITHUB_API_URL || "https://api.github.com";

export const fetchUserData = async ({ username, location, minRepos }) => {
    try {
        // Construct query parameters
        let query = "";
        if (username) query += `${username} `;
        if (location) query += `location:${location} `;
        if (minRepos) query += `repos:>=${minRepos} `;

        const response = await axios.get(`${apiUrl}/search/users`, {
            params: { q: query.trim() },
        });

        return response.data.items; // The "items" array contains matching users
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};
