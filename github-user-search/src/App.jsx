import { useState } from 'react'
import react from 'react'
import './App.css'
import search from "./components/Search"
import { fetchUserData } from "./services/githubService";





function App() {
  const [count, setCount] = useState(0)
  const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async (query) => {
        setLoading(true);
        setError("");
        setResults([]);

        try {
            const data = await fetchUserData(query);
            setResults(data);
        } catch (err) {
            setError("Failed to fetch results. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h1>
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
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
                        <p>{user.location || "Location not available"}</p>
                        <p>Repositories: {user.public_repos || "N/A"}</p>
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
        </div>
    );
};


export default App
