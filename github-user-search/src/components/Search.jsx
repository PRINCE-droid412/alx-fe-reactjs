import React, { useState } from "react";

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [results, setResults] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setResults(null);

        try {
            const query = {
                username: username.trim(),
                location: location.trim(),
                minRepos: minRepos.trim(),
            };
            const result = await onSearch(query);
            setResults(result);
        } catch (err) {
            setError("Looks like we can't find the user");
        } finally {
            setLoading(false);
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

            {/* Loading state */}
            {loading && <p className="text-center">Loading...</p>}

            {/* Error state */}
            {error && <p className="text-center text-red-500">{error}</p>}

            {/* Results state */}
            {results && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {results.map((user) => (
                        <div
                            key={user.id}
                            className="border rounded-lg shadow-md p-4 flex flex-col items-center"
                        >
                            <img
                                src={user.avatar_url}
                                alt={user.login}
                                className="w-24 h-24 rounded-full mb-2"
                            />
                            <h3 className="font-bold">{user.login}</h3>
                            <a
                                href={user.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 mt-2"
                            >
                                View Profile
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
