import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) throw new Error('Network response failed');
  return response.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    isFetching,
    refetch
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    cacheTime: 60000, // Cache persists for 60 seconds
    staleTime: 10000, // Data stays fresh for 10 seconds
    refetchOnWindowFocus: true, // Auto-refresh when window regains focus
    keepPreviousData: true, // Maintain previous data during refetches
  });

  if (isLoading) return <div className="loading">Loading posts...</div>;
  if (isError) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="posts-container">
      <h2>
        Posts 
        {isFetching && <span className="fetch-indicator">(updating...)</span>}
      </h2>
      <div className="cache-info">
        <small>Cache: 60s | Stale: 10s | Refetch on focus</small>
      </div>
      <button 
        onClick={() => refetch()} 
        className="refresh-btn"
        disabled={isFetching}
      >
        {isFetching ? 'Refreshing...' : 'Refresh Posts'}
      </button>
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;