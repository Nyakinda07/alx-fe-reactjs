cat > src/App.jsx << 'EOF'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Profile from './components/Profile';
import Post from './components/Post/Post';
import BlogPost from './components/Blog/BlogPost';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/about">About</Link> | 
          <Link to="/profile">Profile</Link> | 
          <Link to="/posts/1">Post 1</Link> |
          <Link to="/blog/1">Blog 1</Link> |
          <Link to="/login">Login</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/*" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
EOF