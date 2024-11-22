import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
    // Use the new useQuery API (v5+)
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["posts"], // Unique key for this query
        queryFn: fetchPosts, // Function to fetch the data
        cacheTime: 5 * 60 * 1000, // Cache data for 5 minutes
        staleTime: 60 * 1000, // Data is fresh for 1 minute
        refetchOnWindowFocus: false, // Do not refetch when the window is focused
        keepPreviousData: true, // Show previous data while fetching new data
    });

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error fetching posts: {error.message}</div>;
  }

  return (
    <div>
      <button onClick={refetch} style={{ marginBottom: '20px' }}>
        Refetch Posts
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id} style={{ marginBottom: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
