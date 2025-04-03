import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
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
    staleTime: 5000, // Data stays fresh for 5 seconds
  });

  if (isLoading) return <div className="loading">Loading posts...</div>;
  if (isError) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="posts-container">
      <h2>Posts {isFetching && <span>(updating...)</span>}</h2>
      <button onClick={() => refetch()} className="refresh-btn">
        Refresh Posts
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