import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostsComponent from './PostsComponent';
import './App.css';

// 1. Create query client instance
const queryClient = new QueryClient();

function App() {
  return (
    // 2. Wrap with QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>React Query Demo</h1>
        {/* 3. Render your component */}
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;