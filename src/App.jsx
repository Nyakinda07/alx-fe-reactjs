import './App.css';
import { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  // Preserve existing state if any
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  
  // Add any other existing state and functions you need to keep

  return (
    <div className="App">
      {/* Keep your existing header/navigation */}
      <header className="App-header">
        <h1>My Application</h1>
        {/* Keep your search functionality */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

      <main>
        {/* Keep your existing main content sections */}
        <section className="content-section">
          {/* Your existing content (favorites, recommendations etc.) */}
        </section>

        {/* Add the new forms sections */}
        <div className="forms-container">
          <section className="form-section">
            <h2>User Registration (Controlled)</h2>
            <RegistrationForm />
          </section>

          <section className="form-section">
            <h2>User Registration (Formik)</h2>
            <FormikForm />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;