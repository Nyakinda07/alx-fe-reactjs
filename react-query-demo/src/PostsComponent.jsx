import { useQuery } from '@tanstack/react-query'

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export default function PostsComponent() {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 10000 // Data stays fresh for 10 seconds
  })

  if (isLoading) return <div>Loading posts...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()} className="refresh-btn">
        Refresh Data
      </button>
      <ul className="posts-list">
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}