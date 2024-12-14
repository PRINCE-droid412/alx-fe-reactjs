import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading status
  const [error, setError] = useState(null); // State to manage error message
  const [userData, setUserData] = useState(null); // State to store the fetched user data

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.trim()) {
      setLoading(true); // Start loading when the search is initiated
      setError(null); // Reset any previous errors
      setUserData(null); // Clear previous user data

      try {
        await onSearch(username); // Call the parent onSearch function
        setLoading(false); // Stop loading after the API call
      } catch {
        setError("Looks like we can't find the user"); // Display error if the user isn't found
        setLoading(false); // Stop loading after the error occurs
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub Username"
          value={username}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering */}
      {loading && <p>Loading...</p>} {/* Show loading message */}
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Show error message */}
      {userData && !loading && !error && ( // Display user data if available
        <div>
          <h2>{userData.name || userData.login}</h2>
          <p>Followers: {userData.followers}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
          <img src={userData.avatar_url} alt="User Avatar" width="100" />
        </div>
      )}
    </div>
  );
};

// PropTypes for Search component
Search.propTypes = {
  onSearch: PropTypes.func.isRequired, // onSearch should be a required function
};

export default Search;
