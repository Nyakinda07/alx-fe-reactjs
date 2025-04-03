import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>React Form Handling Comparison</h1>
      <p>Demonstrating controlled components vs. Formik</p>
      
      <div className="forms-grid">
        {/* Controlled Component Form */}
        <div className="form-card">
          <h2>Controlled Component</h2>
          <RegistrationForm />
        </div>

        {/* Formik Form */}
        <div className="form-card">
          <h2>Formik Implementation</h2>
          <FormikForm />
        </div>
      </div>
    </div>
  );
}

export default App;