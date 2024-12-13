import React, { useState } from "react";

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = {
            username: username.trim(),
            location: location.trim(),
            minRepos: minRepos.trim(),
        };
        onSearch(query);
        if (username.trim()) {
            onSearch(username.trim());
        }
    };

    return (
        <div className="p-4">
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-white shadow-md rounded-lg p-6"
        >
            <input
                type="text"
                placeholder="Search by Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-2 border rounded"
            />
            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="p-2 border rounded"
            />
            <input
                type="number"
                placeholder="Minimum Repositories"
                value={minRepos}
                onChange={(e) => setMinRepos(e.target.value)}
                className="p-2 border rounded"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                Search
            </button>
        </form>
    </div>
    );
};

export default Search;
