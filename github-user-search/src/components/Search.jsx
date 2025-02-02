import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
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
        const data = await onSearch(username); // Call the parent onSearch function
        setUserData(data); // Store the fetched user data
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
      {loading && <p>Loading...</p>} {/*Loading... */}
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Looks like we cant find the user */}
      {userData && !loading && !error && ( // Display user data if available
        <div>
          {fetchUserData.map((user) => (
            <div key={user.id}>
              <h2>{user.name || user.login}</h2>
              <p>Followers: {user.followers}</p>
              <p>Public Repos: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View GitHub Profile
              </a>
              <img src={user.avatar_url} alt="User Avatar" width="100" />
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
